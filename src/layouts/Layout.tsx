import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <div className="app-brand">
          <img className="app-logo" src="/logo.png" alt="" />
          <strong>家計簿管理アプリ</strong>
        </div>
        <nav>
          <Link to="/transactions">明細</Link> /{" "}
          <Link to="/reports">レポート</Link> /{" "}
          <Link to="/config">設定</Link>
        </nav>
      </header>
      <main>
        <section>
          <Outlet />
        </section>
      </main>
    </>
  );
}
