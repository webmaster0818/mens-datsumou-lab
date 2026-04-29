import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "エミナルクリニック(メンズ)の口コミ・評判｜全身脱毛最安級の実力",
  description:
    "エミナルクリニック(メンズ)の口コミ・評判を徹底検証。全身脱毛206,800円の料金、蓄熱式脱毛機の痛み、施術時間の短さなどを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/reviews/eminal-mens/" },
};

const reviews = [
  {
    title: "全身脱毛が20万円台で始められた",
    rating: 5,
    text: "他のクリニックでは30万円以上する全身脱毛が、エミナルでは約20万円。月々の分割も4,790円からで、学生の自分でも負担にならない金額でした。コスパ最強だと思います。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "施術時間が60分と短い",
    rating: 4.5,
    text: "全身脱毛が約60分で終わるのは驚きました。以前カウンセリングに行った他のクリニックでは120分と言われていたので、忙しい身としてはありがたいです。連続照射式の脱毛機のおかげだそうです。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "男性専門院ではないのが気になる",
    rating: 3,
    text: "院によっては女性と同じクリニックで、待合室が共用の場合があります。VIO脱毛の時は少し気まずい気持ちになることも。男性専門院を探して予約するのがおすすめです。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "蓄熱式で痛みは思ったより少なかった",
    rating: 4,
    text: "クリスタルプロという蓄熱式の脱毛機を使っていて、熱い感じはあるものの「弾かれるような痛み」は少ないです。ヒゲ部分はやはり痛いですが、体の脱毛はほぼ痛みなしでした。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "まだ新しいサービスで口コミが少ない",
    rating: 3.5,
    text: "メンズ向けサービスとしてはまだ新しく、周りに体験者が少ないため情報収集が難しかったです。ただ、女性向けエミナルクリニックの実績は豊富なので、技術面は安心しています。",
    source: "公式サイト掲載の体験談を参考に再構成",
  },
];

export default function EminalMensReviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "クリニック口コミ" },
          { label: "エミナルクリニック(メンズ)" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge badge-medical mb-3">医療脱毛</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            エミナルクリニック(メンズ)の口コミ・評判
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            全身脱毛が業界最安水準。コスパ、施術時間の短さ、痛みについて口コミを検証します。
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>エミナルクリニック(メンズ)の基本情報</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <tbody>
                <tr><td className="font-bold w-40">クリニック名</td><td>エミナルクリニック（メンズ）</td></tr>
                <tr><td className="font-bold">種別</td><td>医療脱毛</td></tr>
                <tr><td className="font-bold">ヒゲ脱毛</td><td>38,500円（5回）/ 3部位選択</td></tr>
                <tr><td className="font-bold">全身脱毛</td><td>206,800円（5回）/ 顔VIO除く</td></tr>
                <tr><td className="font-bold">脱毛機</td><td>クリスタルプロ（蓄熱式）</td></tr>
                <tr><td className="font-bold">麻酔</td><td>麻酔クリーム（有料）</td></tr>
                <tr><td className="font-bold">院数</td><td>全国60院以上</td></tr>
                <tr><td className="font-bold">公式サイト</td><td><a href="https://eminal-clinic.jp/mens/" target="_blank" rel="noopener noreferrer">https://eminal-clinic.jp/mens/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>エミナルクリニック(メンズ)の特徴</h2>
          <h3>全身脱毛が業界最安水準</h3>
          <p>全身脱毛5回206,800円は医療脱毛として業界最安水準。月々4,790円〜の分割にも対応し、まとまった初期費用がなくてもスタートできます。</p>

          <h3>蓄熱式で痛みを軽減</h3>
          <p>独自開発の「クリスタルプロ」は蓄熱式＋冷却機能搭載。連続照射で施術時間を短縮しつつ、痛みも軽減します。全身脱毛が約60分で完了。</p>

          <h3>全国60院以上</h3>
          <p>全国主要都市に60院以上を展開。院数が多いため予約が比較的取りやすく、転勤・引っ越し時にも別の院で継続可能。</p>
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
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>全身脱毛が業界最安水準</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>月々1,030円〜の分割対応</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>全身60分の短時間施術</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>全国60院以上で通いやすい</li>
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>男性専門院ではない場合あり</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>メンズの口コミがまだ少なめ</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>麻酔は有料</li>
              </ul>
            </div>
          </div>

          <h2>こんな方におすすめ</h2>
          <ul>
            <li>全身脱毛をとにかく安く始めたい方</li>
            <li>施術時間を短くしたい忙しい方</li>
            <li>月々の負担を抑えて分割で通いたい方</li>
          </ul>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-8">
            <h3 className="text-base font-bold text-[#1e3a5f] mb-3">関連記事</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Link href="/articles/beard/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ ヒゲ脱毛おすすめクリニック6選｜料金・回数・痛みを比較</Link>
              <Link href="/articles/cost-guide/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ メンズ脱毛の料金ガイド｜安いクリニックの選び方</Link>
              <Link href="/articles/regina-vs-eminal/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ レジーナクリニックオム vs エミナルクリニック比較｜どっちがいい？</Link>
              <Link href="/articles/full-body/" className="text-sm text-[#1e3a5f] hover:text-[#2563eb] transition-colors">→ メンズ全身脱毛おすすめ5選｜料金と回数の目安</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">エミナルクリニックが気になる方へ</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで料金プランを確認してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://eminal-clinic.jp/mens/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-gray-100">公式サイトを見る</a>
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
