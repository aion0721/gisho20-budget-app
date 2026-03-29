import type { Transaction } from "../types";

type Props = {
  transactions: Transaction[];
};

function calcSummary(transactions: Transaction[]) {
  const income = transactions
    .filter((tx) => tx.type === "income")
    .reduce((sum, tx) => sum + tx.amount, 0);
  const expense = transactions
    .filter((tx) => tx.type === "expense")
    .reduce((sum, tx) => sum + tx.amount, 0);

  return {
    income,
    expense,
    balance: income - expense,
  };
}

export function ReportsPage({ transactions }: Props) {
  const summary = calcSummary(transactions);

  return (
    <section className="page">
      <div className="page-header">
        <h1>レポート</h1>
      </div>
      <div className="grid-3">
        <div className="card card--income">
          <span>収入</span>
          <strong>{summary.income.toLocaleString()}円</strong>
        </div>
        <div className="card card--expense">
          <span>支出</span>
          <strong>{summary.expense.toLocaleString()}円</strong>
        </div>
        <div className="card card--balance">
          <span>差額</span>
          <strong>{summary.balance.toLocaleString()}円</strong>
        </div>
      </div>
    </section>
  );
}
