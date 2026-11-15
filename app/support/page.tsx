import Link from "next/link";
import { SiteShell } from "../site-shell";

export const metadata = {
  title: "サポート",
  description: "VibePolarの使い方、問題解決、問い合わせ方法をご案内します。",
};

const supportItems = [
  {
    title: "データを読み込めない",
    body: "通信状態を確認し、画面に表示される「再試行」を押してください。機内モードを解除した直後は、数秒待ってから再試行してください。",
  },
  {
    title: "現在地を使わずに地域を設定したい",
    body: "マイページの地域設定から、都道府県と市区町村を手動で選択できます。位置情報を許可しなくても利用できます。",
  },
  {
    title: "投稿がすぐに表示されない",
    body: "投稿されたVibe Checkは、安全確認のため運営の審査後に公開されます。状態はマイページの投稿履歴で確認できます。",
  },
  {
    title: "不適切な質問を見つけた",
    body: "質問に表示される旗アイコンから通報してください。運営が確認し、必要に応じて非公開化や利用停止を行います。",
  },
];

export default function SupportPage() {
  return (
    <SiteShell>
      <article className="document-page support-page">
        <header className="document-header">
          <p className="eyebrow">Support</p>
          <h1>VibePolarサポート</h1>
          <p className="document-intro">
            よくある状況の解決方法と、問い合わせ・アカウント削除の手順をご案内します。
          </p>
          <p className="updated-date">対応バージョン：VibePolar 1.0.0 / iOS 17以降</p>
        </header>

        <section className="support-list" aria-labelledby="faq-title">
          <div className="section-heading">
            <p className="eyebrow">Quick help</p>
            <h2 id="faq-title">よくあるご質問</h2>
          </div>
          <div className="support-grid">
            {supportItems.map((item) => (
              <article className="support-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-band" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">解決しない場合</h2>
          </div>
          <div>
            <p>
              VibePolarアプリの「マイページ」→「問い合わせ」から運営へご連絡ください。停止中の匿名アカウントからも問い合わせできます。
            </p>
            <p className="contact-email">
              メール：
              <a href="mailto:vibemap.support@gmail.com">
                vibemap.support@gmail.com
              </a>
            </p>
            <p className="contact-note">
              問題が発生した画面、操作手順、通信状態を記載すると確認がスムーズです。
            </p>
          </div>
        </section>

        <section className="delete-guide" aria-labelledby="delete-title">
          <div className="section-heading">
            <p className="eyebrow">Account</p>
            <h2 id="delete-title">匿名アカウントとデータの削除</h2>
          </div>
          <ol>
            <li>アプリで「マイページ」を開く</li>
            <li>「アカウント管理」を開く</li>
            <li>「匿名アカウントを削除」を選択する</li>
            <li>確認画面で「削除する」を選択する</li>
          </ol>
          <p>削除すると、匿名アカウント、あなたの回答、投稿履歴、未公開の質問、あなたが送った通報と問い合わせは元に戻せません。公開済みまたはアーカイブ済みの質問は、アカウントとの紐づけを外して残ります。他の利用者の回答・通報や、質問の本文・選択肢に書かれた個人情報も残る場合があります。残った内容の削除についてはサポートへご相談ください。</p>
          <p>古いアプリ版に「公開された投稿も削除されます」と表示される場合がありますが、現在の取り扱いは上記のとおりです。保持と非表示の詳細はプライバシーポリシーをご覧ください。</p>
          <Link className="text-link" href="/privacy">
            プライバシーポリシーを確認する
          </Link>
        </section>
      </article>
    </SiteShell>
  );
}
