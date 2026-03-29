import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Layout } from "./layouts/Layout";
import { TransactionsPage } from "./pages/TransactionsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { ConfigPage } from "./pages/ConfigPage";
import type { AppConfig, Transaction } from "./types";

const initialTransactions: Transaction[] = [];

const defaultConfig: AppConfig = {
  defaultCategory: "未分類",
};

export default function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [config, setConfig] = useState<AppConfig>(defaultConfig);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/transactions" replace />} />
        <Route
          path="/transactions"
          element={
            <TransactionsPage
              transactions={transactions}
              setTransactions={setTransactions}
              config={config}
            />
          }
        />
        <Route
          path="/reports"
          element={<ReportsPage transactions={transactions} />}
        />
        <Route
          path="/config"
          element={
            <ConfigPage
              config={config}
              onConfigChange={setConfig}
            />
          }
        />
      </Route>
    </Routes>
  );
}
