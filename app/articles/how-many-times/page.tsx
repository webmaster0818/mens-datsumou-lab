import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヒゲ脱毛は何回で終わる？回数の目安と効果の経過",
  description:
    "ヒゲ脱毛に必要な回数の目安を目標別に解説。3回・5回・10回・15回それぞれの効果の経過、回数が多くなるケース、コスパの良い通い方まで詳しく紹介。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/how-many-times/" },
  openGraph: {
    title: "ヒゲ脱毛は何回で終わる？回数の目安と効果の経過",
    description: "ヒゲ脱毛に必要な回数を目標別に解説。効果の経過と通い方のコツも紹介。",
    url: "https://mens-datsumou-lab.pages.dev/articles/how-many-times/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ヒゲ脱毛は何回で終わる？回数の目安と効果の経過",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/how-many-times/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ヒゲ脱毛は最低何回から効果を感じますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "一般的に3回目くらいから毛が薄くなってきたと感じる方が多いです。1〜2回目は照射後に一旦毛が抜けても、また同じように生えてきます。毛周期の関係で、効果を実感するには3回以上の照射が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲ脱毛の施術間隔はどのくらい空けるべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "医療脱毛の場合、1〜3回目は4〜6週間間隔、4回目以降は6〜8週間間隔が一般的です。毛周期に合わせて照射するため、早く通いすぎても効果は変わりません。クリニックの指示に従いましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲが濃い人は何回必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヒゲが濃い方（毛が太く密集している方）は、標準の1.5〜2倍の回数が必要になることがあります。ツルツルを目指す場合は15〜20回程度かかることもあります。コース終了後の追加照射が安いクリニックを選ぶのがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "サロン脱毛と医療脱毛で回数は違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、大きく異なります。サロン脱毛（光脱毛）は出力が低いため、医療脱毛の1.5〜2倍の回数が必要です。ツルツルを目指す場合、医療脱毛なら10〜15回、サロン脱毛なら20〜25回が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲ脱毛の回数を少なくする方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1. 適切な間隔で通う（毛周期に合わせる）、2. 日焼けを避ける、3. 保湿を徹底する、4. 施術前に毛抜きを使わない。これらを守ることで、レーザーの効果を最大化し、必要な回数を最小限に抑えられます。",
      },
    },
  ],
};

export default function HowManyTimesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "脱毛コラム", href: "/articles/how-many-times/" },
          { label: "ヒゲ脱毛の回数目安" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ヒゲ脱毛は何回で終わる？
            <br className="md:hidden" />
            回数の目安と効果の経過
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ヒゲ脱毛を始める前に知っておきたい回数の目安。目標別の必要回数、効果の経過、回数を少なくするコツまで解説。
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#hmt-overview" className="text-accent hover:underline">1. 目標別の必要回数一覧</a></li>
            <li><a href="#hmt-progress" className="text-accent hover:underline">2. 回数別の効果の経過</a></li>
            <li><a href="#hmt-factor" className="text-accent hover:underline">3. 回数が多くなるケース</a></li>
            <li><a href="#hmt-interval" className="text-accent hover:underline">4. 施術の間隔と毛周期</a></li>
            <li><a href="#hmt-salon" className="text-accent hover:underline">5. 医療脱毛 vs サロン脱毛の回数比較</a></li>
            <li><a href="#hmt-cost" className="text-accent hover:underline">6. 回数別の費用シミュレーション</a></li>
            <li><a href="#hmt-tips" className="text-accent hover:underline">7. 回数を少なくするための5つのコツ</a></li>
            <li><a href="#hmt-faq" className="text-accent hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* Section 1 */}
      <section id="hmt-overview" className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>目標別の必要回数一覧</h2>
          <p>ヒゲ脱毛の必要回数は「どこまで減らしたいか」で大きく変わります。以下は医療レーザー脱毛の場合の目安です。</p>

          <div className="overflow-x-auto my-6">
            <table>
              <thead>
                <tr>
                  <th>目標</th>
                  <th>必要回数</th>
                  <th>期間</th>
                  <th>仕上がりイメージ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ剃りを楽にしたい</td>
                  <td>3〜5回</td>
                  <td>6ヶ月〜1年</td>
                  <td>毛量30〜50%減。ヒゲ剃りの頻度が半分に</td>
                </tr>
                <tr>
                  <td className="font-bold">青ヒゲをなくしたい</td>
                  <td>5〜8回</td>
                  <td>1〜1.5年</td>
                  <td>毛量50〜80%減。青みがなくなり清潔感UP</td>
                </tr>
                <tr>
                  <td className="font-bold">ほぼツルツルにしたい</td>
                  <td>8〜12回</td>
                  <td>1.5〜2年</td>
                  <td>毛量80〜95%減。ヒゲ剃りがほぼ不要に</td>
                </tr>
                <tr>
                  <td className="font-bold">完全にツルツルにしたい</td>
                  <td>12〜15回</td>
                  <td>2〜2.5年</td>
                  <td>毛がほぼゼロ。完全にヒゲ剃り不要</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>ポイント：</strong>6回コースを契約すると「青ヒゲをなくす」くらいまでの効果が期待できます。完全にツルツルを目指すなら、コース終了後の追加照射が安いクリニック（ゴリラクリニックの3年間1回100円など）を選ぶのがおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="hmt-progress" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>回数別の効果の経過</h2>

          <div className="space-y-4 my-6">
            {[
              { times: "1〜2回目", effect: "変化はほとんど感じない", detail: "照射後1〜2週間で毛が抜け落ちますが、まだ照射していない毛穴の毛（休止期の毛）が生えてくるため、見た目はあまり変わりません。「効果がないのでは？」と不安になる方もいますが、これは正常な経過です。" },
              { times: "3〜4回目", effect: "毛が薄くなってきたと感じる", detail: "ヒゲ剃りの頻度が減り始めます。毛量が20〜30%減少し、朝剃ったヒゲが夕方まで目立たなくなる方も。特に頬やもみあげなど毛が薄い部分から効果が出やすいです。" },
              { times: "5〜6回目", effect: "かなり薄くなる", detail: "毛量が40〜60%減少。青ヒゲが目立たなくなり、ヒゲ剃りが2〜3日に1回程度に。「ヒゲ剃りが楽になった」と実感する方がほとんどです。この時点で満足して終了する方も。" },
              { times: "7〜10回目", effect: "大幅に減少", detail: "毛量が70〜90%減少。ヒゲ剃りはほぼ不要に近い状態。残っている毛も細く産毛のようになります。アゴ下や首など頑固な部分の毛も目立たなくなります。" },
              { times: "11〜15回目", effect: "ほぼツルツル", detail: "毛量が95%以上減少。残っているのはごくわずかな産毛程度。完全にヒゲ剃り不要の生活が実現します。ここまで来ると追加照射の間隔も3〜4ヶ月に1回程度に。" },
            ].map((item) => (
              <div key={item.times} className="card">
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">{item.times}</span>
                  <h3 className="font-bold text-primary m-0">{item.effect}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="hmt-factor" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>回数が多くなるケース</h2>
          <ul>
            <li><strong>ヒゲが濃い・太い方</strong>：毛根が太いほどレーザーの熱が均一に伝わりにくく、回数がかかります。標準の1.5〜2倍程度を見込みましょう。</li>
            <li><strong>アゴ下・首の毛</strong>：毛が密集していて深い位置に毛根があるため、他の部位より回数がかかります。</li>
            <li><strong>日焼けしている方</strong>：日焼け肌はレーザーの出力を下げる必要があるため、1回あたりの効果が低下します。</li>
            <li><strong>サロン脱毛を選んだ場合</strong>：光脱毛は出力が医療脱毛の1/3〜1/2程度のため、同じ効果を得るには1.5〜2倍の回数が必要。</li>
            <li><strong>白髪混じりのヒゲ</strong>：レーザーはメラニン（黒い色素）に反応するため、白髪には効果がありません。白髪が多い場合はニードル脱毛の併用が必要。</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section id="hmt-interval" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>施術の間隔と毛周期</h2>
          <p>
            脱毛の効果を最大化するには、「毛周期」に合わせた施術間隔が重要です。毛周期とは、毛が生えて→成長して→抜けるサイクルのことで、レーザーは成長期の毛にしか効果がありません。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="card text-center">
              <h3 className="font-bold text-primary mb-2 m-0">成長期</h3>
              <p className="text-sm text-gray-600">毛が活発に伸びている時期。レーザーが効くのはこの時期のみ。全体の20〜30%。</p>
            </div>
            <div className="card text-center">
              <h3 className="font-bold text-primary mb-2 m-0">退行期</h3>
              <p className="text-sm text-gray-600">毛の成長が止まり、抜け落ちる準備段階。レーザーの効果は薄い。</p>
            </div>
            <div className="card text-center">
              <h3 className="font-bold text-primary mb-2 m-0">休止期</h3>
              <p className="text-sm text-gray-600">毛が抜け落ちて、次の毛が生える準備をしている時期。レーザーは無効。</p>
            </div>
          </div>

          <div className="overflow-x-auto my-6">
            <table>
              <thead>
                <tr>
                  <th>施術回数</th>
                  <th>推奨間隔</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">1〜3回目</td><td>4〜6週間</td><td>成長期の毛が多いため短めの間隔で効率的に照射</td></tr>
                <tr><td className="font-bold">4〜6回目</td><td>6〜8週間</td><td>毛量が減ってきたため間隔をやや広げる</td></tr>
                <tr><td className="font-bold">7回目以降</td><td>8〜12週間</td><td>残りの毛の毛周期に合わせて間隔を広げる</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="hmt-salon" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>医療脱毛 vs サロン脱毛の回数比較</h2>
          <div className="overflow-x-auto my-6">
            <table>
              <thead>
                <tr>
                  <th>目標</th>
                  <th>医療脱毛</th>
                  <th>サロン脱毛</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">ヒゲ剃りを楽に</td><td>3〜5回</td><td>6〜10回</td></tr>
                <tr><td className="font-bold">青ヒゲ解消</td><td>5〜8回</td><td>10〜15回</td></tr>
                <tr><td className="font-bold">ほぼツルツル</td><td>8〜12回</td><td>15〜20回</td></tr>
                <tr><td className="font-bold">完全ツルツル</td><td>12〜15回</td><td>20〜25回以上</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            医療脱毛は1回あたりの料金がサロン脱毛より高いですが、少ない回数で効果が出るため、トータルコストでは医療脱毛の方が安くなるケースが多いです。また、医療脱毛は永久脱毛ですが、サロン脱毛は減毛・抑毛であり、時間が経つと再び生えてくる可能性があります。
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="hmt-cost" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>回数別の費用シミュレーション</h2>
          <p>湘南美容クリニック（ヒゲ3部位）を例に、回数別の費用を計算します。</p>

          <div className="overflow-x-auto my-6">
            <table>
              <thead>
                <tr>
                  <th>回数</th>
                  <th>コース</th>
                  <th>費用</th>
                  <th>目安の効果</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>6回</td><td>6回コース</td><td>16,800円</td><td>ヒゲ剃りが楽に</td></tr>
                <tr><td>12回</td><td>6回×2</td><td>33,600円</td><td>ほぼツルツル</td></tr>
                <tr><td>15回</td><td>6回×2＋都度3回</td><td>50,700円</td><td>完全ツルツル</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            湘南美容の場合、完全にツルツルにしても総額約5万円。1年のヒゲ剃りコスト（シェーバー代+替刃+クリーム）が約1〜2万円とすると、3〜5年で元が取れる計算です。
          </p>
        </div>
      </section>

      {/* Section 7 */}
      <section id="hmt-tips" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>回数を少なくするための5つのコツ</h2>
          <div className="space-y-4 my-6">
            {[
              { title: "適切な間隔で通う", desc: "毛周期に合わせた間隔（4〜8週間）で通うことで、効率的に照射できます。早く通いすぎても、成長期の毛が少ないため効果が薄れます。" },
              { title: "日焼けを徹底的に避ける", desc: "日焼けするとレーザーの出力を下げざるを得ず、1回あたりの効果が低下。日焼け止めクリームを毎日塗り、紫外線対策を徹底しましょう。" },
              { title: "保湿を欠かさない", desc: "乾燥した肌はレーザーの効果が下がるだけでなく、痛みも増します。毎日の保湿ケアで肌状態を良好に保ちましょう。" },
              { title: "毛抜きを絶対に使わない", desc: "毛抜きやワックスで毛を根元から抜くと、レーザーが反応するメラニンがなくなり、効果がゼロに。脱毛期間中は電気シェーバーで処理しましょう。" },
              { title: "出力が高い医療脱毛を選ぶ", desc: "サロン脱毛は医療脱毛の約半分の出力。同じ効果を得るには倍の回数が必要です。回数を最小限にしたいなら、最初から医療脱毛を選びましょう。" },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-primary mb-2 m-0">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="hmt-faq" className="section-alt py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "ヒゲ脱毛は最低何回から効果を感じますか？", a: "一般的に3回目くらいから毛が薄くなってきたと感じる方が多いです。1〜2回目は照射後に一旦毛が抜けても、また同じように生えてきます。毛周期の関係で、効果を実感するには3回以上の照射が必要です。" },
              { q: "ヒゲ脱毛の施術間隔はどのくらい空けるべきですか？", a: "医療脱毛の場合、1〜3回目は4〜6週間間隔、4回目以降は6〜8週間間隔が一般的です。毛周期に合わせて照射するため、早く通いすぎても効果は変わりません。クリニックの指示に従いましょう。" },
              { q: "ヒゲが濃い人は何回必要ですか？", a: "ヒゲが濃い方（毛が太く密集している方）は、標準の1.5〜2倍の回数が必要になることがあります。ツルツルを目指す場合は15〜20回程度かかることもあります。コース終了後の追加照射が安いクリニックを選ぶのがおすすめです。" },
              { q: "サロン脱毛と医療脱毛で回数は違いますか？", a: "はい、大きく異なります。サロン脱毛（光脱毛）は出力が低いため、医療脱毛の1.5〜2倍の回数が必要です。ツルツルを目指す場合、医療脱毛なら10〜15回、サロン脱毛なら20〜25回が目安です。" },
              { q: "ヒゲ脱毛の回数を少なくする方法はありますか？", a: "1. 適切な間隔で通う（毛周期に合わせる）、2. 日焼けを避ける、3. 保湿を徹底する、4. 施術前に毛抜きを使わない。これらを守ることで、レーザーの効果を最大化し、必要な回数を最小限に抑えられます。" },
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
          <h2 className="text-2xl font-bold text-white mb-4">ヒゲ脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで回数の目安を相談しましょう。</p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100">
            おすすめクリニック比較を見る
          </Link>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。※効果・回数には個人差があります。</p>
        </div>
      </section>
    </>
  );
}
