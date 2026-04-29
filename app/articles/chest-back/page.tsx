import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "胸毛・背中のメンズ脱毛おすすめ｜料金と回数の目安",
  description:
    "胸毛・背中のメンズ脱毛おすすめクリニック5選。料金比較・回数目安・痛み対策を解説。胸毛や背中の毛が気になる男性に向けて、部位の特徴やクリニックの選び方も紹介。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/chest-back/" },
  openGraph: {
    title: "胸毛・背中のメンズ脱毛おすすめ｜料金と回数の目安",
    description: "胸毛・背中のメンズ脱毛おすすめクリニック5選。料金・回数・痛み対策を比較解説。",
    url: "https://mens-datsumou-lab.pages.dev/articles/chest-back/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "胸毛・背中のメンズ脱毛おすすめ｜料金と回数の目安",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/chest-back/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "胸毛の脱毛は何回で効果が出ますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "医療レーザー脱毛の場合、3回目あたりから毛が薄くなるのを実感でき、5〜8回でかなりの減毛効果が得られます。ツルツルを目指す場合は8〜10回程度が目安です。胸毛は比較的太い毛が多いため、レーザーが反応しやすく効果を実感しやすいです。",
      },
    },
    {
      "@type": "Question",
      name: "背中の脱毛は自分では見えませんが、シェービングは必要ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "多くのクリニックでは、背中など手が届きにくい部位は看護師がシェービングを行ってくれます。事前の自己処理が不要なクリニックが多いので、カウンセリング時に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "胸毛・背中の脱毛は痛いですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "胸や背中はヒゲやVIOに比べて痛みが少ない部位です。ただし、乳輪周辺は皮膚が薄くやや痛みを感じやすいです。蓄熱式の脱毛機なら痛みをさらに軽減できます。",
      },
    },
    {
      "@type": "Question",
      name: "胸毛だけ・背中だけの部分脱毛は可能ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くのクリニックでは胸・腹のセットや背中単体のコースを用意しています。ただし、全身脱毛コースに含まれている場合はそちらの方がお得なこともあります。",
      },
    },
    {
      "@type": "Question",
      name: "胸毛や背中を脱毛すると汗をかきやすくなりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "脱毛で発汗量が増えることはありません。ただし、毛がなくなることで汗が直接肌に付き、以前よりも汗を感じやすくなる場合があります。実際の汗の量は変わらないのでご安心ください。",
      },
    },
  ],
};

const clinics = [
  {
    name: "エミナルクリニック（メンズ）",
    chestPrice: "全身脱毛に含む",
    backPrice: "全身脱毛に含む",
    totalPrice: "206,800円（5回・全身）",
    feature: "胸・背中は全身脱毛コースに含まれるためお得。蓄熱式で痛みが少ない。",
    link: "/reviews/eminal-mens/",
  },
  {
    name: "メンズリゼ",
    chestPrice: "33,800円（5回）",
    backPrice: "33,800円（5回）",
    totalPrice: "67,600円（胸＋背中）",
    feature: "胴体パーツを細かく選べる。コース後1回半額で追加照射も可能。",
    link: "/reviews/mens-rize/",
  },
  {
    name: "ゴリラクリニック",
    chestPrice: "147,800円（5回・胴セット）",
    backPrice: "胴セットに含む",
    totalPrice: "147,800円（5回・胴セット）",
    feature: "胸・腹・背中のセットプランあり。男性専門で相談しやすい。",
    link: "/reviews/gorilla/",
  },
  {
    name: "湘南美容クリニック（メンズ）",
    chestPrice: "82,500円（6回）",
    backPrice: "82,500円（6回）",
    totalPrice: "165,000円（胸＋背中）",
    feature: "パーツ別に細かく選べる。全国100院以上で通いやすい。",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "レジーナクリニックオム",
    chestPrice: "全身脱毛に含む",
    backPrice: "全身脱毛に含む",
    totalPrice: "258,000円（5回・全身）",
    feature: "麻酔クリーム無料。胸・背中は全身脱毛コースで対応。",
    link: "/reviews/regina-homme/",
  },
];

export default function ChestBackPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/chest-back/" }, { label: "胸毛・背中のメンズ脱毛" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            胸毛・背中のメンズ脱毛おすすめ
            <br className="md:hidden" />
            ｜料金と回数の目安
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            胸毛・背中の脱毛に対応したクリニック5社の料金・回数を比較。部位の特徴や選び方を詳しく解説します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#chest-back-why" className="text-[#2563eb] hover:underline">1. 胸毛・背中の脱毛が人気の理由</a></li>
            <li><a href="#chest-back-parts" className="text-[#2563eb] hover:underline">2. 部位別の特徴</a></li>
            <li><a href="#chest-back-clinics" className="text-[#2563eb] hover:underline">3. おすすめクリニック5選</a></li>
            <li><a href="#chest-back-price" className="text-[#2563eb] hover:underline">4. 料金比較表</a></li>
            <li><a href="#chest-back-sessions" className="text-[#2563eb] hover:underline">5. 必要な回数と期間</a></li>
            <li><a href="#chest-back-tips" className="text-[#2563eb] hover:underline">6. 施術前後の注意点</a></li>
            <li><a href="#chest-back-faq" className="text-[#2563eb] hover:underline">7. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            「プールや温泉で胸毛が恥ずかしい」「背中の毛が気になるけど自分では処理できない」という男性は少なくありません。胸毛や背中の毛は自己処理が難しい部位のため、クリニックでの脱毛が特に効果的です。
          </p>
          <p>
            この記事では、胸毛・背中の脱毛に対応したおすすめクリニック5社を比較し、料金の目安・必要な回数・痛み対策について詳しく解説します。
          </p>
        </div>
      </section>

      {/* 人気の理由 */}
      <section id="chest-back-why" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>胸毛・背中の脱毛が人気の理由</h2>

          <h3>見た目の清潔感アップ</h3>
          <p>
            胸毛は温泉やプール、海水浴の場面で特に気になる部位です。近年は「体毛が薄い方が清潔感がある」と感じる人が増えており、胸毛を脱毛する男性は年々増加しています。
          </p>

          <h3>自己処理が困難な部位</h3>
          <p>
            背中は自分では目視できず、手も届きにくいため自己処理が非常に難しい部位です。カミソリやシェーバーで無理に処理すると肌を傷つける恐れもあります。クリニックでの脱毛なら、看護師が丁寧に施術してくれるため安心です。
          </p>

          <h3>パートナーからの要望</h3>
          <p>
            「パートナーから胸毛が気になると言われた」という理由で脱毛を始める方も多くいます。実際に、女性を対象としたアンケートでは「男性の体毛で気になる部位」として胸毛は上位に挙がることが多いです。
          </p>
        </div>
      </section>

      {/* 部位別の特徴 */}
      <section id="chest-back-parts" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の特徴</h2>

          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>毛の特徴</th>
                  <th>痛み</th>
                  <th>回数目安</th>
                  <th>注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">胸</td>
                  <td>太く濃い毛が生えやすい</td>
                  <td>やや弱い</td>
                  <td>5〜8回</td>
                  <td>乳輪周辺は痛みやや強い</td>
                </tr>
                <tr>
                  <td className="font-bold">腹（ギャランドゥ）</td>
                  <td>へそ周りに集中する傾向</td>
                  <td>弱い</td>
                  <td>5〜8回</td>
                  <td>胸とセットでの施術が効率的</td>
                </tr>
                <tr>
                  <td className="font-bold">背中上部</td>
                  <td>産毛が多い場合も</td>
                  <td>弱い</td>
                  <td>5〜8回</td>
                  <td>産毛には蓄熱式が有効</td>
                </tr>
                <tr>
                  <td className="font-bold">背中下部（腰）</td>
                  <td>太い毛と産毛が混在</td>
                  <td>弱い</td>
                  <td>5〜8回</td>
                  <td>骨盤周辺は毛が密集しやすい</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>産毛が多い部位は脱毛機の選択がポイント</h3>
          <p>
            背中は産毛（細く薄い毛）が多い部位です。従来の熱破壊式レーザーは太い毛に反応しやすい一方、産毛には効果が出にくいことがあります。蓄熱式のダイオードレーザーなら産毛にも効果を発揮しやすいため、背中の脱毛には蓄熱式を導入しているクリニックがおすすめです。
          </p>
          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">脱毛機の種類について詳しく知りたい方</p>
            <Link href="/articles/laser-types/" className="text-sm text-[#2563eb] hover:underline">
              → 医療脱毛のレーザー3種類を比較｜アレキ・ダイオード・ヤグの違い
            </Link>
          </div>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section id="chest-back-clinics" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>胸毛・背中脱毛のおすすめクリニック5選</h2>
          <div className="space-y-6">
            {clinics.map((clinic, i) => (
              <div key={clinic.name} className="bg-white border border-[#cbd5e1] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#2563eb] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e3a5f] m-0">{clinic.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">胸の料金</p>
                    <p className="font-bold text-[#2563eb]">{clinic.chestPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">背中の料金</p>
                    <p className="font-bold text-[#2563eb]">{clinic.backPrice}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">合計目安</p>
                    <p className="font-bold text-[#d97706]">{clinic.totalPrice}</p>
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

      {/* 料金比較 */}
      <section id="chest-back-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>胸毛・背中脱毛の料金比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>胸</th>
                  <th>背中</th>
                  <th>合計目安</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold">{c.name}</td>
                    <td>{c.chestPrice}</td>
                    <td>{c.backPrice}</td>
                    <td className="font-bold text-[#d97706]">{c.totalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の情報です。</p>

          <h3>全身脱毛コースの方がお得な場合が多い</h3>
          <p>
            胸と背中を個別に契約すると高額になりがちです。エミナルクリニックの全身脱毛5回206,800円には胸・背中が含まれているため、他の部位も一緒に脱毛するなら全身コースが圧倒的にお得です。
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
      <section id="chest-back-sessions" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>胸毛・背中の脱毛に必要な回数と期間</h2>
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
                  <td>毛量が30〜50%減少。チラ見えが気にならなくなる</td>
                </tr>
                <tr>
                  <td className="font-bold">かなり減らしたい</td>
                  <td>5〜8回</td>
                  <td>1〜1.5年</td>
                  <td>毛量が60〜80%減少。プールや温泉でも安心</td>
                </tr>
                <tr>
                  <td className="font-bold">ツルツルにしたい</td>
                  <td>8〜10回</td>
                  <td>1.5〜2年</td>
                  <td>ほぼ毛がない状態に</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>胸毛は効果を実感しやすい</h3>
          <p>
            胸毛は比較的太い毛が多いため、医療レーザーが反応しやすく効果を実感しやすい部位です。1回の施術でも「抜け落ちた」と感じる方が多いです。
          </p>

          <h3>背中の産毛は回数がかかる場合も</h3>
          <p>
            背中は産毛が多い部位のため、熱破壊式レーザーだけでは回数がかかることがあります。蓄熱式の脱毛機を併用しているクリニックを選ぶと効率的です。
          </p>
        </div>
      </section>

      {/* 施術前後の注意点 */}
      <section id="chest-back-tips" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>施術前後の注意点</h2>

          <h3>施術前の準備</h3>
          <ul>
            <li><strong>シェービング</strong>：胸は前日までに自己処理が必要です。背中は看護師が対応してくれるクリニックが多いです。</li>
            <li><strong>日焼け対策</strong>：日焼けした肌にはレーザーを照射できない場合があります。施術前は日焼けを避けましょう。</li>
            <li><strong>保湿</strong>：肌が乾燥していると痛みが強くなり、施術効果も落ちる場合があります。日頃から保湿を心がけましょう。</li>
          </ul>

          <h3>施術後のケア</h3>
          <ul>
            <li><strong>入浴</strong>：施術当日はシャワーのみ。翌日から入浴OK。</li>
            <li><strong>運動</strong>：施術当日〜翌日は激しい運動を避ける。汗をかくと肌トラブルの原因に。</li>
            <li><strong>保湿・日焼け止め</strong>：施術後の肌は敏感になっているため、しっかり保湿し、日焼け止めで紫外線対策を。</li>
            <li><strong>赤み・腫れ</strong>：施術後に軽い赤みや腫れが出ることがありますが、通常2〜3日で治まります。</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="chest-back-faq" className="bg-[#f8fafc] py-12">
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
          <h2 className="text-2xl font-bold text-white mb-4">胸毛・背中の脱毛を始めよう</h2>
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
