import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "メンズ脱毛ラボのプライバシーポリシーです。個人情報の取り扱いについて説明しています。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "プライバシーポリシー" },
        ]}
      />

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 article-body">
          <h1 className="text-2xl md:text-3xl font-bold mb-8">プライバシーポリシー</h1>
          <p className="text-sm text-gray-500 mb-8">最終更新日：2026年4月1日</p>

          <p>
            株式会社MediaX（以下「当社」）は、当社が運営するウェブサイト「メンズ脱毛ラボ」（以下「当サイト」）において、ユーザーの個人情報の取り扱いについて、以下のとおりプライバシーポリシーを定めます。
          </p>

          <h2>1. 個人情報の収集</h2>
          <p>
            当サイトでは、お問い合わせフォーム等を通じて、お名前、メールアドレス等の個人情報をご提供いただく場合があります。これらの個人情報は、お問い合わせへの回答や必要な情報をお送りする目的で収集します。
          </p>

          <h2>2. 個人情報の利用目的</h2>
          <p>当社が収集した個人情報は、以下の目的で利用します。</p>
          <ul>
            <li>お問い合わせに対する回答</li>
            <li>当サイトのサービス向上のための統計データ作成</li>
            <li>当サイトの運営・管理</li>
          </ul>

          <h2>3. 個人情報の第三者提供</h2>
          <p>
            当社は、以下の場合を除き、個人情報を第三者に提供することはありません。
          </p>
          <ul>
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合</li>
          </ul>

          <h2>4. Cookie（クッキー）の使用</h2>
          <p>
            当サイトでは、ユーザーの利便性向上やアクセス解析のためにCookieを使用しています。Cookieとは、ウェブサーバーからユーザーのブラウザに送信される小さなテキストデータです。
          </p>
          <p>
            ユーザーはブラウザの設定によりCookieの受け取りを拒否することができますが、その場合、当サイトの一部機能が正常に動作しない場合があります。
          </p>

          <h2>5. アクセス解析ツール</h2>
          <p>
            当サイトでは、Googleアナリティクス等のアクセス解析ツールを使用しています。これらのツールはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
          </p>
          <p>
            Googleアナリティクスの利用規約については、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">Googleアナリティクス利用規約</a>をご確認ください。
          </p>

          <h2>6. 広告配信サービス</h2>
          <p>
            当サイトでは、第三者配信の広告サービスを利用しています。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
          </p>

          <h2>7. 個人情報の安全管理</h2>
          <p>
            当社は、個人情報の漏洩、滅失、毀損の防止のために、適切なセキュリティ対策を講じます。
          </p>

          <h2>8. 個人情報の開示・訂正・削除</h2>
          <p>
            ユーザーは、当社が保有する自己の個人情報について、開示・訂正・削除を請求することができます。ご請求の際は、お問い合わせフォームよりご連絡ください。本人確認の上、対応いたします。
          </p>

          <h2>9. プライバシーポリシーの変更</h2>
          <p>
            当社は、法令の変更やサービスの変更等に伴い、本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
          </p>

          <h2>10. お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              運営：株式会社MediaX<br />
              サイト名：メンズ脱毛ラボ<br />
              URL：https://mens-datsumou-lab.pages.dev/
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
