import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Editor } from "../components/Editor";
import { StatusBanner } from "../components/StatusBanner";
import { statusMessages } from "../features/shared/messages";
import type { AppConfig, Transaction } from "../types";

type Props = {
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
  config: AppConfig;
};

const getTodayString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

export function TransactionsPage({ transactions, setTransactions, config }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(
    transactions[0]?.id ?? null,
  );

  const addTransaction = () => {
    const newTransaction: Transaction = {
      id: crypto.randomUUID(),
      type: "expense",
      amount: 0,
      date: getTodayString(),
      category: config.defaultCategory,
      note: "",
      updatedAt: Date.now(),
    };

    setTransactions((prev) => [newTransaction, ...prev]);
    setSelectedId(newTransaction.id);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((prev) => {
      const next = prev.filter((tx) => tx.id !== id);
      if (selectedId === id) {
        setSelectedId(next[0]?.id ?? null);
      }
      return next;
    });
  };

  const selectedTransaction =
    transactions.find((tx) => tx.id === selectedId) ?? null;

  const updateTransaction = (next: Transaction) => {
    setTransactions((prev) => prev.map((tx) => (tx.id === next.id ? next : tx)));
  };

  return (
    <section className="page">
      <div className="page-header">
        <h1>明細</h1>
        <button
          type="button"
          className="button button--primary"
          onClick={addTransaction}
        >
          追加
        </button>
      </div>

      {transactions.length === 0 ? (
        <StatusBanner tone="info">
          {statusMessages.emptyTransactions}
        </StatusBanner>
      ) : null}

      <div className="grid-2">
        <section className="card">
          <ul className="transaction-list">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className={`transaction-item ${tx.id === selectedId ? "selected" : ""}`}
                onClick={() => setSelectedId(tx.id)}
              >
                {tx.date} / {tx.category} / {tx.amount.toLocaleString()}円
                <button
                  type="button"
                  className="button button--danger"
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteTransaction(tx.id);
                  }}
                >
                  削除
                </button>
              </li>
            ))}
          </ul>
        </section>

        <Editor
          transaction={selectedTransaction}
          onChange={updateTransaction}
        />
      </div>
    </section>
  );
}
