import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズ脱毛 東京のおすすめクリニック8選｜エリア別に比較",
  description:
    "東京でおすすめのメンズ脱毛クリニック8選をエリア別に比較。新宿・渋谷・池袋・銀座・上野エリアの医療脱毛クリニック・サロンの料金、アクセス、特徴を徹底解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/tokyo/" },
  openGraph: {
    title: "メンズ脱毛 東京のおすすめクリニック8選｜エリア別に比較",
    description: "東京のメンズ脱毛クリニック8選をエリア別に比較。新宿・渋谷・池袋・銀座の人気クリニック情報。",
    url: "https://mens-datsumou-lab.pages.dev/articles/tokyo/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "メンズ脱毛 東京のおすすめクリニック8選｜エリア別に比較",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/tokyo/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "東京でメンズ脱毛が安いクリニックはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヒゲ脱毛なら湘南美容クリニック（6回16,800円）が最安です。全身脱毛ならエミナルクリニック（5回206,800円）がコスパ良好です。どちらも東京都内に複数の院を展開しています。",
      },
    },
    {
      "@type": "Question",
      name: "東京で男性専門の脱毛クリニックはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ゴリラクリニックが男性専門の医療脱毛クリニックです。東京では新宿・渋谷・池袋・銀座・上野・町田に6院を展開。患者もスタッフも男性中心のため、気兼ねなく通えます。",
      },
    },
    {
      "@type": "Question",
      name: "仕事帰りに通えるクリニックはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "レジーナクリニックオムは平日21時まで営業しているため、仕事帰りにも通いやすいです。新宿・池袋・銀座に院があります。メンズリゼも20時まで営業している院が多いです。",
      },
    },
    {
      "@type": "Question",
      name: "東京でメンズ脱毛サロン（光脱毛）のおすすめはどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "メンズクリアが東京都内に多数の店舗を展開しています。通い放題プラン（月額3,000円〜）があり、痛みの少ない光脱毛で気軽に始められます。新宿・渋谷・池袋・銀座などに店舗があります。",
      },
    },
    {
      "@type": "Question",
      name: "東京のクリニックを選ぶ際のポイントは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "通いやすさ（駅からの距離、営業時間）、料金、脱毛機の種類がポイントです。東京は選択肢が豊富なので、自宅や職場からの通いやすさで絞り込み、その中から料金と特徴を比較するのがおすすめです。",
      },
    },
  ],
};

const tokyoClinics = [
  {
    name: "ゴリラクリニック",
    area: "新宿・渋谷・池袋・銀座・上野・町田",
    type: "医療脱毛（男性専門）",
    beard: "39,800円（6回）",
    fullBody: "354,800円（5回）",
    feature: "男性専門。ヒゲ脱毛コース後3年間1回100円で追加照射可能。5種類の脱毛機導入。",
    hours: "11:00〜20:00",
    link: "/reviews/gorilla/",
  },
  {
    name: "メンズリゼ",
    area: "新宿・渋谷・銀座・立川",
    type: "医療脱毛",
    beard: "39,800円（5回）",
    fullBody: "229,800円（5回）",
    feature: "コース後1回半額で追加照射。学割20%OFF・ペア割10%OFF。3種類の脱毛機を導入。",
    hours: "10:00〜20:00",
    link: "/reviews/mens-rize/",
  },
  {
    name: "レジーナクリニックオム",
    area: "新宿・池袋・銀座",
    type: "医療脱毛",
    beard: "44,600円（6回）",
    fullBody: "258,000円（5回）",
    feature: "麻酔クリーム無料。平日21時まで営業。完全個室で落ち着いた雰囲気。",
    hours: "12:00〜21:00（平日）、11:00〜20:00（土日祝）",
    link: "/reviews/regina-homme/",
  },
  {
    name: "湘南美容クリニック（メンズ）",
    area: "新宿・渋谷・池袋・銀座・上野・品川・秋葉原・立川・町田 他",
    type: "医療脱毛",
    beard: "16,800円（6回）",
    fullBody: "293,330円（6回）",
    feature: "業界最安級のヒゲ脱毛。東京都内だけで20院以上。どの院でも通えて便利。",
    hours: "10:00〜19:00（院により異なる）",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "エミナルクリニック（メンズ）",
    area: "新宿・渋谷・池袋・銀座・上野・立川・町田",
    type: "医療脱毛",
    beard: "38,500円（5回）",
    fullBody: "206,800円（5回）",
    feature: "全身脱毛が業界最安水準。蓄熱式で痛みが少ない。月々4,790円〜の分割対応。",
    hours: "11:00〜21:00",
    link: "/reviews/eminal-mens/",
  },
  {
    name: "メンズクリア",
    area: "新宿・渋谷・池袋・銀座・上野・秋葉原・吉祥寺・町田 他",
    type: "光脱毛（サロン）",
    beard: "110,660円（8回）",
    fullBody: "218,660円（4回）",
    feature: "通い放題プラン月額3,000円〜。光脱毛で痛みが少ない。都内に多数の店舗。",
    hours: "12:00〜21:00",
    link: "/reviews/mens-clear/",
  },
  {
    name: "メンズTBC",
    area: "新宿・渋谷・池袋・銀座・上野 他",
    type: "美容電気脱毛・光脱毛",
    beard: "体験1,000円（150本）",
    fullBody: "要カウンセリング",
    feature: "美容電気脱毛（ニードル脱毛）でその場で毛が無くなる。1本ずつ処理するため精度が高い。",
    hours: "10:00〜20:00（店舗により異なる）",
    link: "/ranking/",
  },
  {
    name: "ダンディハウス",
    area: "新宿・渋谷・池袋・銀座 他",
    type: "美容電気脱毛・光脱毛",
    beard: "体験5,500円",
    fullBody: "要カウンセリング",
    feature: "高級感のある空間。美容電気脱毛と光脱毛のハイブリッド施術。",
    hours: "10:00〜21:00（店舗により異なる）",
    link: "/ranking/",
  },
];

export default function TokyoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "エリアガイド", href: "/articles/tokyo/" }, { label: "東京のメンズ脱毛" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            メンズ脱毛 東京のおすすめクリニック8選
            <br className="md:hidden" />
            ｜エリア別に比較
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            東京都内でメンズ脱毛ができるおすすめクリニック・サロン8選。新宿・渋谷・池袋・銀座エリアの料金と特徴を比較します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#tokyo-clinics" className="text-[#2563eb] hover:underline">1. 東京のおすすめクリニック・サロン8選</a></li>
            <li><a href="#tokyo-price" className="text-[#2563eb] hover:underline">2. 料金比較表</a></li>
            <li><a href="#tokyo-area" className="text-[#2563eb] hover:underline">3. エリア別ガイド</a></li>
            <li><a href="#tokyo-choose" className="text-[#2563eb] hover:underline">4. クリニックの選び方</a></li>
            <li><a href="#tokyo-faq" className="text-[#2563eb] hover:underline">5. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            東京はメンズ脱毛のクリニック・サロンが最も多いエリアです。選択肢が豊富な分、「どのクリニックを選べばいいかわからない」と迷う方も多いでしょう。
          </p>
          <p>
            この記事では、東京都内でメンズ脱毛ができるおすすめのクリニック・サロン8選を紹介し、エリア別のアクセス情報や料金比較を行います。
          </p>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section id="tokyo-clinics" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>東京のおすすめクリニック・サロン8選</h2>
          <div className="space-y-6">
            {tokyoClinics.map((clinic, i) => (
              <div key={clinic.name} className="bg-white border border-[#cbd5e1] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#2563eb] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[#1e3a5f] m-0">{clinic.name}</h3>
                    <span className="text-xs text-gray-500">{clinic.type}</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ヒゲ脱毛</p>
                    <p className="font-bold text-[#2563eb]">{clinic.beard}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">全身脱毛</p>
                    <p className="font-bold">{clinic.fullBody}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">営業時間</p>
                    <p className="font-bold text-sm">{clinic.hours}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">東京のエリア</p>
                    <p className="font-bold text-sm">{clinic.area}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{clinic.feature}</p>
                <Link href={clinic.link} className="text-[#2563eb] text-sm font-bold hover:underline">
                  口コミ・詳細を見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金比較表 */}
      <section id="tokyo-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>東京のメンズ脱毛 料金比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>種別</th>
                  <th>ヒゲ脱毛</th>
                  <th>全身脱毛</th>
                </tr>
              </thead>
              <tbody>
                {tokyoClinics.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold">{c.name}</td>
                    <td className="text-sm">{c.type}</td>
                    <td>{c.beard}</td>
                    <td>{c.fullBody}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の情報です。</p>
        </div>
      </section>

      {/* エリア別ガイド */}
      <section id="tokyo-area" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>東京のエリア別ガイド</h2>

          <h3>新宿エリア</h3>
          <p>
            東京で最もメンズ脱毛クリニックが集中するエリアです。ゴリラクリニック・メンズリゼ・レジーナクリニックオム・湘南美容クリニック・エミナルクリニック・メンズクリアなど、主要クリニック・サロンが全て揃っています。新宿駅から徒歩5分圏内にほとんどの院が集まっているため、比較検討しやすいエリアです。
          </p>

          <h3>渋谷エリア</h3>
          <p>
            渋谷もクリニック数が多いエリアです。ゴリラクリニック渋谷院、メンズリゼ渋谷院、湘南美容クリニック渋谷院などがあります。若い世代が多く通うエリアで、学割を利用する学生にも人気です。
          </p>

          <h3>池袋エリア</h3>
          <p>
            池袋駅周辺にもゴリラクリニック・レジーナクリニックオム・湘南美容クリニック・エミナルクリニック・メンズクリアがあります。埼玉方面からのアクセスも良いため、県境にお住まいの方にも便利です。
          </p>

          <h3>銀座・有楽町エリア</h3>
          <p>
            ビジネスマンに人気のエリアです。レジーナクリニックオム銀座院は平日21時まで営業しているため、仕事帰りに通うのに最適。落ち着いた雰囲気のクリニックが多いのも銀座エリアの特徴です。
          </p>

          <h3>上野・秋葉原エリア</h3>
          <p>
            湘南美容クリニック・ゴリラクリニック・エミナルクリニックが上野エリアに展開。秋葉原にはメンズクリアもあります。台東区・文京区・千代田区にお住まいの方にアクセス良好です。
          </p>
        </div>
      </section>

      {/* 選び方 */}
      <section id="tokyo-choose" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>東京でメンズ脱毛クリニックを選ぶポイント</h2>

          <h3>1. 通いやすさで絞り込む</h3>
          <p>
            脱毛は5回以上通うことになるため、自宅や職場から通いやすい場所にあるクリニックを選びましょう。東京は各エリアにクリニックが充実しているため、最寄り駅から徒歩圏内のクリニックを探しやすいです。
          </p>

          <h3>2. 営業時間を確認する</h3>
          <p>
            仕事帰りに通いたい方は営業時間をチェック。レジーナクリニックオムは平日21時まで、エミナルクリニックは21時まで営業しており、夜遅くまで通えます。
          </p>

          <h3>3. 料金だけでなくトータルコストで比較</h3>
          <p>
            コース料金だけでなく、追加照射の料金やシェービング代、麻酔代なども含めたトータルコストで比較しましょう。レジーナクリニックオムは麻酔クリーム無料、ゴリラクリニックはヒゲ脱毛コース後100円で追加照射可能と、それぞれの強みがあります。
          </p>

          <h3>4. 複数のカウンセリングを受ける</h3>
          <p>
            東京はクリニックの選択肢が多いため、2〜3院のカウンセリングを受けて比較するのがおすすめです。カウンセリングは無料のクリニックがほとんどなので、雰囲気やスタッフの対応も含めて判断しましょう。
          </p>

          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">料金の詳しい比較はこちら</p>
            <Link href="/articles/cost-guide/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ脱毛の料金ガイド｜安いクリニックの選び方
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="tokyo-faq" className="bg-[#f8fafc] py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">Q. {faq.name}</div>
                <div className="faq-a">A. {faq.acceptedAnswer.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">東京でメンズ脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">
            まずは無料カウンセリングで、あなたに合ったプランを相談してみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            おすすめクリニック比較を見る
          </Link>
        </div>
      </section>

      <section className="py-6 border-t border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。最新の料金は各公式サイトをご確認ください。※料金はすべて税込表記です。</p>
        </div>
      </section>
    </>
  );
}
