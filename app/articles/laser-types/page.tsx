import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "医療脱毛のレーザー3種類を比較｜アレキ・ダイオード・ヤグの違い",
  description:
    "医療脱毛で使われるレーザー3種類（アレキサンドライト・ダイオード・ヤグ）の特徴・メリット・デメリットを比較。蓄熱式と熱破壊式の違いや、自分に合ったレーザーの選び方も解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/laser-types/" },
  openGraph: {
    title: "医療脱毛のレーザー3種類を比較｜アレキ・ダイオード・ヤグの違い",
    description: "医療脱毛のレーザー3種類を特徴・痛み・適した肌質で比較。蓄熱式と熱破壊式の違いも解説。",
    url: "https://mens-datsumou-lab.pages.dev/articles/laser-types/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "医療脱毛のレーザー3種類を比較｜アレキ・ダイオード・ヤグの違い",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/laser-types/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "アレキサンドライトレーザーとダイオードレーザー、どちらがおすすめ？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "太く濃い毛にはアレキサンドライトレーザーが効果的です。産毛や細い毛にはダイオードレーザー（蓄熱式）が適しています。肌色が標準的で毛が濃い方はアレキ、日焼け肌や痛みが心配な方はダイオードがおすすめです。",
      },
    },
    {
      "@type": "Question",
      name: "ヤグレーザーはどんな場合に使われますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ヤグレーザーは波長が最も長く、毛根が深い太い毛に効果的です。ヒゲやVIOなど毛根が深い部位に適しています。また、日焼け肌や色黒の方にも照射可能ですが、痛みが最も強いレーザーでもあります。",
      },
    },
    {
      "@type": "Question",
      name: "蓄熱式と熱破壊式はどう違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "熱破壊式は高出力のレーザーを一発ずつ照射し、毛根を直接破壊します。効果は高いですが痛みも強めです。蓄熱式は低出力のレーザーを連続照射し、バルジ領域（毛の成長を促す部分）に熱を蓄積させて脱毛します。痛みが少なく、産毛にも効果がありますが、効果実感までやや時間がかかる場合があります。",
      },
    },
    {
      "@type": "Question",
      name: "自分に合ったレーザーを選ぶにはどうすればいい？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "自分でレーザーを指定する必要はありません。多くのクリニックでは、肌質・毛質・部位に合わせて医師や看護師が最適なレーザーを選択してくれます。複数種類の脱毛機を導入しているクリニックを選ぶと、より柔軟な対応が期待できます。",
      },
    },
    {
      "@type": "Question",
      name: "光脱毛（サロン脱毛）のレーザーとは何が違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "光脱毛はレーザーではなく、IPL（Intense Pulsed Light）という幅広い波長の光を使用します。医療レーザーより出力が低いため、永久脱毛の効果はなく、減毛・抑毛にとどまります。その分痛みは少なく、資格不要でサロンでも扱えます。",
      },
    },
  ],
};

const laserTypes = [
  {
    name: "アレキサンドライトレーザー",
    wavelength: "755nm",
    method: "熱破壊式",
    target: "メラニン色素に強く反応",
    pain: "中程度",
    skin: "標準〜色白の肌向き",
    hair: "太く濃い毛に最適",
    pros: ["太い毛への効果が高い", "美肌効果も期待できる", "施術スピードが速い"],
    cons: ["日焼け肌には照射不可", "産毛には効果が出にくい", "色黒の方には不向き"],
    machines: "ジェントルレーズ、ジェントルマックスプロ",
  },
  {
    name: "ダイオードレーザー",
    wavelength: "800〜940nm",
    method: "蓄熱式 / 熱破壊式",
    target: "バルジ領域に作用",
    pain: "弱い（蓄熱式）",
    skin: "幅広い肌色に対応",
    hair: "太い毛から産毛まで対応",
    pros: ["痛みが少ない（蓄熱式）", "産毛にも効果がある", "日焼け肌にも対応可能"],
    cons: ["効果実感までやや時間がかかる場合あり", "蓄熱式は太い毛への即効性がやや低い"],
    machines: "メディオスターNeXT PRO、ソプラノチタニウム、ライトシェアデュエット",
  },
  {
    name: "ヤグレーザー",
    wavelength: "1,064nm",
    method: "熱破壊式",
    target: "毛根の深い部分に到達",
    pain: "強い",
    skin: "日焼け肌・色黒でもOK",
    hair: "根深い太い毛に最適",
    pros: ["毛根が深い毛に効果的", "日焼け肌にも照射可能", "ヒゲやVIOに最適"],
    cons: ["痛みが最も強い", "産毛には効果が出にくい", "施術に時間がかかる"],
    machines: "ジェントルマックスプロ（切替式）、ジェントルヤグプロ",
  },
];

export default function LaserTypesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/laser-types/" }, { label: "レーザー3種類比較" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            医療脱毛のレーザー3種類を比較
            <br className="md:hidden" />
            ｜アレキ・ダイオード・ヤグの違い
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            医療脱毛で使われる3種類のレーザーの特徴を徹底比較。蓄熱式と熱破壊式の違いや、自分に合ったレーザーの選び方を解説します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#laser-overview" className="text-[#2563eb] hover:underline">1. 医療脱毛レーザーの基礎知識</a></li>
            <li><a href="#laser-three" className="text-[#2563eb] hover:underline">2. 3種類のレーザーの特徴</a></li>
            <li><a href="#laser-comparison" className="text-[#2563eb] hover:underline">3. レーザー比較表</a></li>
            <li><a href="#laser-method" className="text-[#2563eb] hover:underline">4. 蓄熱式と熱破壊式の違い</a></li>
            <li><a href="#laser-parts" className="text-[#2563eb] hover:underline">5. 部位別のおすすめレーザー</a></li>
            <li><a href="#laser-choose" className="text-[#2563eb] hover:underline">6. クリニック別の導入脱毛機</a></li>
            <li><a href="#laser-faq" className="text-[#2563eb] hover:underline">7. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            医療脱毛を検討する際、「どのレーザーが自分に合っているのか」「蓄熱式と熱破壊式はどう違うのか」と疑問に思う方は多いでしょう。レーザーの種類によって効果や痛み、対応できる肌色が異なるため、基礎知識を理解しておくことが大切です。
          </p>
          <p>
            この記事では、医療脱毛で使われる3種類のレーザー（アレキサンドライト・ダイオード・ヤグ）の特徴を比較し、蓄熱式と熱破壊式の違い、部位別のおすすめレーザーを解説します。
          </p>
        </div>
      </section>

      {/* 基礎知識 */}
      <section id="laser-overview" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>医療脱毛レーザーの基礎知識</h2>

          <h3>レーザー脱毛の仕組み</h3>
          <p>
            医療レーザー脱毛は、特定の波長のレーザー光を毛のメラニン色素に反応させ、その熱で毛根の組織（毛母細胞やバルジ領域）を破壊する仕組みです。毛根の組織が破壊されると、その毛穴からは毛が再生しなくなります。
          </p>

          <h3>波長の違いが効果の違い</h3>
          <p>
            レーザーの種類によって波長が異なり、波長が長いほど皮膚の深くまで到達します。波長が短いレーザーはメラニンへの反応が強く、太い毛に効果的ですが、日焼け肌には使いにくいです。波長が長いレーザーは皮膚の深くまで届くため、根深い毛に効果的ですが、痛みが強くなる傾向があります。
          </p>

          <h3>医療脱毛と光脱毛の違い</h3>
          <p>
            医療脱毛は医療機関のみで行える施術で、高出力のレーザーを使用するため永久脱毛が可能です。一方、サロンで行う光脱毛（IPL）は出力が低く、減毛・抑毛効果にとどまります。
          </p>
          <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">光脱毛について詳しくはこちら</p>
            <Link href="/articles/light-hair-removal/" className="text-sm text-[#2563eb] hover:underline">
              → 光脱毛（サロン脱毛）の仕組みと効果｜医療脱毛との違い
            </Link>
          </div>
        </div>
      </section>

      {/* 3種類の特徴 */}
      <section id="laser-three" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>3種類のレーザーの特徴</h2>
          <div className="space-y-8">
            {laserTypes.map((laser, i) => (
              <div key={laser.name} className="bg-white border border-[#cbd5e1] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#2563eb] text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e3a5f] m-0">{laser.name}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">波長</p>
                    <p className="font-bold text-[#2563eb]">{laser.wavelength}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">照射方式</p>
                    <p className="font-bold">{laser.method}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">痛み</p>
                    <p className="font-bold">{laser.pain}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">対応肌色</p>
                    <p className="font-bold text-sm">{laser.skin}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2"><strong>得意な毛質：</strong>{laser.hair}</p>
                <p className="text-sm text-gray-600 mb-4"><strong>代表的な脱毛機：</strong>{laser.machines}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-700 mb-2">メリット</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {laser.pros.map((pro, j) => (
                        <li key={j} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">+</span>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-red-600 mb-2">デメリット</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {laser.cons.map((con, j) => (
                        <li key={j} className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 比較表 */}
      <section id="laser-comparison" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>レーザー3種類 比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>項目</th>
                  <th>アレキサンドライト</th>
                  <th>ダイオード</th>
                  <th>ヤグ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">波長</td>
                  <td>755nm</td>
                  <td>800〜940nm</td>
                  <td>1,064nm</td>
                </tr>
                <tr>
                  <td className="font-bold">照射方式</td>
                  <td>熱破壊式</td>
                  <td>蓄熱式/熱破壊式</td>
                  <td>熱破壊式</td>
                </tr>
                <tr>
                  <td className="font-bold">痛み</td>
                  <td>中程度</td>
                  <td>弱い</td>
                  <td>強い</td>
                </tr>
                <tr>
                  <td className="font-bold">太い毛</td>
                  <td>◎</td>
                  <td>○</td>
                  <td>◎</td>
                </tr>
                <tr>
                  <td className="font-bold">産毛</td>
                  <td>△</td>
                  <td>◎（蓄熱式）</td>
                  <td>△</td>
                </tr>
                <tr>
                  <td className="font-bold">日焼け肌</td>
                  <td>×</td>
                  <td>○</td>
                  <td>○</td>
                </tr>
                <tr>
                  <td className="font-bold">色黒肌</td>
                  <td>×</td>
                  <td>○</td>
                  <td>◎</td>
                </tr>
                <tr>
                  <td className="font-bold">美肌効果</td>
                  <td>◎</td>
                  <td>△</td>
                  <td>△</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 蓄熱式と熱破壊式 */}
      <section id="laser-method" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>蓄熱式と熱破壊式の違い</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5">
              <h3 className="text-[#1e3a5f] font-bold mb-3">熱破壊式（ショット式）</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>仕組み</strong>：高出力のレーザーを1発ずつ照射し、毛根の毛母細胞を直接破壊</li>
                <li><strong>痛み</strong>：強め（ゴムで弾かれるような痛み）</li>
                <li><strong>効果</strong>：施術後1〜2週間で毛が抜け落ちる（ポップアップ現象）</li>
                <li><strong>得意</strong>：太く濃い毛</li>
                <li><strong>苦手</strong>：産毛、日焼け肌</li>
              </ul>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-5">
              <h3 className="text-[#1e3a5f] font-bold mb-3">蓄熱式（SHR式）</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><strong>仕組み</strong>：低出力のレーザーを高速連射し、バルジ領域に熱を蓄積させて脱毛</li>
                <li><strong>痛み</strong>：弱め（温かい感覚に近い）</li>
                <li><strong>効果</strong>：徐々に毛が細くなり、2〜4週間かけて自然に抜ける</li>
                <li><strong>得意</strong>：産毛、日焼け肌、痛みに弱い方</li>
                <li><strong>苦手</strong>：太い毛への即効性はやや低い</li>
              </ul>
            </div>
          </div>

          <h3>どちらを選ぶべき？</h3>
          <p>
            結論として、太くて濃い毛（ヒゲ・VIO）には熱破壊式、産毛が多い部位（背中・二の腕）や痛みが心配な方には蓄熱式がおすすめです。ただし、多くのクリニックではカウンセリング時に肌質や毛質を見て最適な方式を選んでくれるため、自分で選ぶ必要はありません。
          </p>
          <p>
            最も良いのは、熱破壊式と蓄熱式の両方を導入しているクリニックを選ぶことです。部位や施術の進行度に応じて使い分けてもらえます。
          </p>
        </div>
      </section>

      {/* 部位別おすすめ */}
      <section id="laser-parts" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別のおすすめレーザー</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>おすすめレーザー</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ</td>
                  <td>ヤグ / アレキ</td>
                  <td>毛根が深く太いため、深達度の高いレーザーが効果的</td>
                </tr>
                <tr>
                  <td className="font-bold">VIO</td>
                  <td>ヤグ / ダイオード</td>
                  <td>毛根が深い。痛み重視ならダイオード蓄熱式</td>
                </tr>
                <tr>
                  <td className="font-bold">腕・足</td>
                  <td>アレキ / ダイオード</td>
                  <td>太い毛にも産毛にも対応しやすい</td>
                </tr>
                <tr>
                  <td className="font-bold">胸・腹</td>
                  <td>アレキ / ダイオード</td>
                  <td>太い毛が多いためアレキが有効。乳輪周辺は蓄熱式で</td>
                </tr>
                <tr>
                  <td className="font-bold">背中</td>
                  <td>ダイオード（蓄熱式）</td>
                  <td>産毛が多いため蓄熱式が最適</td>
                </tr>
                <tr>
                  <td className="font-bold">ワキ</td>
                  <td>アレキ / ヤグ</td>
                  <td>太い毛が多く、メラニン反応の強いレーザーが効果的</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* クリニック別 */}
      <section id="laser-choose" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>クリニック別の導入脱毛機</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>導入脱毛機</th>
                  <th>レーザー種類</th>
                  <th>照射方式</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ゴリラクリニック</td>
                  <td>5種類（メディオスター等）</td>
                  <td>ダイオード/ヤグ</td>
                  <td>蓄熱式/熱破壊式</td>
                </tr>
                <tr>
                  <td className="font-bold">メンズリゼ</td>
                  <td>3種類</td>
                  <td>ダイオード/ヤグ</td>
                  <td>蓄熱式/熱破壊式</td>
                </tr>
                <tr>
                  <td className="font-bold">レジーナクリニックオム</td>
                  <td>2種類</td>
                  <td>ダイオード/アレキ+ヤグ</td>
                  <td>蓄熱式/熱破壊式</td>
                </tr>
                <tr>
                  <td className="font-bold">エミナルクリニック</td>
                  <td>クリスタルプロ</td>
                  <td>ダイオード</td>
                  <td>蓄熱式/熱破壊式</td>
                </tr>
                <tr>
                  <td className="font-bold">湘南美容クリニック</td>
                  <td>複数種類</td>
                  <td>アレキ/ダイオード</td>
                  <td>熱破壊式/蓄熱式</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>複数の脱毛機を導入しているクリニックがおすすめ</h3>
          <p>
            ゴリラクリニックは業界最多クラスの5種類の脱毛機を導入しており、肌質・毛質・部位に応じて最適な脱毛機を選択してくれます。メンズリゼも3種類の脱毛機を導入しており柔軟な対応が可能です。
          </p>
          <p>
            特にヒゲのように太い毛と、背中のように産毛が多い部位の両方を脱毛する場合は、複数種類のレーザーを使い分けられるクリニックが有利です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="laser-faq" className="bg-[#f8fafc] py-12">
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
          <h2 className="text-2xl font-bold text-white mb-4">自分に合ったレーザーで脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">
            無料カウンセリングで肌質・毛質をチェックし、最適なレーザーを提案してもらいましょう。
          </p>
          <Link href="/ranking/" className="inline-block bg-white text-[#1e3a5f] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            おすすめクリニック比較を見る
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
