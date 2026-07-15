import Link from "next/link";
import { SiteShell } from "./site-shell";

export const metadata = {
  title: "VibeMap",
  description: "二択の回答から、地域ごとのVibeを地図で楽しむiPhoneアプリ。",
};

export default function Home() {
  return (
    <SiteShell>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">iPhone app</p>
          <h1 id="hero-title">VibeMap</h1>
          <p className="hero-lead">街のVibeが、地図になる。</p>
          <p className="hero-description">
            二択のVibe Checkに答えて、日本各地の好みや意見の違いを地図で楽しむアプリです。
          </p>
          <div className="hero-actions" aria-label="公開情報">
            <Link className="primary-link" href="/privacy">
              プライバシーポリシー
            </Link>
            <Link className="secondary-link" href="/support">
              サポート
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/vibemap-app-icon.png"
            alt="VibeMapのアプリアイコン"
            width="1024"
            height="1024"
          />
        </div>
      </section>

      <section className="content-band" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2 id="about-title">みんなの選択を、地域の景色へ</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-item blue-accent">
            <span className="feature-number">01</span>
            <h3>二択で回答</h3>
            <p>気になるテーマに、回答Aまたは回答Bを選んで参加します。</p>
          </article>
          <article className="feature-item yellow-accent">
            <span className="feature-number">02</span>
            <h3>地域差を発見</h3>
            <p>全国と選択地域の結果を比べ、Vibe Mapで違いを眺められます。</p>
          </article>
          <article className="feature-item green-accent">
            <span className="feature-number">03</span>
            <h3>匿名で利用</h3>
            <p>メールアドレスや表示名を登録せずに利用できます。</p>
          </article>
        </div>
      </section>

      <section className="data-band" aria-labelledby="data-title">
        <div>
          <p className="eyebrow">Privacy first</p>
          <h2 id="data-title">位置情報は端末内で地域判定に使用</h2>
        </div>
        <div className="data-copy">
          <p>
            許可された現在地の緯度・経度は、市区町村を判定するためだけに端末内で利用し、VibeMapのデータベースには保存しません。
          </p>
          <Link className="text-link" href="/privacy">
            データの取り扱いを確認する
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
