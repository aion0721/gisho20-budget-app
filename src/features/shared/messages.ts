export const statusMessages = {
  emptyTransactions: "まだ取引がありません。追加ボタンから始めてください。",
  noSelection: "左の一覧から取引を選択してください。",
  configHint: "既定カテゴリは、新しい取引を追加するときに使われます。",
  saveError: "保存に失敗しました。",
  loadError: "読み込みに失敗しました。",
} as const;

export function formatTransactionsLoadError(error: unknown): string {
  return `取引の読み込みに失敗しました: ${String(error)}`;
}

export function formatTransactionsSaveError(error: unknown): string {
  return `取引の保存に失敗しました: ${String(error)}`;
}
