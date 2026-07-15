import type { ReactNode } from "react";
import Link from "next/link";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="VibeMapトップ">
          <img src="/vibemap-app-icon.png" alt="" width="44" height="44" />
          <span>VibeMap</span>
        </Link>
        <nav aria-label="メインナビゲーション">
          <Link href="/privacy">プライバシー</Link>
          <Link href="/support">サポート</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <Link className="footer-brand" href="/">
          VibeMap
        </Link>
        <div className="footer-links">
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/support">サポート</Link>
        </div>
        <p>© 2026 VibeMap</p>
      </footer>
    </div>
  );
}
