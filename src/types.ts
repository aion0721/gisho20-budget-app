export type TransactionType = "income" | "expense";

export type Transaction = {
  id: string;
  type: TransactionType;
  amount: number;
  date: string;
  category: string;
  note: string;
  updatedAt: number;
};

export type AppConfig = {
  defaultCategory: string;
};
