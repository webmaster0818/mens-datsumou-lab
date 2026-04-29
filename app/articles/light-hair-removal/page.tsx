import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "光脱毛（サロン脱毛）の仕組みと効果｜医療脱毛との違い",
  description:
    "光脱毛（サロン脱毛）の仕組み・効果・メリット・デメリットを解説。医療脱毛との違いを料金・回数・痛み・効果で比較。光脱毛が向いている人の特徴も紹介。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/light-hair-removal/" },
  openGraph: {
    title: "光脱毛（サロン脱毛）の仕組みと効果｜医療脱毛との違い",
    description: "光脱毛の仕組みと効果を解説。医療脱毛との違いを料金・回数・痛みで比較。",
    url: "https://mens-datsumou-lab.pages.dev/articles/light-hair-removal/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "光脱毛（サロン脱毛）の仕組みと効果｜医療脱毛との違い",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/light-hair-removal/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "光脱毛で永久脱毛はできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "光脱毛では永久脱毛はできません。光脱毛は毛根にダメージを与えて減毛・抑毛する施術です。施術をやめると時間の経過とともに毛が再生する場合があります。永久脱毛を希望する場合は、医療レーザー脱毛を選びましょう。",
      },
    },
    {
      "@type": "Question",
      name: "光脱毛は何回通えば効果を実感できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヒゲの場合、10〜15回程度で毛量の減少を実感できます。ツルツルを目指す場合は20〜25回以上（2〜3年）が目安です。体毛は8〜12回程度で効果を実感しやすいです。医療脱毛の1.5〜2倍の回数が必要と考えてください。",
      },
    },
    {
      "@type": "Question",
      name: "光脱毛と医療脱毛、どちらが安いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1回あたりの料金は光脱毛の方が安い場合が多いです。ただし、光脱毛は医療脱毛より多くの回数が必要なため、トータルコストで考えると同程度か、場合によっては光脱毛の方が高くなることもあります。",
      },
    },
    {
      "@type": "Question",
      name: "光脱毛の痛みはどのくらいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "光脱毛は医療レーザーより出力が低いため、痛みは比較的少ないです。「温かい光を当てられている感覚」や「軽くゴムで弾かれる程度」と感じる方が多いです。痛みに弱い方にとって光脱毛は大きなメリットです。",
      },
    },
    {
      "@type": "Question",
      name: "光脱毛から医療脱毛に乗り換える場合、それまでの施術は無駄になりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "無駄にはなりません。光脱毛で減毛した分は効果として残るため、医療脱毛に切り替えた場合は、より少ない回数で完了できる可能性があります。多くのクリニックでは「乗り換え割」を用意しているので、お得に切り替えられます。",
      },
    },
  ],
};

export default function LightHairRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/light-hair-removal/" }, { label: "光脱毛の仕組みと効果" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            光脱毛（サロン脱毛）の仕組みと効果
            <br className="md:hidden" />
            ｜医療脱毛との違い
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            光脱毛の仕組み・効果・メリットデメリットを解説。医療脱毛との違いを料金・回数・痛みで徹底比較します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#light-mechanism" className="text-[#2563eb] hover:underline">1. 光脱毛の仕組み</a></li>
            <li><a href="#light-types" className="text-[#2563eb] hover:underline">2. 光脱毛の種類（IPL・SHR・SSC）</a></li>
            <li><a href="#light-vs-medical" className="text-[#2563eb] hover:underline">3. 光脱毛 vs 医療脱毛 比較</a></li>
            <li><a href="#light-merit" className="text-[#2563eb] hover:underline">4. 光脱毛のメリット・デメリット</a></li>
            <li><a href="#light-sessions" className="text-[#2563eb] hover:underline">5. 光脱毛の回数と期間</a></li>
            <li><a href="#light-who" className="text-[#2563eb] hover:underline">6. 光脱毛が向いている人</a></li>
            <li><a href="#light-salon" className="text-[#2563eb] hover:underline">7. メンズ脱毛サロンの紹介</a></li>
            <li><a href="#light-faq" className="text-[#2563eb] hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            「光脱毛と医療脱毛は何が違うの？」「サロンの脱毛で十分な効果は得られるの？」と疑問に思う方は多いでしょう。光脱毛は医療脱毛より痛みが少なく料金も手頃な一方で、永久脱毛の効果はなく、より多くの回数が必要です。
          </p>
          <p>
            この記事では、光脱毛の仕組みと効果を詳しく解説し、医療脱毛との違いを料金・回数・痛み・効果の観点で比較します。
          </p>
        </div>
      </section>

      {/* 光脱毛の仕組み */}
      <section id="light-mechanism" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>光脱毛の仕組み</h2>
          <p>
            光脱毛は、IPL（Intense Pulsed Light）と呼ばれる幅広い波長の光を肌に照射し、毛のメラニン色素に反応させることで毛根にダメージを与える施術です。
          </p>

          <h3>光脱毛の原理</h3>
          <p>
            光脱毛の光は、毛に含まれるメラニン色素（黒い色素）に吸収されて熱エネルギーに変換されます。この熱が毛根の毛母細胞にダメージを与え、毛の成長を抑制します。ただし、医療レーザーほどの高出力ではないため、毛根を完全に破壊することはできず、「減毛」「抑毛」の効果にとどまります。
          </p>

          <h3>医療レーザーとの最大の違い</h3>
          <p>
            医療レーザーは単一波長の光を高出力で照射するのに対し、光脱毛は複数の波長を含む光を低出力で照射します。そのため、光脱毛は医療行為に該当せず、医師免許がなくても施術が可能です。エステサロンで気軽に受けられる反面、効果は医療脱毛に比べて穏やかです。
          </p>
        </div>
      </section>

      {/* 光脱毛の種類 */}
      <section id="light-types" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>光脱毛の種類（IPL・SHR・SSC）</h2>
          <p>光脱毛にもいくつかの方式があり、それぞれ特徴が異なります。</p>

          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>方式</th>
                  <th>特徴</th>
                  <th>痛み</th>
                  <th>得意な毛質</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">IPL方式</td>
                  <td>最も一般的な光脱毛。メラニンに反応して毛根にダメージを与える</td>
                  <td>やや感じる</td>
                  <td>太い毛</td>
                </tr>
                <tr>
                  <td className="font-bold">SHR方式</td>
                  <td>蓄熱式。低温の光を連射してバルジ領域に熱を蓄積させる</td>
                  <td>ほとんどなし</td>
                  <td>産毛も対応</td>
                </tr>
                <tr>
                  <td className="font-bold">SSC方式</td>
                  <td>専用ジェルに含まれる制毛成分と光の相乗効果で減毛</td>
                  <td>ほとんどなし</td>
                  <td>幅広い毛質</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            メンズ脱毛サロンで最も多く採用されているのはIPL方式です。太い毛に反応しやすいため、ヒゲやすね毛などの脱毛に適しています。痛みを最小限にしたい方はSHR方式を採用しているサロンがおすすめです。
          </p>
        </div>
      </section>

      {/* 光脱毛 vs 医療脱毛 */}
      <section id="light-vs-medical" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>光脱毛 vs 医療脱毛 徹底比較</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>光脱毛（サロン）</th>
                  <th>医療脱毛（クリニック）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">効果</td>
                  <td>減毛・抑毛</td>
                  <td>永久脱毛</td>
                </tr>
                <tr>
                  <td className="font-bold">出力</td>
                  <td>低出力</td>
                  <td>高出力</td>
                </tr>
                <tr>
                  <td className="font-bold">痛み</td>
                  <td>少ない</td>
                  <td>やや強い</td>
                </tr>
                <tr>
                  <td className="font-bold">回数（ヒゲ）</td>
                  <td>15〜25回</td>
                  <td>6〜15回</td>
                </tr>
                <tr>
                  <td className="font-bold">期間</td>
                  <td>2〜3年</td>
                  <td>1〜2年</td>
                </tr>
                <tr>
                  <td className="font-bold">1回の料金</td>
                  <td>3,000〜10,000円</td>
                  <td>5,000〜15,000円</td>
                </tr>
                <tr>
                  <td className="font-bold">トータルコスト</td>
                  <td>45,000〜250,000円</td>
                  <td>30,000〜200,000円</td>
                </tr>
                <tr>
                  <td className="font-bold">施術者</td>
                  <td>エステティシャン</td>
                  <td>医師・看護師</td>
                </tr>
                <tr>
                  <td className="font-bold">麻酔</td>
                  <td>使用不可</td>
                  <td>使用可能</td>
                </tr>
                <tr>
                  <td className="font-bold">肌トラブル時</td>
                  <td>提携医療機関へ</td>
                  <td>院内で対応</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">医療脱毛とサロン脱毛の詳しい比較はこちら</p>
            <Link href="/articles/medical-vs-salon/" className="text-sm text-[#2563eb] hover:underline">
              → 医療脱毛 vs サロン脱毛を徹底比較
            </Link>
          </div>
        </div>
      </section>

      {/* メリット・デメリット */}
      <section id="light-merit" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>光脱毛のメリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 border-l-4 border-l-green-500">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>痛みが少ない（麻酔なしでOK）</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>1回あたりの料金が比較的安い</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>肌への負担が少ない</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>通い放題プランがあるサロンも</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>敷居が低く始めやすい</li>
              </ul>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 border-l-4 border-l-red-400">
              <h3 className="font-bold text-red-600 mb-3">デメリット</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>永久脱毛ではない（再生する可能性あり）</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>医療脱毛より多くの回数が必要</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>完了まで2〜3年かかることも</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>トータルコストは医療脱毛と同程度になる場合も</li>
                <li className="text-sm text-gray-600 flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>肌トラブル時は医療機関への対応が必要</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 回数と期間 */}
      <section id="light-sessions" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>光脱毛の回数と期間の目安</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>薄くなる回数</th>
                  <th>ツルツルの回数</th>
                  <th>期間目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ</td>
                  <td>10〜15回</td>
                  <td>20〜25回</td>
                  <td>2〜3年</td>
                </tr>
                <tr>
                  <td className="font-bold">VIO</td>
                  <td>8〜12回</td>
                  <td>15〜20回</td>
                  <td>1.5〜2.5年</td>
                </tr>
                <tr>
                  <td className="font-bold">腕・足</td>
                  <td>6〜10回</td>
                  <td>12〜18回</td>
                  <td>1〜2年</td>
                </tr>
                <tr>
                  <td className="font-bold">胸・背中</td>
                  <td>6〜10回</td>
                  <td>12〜18回</td>
                  <td>1〜2年</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>施術の間隔</h3>
          <p>
            光脱毛の施術間隔は2〜4週間おきが一般的です。医療脱毛（6〜10週間おき）より短い間隔で通えるため、回数は多くても通院頻度は高くできます。通い放題プランなら、空いている時間にこまめに通うことが可能です。
          </p>
        </div>
      </section>

      {/* 向いている人 */}
      <section id="light-who" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>光脱毛が向いている人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">光脱毛がおすすめの方</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・痛みに弱い方</li>
                <li>・毛量を減らす程度でOKな方</li>
                <li>・まずは気軽に脱毛を試したい方</li>
                <li>・通い放題でコスパ良く脱毛したい方</li>
                <li>・肌が弱く、肌への負担を最小限にしたい方</li>
              </ul>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">医療脱毛がおすすめの方</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・永久脱毛を希望する方</li>
                <li>・短期間で完了させたい方</li>
                <li>・ヒゲをツルツルにしたい方</li>
                <li>・トータルコストを抑えたい方</li>
                <li>・肌トラブル時の安心感を求める方</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* サロン紹介 */}
      <section id="light-salon" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メンズ脱毛サロンの紹介</h2>
          <p>光脱毛を提供している代表的なメンズ脱毛サロンを紹介します。</p>

          <div className="bg-white border border-[#cbd5e1] rounded-lg p-6 my-6">
            <h3 className="text-lg font-bold text-[#1e3a5f] mb-3">メンズクリア</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">ヒゲ脱毛</p>
                <p className="font-bold text-[#2563eb]">110,660円（8回）</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">脱毛方式</p>
                <p className="font-bold">IPL方式</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">特徴</p>
                <p className="font-bold text-sm">通い放題プランあり</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              メンズ専門の脱毛サロン。通い放題プラン（月額3,000円〜）があり、回数を気にせず通えるのが最大の特徴。痛みの少ない最新のIPL脱毛機を導入しており、初めての方でも安心して通えます。
            </p>
            <Link href="/reviews/mens-clear/" className="text-[#2563eb] text-sm font-bold hover:underline">
              メンズクリアの口コミ・詳細を見る →
            </Link>
          </div>

          <h3>光脱毛の後に医療脱毛に切り替えるのもあり</h3>
          <p>
            光脱毛で毛量を減らしてから、残った毛を医療脱毛で仕上げるという方法もあります。光脱毛で痛みや効果を体験し、自分に合っていると感じたら続行、もっと効果を求めるなら医療脱毛に切り替えるという段階的なアプローチは賢い選択です。
          </p>
          <p>
            多くの医療脱毛クリニックでは「乗り換え割」（他社からの乗り換えで5〜10%OFF）を用意しているため、切り替えもお得にできます。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="light-faq" className="py-12">
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
          <h2 className="text-2xl font-bold text-white mb-4">自分に合った脱毛方法を見つけよう</h2>
          <p className="text-gray-300 mb-8">
            光脱毛・医療脱毛それぞれの特徴を理解したうえで、まずは無料カウンセリングを受けてみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            おすすめクリニック・サロン比較を見る
          </Link>
        </div>
      </section>

      <section className="py-6 border-t border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。最新の情報は各公式サイトをご確認ください。※効果には個人差があります。</p>
        </div>
      </section>
    </>
  );
}
