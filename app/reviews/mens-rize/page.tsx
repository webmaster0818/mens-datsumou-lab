import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズリゼの口コミ・評判｜料金・効果・痛みを徹底検証",
  description:
    "メンズリゼの口コミ・評判を徹底検証。ヒゲ脱毛・全身脱毛の料金、3種の脱毛機による効果、痛み対策、割引情報を詳しく解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/reviews/mens-rize/" },
};

const reviews = [
  {
    title: "学割20%OFFで契約できた",
    rating: 5,
    text: "大学生のうちに始めたいと思い、学割を使って全身脱毛を契約。20%OFFはかなり大きく、月々の支払いも負担にならない額でした。友人と一緒に行けばペア割も適用されるので、さらにお得です。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "3種の脱毛機が安心感につながった",
    rating: 4,
    text: "自分の肌質は敏感肌寄りですが、看護師さんが肌の状態を見て最適な脱毛機を選んでくれます。部位によっても機種を変えてくれるので、プロに任せている安心感があります。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "コース後半額で追加照射できるのが良い",
    rating: 4.5,
    text: "5回コース終了後、まだ少し毛が残っている部分があったので追加照射を申し込みました。コース後は1回半額なので、通常の都度払いよりずっと安く済んでいます。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "キャンセル料無料が助かる",
    rating: 4,
    text: "仕事の都合で急にスケジュールが変わることがあるので、3時間前までキャンセル無料は本当に助かります。他のクリニックではキャンセル料がかかったり、コース1回分消化になったりするので。",
    source: "公式サイト掲載の体験談を参考に再構成",
  },
  {
    title: "ヒゲ脱毛の痛みはかなり強い",
    rating: 3,
    text: "ヒゲ脱毛はとにかく痛いです。特に鼻下は涙が出そうになりました。麻酔クリームを使うと多少マシになりますが、毎回3,300円かかるので、トータルのコストは結構上がります。",
    source: "みん評の投稿を参考に再構成",
  },
];

export default function MensRizeReviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "クリニック口コミ" },
          { label: "メンズリゼ" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge badge-medical mb-3">医療脱毛</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            メンズリゼの口コミ・評判
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            料金、3種の脱毛機による効果、充実の割引制度、実際の利用者の口コミを徹底検証します。
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メンズリゼの基本情報</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <tbody>
                <tr><td className="font-bold w-40">クリニック名</td><td>メンズリゼ</td></tr>
                <tr><td className="font-bold">種別</td><td>医療脱毛（男性専門）</td></tr>
                <tr><td className="font-bold">ヒゲ脱毛</td><td>39,800円（5回）/ 3部位選択</td></tr>
                <tr><td className="font-bold">全身脱毛</td><td>269,800円（5回）/ 顔VIO除く</td></tr>
                <tr><td className="font-bold">脱毛機</td><td>3種類（熱破壊式・蓄熱式・アレキサンドライト）</td></tr>
                <tr><td className="font-bold">麻酔</td><td>笑気麻酔3,300円、麻酔クリーム3,300円</td></tr>
                <tr><td className="font-bold">院数</td><td>全国26院</td></tr>
                <tr><td className="font-bold">公式サイト</td><td><a href="https://www.mens-rize.com/" target="_blank" rel="noopener noreferrer">https://www.mens-rize.com/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>メンズリゼの特徴</h2>
          <h3>コース終了後1回半額保証</h3>
          <p>コース終了後も通常の半額で追加照射が可能。5回で足りなかった場合でも安心して継続できます。</p>

          <h3>3種の脱毛機で柔軟に対応</h3>
          <p>熱破壊式YAGレーザー、蓄熱式ダイオードレーザー（メディオスターNeXT PRO）、アレキサンドライトレーザーの3種を導入。部位や毛質に応じて最適な脱毛機を選択。</p>

          <h3>充実の割引制度</h3>
          <p>学割20%OFF、ペア割10%OFF、乗り換え割10%OFFなど。学生の方は特にお得にスタートできます。</p>

          <h3>キャンセル料無料</h3>
          <p>予約時間の3時間前までならキャンセル料無料。急な予定変更にも対応しやすいです。</p>
        </div>
      </section>

      <section className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>口コミ・評判</h2>
          <p className="text-sm text-gray-500 mb-6">
            ※掲載している口コミは、公式サイト・みん評・Google口コミ等の投稿を参考に要約・再構成したものです。
          </p>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-primary text-sm m-0">{review.title}</h3>
                  <span className="stars text-sm">{"★".repeat(Math.floor(review.rating))}{"☆".repeat(5 - Math.floor(review.rating))}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{review.text}</p>
                <p className="text-xs text-gray-400">出典：{review.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="card border-l-4 border-l-green-500">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>コース後1回半額で追加照射</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>学割20%OFF・ペア割10%OFF</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>3種の脱毛機で肌質に対応</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>キャンセル料無料（3時間前まで）</li>
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>麻酔は有料（各3,300円）</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>ヒゲ全部位は89,800円とやや高め</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>院によって導入脱毛機が異なる</li>
              </ul>
            </div>
          </div>

          <h2>こんな方におすすめ</h2>
          <ul>
            <li>学生で割引を最大限活用したい方</li>
            <li>コース後の追加照射を安く済ませたい方</li>
            <li>スケジュール変更が多くキャンセル料無料が魅力の方</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-8">
            <h3 className="text-base font-bold text-[#1e3a5f] mb-3">関連記事</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Link href="/articles/beard/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ ヒゲ脱毛おすすめクリニック6選｜料金・回数・痛みを比較</Link>
              <Link href="/articles/pain/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ メンズ脱毛の痛みはどのくらい？部位別の痛みと対策</Link>
              <Link href="/articles/gorilla-vs-rize/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ ゴリラクリニック vs メンズリゼ比較｜ヒゲ脱毛はどっち？</Link>
              <Link href="/articles/cost-guide/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ メンズ脱毛の料金ガイド｜安いクリニックの選び方</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">メンズリゼが気になる方へ</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで料金プランを確認してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.mens-rize.com/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-gray-100">公式サイトを見る</a>
            <Link href="/ranking/" className="btn-secondary">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※掲載している口コミは、公式サイト・みん評・Google口コミ等の投稿を参考に要約・再構成したものです。</p>
          <p className="text-xs text-gray-400 mt-1">※本記事の情報は2026年4月時点のものです。※効果には個人差があります。</p>
        </div>
      </section>
    </>
  );
}
