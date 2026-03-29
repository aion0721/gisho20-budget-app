import { StatusBanner } from "./StatusBanner";
import { statusMessages } from "../features/shared/messages";
import type { Transaction } from "../types";

type Props = {
  transaction: Transaction | null;
  onChange: (next: Transaction) => void;
};

export function Editor({ transaction, onChange }: Props) {
  return (
    <section className="card">
      <h2>入力フォーム</h2>
      <div>
        {transaction ? (
          <div className="form">
            <label className="field">
              区分
              <select
                className="control"
                value={transaction.type}
                onChange={(event) =>
                  onChange({
                    ...transaction,
                    type: event.target.value as Transaction["type"],
                  })
                }
              >
                <option value="expense">支出</option>
                <option value="income">収入</option>
              </select>
            </label>

            <label className="field">
              金額
              <input
                className="control"
                type="number"
                value={transaction.amount}
                onChange={(event) =>
                  onChange({
                    ...transaction,
                    amount: Number(event.target.value) || 0,
                  })
                }
              />
            </label>

            <label className="field">
              日付
              <input
                className="control"
                type="date"
                value={transaction.date}
                onChange={(event) =>
                  onChange({
                    ...transaction,
                    date: event.target.value,
                  })
                }
              />
            </label>

            <label className="field">
              カテゴリ
              <input
                className="control"
                value={transaction.category}
                onChange={(event) =>
                  onChange({
                    ...transaction,
                    category: event.target.value,
                  })
                }
              />
            </label>

            <label className="field">
              メモ
              <textarea
                className="control"
                value={transaction.note}
                onChange={(event) =>
                  onChange({
                    ...transaction,
                    note: event.target.value,
                  })
                }
                placeholder="メモ（任意）"
              />
            </label>
          </div>
        ) : (
          <StatusBanner tone="info">{statusMessages.noSelection}</StatusBanner>
        )}
      </div>
    </section>
  );
}
