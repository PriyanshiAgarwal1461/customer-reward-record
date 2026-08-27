import React from "react";

function CustomerTable({ customers, onViewDetails }) {
  return (
    <div className="table-container">

      <table className="customer-table">

        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Total Amount Spend</th>
            <th>Total Reward Points</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.customerId}>

              <td>{customer.customerId}</td>

              <td>
                ${customer.totalAmount.toLocaleString()}
              </td>

              <td>
                {customer.totalPoints.toLocaleString()}
              </td>

              <td>
                <button
                  className="view-button"
                  onClick={() => onViewDetails(customer)}
                >
                  View Monthly Details
                </button>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default CustomerTable;