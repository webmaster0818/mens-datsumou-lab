import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "レジーナクリニックオムの口コミ・評判｜麻酔無料の実力を検証",
  description:
    "レジーナクリニックオムの口コミ・評判を徹底検証。麻酔クリーム無料、平日21時まで営業、全身脱毛の料金など、メリット・デメリットを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/reviews/regina-homme/" },
};

const reviews = [
  {
    title: "麻酔無料が本当にありがたい",
    rating: 5,
    text: "他のクリニックでは毎回3,300円かかる麻酔クリームが無料。ヒゲ脱毛6回通えば約2万円の節約になります。痛みが心配で脱毛を躊躇していましたが、ここなら気軽に麻酔を使えるので安心です。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "21時まで営業で仕事後に通える",
    rating: 4.5,
    text: "平日21時まで営業しているので、会社帰りに予約を入れています。施術も30分程度で終わるので、19時半からの予約でも余裕で帰れます。仕事が忙しい自分にはぴったりです。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "院数が少なく通える院が限られる",
    rating: 3,
    text: "サービスは良いのですが、全国7院しかないため、通える院が限られます。自分は新宿院に通っていますが、もう少し院数が増えてくれると選択肢が広がるのですが。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "全身脱毛の料金が良心的",
    rating: 4,
    text: "全身脱毛5回258,000円は医療脱毛としてはかなり良心的な価格設定だと思います。麻酔も無料なので、追加費用を気にせずトータルで安く済ませられます。",
    source: "公式サイト掲載の体験談を参考に再構成",
  },
  {
    title: "女性向け院の安心感がある",
    rating: 4,
    text: "レジーナクリニックは女性向け医療脱毛で実績があるクリニック。そのノウハウが男性向けにも活かされている印象です。施術の丁寧さやカウンセリングの質が高いと感じます。",
    source: "Google口コミを参考に再構成",
  },
];

export default function ReginaHommeReviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "クリニック口コミ" },
          { label: "レジーナクリニックオム" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge badge-medical mb-3">医療脱毛</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            レジーナクリニックオムの口コミ・評判
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            麻酔クリーム無料・平日21時まで営業。利用者の口コミを元にメリット・デメリットを解説します。
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>レジーナクリニックオムの基本情報</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <tbody>
                <tr><td className="font-bold w-40">クリニック名</td><td>レジーナクリニックオム</td></tr>
                <tr><td className="font-bold">種別</td><td>医療脱毛</td></tr>
                <tr><td className="font-bold">ヒゲ脱毛</td><td>44,600円（6回）/ ヒゲ3部位</td></tr>
                <tr><td className="font-bold">全身脱毛</td><td>258,000円（5回）/ 顔VIO除く</td></tr>
                <tr><td className="font-bold">脱毛機</td><td>2種類（蓄熱式・熱破壊式）</td></tr>
                <tr><td className="font-bold">麻酔</td><td>麻酔クリーム無料</td></tr>
                <tr><td className="font-bold">院数</td><td>全国7院</td></tr>
                <tr><td className="font-bold">営業時間</td><td>平日21時まで</td></tr>
                <tr><td className="font-bold">公式サイト</td><td><a href="https://homme.reginaclinic.jp/" target="_blank" rel="noopener noreferrer">https://homme.reginaclinic.jp/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>レジーナクリニックオムの特徴</h2>
          <h3>麻酔クリームが完全無料</h3>
          <p>
            最大の特徴は、麻酔クリームを無料で提供していること。他のクリニックでは1回3,300円かかることが一般的ですが、レジーナクリニックオムでは追加費用ゼロ。ヒゲ脱毛6回コースなら約2万円の節約になります。痛みに不安がある方でも、毎回気兼ねなく麻酔を使えます。
          </p>

          <h3>平日21時まで営業</h3>
          <p>
            多くのクリニックが19時や20時に閉まる中、レジーナクリニックオムは平日21時まで営業。仕事終わりの19〜20時に予約を入れることが可能で、忙しいビジネスマンにとって大きなメリットです。
          </p>

          <h3>全身脱毛が良心的な価格</h3>
          <p>
            全身脱毛（顔・VIO除く）5回258,000円は、医療脱毛としては比較的リーズナブルな価格設定。麻酔代無料も加味すると、トータルコストは最安水準になる場合もあります。
          </p>
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
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>麻酔クリーム無料</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>平日21時まで営業</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>全身脱毛が良心的な価格</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>女性向け院の実績あり</li>
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>全国7院と院数が少ない</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>ヒゲ脱毛はやや割高</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>地方では通いにくい</li>
              </ul>
            </div>
          </div>

          <h2>こんな方におすすめ</h2>
          <ul>
            <li>痛みが心配で麻酔を毎回使いたい方</li>
            <li>仕事帰りの遅い時間に通いたい方</li>
            <li>新宿・池袋・横浜・大阪梅田など対象エリアの方</li>
          </ul>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">レジーナクリニックオムが気になる方へ</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで相談してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://homme.reginaclinic.jp/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-gray-100">公式サイトを見る</a>
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
