import {
  calculatePoints,
  getMonthName,
  calculateCustomerRewards
} from "../utils/rewards";

describe("calculatePoints", () => {
  test("should return 0 points for amount less than or equal to 50", () => {
    expect(calculatePoints(40)).toBe(0);
    expect(calculatePoints(50)).toBe(0);
  });

  test("should return 1 point for every dollar between 50 and 100", () => {
    expect(calculatePoints(75)).toBe(25);
    expect(calculatePoints(100)).toBe(50);
  });

  test("should calculate 2 points for every dollar above 100", () => {
    expect(calculatePoints(120)).toBe(90);
    expect(calculatePoints(150)).toBe(150);
    expect(calculatePoints(200)).toBe(250);
  });

  test("should handle zero amount", () => {
    expect(calculatePoints(0)).toBe(0);
  });
});

describe("calculateCustomerRewards", () => {
  test("should calculate customer total amount and points", () => {
    const transactions = [
      {
        customerId: "C001",
        transactionId: "T001",
        amount: 120,
        date: "2026-06-05"
      },
      {
        customerId: "C001",
        transactionId: "T002",
        amount: 75,
        date: "2026-06-18"
      }
    ];

    const result = calculateCustomerRewards(transactions);

    expect(result).toHaveLength(1);

    expect(result[0].customerId).toBe("C001");

    expect(result[0].totalAmount).toBe(195);

    expect(result[0].totalPoints).toBe(115);
  });
});