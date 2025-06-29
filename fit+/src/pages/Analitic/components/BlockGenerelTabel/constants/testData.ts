export const testData = Array.from({ length: 50 }, (_, i) => ({
  id: (100000000 + i).toString(),
  name: `User${(i % 10) + 1}`,
  loginDate: `2025-05-${String((i % 28) + 1).padStart(2, '0')} 12:00:05`,
  paymentDate: `2025-06-${String((i % 28) + 1).padStart(2, '0')} 15:20:05`,
  payments: (i % 5).toString(),
  income: ((i % 5) * 500).toString(),
})); 