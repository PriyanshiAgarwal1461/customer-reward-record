export const getTransactions = () => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch("/data/transactions.json");

        if (!response.ok) {
          throw new Error("Failed to fetch transactions");
        }

        const data = await response.json();

        resolve(data);
      } catch (error) {
        reject(error);
      }
    }, 800);
  });
};