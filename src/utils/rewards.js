// function to calculate reward points based on the amount spent
export const calculatePoints = (amount) => {
  if (amount <= 50) {
    return 0;
  }

  if (amount <= 100) {
    return Math.floor(amount - 50);
  }

  return Math.floor(50 + (amount - 100) * 2);
};

export const getMonthName = (date) => {
  const month = new Date(date).getMonth();

  const months = {
    5: "June",
    6: "July",
    7: "August"
  };

  return months[month];
};

export const calculateCustomerRewards = (transactions) => {
  const customerMap = {};

  transactions.forEach((transaction) => {
    const { customerId, amount, date } = transaction;

    const points = calculatePoints(amount);
    const month = getMonthName(date);

    if (!customerMap[customerId]) {
      customerMap[customerId] = {
        customerId,
        totalAmount: 0,
        totalPoints: 0,
        monthlyData: {
          June: {
            amount: 0,
            points: 0,
            transactions: []
          },
          July: {
            amount: 0,
            points: 0,
            transactions: []
          },
          August: {
            amount: 0,
            points: 0,
            transactions: []
          }
        }
      };
    }

    customerMap[customerId].totalAmount += amount;
    customerMap[customerId].totalPoints += points;

    customerMap[customerId].monthlyData[month].amount += amount;
    customerMap[customerId].monthlyData[month].points += points;

    customerMap[customerId].monthlyData[month].transactions.push({
      date,
      amount,
      points
    });
  });

  return Object.values(customerMap);
};