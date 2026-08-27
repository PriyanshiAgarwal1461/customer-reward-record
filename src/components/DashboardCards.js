import React from "react";

function DashboardCards({
  totalCustomers,
  totalTransactions,
  totalAmount,
  totalPoints
}) {
  return (
    <div className="dashboard-cards">

      <div className="summary-card">
        <div className="card-title">Total Customers</div>
        <div className="card-value">{totalCustomers}</div>
      </div>

      <div className="summary-card">
        <div className="card-title">Total Transactions</div>
        <div className="card-value">{totalTransactions}</div>
      </div>

      <div className="summary-card">
        <div className="card-title">Total Amount Spend</div>
        <div className="card-value">
          ${totalAmount.toLocaleString()}
        </div>
      </div>

      <div className="summary-card">
        <div className="card-title">Total Reward Points</div>
        <div className="card-value">
          {totalPoints.toLocaleString()}
        </div>
      </div>

    </div>
  );
}

export default DashboardCards;