import Link from "next/link";
import { SiteShell } from "../site-shell";

export const metadata = {
  title: "プライバシーポリシー",
  description: "VibeMapにおける利用者情報の取り扱いについて説明します。",
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <article className="document-page">
        <header className="document-header">
          <p className="eyebrow">Privacy policy</p>
          <h1>プライバシーポリシー</h1>
          <p className="document-intro">
            VibeMapは、必要な範囲に限って利用者情報を取り扱います。本ポリシーでは、収集する情報、利用目的、削除方法を説明します。
          </p>
          <p className="updated-date">制定日・最終更新日：2026年7月16日</p>
        </header>

        <div className="document-body">
          <section>
            <h2>1. 適用範囲</h2>
            <p>
              本ポリシーは、VibeMap運営者が提供するiPhoneアプリ「VibeMap」と、本Webサイトに適用されます。
            </p>
          </section>

          <section>
            <h2>2. 取り扱う情報</h2>
            <h3>匿名アカウント情報</h3>
            <p>
              Supabase Authが発行する匿名ユーザーIDを使用します。メールアドレス、氏名、表示名の登録は求めません。
            </p>
            <h3>回答・地域情報</h3>
            <p>
              質問への回答、質問ID、選択中の市区町村コード、回答日時を保存します。二重回答の防止、回答履歴、地域別結果の表示に使用します。
            </p>
            <h3>利用者が送信する内容</h3>
            <p>
              投稿したVibe Check、回答候補、カテゴリ、通報内容、問い合わせ内容を保存します。投稿は公開前に運営者が確認します。
            </p>
            <h3>端末内に保存する情報</h3>
            <p>
              地域設定、回答履歴の一部、画面表示を速くするためのキャッシュを端末内へ保存します。
            </p>
          </section>

          <section className="important-section">
            <h2>3. 位置情報</h2>
            <p>
              現在地は、利用者が許可した場合だけ、市区町村を判定する目的で端末内にて使用します。緯度・経度そのものをVibeMapのデータベースへ送信または保存することはありません。投票時には、判定または手動選択された市区町村コードを保存します。
            </p>
          </section>

          <section>
            <h2>4. 利用目的</h2>
            <ul>
              <li>質問、回答結果、地域別Vibe Mapを提供するため</li>
              <li>二重回答を防止し、本人の回答・投稿履歴を表示するため</li>
              <li>投稿の審査、通報対応、不正利用防止を行うため</li>
              <li>問い合わせへの対応とサービス改善を行うため</li>
            </ul>
          </section>

          <section>
            <h2>5. 外部サービス</h2>
            <p>
              認証とデータ保存にSupabaseを利用します。情報は、サービス提供に必要な範囲でSupabaseの基盤上に保存・処理されます。
            </p>
          </section>

          <section>
            <h2>6. 第三者提供・トラッキング</h2>
            <p>
              法令に基づく場合を除き、利用者情報を広告事業者へ販売または提供しません。利用者を他社のアプリやWebサイトを横断して追跡する目的では使用しません。
            </p>
          </section>

          <section>
            <h2>7. 保存期間と削除</h2>
            <p>
              情報はサービス提供と安全な運営に必要な期間保存します。アプリの「マイページ」→「アカウント管理」→「匿名アカウントを削除」から、匿名アカウントと関連する回答、投稿、通報、問い合わせを削除できます。削除後は新しい匿名アカウントで利用を再開します。
            </p>
          </section>

          <section>
            <h2>8. 安全管理</h2>
            <p>
              アクセス制御を設定し、一般利用者が他の利用者の非公開情報や管理者専用機能へアクセスできないよう管理します。
            </p>
          </section>

          <section>
            <h2>9. ポリシーの変更</h2>
            <p>
              機能や法令の変更に応じて、本ポリシーを更新する場合があります。重要な変更は、本ページまたはアプリ内でお知らせします。
            </p>
          </section>

          <section>
            <h2>10. お問い合わせ</h2>
            <p>
              本ポリシーやデータ削除に関するご質問は、VibeMapアプリの「マイページ」→「問い合わせ」、または
              <a className="text-link" href="mailto:vibemap.support@gmail.com">
                vibemap.support@gmail.com
              </a>
              へご連絡ください。
            </p>
            <Link className="text-link" href="/support">
              サポート情報を見る
            </Link>
          </section>
        </div>
      </article>
    </SiteShell>
  );
}
