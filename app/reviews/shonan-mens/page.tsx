import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "湘南美容クリニック(メンズ)の口コミ・評判｜ヒゲ脱毛最安級の実力",
  description:
    "湘南美容クリニック(メンズ)の口コミ・評判を徹底検証。ヒゲ脱毛6回16,800円の料金、全国100院以上の通いやすさ、効果と痛みを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/reviews/shonan-mens/" },
};

const reviews = [
  {
    title: "ヒゲ脱毛6回16,800円は驚異的な安さ",
    rating: 5,
    text: "ヒゲ3部位6回で16,800円。1回あたり2,800円は他のどのクリニックよりも圧倒的に安い。まずは試してみたいという方には間違いなくおすすめです。効果もしっかり感じられました。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "全国どこでも通えるのが最高",
    rating: 4.5,
    text: "転勤族なので、全国100院以上あって他院への移動が自由なのは非常に助かります。東京で始めて、大阪に転勤してからも同じコースで通えています。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "人気院は予約が取りにくいことも",
    rating: 3,
    text: "新宿や渋谷など人気院は土日の予約がかなり埋まっています。平日や、少し離れた院なら空いていることが多いので、院を変えて対応しています。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "女性と同じ待合室なのが気になる",
    rating: 3,
    text: "男性専門院以外では女性患者と同じ待合室になります。正直少し気まずいです。男性専門院を選べば解決しますが、数が限られているので選択肢は狭まります。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "症例数の多さに安心感がある",
    rating: 4,
    text: "国内最大手の美容クリニックなだけあり、症例数は圧倒的。スタッフの施術スキルにムラが少なく、カウンセリングも丁寧です。大手ならではの安心感があります。",
    source: "公式サイト掲載の体験談を参考に再構成",
  },
];

export default function ShounanMensReviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "クリニック口コミ" },
          { label: "湘南美容クリニック(メンズ)" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge badge-medical mb-3">医療脱毛</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            湘南美容クリニック(メンズ)の口コミ・評判
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ヒゲ脱毛6回16,800円の最安級料金、全国100院以上の通いやすさ。口コミを元に検証します。
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>湘南美容クリニック(メンズ)の基本情報</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <tbody>
                <tr><td className="font-bold w-40">クリニック名</td><td>湘南美容クリニック（メンズ）</td></tr>
                <tr><td className="font-bold">種別</td><td>医療脱毛</td></tr>
                <tr><td className="font-bold">ヒゲ脱毛</td><td>16,800円（6回）/ ヒゲ3部位</td></tr>
                <tr><td className="font-bold">全身脱毛</td><td>293,330円（6回）/ 顔VIO含む</td></tr>
                <tr><td className="font-bold">脱毛機</td><td>2種類（アレキサンドライト・蓄熱式IPL）</td></tr>
                <tr><td className="font-bold">麻酔</td><td>笑気麻酔2,200円、麻酔クリーム2,000円</td></tr>
                <tr><td className="font-bold">院数</td><td>全国100院以上</td></tr>
                <tr><td className="font-bold">公式サイト</td><td><a href="https://www.s-b-c.net/datsumo/men/" target="_blank" rel="noopener noreferrer">https://www.s-b-c.net/datsumo/men/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>湘南美容クリニック(メンズ)の特徴</h2>
          <h3>ヒゲ脱毛が業界最安級</h3>
          <p>ヒゲ3部位6回16,800円は業界最安級。1回あたり2,800円で医療レーザー脱毛を受けられます。「まずはヒゲ脱毛を試してみたい」という方に最適。</p>

          <h3>全国100院以上で圧倒的な通いやすさ</h3>
          <p>全国47都道府県に100院以上を展開。他院への移動も自由なため、転勤や引っ越しがあっても同じコースで通い続けられます。</p>

          <h3>パーフェクト全身コースは顔・VIO込み</h3>
          <p>全身脱毛6回293,330円は顔・VIOを含む全部位セット。別々に契約するよりお得で、全身をまとめて脱毛したい方におすすめ。</p>

          <h3>圧倒的な症例数と実績</h3>
          <p>国内最大手の美容クリニックチェーンとして、脱毛の症例数は業界トップクラス。豊富な実績に基づく施術を受けられます。</p>
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
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>ヒゲ脱毛6回16,800円の最安級</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>全国100院以上で通いやすい</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>他院への移動が自由</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>症例数が豊富で安心</li>
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>全身脱毛は他社よりやや高め</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>女性と同じ待合室の場合あり</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>人気院は予約が取りにくい</li>
              </ul>
            </div>
          </div>

          <h2>こんな方におすすめ</h2>
          <ul>
            <li>ヒゲ脱毛を最安で始めたい方</li>
            <li>地方在住で通いやすさを重視する方</li>
            <li>転勤があっても脱毛を続けたい方</li>
            <li>大手の安心感・実績を重視する方</li>
          </ul>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">湘南美容クリニックが気になる方へ</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで相談してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.s-b-c.net/datsumo/men/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-gray-100">公式サイトを見る</a>
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
