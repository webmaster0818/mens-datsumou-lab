import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズクリアの口コミ・評判｜通い放題プランの実力を検証",
  description:
    "メンズクリアの口コミ・評判を徹底検証。光脱毛の効果、通い放題プランの料金、痛みの少なさ、全国110店舗以上の通いやすさなどを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/reviews/mens-clear/" },
};

const reviews = [
  {
    title: "痛みがほとんどなくて驚いた",
    rating: 5,
    text: "初めての脱毛で痛みが不安でしたが、光脱毛は本当に痛くない。温かい光が当たる程度で、施術中にリラックスできるくらいでした。医療脱毛の痛みに耐えられなかった方にもおすすめです。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "通い放題プランで満足いくまで通えた",
    rating: 4,
    text: "ヒゲ脱毛の通い放題プランを契約。月額3,000円程度で何度でも通えるので、時間のある時に気軽に予約を入れています。光脱毛は回数が必要ですが、通い放題なら気にならないです。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "効果を実感するまでに回数がかかる",
    rating: 3,
    text: "医療脱毛と比べると効果はゆっくりです。ヒゲ脱毛は8回通った時点でようやく毛が薄くなったかな？という程度。ツルツルにするにはかなりの回数が必要だと感じます。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "初回1,000円で試せるのが良い",
    rating: 4.5,
    text: "初回トライアルが各部位1,000円で受けられるので、まずは試しにやってみました。痛みや施術の感じがわかってから契約を決められるので、初心者にやさしいシステムだと思います。",
    source: "公式サイト掲載の体験談を参考に再構成",
  },
  {
    title: "永久脱毛ではないのが少し不安",
    rating: 3,
    text: "光脱毛は永久脱毛ではないので、通うのをやめると毛が戻ってくる可能性があると説明を受けました。長期的に見ると医療脱毛の方が良かったかもと少し後悔しています。",
    source: "みん評の投稿を参考に再構成",
  },
];

export default function MensClearReviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "クリニック口コミ" },
          { label: "メンズクリア" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge badge-salon mb-3">サロン脱毛</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            メンズクリアの口コミ・評判
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            光脱毛の痛みの少なさ、通い放題プランの料金、効果について口コミを検証します。
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メンズクリアの基本情報</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <tbody>
                <tr><td className="font-bold w-40">サロン名</td><td>メンズクリア</td></tr>
                <tr><td className="font-bold">種別</td><td>サロン脱毛（光脱毛/IPL方式）</td></tr>
                <tr><td className="font-bold">ヒゲ脱毛</td><td>110,660円（8回）</td></tr>
                <tr><td className="font-bold">全身脱毛</td><td>218,660円（4回）</td></tr>
                <tr><td className="font-bold">脱毛方式</td><td>光脱毛（IPL方式）</td></tr>
                <tr><td className="font-bold">通い放題</td><td>ヒゲ月額3,000円〜</td></tr>
                <tr><td className="font-bold">店舗数</td><td>全国110店舗以上</td></tr>
                <tr><td className="font-bold">公式サイト</td><td><a href="https://mensclear.com/" target="_blank" rel="noopener noreferrer">https://mensclear.com/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>メンズクリアの特徴</h2>
          <h3>光脱毛で痛みがほとんどない</h3>
          <p>医療レーザーの1/3程度の出力で照射するため、ほとんど痛みを感じない方も多い。脱毛初心者や痛みが苦手な方でも安心して通えます。</p>

          <h3>通い放題プラン</h3>
          <p>月額制の通い放題プランなら、満足するまで何度でも施術が可能。光脱毛は回数が多く必要ですが、通い放題なら追加費用を気にせず通えます。</p>

          <h3>全国110店舗以上の展開</h3>
          <p>医療脱毛クリニックと比べて圧倒的に店舗数が多い。地方在住の方でも近くに店舗がある可能性が高いです。</p>

          <h3>初回トライアル1,000円〜</h3>
          <p>各部位1,000円で初回トライアルが可能。痛みや効果を確認してから契約を決められます。</p>
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
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>痛みがほとんどない</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>通い放題プランで安心</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>全国110店舗以上</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>初回1,000円〜で体験可能</li>
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>永久脱毛ではない</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>効果を実感するまでに回数が必要</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>通い放題は長期契約になりがち</li>
              </ul>
            </div>
          </div>

          <h2>こんな方におすすめ</h2>
          <ul>
            <li>痛みがどうしても苦手な方</li>
            <li>まずは気軽に1,000円で体験してみたい方</li>
            <li>通い放題で満足いくまで通いたい方</li>
          </ul>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">メンズクリアが気になる方へ</h2>
          <p className="text-gray-300 mb-8">まずは初回トライアル（1,000円〜）で体験してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://mensclear.com/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-gray-100">公式サイトを見る</a>
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
