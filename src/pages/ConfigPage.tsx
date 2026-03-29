import { StatusBanner } from "../components/StatusBanner";
import { statusMessages } from "../features/shared/messages";
import type { AppConfig } from "../types";

type Props = {
  config: AppConfig;
  onConfigChange: (next: AppConfig) => void;
};

export function ConfigPage({ config, onConfigChange }: Props) {
  return (
    <section className="page">
      <div className="page-header">
        <h1>設定</h1>
      </div>
      <label className="field">
        <span>既定カテゴリ</span>
        <input
          className="control"
          value={config.defaultCategory}
          onChange={(event) =>
            onConfigChange({
              ...config,
              defaultCategory: event.target.value,
            })
          }
        />
      </label>
      <StatusBanner tone="info">{statusMessages.configHint}</StatusBanner>
    </section>
  );
}
