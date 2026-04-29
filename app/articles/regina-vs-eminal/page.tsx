import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "レジーナクリニックオム vs エミナルクリニック比較｜どっちがいい？",
  description:
    "レジーナクリニックオムとエミナルクリニック（メンズ）を料金・回数・痛み対策・サービスで徹底比較。ヒゲ脱毛・全身脱毛それぞれの観点から、あなたに合ったクリニックを解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/regina-vs-eminal/" },
  openGraph: {
    title: "レジーナクリニックオム vs エミナルクリニック比較｜どっちがいい？",
    description: "レジーナクリニックオムとエミナルクリニックを料金・痛み・サービスで比較。",
    url: "https://mens-datsumou-lab.pages.dev/articles/regina-vs-eminal/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "レジーナクリニックオム vs エミナルクリニック比較｜どっちがいい？",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/regina-vs-eminal/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "レジーナクリニックオムとエミナルクリニック、ヒゲ脱毛はどちらが安い？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヒゲ脱毛はエミナルクリニック（5回38,500円）の方がレジーナクリニックオム（6回44,600円）より安いです。ただしレジーナは6回コースなので1回あたりはレジーナの方が安く、さらに麻酔クリームが無料なのでトータルコストで差は縮まります。",
      },
    },
    {
      "@type": "Question",
      name: "全身脱毛はどちらが安い？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "全身脱毛はエミナルクリニック（5回206,800円）の方がレジーナクリニックオム（5回258,000円）より約5万円安いです。料金重視の方はエミナルクリニックがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "痛みが心配な場合はどちらがおすすめ？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "痛みが心配な方にはレジーナクリニックオムがおすすめです。麻酔クリームが無料で利用できるため、追加費用なしで痛みを軽減できます。エミナルクリニックは蓄熱式の脱毛機で痛みを抑える方式ですが、麻酔は有料です。",
      },
    },
    {
      "@type": "Question",
      name: "院数はどちらが多い？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "エミナルクリニックの方が院数が多く、全国に50院以上を展開しています。レジーナクリニックオムは全国7院と少なめです。地方にお住まいの方はエミナルの方が通いやすい可能性が高いです。",
      },
    },
    {
      "@type": "Question",
      name: "どちらのクリニックが予約を取りやすい？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "レジーナクリニックオムは院数が少ないものの、完全予約制で比較的予約が取りやすいと言われています。エミナルクリニックは院数が多いため、別の院で予約を取ることも可能です。どちらも平日の方が予約は取りやすいです。",
      },
    },
  ],
};

export default function ReginaVsEminalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/regina-vs-eminal/" }, { label: "レジーナ vs エミナル" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            レジーナクリニックオム vs エミナルクリニック
            <br className="md:hidden" />
            比較｜どっちがいい？
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            レジーナクリニックオムとエミナルクリニックを料金・痛み対策・サービス・院数で徹底比較します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#vs-overview" className="text-[#2563eb] hover:underline">1. 2社の基本情報比較</a></li>
            <li><a href="#vs-beard" className="text-[#2563eb] hover:underline">2. ヒゲ脱毛の比較</a></li>
            <li><a href="#vs-fullbody" className="text-[#2563eb] hover:underline">3. 全身脱毛の比較</a></li>
            <li><a href="#vs-pain" className="text-[#2563eb] hover:underline">4. 痛み対策の比較</a></li>
            <li><a href="#vs-service" className="text-[#2563eb] hover:underline">5. サービス・通いやすさの比較</a></li>
            <li><a href="#vs-recommend" className="text-[#2563eb] hover:underline">6. タイプ別おすすめ</a></li>
            <li><a href="#vs-faq" className="text-[#2563eb] hover:underline">7. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            レジーナクリニックオムとエミナルクリニック（メンズ）は、どちらも人気の医療脱毛クリニックです。レジーナは麻酔クリーム無料で痛みに配慮、エミナルは全身脱毛の料金が業界最安水準と、それぞれ強みが異なります。
          </p>
          <p>
            この記事では、2社を料金・痛み対策・サービス・院数の観点で徹底比較し、あなたに合ったクリニックを見つけるお手伝いをします。
          </p>
        </div>
      </section>

      {/* 基本情報比較 */}
      <section id="vs-overview" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>2社の基本情報比較</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>レジーナクリニックオム</th>
                  <th>エミナルクリニック（メンズ）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ脱毛</td>
                  <td>44,600円（6回）</td>
                  <td>38,500円（5回）</td>
                </tr>
                <tr>
                  <td className="font-bold">1回あたり（ヒゲ）</td>
                  <td>7,433円</td>
                  <td>7,700円</td>
                </tr>
                <tr>
                  <td className="font-bold">全身脱毛（顔VIO除く）</td>
                  <td>258,000円（5回）</td>
                  <td>206,800円（5回）</td>
                </tr>
                <tr>
                  <td className="font-bold">全身＋顔</td>
                  <td>308,000円（5回）</td>
                  <td>260,400円（5回）</td>
                </tr>
                <tr>
                  <td className="font-bold">全身＋VIO</td>
                  <td>333,000円（5回）</td>
                  <td>260,400円（5回）</td>
                </tr>
                <tr>
                  <td className="font-bold">脱毛機</td>
                  <td>2種類（蓄熱式＋熱破壊式）</td>
                  <td>クリスタルプロ（蓄熱式＋熱破壊式切替）</td>
                </tr>
                <tr>
                  <td className="font-bold">麻酔</td>
                  <td className="font-bold text-green-600">麻酔クリーム無料</td>
                  <td>有料</td>
                </tr>
                <tr>
                  <td className="font-bold">院数</td>
                  <td>全国7院</td>
                  <td>全国50院以上</td>
                </tr>
                <tr>
                  <td className="font-bold">営業時間</td>
                  <td>平日12:00〜21:00 / 土日祝11:00〜20:00</td>
                  <td>11:00〜21:00</td>
                </tr>
                <tr>
                  <td className="font-bold">コース後追加</td>
                  <td>1回半額</td>
                  <td>要相談</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ヒゲ脱毛比較 */}
      <section id="vs-beard" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛の比較</h2>

          <h3>コース料金</h3>
          <p>
            ヒゲ脱毛のコース料金はエミナルクリニック（5回38,500円）がレジーナクリニックオム（6回44,600円）より安いです。ただし、エミナルは5回コース、レジーナは6回コースなので、1回あたりの料金はレジーナ（7,433円）の方が安くなります。
          </p>

          <h3>麻酔込みのトータルコスト</h3>
          <p>
            ヒゲ脱毛は痛みが強い部位のため、麻酔を使う方が多いです。レジーナクリニックオムは麻酔クリーム無料なので、6回コースのトータルコストは44,600円のまま。エミナルクリニックで5回とも麻酔クリームを使うと、麻酔代が別途かかります。
          </p>

          <h3>追加照射</h3>
          <p>
            ヒゲが濃い方は6回では完了しないことも多いです。レジーナクリニックオムはコース後1回半額で追加照射が可能です。エミナルクリニックの追加照射は要相談となっています。
          </p>

          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">ヒゲ脱毛の詳しい比較はこちら</p>
            <Link href="/articles/beard/" className="text-sm text-[#2563eb] hover:underline">
              → ヒゲ脱毛おすすめクリニック6選｜料金・回数・痛みを比較
            </Link>
          </div>
        </div>
      </section>

      {/* 全身脱毛比較 */}
      <section id="vs-fullbody" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>全身脱毛の比較</h2>

          <h3>料金差は約5万円</h3>
          <p>
            全身脱毛（顔VIO除く）はエミナルクリニック（5回206,800円）がレジーナクリニックオム（5回258,000円）より約5万円安いです。全身＋VIOだと約7万円の差になります。料金重視の方にはエミナルが圧倒的に有利です。
          </p>

          <h3>月々の支払い</h3>
          <p>
            エミナルクリニックは全身脱毛を月々4,790円〜の分割払いに対応しています。レジーナクリニックオムも医療ローンによる分割払いが可能で、月々の負担を抑えて通えます。
          </p>

          <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">全身脱毛の詳しい比較はこちら</p>
            <Link href="/articles/full-body/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ全身脱毛おすすめ5選｜料金と回数の目安
            </Link>
          </div>
        </div>
      </section>

      {/* 痛み対策 */}
      <section id="vs-pain" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>痛み対策の比較</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5">
              <h3 className="font-bold text-[#1e3a5f] mb-3">レジーナクリニックオム</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>麻酔クリーム</strong>：無料</li>
                <li><strong>脱毛機</strong>：蓄熱式＋熱破壊式の2種類</li>
                <li><strong>痛み配慮</strong>：麻酔が無料なので毎回気軽に使える</li>
              </ul>
              <p className="text-sm text-green-600 font-bold mt-3">痛みが心配な方に最適</p>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5">
              <h3 className="font-bold text-[#1e3a5f] mb-3">エミナルクリニック</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>麻酔クリーム</strong>：有料</li>
                <li><strong>脱毛機</strong>：クリスタルプロ（蓄熱式＋熱破壊式切替）</li>
                <li><strong>痛み配慮</strong>：蓄熱式モードで痛みを軽減</li>
              </ul>
              <p className="text-sm text-[#2563eb] font-bold mt-3">蓄熱式で痛みを抑えつつ料金重視</p>
            </div>
          </div>

          <p>
            痛みへの配慮ではレジーナクリニックオムが有利です。麻酔クリームが毎回無料なので、ヒゲやVIOなど痛みが強い部位でも安心して施術を受けられます。エミナルクリニックも蓄熱式で痛みを抑える工夫をしていますが、麻酔が有料なので頻繁に使うとトータルコストが上がります。
          </p>
        </div>
      </section>

      {/* サービス・通いやすさ */}
      <section id="vs-service" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>サービス・通いやすさの比較</h2>

          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>レジーナクリニックオム</th>
                  <th>エミナルクリニック</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">院数</td>
                  <td>全国7院</td>
                  <td className="font-bold text-green-600">全国50院以上</td>
                </tr>
                <tr>
                  <td className="font-bold">営業時間</td>
                  <td className="font-bold text-green-600">平日21時まで</td>
                  <td>21時まで</td>
                </tr>
                <tr>
                  <td className="font-bold">完全個室</td>
                  <td className="font-bold text-green-600">あり</td>
                  <td>あり</td>
                </tr>
                <tr>
                  <td className="font-bold">シェービング</td>
                  <td>手の届かない部位は無料</td>
                  <td>手の届かない部位は無料</td>
                </tr>
                <tr>
                  <td className="font-bold">キャンセル</td>
                  <td>2営業日前まで無料</td>
                  <td>前日18時まで無料</td>
                </tr>
                <tr>
                  <td className="font-bold">テスト照射</td>
                  <td>無料</td>
                  <td>無料</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>院数の違いが大きなポイント</h3>
          <p>
            レジーナクリニックオムは東京（新宿・池袋・銀座）・横浜・大阪・名古屋・福岡の7院のみ。一方、エミナルクリニックは全国50院以上と圧倒的に多いです。地方にお住まいの方や、転勤・引っ越しの可能性がある方はエミナルの方が安心です。
          </p>

          <h3>院の雰囲気</h3>
          <p>
            レジーナクリニックオムは落ち着いた高級感のある内装で、完全個室のプライベート空間を重視しています。エミナルクリニックは清潔感のあるシンプルな内装です。院の雰囲気を重視する方は、両方のカウンセリングに行って比較するのがおすすめです。
          </p>
        </div>
      </section>

      {/* タイプ別おすすめ */}
      <section id="vs-recommend" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>タイプ別おすすめ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 border-t-4 border-t-[#2563eb]">
              <h3 className="font-bold text-[#1e3a5f] mb-3">レジーナクリニックオムがおすすめ</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>・痛みが心配で麻酔を毎回使いたい方</li>
                <li>・落ち着いた雰囲気の院で施術を受けたい方</li>
                <li>・平日21時まで通えるクリニックを探している方</li>
                <li>・ヒゲ脱毛をしっかり完了させたい方（追加照射1回半額）</li>
                <li>・東京・大阪・名古屋・福岡・横浜にお住まいの方</li>
              </ul>
              <Link href="/reviews/regina-homme/" className="text-[#2563eb] text-sm font-bold hover:underline mt-4 inline-block">
                レジーナクリニックオムの詳細を見る →
              </Link>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 border-t-4 border-t-[#d97706]">
              <h3 className="font-bold text-[#1e3a5f] mb-3">エミナルクリニックがおすすめ</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>・料金の安さを最優先したい方</li>
                <li>・全身脱毛を検討している方</li>
                <li>・全国どこでも通えるクリニックが良い方</li>
                <li>・痛みより料金を重視する方</li>
                <li>・月々の支払いを抑えたい方（月々4,790円〜）</li>
              </ul>
              <Link href="/reviews/eminal-mens/" className="text-[#2563eb] text-sm font-bold hover:underline mt-4 inline-block">
                エミナルクリニックの詳細を見る →
              </Link>
            </div>
          </div>

          <h3>迷ったらどちらを選ぶべき？</h3>
          <p>
            ヒゲ脱毛メインで痛みが心配な方はレジーナクリニックオム、全身脱毛で料金を抑えたい方はエミナルクリニックがおすすめです。どちらもカウンセリングは無料なので、両方のカウンセリングを受けて比較するのがベストな選び方です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="vs-faq" className="bg-[#f8fafc] py-12">
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
          <h2 className="text-2xl font-bold text-white mb-4">まずは無料カウンセリングで比較しよう</h2>
          <p className="text-gray-300 mb-8">
            レジーナクリニックオム・エミナルクリニック、どちらもカウンセリングは無料です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reviews/regina-homme/" className="inline-block bg-white text-[#1e3a5f] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">レジーナの詳細を見る</Link>
            <Link href="/reviews/eminal-mens/" className="inline-block border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">エミナルの詳細を見る</Link>
          </div>
        </div>
      </section>

      <section className="py-6 border-t border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。最新の料金は各公式サイトをご確認ください。※料金はすべて税込表記です。※効果には個人差があります。</p>
        </div>
      </section>
    </>
  );
}
