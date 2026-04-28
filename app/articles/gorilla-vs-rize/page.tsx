import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ゴリラクリニック vs メンズリゼ比較｜ヒゲ脱毛はどっち？",
  description:
    "ゴリラクリニックとメンズリゼを料金・回数・追加照射・痛み対策で徹底比較。ヒゲ脱毛するならどちらがお得か、タイプ別のおすすめを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/gorilla-vs-rize/" },
  openGraph: {
    title: "ゴリラクリニック vs メンズリゼ比較｜ヒゲ脱毛はどっち？",
    description: "ゴリラクリニックとメンズリゼをヒゲ脱毛の料金・追加照射・痛み対策で比較。",
    url: "https://mens-datsumou-lab.pages.dev/articles/gorilla-vs-rize/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ゴリラクリニック vs メンズリゼ比較｜ヒゲ脱毛はどっち？",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/gorilla-vs-rize/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ゴリラクリニックとメンズリゼ、ヒゲ脱毛はどちらが安い？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "コース料金だけで見ると、ゴリラクリニック（ヒゲ3部位6回39,800円）とメンズリゼ（ヒゲ3部位5回39,800円）はほぼ同じです。ただしゴリラは6回、リゼは5回なので1回あたりはゴリラの方がお得です。さらにゴリラはコース後3年間1回100円で追加照射できるため、ツルツルを目指す方はゴリラが圧倒的にお得です。",
      },
    },
    {
      "@type": "Question",
      name: "どちらが痛みに配慮していますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "どちらも笑気麻酔と麻酔クリームに対応していますが、ゴリラクリニックは蓄熱式の脱毛機も導入しており、痛みに配慮する選択肢がやや多いです。ただし、麻酔料金はどちらも3,300円/回とほぼ同じです。",
      },
    },
    {
      "@type": "Question",
      name: "学割はどちらが安いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学割はメンズリゼが20%OFFで最も割引率が高いです。ゴリラクリニックは10%OFFです。学生ならメンズリゼの方がコース料金は安くなります。",
      },
    },
    {
      "@type": "Question",
      name: "院数（通いやすさ）はどちらが上ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ゴリラクリニックは全国22院、メンズリゼは全国25院で、どちらも主要都市をカバーしています。院数はほぼ互角ですが、お住まいの地域によって通いやすさは異なるため、各公式サイトで最寄りの院を確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ツルツルを目指すならどちらがおすすめ？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ツルツルを目指すなら断然ゴリラクリニックです。コース終了後3年間は1回100円で追加照射できるため、15回以上通ってもコース料金＋数千円で済みます。メンズリゼはコース後1回半額なので、追加照射のコストがかさみます。",
      },
    },
  ],
};

export default function GorillaVsRizePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/gorilla-vs-rize/" }, { label: "ゴリラ vs メンズリゼ" }]} />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ゴリラクリニック vs メンズリゼ比較
            <br className="md:hidden" />｜ヒゲ脱毛はどっち？
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">メンズ脱毛の2大クリニックを8つの観点から徹底比較。あなたに合うのはどちらか、一目でわかります。</p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#gr-table" className="text-accent hover:underline">1. 一目でわかる比較表</a></li>
            <li><a href="#gr-price" className="text-accent hover:underline">2. ヒゲ脱毛料金の比較</a></li>
            <li><a href="#gr-after" className="text-accent hover:underline">3. コース終了後の追加照射</a></li>
            <li><a href="#gr-pain" className="text-accent hover:underline">4. 痛み対策の比較</a></li>
            <li><a href="#gr-machine" className="text-accent hover:underline">5. 脱毛機の比較</a></li>
            <li><a href="#gr-discount" className="text-accent hover:underline">6. 割引制度の比較</a></li>
            <li><a href="#gr-who" className="text-accent hover:underline">7. タイプ別おすすめ</a></li>
            <li><a href="#gr-faq" className="text-accent hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* Section 1 */}
      <section id="gr-table" className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>一目でわかる比較表</h2>
          <div className="overflow-x-auto my-6">
            <table>
              <thead>
                <tr><th>比較項目</th><th>ゴリラクリニック</th><th>メンズリゼ</th></tr>
              </thead>
              <tbody>
                {[
                  { item: "ヒゲ3部位コース", a: "39,800円（6回）", b: "39,800円（5回）" },
                  { item: "1回あたり", a: "6,633円", b: "7,960円" },
                  { item: "コース後追加", a: "3年間1回100円", b: "1回半額" },
                  { item: "全身脱毛5回", a: "282,800円", b: "269,800円" },
                  { item: "VIO脱毛5回", a: "153,800円", b: "99,800円" },
                  { item: "麻酔料金", a: "各3,300円/回", b: "各3,300円/回" },
                  { item: "脱毛機", a: "熱破壊式+蓄熱式", b: "熱破壊式+蓄熱式" },
                  { item: "院数", a: "全国22院", b: "全国25院" },
                  { item: "学割", a: "10%OFF", b: "20%OFF" },
                  { item: "ペア割", a: "10%OFF", b: "10%OFF" },
                  { item: "予約キャンセル", a: "前日20時まで無料", b: "3時間前まで無料" },
                ].map((row, i) => (
                  <tr key={row.item} className={i % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="font-bold">{row.item}</td><td>{row.a}</td><td>{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="gr-price" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛料金の比較</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">ゴリラクリニック</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>ヒゲ3部位：<strong>39,800円（6回）</strong></li>
                <li>1回あたり：<strong>6,633円</strong></li>
                <li>ほほ・もみあげ追加：48,800円（6回）</li>
                <li>首追加：48,800円（6回）</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">メンズリゼ</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>ヒゲ3部位：<strong>39,800円（5回）</strong></li>
                <li>1回あたり：<strong>7,960円</strong></li>
                <li>ほほ・もみあげ追加：セットで49,800円（5回）</li>
                <li>全部位セット：89,800円（5回）</li>
              </ul>
            </div>
          </div>
          <p>コース料金は同じ39,800円ですが、ゴリラは6回、リゼは5回。1回あたりの料金はゴリラが約1,300円お得です。</p>
        </div>
      </section>

      {/* Section 3 */}
      <section id="gr-after" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>コース終了後の追加照射</h2>
          <p>ヒゲ脱毛でツルツルを目指す場合、6回では足りないことがほとんど。コース終了後の追加照射の料金が最終的な費用を大きく左右します。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card border-2 border-accent">
              <h3 className="font-bold text-accent mb-2 m-0">ゴリラクリニック：3年間1回100円</h3>
              <p className="text-sm text-gray-600 mb-3">コース終了後、3年間は1回100円で追加照射が可能。ツルツルにするのに15回必要な場合、追加9回分はわずか900円。</p>
              <p className="text-sm font-bold">15回の総額：39,800円 + 900円 = <span className="text-accent">40,700円</span></p>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">メンズリゼ：1回半額</h3>
              <p className="text-sm text-gray-600 mb-3">コース終了後は1回半額で追加照射。1回あたり約3,980円。15回にする場合、追加10回分で約39,800円。</p>
              <p className="text-sm font-bold">15回の総額：39,800円 + 39,800円 = <span className="text-primary">79,600円</span></p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>結論：</strong>ツルツルを目指すなら、ゴリラクリニックの方が約4万円安くなります。この追加照射制度の差が両社の最大の違いです。
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="gr-pain" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>痛み対策の比較</h2>
          <div className="overflow-x-auto my-6">
            <table>
              <thead><tr><th>痛み対策</th><th>ゴリラ</th><th>メンズリゼ</th></tr></thead>
              <tbody>
                <tr><td className="font-bold">笑気麻酔</td><td>3,300円/30分</td><td>3,300円/30分</td></tr>
                <tr><td className="font-bold">麻酔クリーム</td><td>3,300円/回</td><td>3,300円/回</td></tr>
                <tr><td className="font-bold">蓄熱式脱毛機</td><td>対応</td><td>対応</td></tr>
                <tr><td className="font-bold">冷却装置</td><td>搭載</td><td>搭載</td></tr>
              </tbody>
            </table>
          </div>
          <p>痛み対策に関しては両社ほぼ互角です。麻酔料金も同じで、蓄熱式脱毛機も両方が導入しています。痛みで選ぶ決め手にはなりにくいポイントです。</p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="gr-machine" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>脱毛機の比較</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">ゴリラクリニック</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・メディオスターNeXT PRO（蓄熱式）</li>
                <li>・ジェントルYAG（熱破壊式）</li>
                <li>・肌質や毛質に合わせて使い分け</li>
                <li>・太い毛にはYAG、痛み軽減にはメディオスター</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">メンズリゼ</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・メディオスターNeXT PRO（蓄熱式）</li>
                <li>・ジェントルYAGプロ（熱破壊式）</li>
                <li>・ラシャ（蓄熱式+熱破壊式切替可能）</li>
                <li>・3種類の脱毛機から最適なものを選択</li>
              </ul>
            </div>
          </div>
          <p>メンズリゼは3種類の脱毛機を導入しており、選択肢がやや多い印象です。ただし、効果の面では大きな差はなく、どちらも肌質・毛質に合わせた最適な照射が可能です。</p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="gr-discount" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>割引制度の比較</h2>
          <div className="overflow-x-auto my-6">
            <table>
              <thead><tr><th>割引制度</th><th>ゴリラ</th><th>メンズリゼ</th></tr></thead>
              <tbody>
                <tr><td className="font-bold">学割</td><td>10%OFF</td><td className="text-accent font-bold">20%OFF</td></tr>
                <tr><td className="font-bold">ペア割</td><td>10%OFF</td><td>10%OFF</td></tr>
                <tr><td className="font-bold">乗り換え割</td><td>10%OFF</td><td>10%OFF</td></tr>
                <tr><td className="font-bold">紹介割</td><td>10%OFF</td><td>5%OFF</td></tr>
              </tbody>
            </table>
          </div>
          <p>学割はメンズリゼが20%OFFと圧倒的に有利。紹介割はゴリラが10%OFFでリードしています。学生ならメンズリゼ、社会人ならゴリラが割引面ではおすすめです。</p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="gr-who" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>タイプ別おすすめ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-3 m-0">ゴリラクリニックが向いている人</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>・ツルツルを目指す方（追加照射1回100円）</li>
                <li>・10回以上通う予定の方</li>
                <li>・男性専門クリニックの安心感を求める方</li>
                <li>・社会人の方（紹介割10%OFF）</li>
                <li>・ヒゲ脱毛6回コースを希望する方</li>
              </ul>
              <Link href="/reviews/gorilla/" className="text-accent text-sm font-bold hover:underline mt-3 inline-block">ゴリラの詳細 →</Link>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-3 m-0">メンズリゼが向いている人</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>・学生の方（学割20%OFF）</li>
                <li>・ヒゲ脱毛を5〜6回で終えたい方</li>
                <li>・VIO脱毛も一緒にしたい方（VIOが安い）</li>
                <li>・3種類の脱毛機から選びたい方</li>
                <li>・当日3時間前まで無料キャンセルしたい方</li>
              </ul>
              <Link href="/reviews/mens-rize/" className="text-accent text-sm font-bold hover:underline mt-3 inline-block">メンズリゼの詳細 →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="gr-faq" className="section-alt py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "ゴリラクリニックとメンズリゼ、ヒゲ脱毛はどちらが安い？", a: "コース料金だけで見ると、ゴリラクリニック（ヒゲ3部位6回39,800円）とメンズリゼ（ヒゲ3部位5回39,800円）はほぼ同じです。ただしゴリラは6回、リゼは5回なので1回あたりはゴリラの方がお得です。さらにゴリラはコース後3年間1回100円で追加照射できるため、ツルツルを目指す方はゴリラが圧倒的にお得です。" },
              { q: "どちらが痛みに配慮していますか？", a: "どちらも笑気麻酔と麻酔クリームに対応していますが、ゴリラクリニックは蓄熱式の脱毛機も導入しており、痛みに配慮する選択肢がやや多いです。ただし、麻酔料金はどちらも3,300円/回とほぼ同じです。" },
              { q: "学割はどちらが安いですか？", a: "学割はメンズリゼが20%OFFで最も割引率が高いです。ゴリラクリニックは10%OFFです。学生ならメンズリゼの方がコース料金は安くなります。" },
              { q: "院数（通いやすさ）はどちらが上ですか？", a: "ゴリラクリニックは全国22院、メンズリゼは全国25院で、どちらも主要都市をカバーしています。院数はほぼ互角ですが、お住まいの地域によって通いやすさは異なるため、各公式サイトで最寄りの院を確認しましょう。" },
              { q: "ツルツルを目指すならどちらがおすすめ？", a: "ツルツルを目指すなら断然ゴリラクリニックです。コース終了後3年間は1回100円で追加照射できるため、15回以上通ってもコース料金＋数千円で済みます。メンズリゼはコース後1回半額なので、追加照射のコストがかさみます。" },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">Q. {faq.q}</div>
                <div className="faq-a">A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">あなたに合うのはどっち？</h2>
          <p className="text-gray-300 mb-8">無料カウンセリングで両社を比較してみましょう。</p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100">おすすめクリニック比較を見る</Link>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。最新の料金は各公式サイトをご確認ください。※料金はすべて税込表記です。</p>
        </div>
      </section>
    </>
  );
}
