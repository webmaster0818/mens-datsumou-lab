import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゴリラクリニックの口コミ・評判｜ヒゲ脱毛の実力を検証",
  description:
    "ゴリラクリニックの口コミ・評判を徹底検証。ヒゲ脱毛完了コースの料金、痛み、効果、予約の取りやすさなど、実際の利用者の声をもとにメリット・デメリットを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/reviews/gorilla/" },
};

const reviews = [
  {
    title: "ヒゲ脱毛6回でかなり薄くなった",
    rating: 4.5,
    text: "ヒゲ3部位の6回コースを契約。3回目あたりから明らかに毛が減り、6回終了時点で朝のヒゲ剃りが2日に1回で済むようになりました。コース後100円で追加照射できるのもありがたいです。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "痛みは強いが麻酔で対応できた",
    rating: 3.5,
    text: "鼻下の施術は正直かなり痛いです。笑気麻酔を使うようになってからは耐えられるレベルになりました。毎回3,300円の追加出費になりますが、痛みには代えられません。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "男性専門なので通いやすい",
    rating: 4,
    text: "以前は共用のクリニックに通っていましたが、待合室で女性と一緒になるのが気まずくてゴリラクリニックに乗り換えました。患者もスタッフも男性ばかりなので、気兼ねなく通えます。",
    source: "Google口コミを参考に再構成",
  },
  {
    title: "予約が取りにくい時がある",
    rating: 3,
    text: "土日はかなり予約が埋まっており、2ヶ月先まで空きがないこともありました。平日に通える方は問題ないと思いますが、土日しか通えない方は注意が必要です。",
    source: "みん評の投稿を参考に再構成",
  },
  {
    title: "100円の追加照射で完了まで通えた",
    rating: 5,
    text: "ヒゲが濃く、6回では足りませんでしたが、コース後の100円追加照射で計12回通い、ほぼツルツルになりました。トータルコストを考えるとかなりお得でした。",
    source: "公式サイト掲載の体験談を参考に再構成",
  },
];

export default function GorillaReviewPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "クリニック口コミ" },
          { label: "ゴリラクリニック" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="badge badge-medical mb-3">医療脱毛</span>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ゴリラクリニックの口コミ・評判
            <br className="md:hidden" />
            ｜ヒゲ脱毛の実力を検証
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            男性専門の医療脱毛クリニック「ゴリラクリニック」の口コミを検証。料金、痛み、効果、予約の取りやすさを総合評価します。
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ゴリラクリニックの基本情報</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <tbody>
                <tr><td className="font-bold w-40">クリニック名</td><td>ゴリラクリニック</td></tr>
                <tr><td className="font-bold">種別</td><td>医療脱毛（男性専門）</td></tr>
                <tr><td className="font-bold">ヒゲ脱毛</td><td>39,800円（6回）/ ヒゲ3部位</td></tr>
                <tr><td className="font-bold">全身脱毛</td><td>354,800円（5回）/ 顔VIO除く</td></tr>
                <tr><td className="font-bold">脱毛機</td><td>5種類（熱破壊式・蓄熱式）</td></tr>
                <tr><td className="font-bold">麻酔</td><td>笑気麻酔3,300円、麻酔クリーム3,300円</td></tr>
                <tr><td className="font-bold">院数</td><td>全国22院</td></tr>
                <tr><td className="font-bold">公式サイト</td><td><a href="https://gorilla.clinic/" target="_blank" rel="noopener noreferrer">https://gorilla.clinic/</a></td></tr>
              </tbody>
            </table>
          </div>

          <h2>ゴリラクリニックの特徴</h2>
          <h3>男性専門の医療脱毛クリニック</h3>
          <p>
            ゴリラクリニックは男性専門の美容クリニックです。患者もスタッフも男性中心のため、女性の目を気にせず通えます。メンズ脱毛の施術実績が豊富で、男性特有の太く濃い毛にも適切に対応できるノウハウを持っています。
          </p>

          <h3>ヒゲ脱毛完了コース後の100円追加照射</h3>
          <p>
            最大の特徴は、ヒゲ脱毛6回コース終了後、3年間1回100円で追加照射ができること。ヒゲが濃い方は6回では完了しないことも多いですが、追加照射が100円なら安心して通い続けられます。ただし、この100円追加照射は平日11〜15時限定。時間制限を解除するには+19,800円が必要です。
          </p>

          <h3>5種類の脱毛機を導入</h3>
          <p>
            ゴリラクリニックは業界最多クラスの5種類の医療レーザー脱毛機を導入。肌質や毛質、部位に合わせて最適な脱毛機を選択してくれます。太い毛にはYAGレーザー、痛みを抑えたい場合は蓄熱式のメディオスターなど、柔軟な対応が可能です。
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
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>男性専門クリニックで気兼ねなく通える</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>ヒゲ脱毛コース後は3年間1回100円</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>5種類の脱毛機で柔軟に対応</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>笑気麻酔・麻酔クリームの2種対応</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>メンズ脱毛の施術実績が豊富</li>
              </ul>
            </div>
            <div className="card border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>全身脱毛の料金は他社より高め</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>100円追加照射は平日11〜15時限定</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>麻酔は有料（各3,300円/回）</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>土日の予約が取りにくい場合あり</li>
              </ul>
            </div>
          </div>

          <h2>こんな方におすすめ</h2>
          <ul>
            <li>ヒゲ脱毛をしっかり完了したい方（100円追加照射が魅力）</li>
            <li>男性専門クリニックで気兼ねなく通いたい方</li>
            <li>肌質に合った脱毛機を選んでほしい方</li>
          </ul>

          <h2>こんな方には不向き</h2>
          <ul>
            <li>全身脱毛を安く済ませたい方（エミナルクリニックの方が安い）</li>
            <li>麻酔を無料で使いたい方（レジーナクリニックオムの方が適切）</li>
            <li>土日にしか通えない方（予約が混む場合あり）</li>
          </ul>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">ゴリラクリニックが気になる方へ</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで料金プランを確認してみましょう。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://gorilla.clinic/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-primary hover:bg-gray-100">公式サイトを見る</a>
            <Link href="/ranking/" className="btn-secondary">他のクリニックと比較する</Link>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※掲載している口コミは、公式サイト・みん評・Google口コミ等の投稿を参考に要約・再構成したものです。</p>
          <p className="text-xs text-gray-400 mt-1">※本記事の情報は2026年4月時点のものです。最新の料金は公式サイトをご確認ください。※効果には個人差があります。</p>
        </div>
      </section>
    </>
  );
}
