import React, { useState } from "react";

function MonthlyTransaction({ month, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="month-section">

      <div className="month-row">

        <div className="month-name">
          {month}
        </div>

        <div>
          ${data.amount.toLocaleString()}
        </div>

        <div>
          {data.points.toLocaleString()}
        </div>

        <div>
          <button
            className="expand-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={`Show ${month} transactions`}
          >
            {isOpen ? "⌃" : "⌄"}
          </button>
        </div>

      </div>

      {isOpen && (
        <div className="transaction-details">

          <table>

            <thead>
              <tr>
                <th>Dates</th>
                <th>Amount Spend</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {data.transactions.map((transaction, index) => (
                <tr key={`${transaction.date}-${index}`}>

                  <td>{transaction.date}</td>

                  <td>
                    ${transaction.amount.toLocaleString()}
                  </td>

                  <td>
                    {transaction.points}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default MonthlyTransaction;