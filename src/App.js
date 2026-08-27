import React, { useEffect, useState } from "react";

import DashboardCards from "./components/DashboardCards";
import CustomerTable from "./components/CustomerTable";
import TransactionModal from "./components/TransactionModal";

import { getTransactions } from "./services/api";
import { calculateCustomerRewards } from "./utils/rewards";

import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setLoading(true);

        const data = await getTransactions();

        setTransactions(data);

        const customerRewards = calculateCustomerRewards(data);

        setCustomers(customerRewards);
      } catch (error) {
        console.error("Transaction API Error:", error);

        setError("Unable to load transaction data.");
      } finally {
        setLoading(false);
      }
    };

    loadTransactions();
  }, []);

  const handleViewDetails = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };

  const totalCustomers = customers.length;

  const totalTransactions = transactions.length;

  const totalAmount = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const totalPoints = customers.reduce(
    (total, customer) => total + customer.totalPoints,
    0
  );

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>Loading transaction data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{error}</h2>
        <p>Please check your mock API data.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="page-header">
        <div>
          <h1>Customer Transaction Data</h1>
          <p>
            Track customer spending and reward points
          </p>
        </div>
      </header>

      <main>

        <DashboardCards
          totalCustomers={totalCustomers}
          totalTransactions={totalTransactions}
          totalAmount={totalAmount}
          totalPoints={totalPoints}
        />

        <section className="customer-section">
          <div className="section-header">
            <div>
              <h2>Customer Rewards</h2>
              <p>
                View customer spending and reward points
              </p>
            </div>
          </div>

          <CustomerTable
            customers={customers}
            onViewDetails={handleViewDetails}
          />

        </section>

      </main>

// modal for displaying monthly transaction details of a selected customer
      {selectedCustomer && (
        <TransactionModal
          customer={selectedCustomer}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
}

export default App;