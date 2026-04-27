import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズ全身脱毛おすすめ5選｜料金と回数の目安",
  description:
    "メンズ全身脱毛おすすめクリニック5選の料金・回数を徹底比較。エミナルクリニック・メンズリゼ・ゴリラクリニックなどの全身脱毛コースの特徴と選び方を解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/full-body/" },
};

const clinics = [
  {
    name: "エミナルクリニック（メンズ）",
    price: "206,800円（5回）",
    perSession: "41,360円",
    includes: "顔・VIO除く",
    withFace: "260,400円",
    withVIO: "260,400円",
    feature: "業界最安水準の全身脱毛。月々4,790円〜の分割払い対応。蓄熱式脱毛機で施術時間も約60分と短い。",
    link: "/reviews/eminal-mens/",
  },
  {
    name: "レジーナクリニックオム",
    price: "258,000円（5回）",
    perSession: "51,600円",
    includes: "顔・VIO除く",
    withFace: "308,000円",
    withVIO: "333,000円",
    feature: "麻酔クリーム無料で痛みに配慮。平日21時まで営業で仕事帰りにも通いやすい。",
    link: "/reviews/regina-homme/",
  },
  {
    name: "メンズリゼ",
    price: "269,800円（5回）",
    perSession: "53,960円",
    includes: "顔・VIO除く",
    withFace: "349,800円",
    withVIO: "349,800円",
    feature: "コース終了後は1回半額で追加照射可能。学割20%OFF対応。3種の脱毛機を使い分け。",
    link: "/reviews/mens-rize/",
  },
  {
    name: "湘南美容クリニック（メンズ）",
    price: "293,330円（6回）",
    perSession: "48,888円",
    includes: "顔・VIO含む",
    withFace: "-",
    withVIO: "-",
    feature: "パーフェクト全身コースは顔・VIO含む。全国100院以上で通いやすい。部位別の都度払いも可能。",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "ゴリラクリニック",
    price: "354,800円（5回）",
    perSession: "70,960円",
    includes: "顔・VIO除く",
    withFace: "要問合せ",
    withVIO: "要問合せ",
    feature: "男性専門クリニック。5種の脱毛機で肌質に合わせた施術。月々8,700円〜の分割対応。",
    link: "/reviews/gorilla/",
  },
];

export default function FullBodyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "メンズ全身脱毛おすすめ5選" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            メンズ全身脱毛おすすめ5選
            <br className="md:hidden" />
            ｜料金と回数の目安
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            全身脱毛の料金比較から、必要な回数・期間、クリニック選びのポイントまで詳しく解説します。
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#fullbody-clinics" className="text-accent hover:underline">1. メンズ全身脱毛おすすめ5選</a></li>
            <li><a href="#fullbody-price" className="text-accent hover:underline">2. 全身脱毛の料金比較表</a></li>
            <li><a href="#fullbody-sessions" className="text-accent hover:underline">3. 全身脱毛に必要な回数と期間</a></li>
            <li><a href="#fullbody-range" className="text-accent hover:underline">4. 全身脱毛の施術範囲</a></li>
            <li><a href="#fullbody-tips" className="text-accent hover:underline">5. 全身脱毛クリニック選びのコツ</a></li>
            <li><a href="#fullbody-faq" className="text-accent hover:underline">6. よくある質問</a></li>
          </ol>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            近年、メンズの全身脱毛需要が急増しています。清潔感の向上、ムダ毛処理の手間削減、スポーツや仕事での見た目の改善など、理由はさまざまです。
          </p>
          <p>
            全身脱毛は部位別に通うよりもトータルコストが安くなることが多く、効率的に全身のムダ毛をケアできます。この記事では、メンズ全身脱毛でおすすめのクリニック5社を料金・特徴で比較します。
          </p>
        </div>
      </section>

      <section id="fullbody-clinics" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メンズ全身脱毛おすすめ5選</h2>
          <div className="space-y-6">
            {clinics.map((clinic, i) => (
              <div key={clinic.name} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">{i + 1}</span>
                  <h3 className="text-lg font-bold text-primary m-0">{clinic.name}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">全身脱毛料金</p>
                    <p className="font-bold text-accent text-sm">{clinic.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">1回あたり</p>
                    <p className="font-bold text-sm">{clinic.perSession}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">含まれる範囲</p>
                    <p className="font-bold text-sm">{clinic.includes}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">顔付き</p>
                    <p className="font-bold text-sm">{clinic.withFace}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{clinic.feature}</p>
                <Link href={clinic.link} className="text-accent text-sm font-bold hover:underline">
                  口コミ・詳細を見る →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fullbody-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>全身脱毛の料金比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>全身（顔VIO除く）</th>
                  <th>全身+顔</th>
                  <th>全身+VIO</th>
                  <th>回数</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold">{c.name}</td>
                    <td className={c.name.includes("エミナル") ? "text-accent font-bold" : ""}>{c.price.split("（")[0]}</td>
                    <td>{c.withFace}</td>
                    <td>{c.withVIO}</td>
                    <td>{c.price.match(/\d+回/)?.[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の情報です。湘南美容クリニックのパーフェクト全身は顔・VIO含む。</p>
        </div>
      </section>

      <section id="fullbody-sessions" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>全身脱毛に必要な回数と期間</h2>
          <p>
            全身脱毛はヒゲと比べると毛が細い部位が多いため、比較的少ない回数で効果を実感できます。
          </p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>目標</th>
                  <th>医療脱毛</th>
                  <th>サロン脱毛</th>
                  <th>期間目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">毛を薄くしたい</td>
                  <td>3〜5回</td>
                  <td>6〜10回</td>
                  <td>6ヶ月〜1年</td>
                </tr>
                <tr>
                  <td className="font-bold">かなり減らしたい</td>
                  <td>5〜8回</td>
                  <td>10〜15回</td>
                  <td>1〜1.5年</td>
                </tr>
                <tr>
                  <td className="font-bold">ツルツルにしたい</td>
                  <td>8〜10回</td>
                  <td>15〜20回以上</td>
                  <td>1.5〜2年</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>部位による差</h3>
          <ul>
            <li><strong>腕・脚</strong>：比較的毛が細く、5回程度で効果を実感する方が多い</li>
            <li><strong>胸・腹</strong>：毛量の個人差が大きい。3〜5回で目立たなくなるケースも</li>
            <li><strong>背中</strong>：自分では見えにくい部位。産毛が多く、蓄熱式脱毛機が効果的</li>
            <li><strong>VIO</strong>：毛が太く密集しているため、8〜10回程度必要な場合も</li>
          </ul>
        </div>
      </section>

      <section id="fullbody-range" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>全身脱毛の施術範囲</h2>
          <p>
            「全身脱毛」と言っても、クリニックによって含まれる部位が異なります。事前に確認しておきましょう。
          </p>
          <h3>一般的な全身脱毛の範囲</h3>
          <ul>
            <li>胸・腹・背中・腰</li>
            <li>両腕（上腕・前腕）・両手の甲と指</li>
            <li>両脚（太もも・ひざ下）・両足の甲と指</li>
            <li>ワキ</li>
          </ul>
          <h3>含まれないことが多い部位</h3>
          <ul>
            <li><strong>顔（ヒゲ）</strong>：多くのクリニックでは別コース。顔付きプランは追加料金。</li>
            <li><strong>VIO</strong>：デリケートゾーン。含む/含まないはクリニックにより異なる。</li>
            <li><strong>うなじ・首</strong>：ヒゲ脱毛の範囲に含まれる場合と、全身脱毛に含まれる場合がある。</li>
          </ul>
          <p>
            湘南美容クリニックの「パーフェクト全身コース」は顔・VIOを含む全部位がセットになっており、すべてをまとめて脱毛したい方にはお得です。
          </p>
        </div>
      </section>

      <section id="fullbody-tips" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>全身脱毛クリニック選びのコツ</h2>
          <h3>1. 含まれる部位を確認</h3>
          <p>
            顔やVIOが含まれるかどうかで総額が大きく変わります。自分が脱毛したい部位を洗い出してから比較しましょう。
          </p>
          <h3>2. 追加照射の料金を確認</h3>
          <p>
            5回で足りない場合の追加照射料金も重要です。メンズリゼはコース後1回半額、ゴリラクリニックはヒゲ脱毛で3年間100円/回のアフター保証があります。
          </p>
          <h3>3. 施術の分割回数</h3>
          <p>
            全身脱毛は1回の施術で全部位を照射する場合と、2〜3回に分けて通う場合があります。1回で全部位照射してくれるクリニックの方が通院回数が少なくて済みます。
          </p>
          <h3>4. 月々の支払いプラン</h3>
          <p>
            全身脱毛は一括では高額になるため、分割払いの条件も確認しましょう。エミナルクリニックは月々4,790円〜、ゴリラクリニックは月々8,700円〜で全身脱毛が可能です。
          </p>
        </div>
      </section>

      <section id="fullbody-faq" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "全身脱毛1回の施術時間はどのくらい？", a: "全身（顔・VIO除く）で60〜120分程度です。エミナルクリニックは連続照射式で約60分と短め。着替えや冷却の時間を含めると、院の滞在時間は90〜150分程度です。" },
              { q: "全身脱毛は何回で完了しますか？", a: "医療脱毛の場合、5〜8回が目安です。毛が薄い部位は3回程度で目立たなくなりますが、VIOなど毛が太い部位は8〜10回必要なこともあります。" },
              { q: "全身脱毛中に日焼けしても大丈夫？", a: "強い日焼けは施術できない場合があります。蓄熱式脱毛機なら軽い日焼けでも対応可能ですが、施術前後は日焼け対策を心がけましょう。" },
              { q: "全身脱毛の前に自己処理は必要ですか？", a: "はい、施術前日〜当日に電気シェーバーでの自己処理が必要です。剃り残しがあるとシェービング代がかかるクリニックもあります。背中など手の届かない部位はスタッフが対応してくれる場合が多いです。" },
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
          <h2 className="text-2xl font-bold text-white mb-4">全身脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで自分に合ったプランを相談してみましょう。</p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100">おすすめクリニック比較を見る</Link>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。最新の料金は各公式サイトをご確認ください。※料金はすべて税込表記です。※効果には個人差があります。</p>
        </div>
      </section>
    </>
  );
}
