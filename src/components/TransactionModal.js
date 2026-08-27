import React from "react";
import MonthlyTransaction from "./MonthlyTransaction";

function TransactionModal({ customer, onClose }) {
  if (!customer) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <div>
            <h2>
              Transaction Details of {customer.customerId}
            </h2>

            <p>
              Monthly transaction and reward point details
            </p>
          </div>

          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

        </div>

        <div className="monthly-header">

          <div>Month</div>
          <div>Total Amount Spend</div>
          <div>Total Reward Points</div>
          <div>Action</div>
          <div></div>

        </div>

        <div className="monthly-list">

          <MonthlyTransaction
            month="June"
            data={customer.monthlyData.June}
          />

          <MonthlyTransaction
            month="July"
            data={customer.monthlyData.July}
          />

          <MonthlyTransaction
            month="August"
            data={customer.monthlyData.August}
          />

        </div>

      </div>

    </div>
  );
}

export default TransactionModal;