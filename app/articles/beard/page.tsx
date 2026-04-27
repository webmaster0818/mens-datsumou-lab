import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヒゲ脱毛おすすめクリニック6選｜料金・回数・痛みを比較",
  description:
    "メンズヒゲ脱毛おすすめクリニック6社の料金・回数・痛み対策を徹底比較。湘南美容・ゴリラクリニック・メンズリゼなどの特徴、ヒゲ脱毛の回数目安、痛みへの対処法も解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/beard/" },
};

const clinics = [
  {
    name: "湘南美容クリニック（メンズ）",
    price: "16,800円（6回）",
    pricePerSession: "2,800円",
    sessions: "6回",
    pain: "笑気麻酔対応（2,200円）",
    feature: "業界最安級。全国100院以上で通いやすい。ヒゲ3部位6回16,800円は破格の安さ。",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "エミナルクリニック（メンズ）",
    price: "38,500円（5回）",
    pricePerSession: "7,700円",
    sessions: "5回",
    pain: "蓄熱式で痛み軽減",
    feature: "蓄熱式脱毛機で痛みが少ない。月々1,030円〜の分割にも対応。",
    link: "/reviews/eminal-mens/",
  },
  {
    name: "ゴリラクリニック",
    price: "39,800円（6回）",
    pricePerSession: "6,633円",
    sessions: "6回",
    pain: "笑気麻酔・クリーム（各3,300円）",
    feature: "男性専門。コース終了後3年間は1回100円で追加照射が可能。",
    link: "/reviews/gorilla/",
  },
  {
    name: "メンズリゼ",
    price: "39,800円（5回）",
    pricePerSession: "7,960円",
    sessions: "5回",
    pain: "笑気麻酔・クリーム（各3,300円）",
    feature: "コース後1回半額で追加照射。学割20%OFF・ペア割10%OFFが魅力。",
    link: "/reviews/mens-rize/",
  },
  {
    name: "レジーナクリニックオム",
    price: "44,600円（6回）",
    pricePerSession: "7,433円",
    sessions: "6回",
    pain: "麻酔クリーム無料",
    feature: "麻酔クリームが無料。平日21時まで営業で仕事帰りにも通いやすい。",
    link: "/reviews/regina-homme/",
  },
  {
    name: "メンズクリア",
    price: "110,660円（8回）",
    pricePerSession: "13,833円",
    sessions: "8回",
    pain: "光脱毛で痛みが少ない",
    feature: "サロン脱毛で痛みが少ない。通い放題プラン（月額3,000円〜）もあり。",
    link: "/reviews/mens-clear/",
  },
];

export default function BeardPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "ヒゲ脱毛おすすめクリニック6選" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ヒゲ脱毛おすすめクリニック6選
            <br className="md:hidden" />
            ｜料金・回数・痛みを比較
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            メンズヒゲ脱毛で人気のクリニック・サロン6社を徹底比較。料金、必要な回数、痛み対策を詳しく解説します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#beard-clinics" className="text-accent hover:underline">1. ヒゲ脱毛おすすめクリニック6選</a></li>
            <li><a href="#beard-price" className="text-accent hover:underline">2. ヒゲ脱毛の料金比較表</a></li>
            <li><a href="#beard-sessions" className="text-accent hover:underline">3. ヒゲ脱毛に必要な回数と期間</a></li>
            <li><a href="#beard-pain" className="text-accent hover:underline">4. ヒゲ脱毛の痛みと対策</a></li>
            <li><a href="#beard-areas" className="text-accent hover:underline">5. ヒゲ脱毛の対象部位</a></li>
            <li><a href="#beard-faq" className="text-accent hover:underline">6. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            毎朝のヒゲ剃りにうんざりしている方、青ヒゲや肌荒れに悩んでいる方にとって、ヒゲ脱毛は有効な解決策です。しかし「どのクリニックを選べばいいのかわからない」「料金や回数の目安が知りたい」という方も多いでしょう。
          </p>
          <p>
            この記事では、ヒゲ脱毛で人気のクリニック・サロン6社の料金を比較し、必要な回数の目安や痛みへの対処法を詳しく解説します。
          </p>
        </div>
      </section>

      {/* クリニック一覧 */}
      <section id="beard-clinics" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛おすすめクリニック6選</h2>
          <div className="space-y-6">
            {clinics.map((clinic, i) => (
              <div key={clinic.name} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary m-0">{clinic.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ヒゲ脱毛料金</p>
                    <p className="font-bold text-accent">{clinic.price}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">1回あたり</p>
                    <p className="font-bold">{clinic.pricePerSession}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">痛み対策</p>
                    <p className="font-bold text-sm">{clinic.pain}</p>
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

      {/* 料金比較表 */}
      <section id="beard-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛の料金比較表</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>コース料金</th>
                  <th>回数</th>
                  <th>1回あたり</th>
                  <th>コース後の追加</th>
                </tr>
              </thead>
              <tbody>
                {clinics.map((c) => (
                  <tr key={c.name}>
                    <td className="font-bold">{c.name}</td>
                    <td>{c.price.split("（")[0]}</td>
                    <td>{c.sessions}</td>
                    <td>{c.pricePerSession}</td>
                    <td className="text-sm">
                      {c.name.includes("ゴリラ") && "3年間1回100円"}
                      {c.name.includes("リゼ") && "1回半額"}
                      {c.name.includes("レジーナ") && "1回半額"}
                      {c.name.includes("湘南") && "都度払い"}
                      {c.name.includes("エミナル") && "要相談"}
                      {c.name.includes("クリア") && "通い放題あり"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の情報です。</p>
        </div>
      </section>

      {/* 回数と期間 */}
      <section id="beard-sessions" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛に必要な回数と期間</h2>
          <p>
            ヒゲ脱毛の必要回数は、目指すゴールによって大きく異なります。以下は医療レーザー脱毛の場合の目安です。
          </p>

          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>目標</th>
                  <th>必要回数（目安）</th>
                  <th>期間（目安）</th>
                  <th>効果のイメージ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲを薄くしたい</td>
                  <td>3〜5回</td>
                  <td>6ヶ月〜1年</td>
                  <td>毛量が30〜50%減少。ヒゲ剃りが楽になる</td>
                </tr>
                <tr>
                  <td className="font-bold">かなり減らしたい</td>
                  <td>5〜8回</td>
                  <td>1〜1.5年</td>
                  <td>毛量が50〜80%減少。青ヒゲが目立たなくなる</td>
                </tr>
                <tr>
                  <td className="font-bold">ツルツルにしたい</td>
                  <td>10〜15回</td>
                  <td>1.5〜2.5年</td>
                  <td>ほぼ毛がなくなる。ヒゲ剃りがほぼ不要に</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>回数が多くなるケース</h3>
          <ul>
            <li>ヒゲが濃い・太い方は回数が多くなる傾向あり</li>
            <li>アゴ下や首は毛が密集しているため、効果が出にくい部位</li>
            <li>色白で毛が濃い方は、逆にレーザーが反応しやすく効果が出やすい</li>
          </ul>

          <h3>サロン脱毛（光脱毛）の場合</h3>
          <p>
            サロン脱毛は医療レーザーより出力が低いため、同程度の効果を得るには医療脱毛の1.5〜2倍の回数が必要です。ツルツルを目指す場合は20〜25回程度、2〜3年かかることもあります。
          </p>
        </div>
      </section>

      {/* 痛みと対策 */}
      <section id="beard-pain" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛の痛みと対策</h2>
          <p>
            ヒゲは体の中でも特に毛が太く密集している部位のため、脱毛の痛みが最も強い部位の一つです。よく「輪ゴムで弾かれるような痛み」と表現されますが、鼻下やアゴ周辺は涙が出るほど痛いと感じる方もいます。
          </p>

          <h3>痛みを軽減する方法</h3>
          <ul>
            <li><strong>麻酔を使用する</strong>：麻酔クリームや笑気麻酔を使えば、痛みを大幅に軽減できます。レジーナクリニックオムなら麻酔クリーム無料。</li>
            <li><strong>蓄熱式脱毛機を選ぶ</strong>：蓄熱式は低温でじわじわ照射するため、従来の熱破壊式より痛みが少ないです。</li>
            <li><strong>日焼けを避ける</strong>：日焼けした肌はメラニンが多く、レーザーが反応して痛みが増します。施術前後は日焼け対策を。</li>
            <li><strong>保湿を心がける</strong>：乾燥した肌はバリア機能が低下し、痛みを感じやすくなります。日頃からしっかり保湿を。</li>
            <li><strong>施術を重ねると痛みは減る</strong>：回数を重ねるごとに毛が減り、痛みも軽減されていきます。</li>
          </ul>

          <h3>痛みに配慮したクリニック選び</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <p className="font-bold text-primary mb-1">痛みが最も心配な方</p>
              <p className="text-sm text-gray-600">レジーナクリニックオム（麻酔無料）</p>
            </div>
            <div className="card">
              <p className="font-bold text-primary mb-1">そもそも痛くない方がいい</p>
              <p className="text-sm text-gray-600">メンズクリア（光脱毛で痛み少）</p>
            </div>
          </div>
        </div>
      </section>

      {/* 対象部位 */}
      <section id="beard-areas" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛の対象部位</h2>
          <p>
            「ヒゲ脱毛」と一口に言っても、実はクリニックによって対象部位が異なります。基本的には以下の6部位に分かれます。
          </p>
          <ul>
            <li><strong>鼻下</strong>：最もヒゲ剃りの頻度が高い部位。痛みも強い。</li>
            <li><strong>アゴ</strong>：毛量が多く、脱毛効果を実感しやすい。</li>
            <li><strong>アゴ下</strong>：毛が密集しており、回数がかかりやすい。</li>
            <li><strong>ほほ</strong>：面積が広いため、青ヒゲが気になる方に人気。</li>
            <li><strong>もみあげ</strong>：自然なラインに整えたい方向け。</li>
            <li><strong>首</strong>：剃り残しが目立ちやすい部位。</li>
          </ul>
          <p>
            多くのクリニックでは「ヒゲ3部位（鼻下・アゴ・アゴ下）」をベースプランとして設定し、ほほ・もみあげ・首はオプションで追加する形式です。自分がどの部位を脱毛したいか明確にしてからクリニックを選びましょう。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="beard-faq" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "ヒゲ脱毛をすると二度と生えてこなくなりますか？", a: "医療レーザー脱毛であれば、毛根の組織を破壊するため、施術した毛穴からは基本的に毛が再生しません。ただし、ホルモンバランスの変化などで新たな毛穴から生えてくる可能性はゼロではありません。" },
              { q: "ヒゲ脱毛のデザインはできますか？", a: "はい、可能です。全部ツルツルにするだけでなく、「アゴヒゲだけ残す」「全体的に薄くする」「好みの形にデザインする」など、カウンセリング時に希望を伝えましょう。" },
              { q: "ヒゲ脱毛中にヒゲは剃っていいですか？", a: "電気シェーバーでの剃毛はOKです。ただし、毛抜きやワックスで毛根から抜くのはNGです。レーザーが毛根のメラニンに反応するため、抜いてしまうと効果がなくなります。" },
              { q: "ヒゲ脱毛の施術時間はどのくらい？", a: "ヒゲ3部位の場合、施術時間は15〜30分程度です。麻酔の塗布時間を含めても1時間以内に終わることがほとんどです。" },
            ].map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q">Q. {faq.q}</div>
                <div className="faq-a">A. {faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">ヒゲ脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">
            まずは無料カウンセリングで、あなたのヒゲの状態に合ったプランを相談してみましょう。
          </p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100">
            おすすめクリニック比較を見る
          </Link>
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
