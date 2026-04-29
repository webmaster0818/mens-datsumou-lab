import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "腕・足のメンズ脱毛おすすめ｜料金・回数・効果を部位別に解説",
  description:
    "腕・足のメンズ脱毛おすすめクリニック5選の料金・回数・効果を部位別に徹底解説。ひじ上・ひじ下・太もも・すね毛など、部位ごとの特徴や回数目安、クリニックの選び方も紹介。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/arm-leg/" },
  openGraph: {
    title: "腕・足のメンズ脱毛おすすめ｜料金・回数・効果を部位別に解説",
    description: "腕・足のメンズ脱毛の料金・回数・効果を部位別に解説。おすすめクリニック5選も比較。",
    url: "https://mens-datsumou-lab.pages.dev/articles/arm-leg/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "腕・足のメンズ脱毛おすすめ｜料金・回数・効果を部位別に解説",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/arm-leg/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "腕や足の脱毛は何回で効果が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "医療レーザー脱毛の場合、3回目あたりから毛が薄くなるのを実感でき、5〜8回でかなりの減毛効果が得られます。ツルツルを目指す場合は8〜10回程度が目安です。サロン脱毛の場合はその1.5〜2倍の回数が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "腕や足の脱毛は痛いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "腕や足はヒゲやVIOに比べて痛みが少ない部位です。特にひじ上や太ももの内側は痛みをほとんど感じない方が多いです。すねや手の甲は骨に近いため、やや痛みを感じやすい部位です。",
      },
    },
    {
      "@type": "Question",
      name: "腕だけ・足だけの部位別コースはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くのクリニックでは腕セット（ひじ上・ひじ下・手の甲指）や脚セット（太もも・ひざ下・足の甲指）といった部位別コースを用意しています。全身脱毛に含まれる場合もあるため、脱毛したい範囲に応じてお得なプランを選びましょう。",
      },
    },
    {
      "@type": "Question",
      name: "すね毛を完全になくすのではなく薄くすることはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、可能です。3〜5回程度の照射で毛量を30〜50%程度減らし、自然な薄さにすることができます。カウンセリング時に「ツルツルではなく薄くしたい」と伝えれば、照射回数や出力を調整してもらえます。",
      },
    },
    {
      "@type": "Question",
      name: "腕・足の脱毛の施術時間はどのくらい？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "腕全体（ひじ上＋ひじ下＋手の甲指）で約30〜45分、脚全体（太もも＋ひざ下＋足の甲指）で約45〜60分が目安です。両方合わせても90分程度で終わります。",
      },
    },
  ],
};

const clinics = [
  {
    name: "エミナルクリニック（メンズ）",
    armPrice: "75,000円（5回）",
    legPrice: "105,000円（5回）",
    feature: "全身脱毛に腕・足が含まれるプランがお得。蓄熱式で痛みが少ない。",
    link: "/reviews/eminal-mens/",
  },
  {
    name: "メンズリゼ",
    armPrice: "79,800円（5回）",
    legPrice: "119,800円（5回）",
    feature: "腕セット・脚セットが充実。コース後は1回半額で追加照射が可能。",
    link: "/reviews/mens-rize/",
  },
  {
    name: "ゴリラクリニック",
    armPrice: "158,800円（5回）",
    legPrice: "158,800円（5回）",
    feature: "5種類の脱毛機から肌質に合わせて選択。男性専門で通いやすい。",
    link: "/reviews/gorilla/",
  },
  {
    name: "湘南美容クリニック（メンズ）",
    armPrice: "82,500円（6回）",
    legPrice: "82,500円（6回）",
    feature: "パーツ別に細かく選べる料金体系。全国100院以上で通いやすい。",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "レジーナクリニックオム",
    armPrice: "99,000円（5回）",
    legPrice: "132,000円（5回）",
    feature: "麻酔クリーム無料。平日21時まで営業で仕事帰りにも便利。",
    link: "/reviews/regina-homme/",
  },
];

export default function ArmLegPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/arm-leg/" }, { label: "腕・足のメンズ脱毛" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            腕・足のメンズ脱毛おすすめ
            <br className="md:hidden" />
            ｜料金・回数・効果を部位別に解説
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            腕・足の脱毛で人気のクリニック5社を比較。部位ごとの料金・回数の目安・効果を詳しく解説します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#arm-leg-why" className="text-[#2563eb] hover:underline">1. 腕・足の脱毛が人気の理由</a></li>
            <li><a href="#arm-leg-parts" className="text-[#2563eb] hover:underline">2. 部位別の特徴と効果</a></li>
            <li><a href="#arm-leg-clinics" className="text-[#2563eb] hover:underline">3. おすすめクリニック5選</a></li>
            <li><a href="#arm-leg-price" className="text-[#2563eb] hover:underline">4. 料金比較表</a></li>
            <li><a href="#arm-leg-sessions" className="text-[#2563eb] hover:underline">5. 必要な回数と期間</a></li>
            <li><a href="#arm-leg-pain" className="text-[#2563eb] hover:underline">6. 痛みについて</a></li>
            <li><a href="#arm-leg-choose" className="text-[#2563eb] hover:underline">7. クリニックの選び方</a></li>
            <li><a href="#arm-leg-faq" className="text-[#2563eb] hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            「半袖やハーフパンツから見える腕や足の毛が気になる」「毎日のムダ毛処理が面倒」という男性が増えています。腕や足は人目に触れやすい部位のため、清潔感アップを目的に脱毛する方が急増中です。
          </p>
          <p>
            この記事では、腕・足の脱毛に対応したおすすめクリニック5社の料金を比較し、部位ごとの回数目安や効果、痛みについて詳しく解説します。
          </p>
        </div>
      </section>

      {/* 人気の理由 */}
      <section id="arm-leg-why" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>腕・足の脱毛が人気の理由</h2>
          <p>
            メンズ脱毛の中でも腕・足の脱毛は、ヒゲ脱毛に次いで人気の高い部位です。以下のような理由から需要が高まっています。
          </p>
          <h3>清潔感の向上</h3>
          <p>
            夏場の半袖やハーフパンツ、スポーツ時など、腕や足が見える場面は多くあります。特にビジネスシーンでは腕まくりをした際の毛が気になるという声も。脱毛することで清潔感がアップし、周囲に好印象を与えられます。
          </p>
          <h3>自己処理の手間をなくせる</h3>
          <p>
            カミソリやシェーバーでの自己処理は肌荒れやカミソリ負けの原因になります。特にすね毛は剃るとチクチクして余計に不快感が増すことも。脱毛すれば自己処理の手間がなくなり、肌への負担も軽減されます。
          </p>
          <h3>ツルツルだけでなく「薄くする」選択も可能</h3>
          <p>
            完全にツルツルにするのに抵抗がある方も多いですが、脱毛では毛量を減らして自然な薄さにする「減毛」も可能です。3〜5回程度の照射で毛量を調整し、ナチュラルな仕上がりにする方も増えています。
          </p>
        </div>
      </section>

      {/* 部位別の特徴 */}
      <section id="arm-leg-parts" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の特徴と効果</h2>
          <p>腕・足はそれぞれ細かい部位に分かれます。部位ごとの特徴を理解して、自分に必要な範囲を把握しましょう。</p>

          <h3>腕の脱毛部位</h3>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>特徴</th>
                  <th>痛み</th>
                  <th>回数目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ひじ上（二の腕）</td>
                  <td>産毛が多く、比較的毛は薄い。日焼けしにくい部位</td>
                  <td>弱い</td>
                  <td>3〜5回</td>
                </tr>
                <tr>
                  <td className="font-bold">ひじ下（前腕）</td>
                  <td>毛が太く濃い方が多い。腕まくりで目立つ部位</td>
                  <td>やや弱い</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">手の甲・指</td>
                  <td>面積は狭いが骨に近く痛みあり。指毛が気になる方に人気</td>
                  <td>やや強い</td>
                  <td>5〜8回</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>足の脱毛部位</h3>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>特徴</th>
                  <th>痛み</th>
                  <th>回数目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">太もも</td>
                  <td>面積が広く、毛量が多い方が多い。短パン時に気になる部位</td>
                  <td>弱い</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">ひざ下（すね）</td>
                  <td>最も人気の部位。毛が濃く太いため効果を実感しやすい</td>
                  <td>中程度</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">ひざ</td>
                  <td>骨に近いため痛みを感じやすい。ひざ下セットに含まれることが多い</td>
                  <td>やや強い</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">足の甲・指</td>
                  <td>サンダル時に目立つ部位。面積は狭いが毛が太い</td>
                  <td>やや強い</td>
                  <td>5〜8回</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section id="arm-leg-clinics" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>腕・足脱毛のおすすめクリニック5選</h2>
          <div className="space-y-6">
            {clinics.map((clinic, i) => (
              <div key={clinic.name} className="bg-white border border-[#cbd5e1] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#2563eb] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e3a5f] m-0">{clinic.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">腕セット料金</p>
                    <p className="font-bold text-[#2563eb]">{clinic.armPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">脚セット料金</p>
                    <p className="font-bold text-[#2563eb]">{clinic.legPrice}</p>
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
      <section id="arm-leg-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>腕・足脱毛の料金比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>腕セット</th>
                  <th>脚セット</th>
                  <th>回数</th>
                  <th>特徴</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold">{c.name}</td>
                    <td>{c.armPrice.split("（")[0]}</td>
                    <td>{c.legPrice.split("（")[0]}</td>
                    <td>{c.armPrice.match(/（(.+?)）/)?.[1]}</td>
                    <td className="text-sm">{c.feature.split("。")[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の情報です。クリニックによって含まれる部位が異なります。</p>

          <h3>全身脱毛に含める方がお得な場合も</h3>
          <p>
            腕と足の両方を脱毛したい場合、セットで個別に契約するよりも全身脱毛コースに含めた方がトータルで安くなるケースがあります。例えばエミナルクリニックの全身脱毛5回206,800円には腕・足が含まれているため、腕・足だけの合計よりもお得です。
          </p>
          <p>
            脱毛したい部位が3箇所以上ある場合は、全身脱毛コースの料金も比較してみましょう。
          </p>
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">全身脱毛の詳細はこちら</p>
            <Link href="/articles/full-body/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ全身脱毛おすすめ5選｜料金と回数の目安
            </Link>
          </div>
        </div>
      </section>

      {/* 回数と期間 */}
      <section id="arm-leg-sessions" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>腕・足の脱毛に必要な回数と期間</h2>
          <p>
            腕・足の脱毛に必要な回数は、毛の太さや量、目指すゴールによって異なります。以下は医療レーザー脱毛の場合の目安です。
          </p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>目標</th>
                  <th>必要回数</th>
                  <th>期間</th>
                  <th>効果イメージ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">毛を薄くしたい</td>
                  <td>3〜5回</td>
                  <td>6ヶ月〜1年</td>
                  <td>毛量が30〜50%減少。自然な薄さに</td>
                </tr>
                <tr>
                  <td className="font-bold">かなり減らしたい</td>
                  <td>5〜8回</td>
                  <td>1〜1.5年</td>
                  <td>毛量が60〜80%減少。自己処理がほぼ不要に</td>
                </tr>
                <tr>
                  <td className="font-bold">ツルツルにしたい</td>
                  <td>8〜10回</td>
                  <td>1.5〜2年</td>
                  <td>ほぼ毛がない状態。完全に自己処理不要</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>腕・足はヒゲより少ない回数で完了しやすい</h3>
          <p>
            腕・足の毛はヒゲに比べて毛根が浅く、毛の密度も低いため、比較的少ない回数で効果を実感できます。ヒゲ脱毛がツルツルまで10〜15回かかるのに対し、腕・足は8〜10回で済む傾向があります。
          </p>

          <h3>施術の間隔</h3>
          <p>
            腕・足の施術間隔は8〜10週間おきが一般的です。毛周期に合わせて照射するため、短い間隔で通っても効果は変わりません。5回コースの場合、完了まで約10ヶ月〜1年が目安です。
          </p>
        </div>
      </section>

      {/* 痛みについて */}
      <section id="arm-leg-pain" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>腕・足脱毛の痛みについて</h2>
          <p>
            腕・足の脱毛は、ヒゲやVIOと比べると痛みが少ない部位です。多くの方が麻酔なしでも耐えられるレベルと感じています。
          </p>

          <h3>部位別の痛みレベル</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">痛みが少ない部位</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・ひじ上（二の腕）</li>
                <li>・太もも内側</li>
                <li>・太もも前面</li>
              </ul>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">やや痛みがある部位</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・すね（骨に近い部分）</li>
                <li>・ひざ</li>
                <li>・手の甲・足の甲</li>
              </ul>
            </div>
          </div>

          <h3>痛みを軽減するコツ</h3>
          <ul>
            <li><strong>蓄熱式の脱毛機を選ぶ</strong>：低温でじわじわ照射するため、従来の熱破壊式より痛みが少ないです。</li>
            <li><strong>日焼けを避ける</strong>：日焼けした肌はメラニンが多く、レーザーが反応して痛みが増します。</li>
            <li><strong>保湿をしっかりする</strong>：乾燥した肌はバリア機能が低下し、痛みを感じやすくなります。</li>
            <li><strong>心配な方は麻酔対応のクリニックを</strong>：レジーナクリニックオムなら麻酔クリーム無料です。</li>
          </ul>
        </div>
      </section>

      {/* クリニックの選び方 */}
      <section id="arm-leg-choose" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>腕・足脱毛のクリニックの選び方</h2>

          <h3>1. 部位セットの範囲を確認する</h3>
          <p>
            「腕セット」「脚セット」と一口に言っても、クリニックによって含まれる部位が異なります。手の甲・指や足の甲・指が含まれるか、ひざが太もも側かすね側か、事前に確認しましょう。
          </p>

          <h3>2. 全身脱毛との料金比較</h3>
          <p>
            腕と足の両方を脱毛する場合、セットごとに個別契約するよりも全身脱毛コースの方が安くなるケースがあります。胸やお腹なども気になる方は、全身脱毛コースを検討しましょう。
          </p>

          <h3>3. 追加照射の料金</h3>
          <p>
            5回や6回のコースで完了しない場合に備え、追加照射の料金も確認しておきましょう。メンズリゼはコース後1回半額、ゴリラクリニックは都度払い対応など、クリニックによって異なります。
          </p>

          <h3>4. 通いやすさ</h3>
          <p>
            腕・足の脱毛は5回以上通うことになるため、自宅や職場から通いやすいクリニックを選ぶことが大切です。湘南美容クリニックは全国100院以上展開しており、転勤や引っ越しがあっても通い続けやすいです。
          </p>

          <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">部位別の詳しい情報はこちら</p>
            <Link href="/articles/body-parts-guide/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ脱毛の部位別ガイド｜人気部位ランキングと料金一覧
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="arm-leg-faq" className="py-12">
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
          <h2 className="text-2xl font-bold text-white mb-4">腕・足の脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">
            まずは無料カウンセリングで、あなたの毛質に合ったプランを相談してみましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            おすすめクリニック比較を見る
          </Link>
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
