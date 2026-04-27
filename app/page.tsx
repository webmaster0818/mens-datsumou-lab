import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "メンズ脱毛ラボ｜メンズ脱毛おすすめクリニック比較【2026年最新】",
  description:
    "メンズ脱毛の比較・口コミ情報サイト。ゴリラクリニック・メンズリゼ・湘南美容など人気6社の料金・効果・痛みを徹底比較。医療脱毛とサロン脱毛の違いも解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/" },
};

const clinics = [
  {
    name: "ゴリラクリニック",
    type: "医療脱毛",
    badge: "badge-medical",
    beard: "39,800円（6回）",
    fullBody: "354,800円（5回）",
    pain: "笑気麻酔・麻酔クリーム対応",
    feature: "男性専門で通いやすい。ヒゲ脱毛完了コースが人気",
    link: "/reviews/gorilla/",
  },
  {
    name: "メンズリゼ",
    type: "医療脱毛",
    badge: "badge-medical",
    beard: "39,800円（5回）",
    fullBody: "269,800円（5回）",
    pain: "3種の脱毛機を使い分け",
    feature: "コース後1回半額。学割・ペア割など割引充実",
    link: "/reviews/mens-rize/",
  },
  {
    name: "レジーナクリニックオム",
    type: "医療脱毛",
    badge: "badge-medical",
    beard: "44,600円（6回）",
    fullBody: "258,000円（5回）",
    pain: "麻酔クリーム無料",
    feature: "平日21時まで営業。麻酔無料で痛みに配慮",
    link: "/reviews/regina-homme/",
  },
  {
    name: "メンズクリア",
    type: "サロン脱毛",
    badge: "badge-salon",
    beard: "110,660円（8回）",
    fullBody: "218,660円（4回）",
    pain: "光脱毛で痛みが少ない",
    feature: "通い放題プランあり。初回トライアルが安い",
    link: "/reviews/mens-clear/",
  },
  {
    name: "エミナルクリニック（メンズ）",
    type: "医療脱毛",
    badge: "badge-medical",
    beard: "38,500円（5回）",
    fullBody: "206,800円（5回）",
    pain: "連続照射で痛みを軽減",
    feature: "全身脱毛が低価格。月々の分割払い対応",
    link: "/reviews/eminal-mens/",
  },
  {
    name: "湘南美容クリニック（メンズ）",
    type: "医療脱毛",
    badge: "badge-medical",
    beard: "16,800円（6回）",
    fullBody: "293,330円（6回）",
    pain: "笑気麻酔対応",
    feature: "ヒゲ脱毛が業界最安級。全国100院以上で通いやすい",
    link: "/reviews/shonan-mens/",
  },
];

const faqs = [
  {
    q: "メンズ脱毛は何回で効果が出ますか？",
    a: "医療レーザー脱毛の場合、ヒゲ脱毛は5〜10回、全身脱毛は5〜8回が目安です。サロン脱毛は倍以上の回数が必要になる傾向があります。毛質や部位によっても個人差があるため、カウンセリングで確認しましょう。",
  },
  {
    q: "医療脱毛とサロン脱毛はどちらがおすすめ？",
    a: "永久脱毛を目指すなら医療脱毛がおすすめです。医療レーザーは高出力で毛根を破壊するため、少ない回数で効果を実感できます。一方、サロン脱毛は痛みが少なく、1回あたりの料金が安い傾向があります。",
  },
  {
    q: "脱毛の痛みはどのくらい？",
    a: "部位やマシンにより異なりますが、ヒゲ脱毛は「輪ゴムで弾かれるような痛み」と例えられることが多いです。多くのクリニックでは麻酔クリームや笑気麻酔に対応しており、痛みを大幅に軽減できます。",
  },
  {
    q: "メンズ脱毛の料金相場はいくら？",
    a: "ヒゲ脱毛（医療）は3〜10万円（5〜6回）、全身脱毛（医療）は20〜40万円（5回）が相場です。サロン脱毛はコース料金が安く見えますが、総回数が多くなるため、トータル費用は医療脱毛と大差ない場合もあります。",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            メンズ脱毛、はじめるなら今。
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            人気クリニック6社の料金・効果・口コミを徹底比較。
            <br className="hidden md:block" />
            あなたにぴったりの脱毛プランが見つかります。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ranking/" className="btn-primary text-lg">
              おすすめクリニックを見る
            </Link>
            <Link href="/articles/beard/" className="btn-secondary text-lg">
              ヒゲ脱毛特集
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの特徴 */}
      <section className="section-alt py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">6</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">人気6社を徹底比較</h3>
              <p className="text-gray-600 text-sm">
                ゴリラクリニック、メンズリゼ、湘南美容など主要クリニック・サロンの料金と特徴を比較
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">実</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">リアルな口コミ</h3>
              <p className="text-gray-600 text-sm">
                公式サイト・みん評・Google口コミ等を参考に、メリット・デメリットを公平に紹介
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">安</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">わかりやすい料金比較</h3>
              <p className="text-gray-600 text-sm">
                ヒゲ脱毛・全身脱毛の料金を表形式で一覧比較。隠れコストもチェック
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            おすすめメンズ脱毛クリニック6選
          </h2>
          <p className="text-center text-gray-500 mb-10">
            料金・特徴・口コミを比較して、あなたに合ったクリニックを見つけましょう
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinics.map((clinic) => (
              <div key={clinic.name} className="card flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-primary">{clinic.name}</h3>
                  <span className={`badge ${clinic.badge}`}>{clinic.type}</span>
                </div>
                <div className="space-y-2 text-sm text-gray-600 flex-1">
                  <p>
                    <span className="font-semibold text-primary">ヒゲ脱毛：</span>
                    {clinic.beard}
                  </p>
                  <p>
                    <span className="font-semibold text-primary">全身脱毛：</span>
                    {clinic.fullBody}
                  </p>
                  <p>
                    <span className="font-semibold text-primary">痛み対策：</span>
                    {clinic.pain}
                  </p>
                  <p className="text-gray-500 mt-2">{clinic.feature}</p>
                </div>
                <Link
                  href={clinic.link}
                  className="btn-primary text-center mt-4 text-sm"
                >
                  口コミ・詳細を見る
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/ranking/" className="btn-primary text-lg">
              6社の詳細比較を見る
            </Link>
          </div>
        </div>
      </section>

      {/* 記事セクション */}
      <section className="section-alt py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            脱毛コラム・お役立ち情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ヒゲ脱毛おすすめクリニック6選", href: "/articles/beard/", desc: "料金・回数・痛みを徹底比較" },
              { title: "メンズ全身脱毛おすすめ5選", href: "/articles/full-body/", desc: "料金と回数の目安を解説" },
              { title: "メンズ脱毛は痛い？", href: "/articles/pain/", desc: "痛みが少ないクリニックと対策方法" },
              { title: "医療脱毛 vs サロン脱毛", href: "/articles/medical-vs-salon/", desc: "メンズはどっちがいい？" },
              { title: "メンズ脱毛の料金相場ガイド", href: "/articles/cost-guide/", desc: "部位別の費用目安を紹介" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="card hover:no-underline group">
                <h3 className="text-lg font-bold text-primary group-hover:text-accent mb-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500">{article.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">Q. {faq.q}</div>
                <div className="faq-a">A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            まずは無料カウンセリングから
          </h2>
          <p className="text-gray-300 mb-8">
            各クリニックでは無料カウンセリングを実施しています。
            <br />
            料金やプランについて、まずは気軽に相談してみましょう。
          </p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100 text-lg">
            おすすめクリニック比較を見る
          </Link>
        </div>
      </section>
    </>
  );
}
