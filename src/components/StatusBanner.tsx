import type { ReactNode } from "react";

type Props = {
  tone: "info" | "error";
  children: ReactNode;
};

export function StatusBanner({ tone, children }: Props) {
  return <p className={`status-banner status-${tone}`}>{children}</p>;
}
