import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ヒゲ脱毛のビフォーアフター｜回数別の経過と効果",
  description:
    "ヒゲ脱毛の回数別ビフォーアフターを解説。1回目・3回目・5回目・10回目・15回目の効果の変化、部位別の経過、効果を最大化するコツまで詳しく紹介。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/before-after/" },
  openGraph: {
    title: "ヒゲ脱毛のビフォーアフター｜回数別の経過と効果",
    description: "ヒゲ脱毛の回数別ビフォーアフターを解説。1回目〜15回目の効果の変化を紹介。",
    url: "https://mens-datsumou-lab.pages.dev/articles/before-after/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ヒゲ脱毛のビフォーアフター｜回数別の経過と効果",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/before-after/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ヒゲ脱毛1回目で効果はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1回目の照射後、1〜2週間で照射部分の毛がポロポロと抜け落ちます。ただし、全体の毛の20〜30%しか照射できていないため、見た目の変化はほとんどわかりません。効果を実感するには最低3回の照射が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲ脱毛の効果が出やすい人と出にくい人の違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "効果が出やすいのは「肌が白くヒゲが濃い（黒い）人」です。レーザーはメラニン（黒い色素）に反応するため、肌との色のコントラストが大きいほど効果的です。逆に日焼けした肌や白髪のヒゲには効果が出にくいです。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲ脱毛の経過写真を撮っておくべきですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、強くおすすめします。変化は徐々に進むため、日常的に自分の顔を見ていると変化に気づきにくいです。施術ごとに同じ角度・同じ照明で写真を撮っておくと、効果の実感とモチベーション維持に役立ちます。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲ脱毛後に一時的にヒゲが濃く見えることはありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、「泥棒ヒゲ」と呼ばれる現象です。レーザー照射後、毛が膨張して一時的に濃く見えることがあります。通常は1〜2週間で自然に抜け落ちるため、心配は不要です。無理に抜こうとせず、自然に抜けるのを待ちましょう。",
      },
    },
    {
      "@type": "Question",
      name: "ヒゲ脱毛の効果はいつまで続きますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "医療レーザー脱毛の効果は基本的に永久です。一度破壊された毛根からは毛が再生しません。ただし、ホルモンバランスの変化で新しい毛穴から毛が生えてくることはまれにあります。サロン脱毛の場合は一時的な効果のため、時間が経つと再生します。",
      },
    },
  ],
};

export default function BeforeAfterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/before-after/" }, { label: "ヒゲ脱毛ビフォーアフター" }]} />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            ヒゲ脱毛のビフォーアフター
            <br className="md:hidden" />｜回数別の経過と効果
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">ヒゲ脱毛は何回でどのくらい変わる？回数別の効果の経過、部位別の変化、効果を最大化するコツを解説。</p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#ba-overview" className="text-accent hover:underline">1. ヒゲ脱毛の効果：回数別の変化</a></li>
            <li><a href="#ba-detail" className="text-accent hover:underline">2. 回数別ビフォーアフター詳細</a></li>
            <li><a href="#ba-parts" className="text-accent hover:underline">3. 部位別の効果の出方</a></li>
            <li><a href="#ba-dorobou" className="text-accent hover:underline">4. 「泥棒ヒゲ」について</a></li>
            <li><a href="#ba-who" className="text-accent hover:underline">5. 効果が出やすい人・出にくい人</a></li>
            <li><a href="#ba-tips" className="text-accent hover:underline">6. 効果を最大化する5つのコツ</a></li>
            <li><a href="#ba-photo" className="text-accent hover:underline">7. 経過写真の撮り方</a></li>
            <li><a href="#ba-faq" className="text-accent hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* Section 1 */}
      <section id="ba-overview" className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛の効果：回数別の変化</h2>
          <p>ヒゲ脱毛の効果は段階的に現れます。以下は医療レーザー脱毛の場合の一般的な経過です。</p>

          <div className="overflow-x-auto my-6">
            <table>
              <thead>
                <tr><th>回数</th><th>毛量の変化</th><th>見た目の変化</th><th>ヒゲ剃りの変化</th></tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">施術前</td><td>100%</td><td>-</td><td>毎日必要</td></tr>
                <tr><td className="font-bold">1〜2回目</td><td>90〜95%</td><td>ほぼ変化なし</td><td>変化なし</td></tr>
                <tr><td className="font-bold">3〜4回目</td><td>70〜80%</td><td>薄くなったと感じ始める</td><td>少し楽になる</td></tr>
                <tr><td className="font-bold">5〜6回目</td><td>40〜60%</td><td>青ヒゲが目立たなくなる</td><td>2〜3日に1回で十分</td></tr>
                <tr><td className="font-bold">7〜10回目</td><td>10〜30%</td><td>かなりスッキリ</td><td>週1回程度</td></tr>
                <tr><td className="font-bold">11〜15回目</td><td>0〜10%</td><td>ほぼツルツル</td><td>ほぼ不要</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="ba-detail" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>回数別ビフォーアフター詳細</h2>

          <div className="space-y-6 my-6">
            {[
              {
                times: "1回目の照射後",
                change: "見た目の変化はほとんどなし",
                detail: "照射後1〜2週間で、照射した部分の毛がポロポロと抜け落ちます。「おっ、効果がある！」と思いますが、これは全体の毛の20〜30%（成長期の毛）のみ。2〜3週間後には休止期だった毛が新たに生えてきて、元の状態に戻ったように見えます。この段階で「効果がない」と諦めないことが重要です。",
              },
              {
                times: "3回目の照射後",
                change: "毛が薄くなり始める",
                detail: "3回目あたりから目に見える変化が出始めます。全体の毛量が20〜30%減少し、特にほほやもみあげなど毛が薄い部分から効果が現れます。ヒゲ剃りの際に「少し楽になった」と感じる方が増えます。夕方のヒゲの伸びも遅くなり、清潔感が維持しやすくなります。",
              },
              {
                times: "5回目の照射後",
                change: "青ヒゲが解消される",
                detail: "毛量が40〜50%減少し、多くの方が「脱毛して良かった」と感じるタイミング。青ヒゲが目立たなくなり、肌の色味が明るくなります。ヒゲ剃りは2〜3日に1回程度に。朝の準備時間が大幅に短縮されます。ここで満足して終了する方も少なくありません。",
              },
              {
                times: "10回目の照射後",
                change: "かなりスッキリした見た目に",
                detail: "毛量が70〜90%減少。残っている毛も細く産毛のようになり、ヒゲ剃りは週1回程度で十分に。肌質の改善も実感でき、カミソリ負けによる肌荒れもなくなります。アゴ下や首など頑固な部分の毛も大幅に減少します。",
              },
              {
                times: "15回目の照射後",
                change: "ほぼ完全にツルツル",
                detail: "毛量が95%以上減少。ヒゲ剃りはほぼ不要になり、毎朝のルーティンからヒゲ剃りが消えます。肌もきれいになり、ファンデーションなしでも清潔感のある見た目に。ここまで来ると追加照射の必要もほとんどありません。",
              },
            ].map((item) => (
              <div key={item.times} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">{item.times}</span>
                  <h3 className="font-bold text-primary m-0">{item.change}</h3>
                </div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="ba-parts" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の効果の出方</h2>
          <p>ヒゲ脱毛は部位によって効果の出方が異なります。</p>

          <div className="overflow-x-auto my-6">
            <table>
              <thead><tr><th>部位</th><th>効果の出やすさ</th><th>特徴</th></tr></thead>
              <tbody>
                <tr><td className="font-bold">ほほ</td><td className="text-accent font-bold">出やすい</td><td>毛が比較的薄く、3〜4回で目に見える効果</td></tr>
                <tr><td className="font-bold">もみあげ</td><td className="text-accent font-bold">出やすい</td><td>面積が狭く毛も薄いため早く効果が出る</td></tr>
                <tr><td className="font-bold">鼻下</td><td className="font-bold">普通</td><td>痛みは強いが回数は標準的。5〜6回で効果実感</td></tr>
                <tr><td className="font-bold">アゴ</td><td className="font-bold">普通</td><td>毛が太いがレーザーも反応しやすい</td></tr>
                <tr><td className="font-bold">アゴ下</td><td className="text-red-600 font-bold">出にくい</td><td>毛が密集して深い。回数がかかりやすい</td></tr>
                <tr><td className="font-bold">首</td><td className="text-red-600 font-bold">出にくい</td><td>毛の方向がバラバラで照射しにくい</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="ba-dorobou" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>「泥棒ヒゲ」について</h2>
          <p>
            ヒゲ脱毛後に起こる「泥棒ヒゲ（どろぼうヒゲ）」現象をご存知ですか？レーザー照射後、ヒゲが一時的に膨張して太く・濃く見える現象です。
          </p>

          <div className="card my-6">
            <h3 className="font-bold text-primary mb-2 m-0">泥棒ヒゲの原因と対処法</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><strong>原因：</strong>レーザーの熱で毛が膨張し、毛穴に残った状態で太く見える。剃っても断面が大きくなり余計に目立つ。</li>
              <li><strong>期間：</strong>照射後1〜2週間で自然に抜け落ちる。最長でも3週間程度。</li>
              <li><strong>対処法：</strong>無理に抜かない（毛穴を傷つける恐れ）。マスクやBBクリームで隠す。保湿をしっかり行う。</li>
              <li><strong>注意：</strong>泥棒ヒゲは効果が出ている証拠。「悪化した」と思って通うのをやめないこと。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="ba-who" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>効果が出やすい人・出にくい人</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">効果が出やすい人</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・肌が白い（レーザーが毛に集中しやすい）</li>
                <li>・ヒゲが黒くて太い（メラニンが多い）</li>
                <li>・日焼けしていない</li>
                <li>・肌が保湿されている</li>
                <li>・毛抜きを使っていない</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-secondary mb-2 m-0">効果が出にくい人</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・日焼けしている（出力を下げる必要あり）</li>
                <li>・白髪のヒゲが多い（メラニンに反応できない）</li>
                <li>・金髪・茶色のヒゲ（メラニンが少ない）</li>
                <li>・毛抜きで処理している（毛根がない）</li>
                <li>・産毛のように毛が細い</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="ba-tips" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>効果を最大化する5つのコツ</h2>
          <div className="space-y-4 my-6">
            {[
              { title: "日焼けを徹底的に避ける", desc: "日焼けは脱毛効果を下げる最大の敵。日焼け止めクリームを毎日塗り、帽子やマスクで紫外線をブロックしましょう。" },
              { title: "毛抜きを絶対に使わない", desc: "毛抜きで抜くと毛根がなくなり、レーザーが反応できなくなります。自己処理は電気シェーバーのみで。" },
              { title: "保湿を毎日行う", desc: "保湿された肌はレーザーの効果が上がるだけでなく、痛みの軽減にもつながります。化粧水+乳液を朝晩。" },
              { title: "適切な間隔で通う", desc: "毛周期に合わせた間隔（4〜8週間）で通うことが重要。早すぎても遅すぎても効果が下がります。" },
              { title: "経過写真を撮っておく", desc: "同じ条件（角度・照明・時間帯）で毎回写真を撮ると、変化が目に見えてモチベーション維持につながります。" },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-primary mb-2 m-0">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="ba-photo" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>経過写真の撮り方</h2>
          <p>ビフォーアフターの経過写真を上手に撮るコツを紹介します。</p>

          <ul>
            <li><strong>同じ時間帯に撮る</strong>：朝のヒゲ剃り前がベスト。夕方は毛が伸びているため条件が揃いにくい。</li>
            <li><strong>同じ角度で撮る</strong>：正面・右横・左横の3角度を毎回撮影。スマホを同じ位置に固定すると◎。</li>
            <li><strong>同じ照明で撮る</strong>：自然光が入る場所がベスト。照明が変わると毛の見え方が変わります。</li>
            <li><strong>撮影日を記録する</strong>：日付と回数をメモしておくと、後から振り返りやすい。スマホの写真メモ機能を活用。</li>
            <li><strong>定期的に比較する</strong>：施術ごとに1枚目の写真と比較。変化を実感できるとモチベーションが上がります。</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="ba-faq" className="section-alt py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "ヒゲ脱毛1回目で効果はありますか？", a: "1回目の照射後、1〜2週間で照射部分の毛がポロポロと抜け落ちます。ただし、全体の毛の20〜30%しか照射できていないため、見た目の変化はほとんどわかりません。効果を実感するには最低3回の照射が必要です。" },
              { q: "ヒゲ脱毛の効果が出やすい人と出にくい人の違いは？", a: "効果が出やすいのは「肌が白くヒゲが濃い（黒い）人」です。レーザーはメラニン（黒い色素）に反応するため、肌との色のコントラストが大きいほど効果的です。逆に日焼けした肌や白髪のヒゲには効果が出にくいです。" },
              { q: "ヒゲ脱毛の経過写真を撮っておくべきですか？", a: "はい、強くおすすめします。変化は徐々に進むため、日常的に自分の顔を見ていると変化に気づきにくいです。施術ごとに同じ角度・同じ照明で写真を撮っておくと、効果の実感とモチベーション維持に役立ちます。" },
              { q: "ヒゲ脱毛後に一時的にヒゲが濃く見えることはありますか？", a: "はい、「泥棒ヒゲ」と呼ばれる現象です。レーザー照射後、毛が膨張して一時的に濃く見えることがあります。通常は1〜2週間で自然に抜け落ちるため、心配は不要です。無理に抜こうとせず、自然に抜けるのを待ちましょう。" },
              { q: "ヒゲ脱毛の効果はいつまで続きますか？", a: "医療レーザー脱毛の効果は基本的に永久です。一度破壊された毛根からは毛が再生しません。ただし、ホルモンバランスの変化で新しい毛穴から毛が生えてくることはまれにあります。サロン脱毛の場合は一時的な効果のため、時間が経つと再生します。" },
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
          <h2 className="text-2xl font-bold text-white mb-4">ヒゲ脱毛の変化を実感しよう</h2>
          <p className="text-gray-300 mb-8">まずは無料カウンセリングで、あなたのヒゲの状態を診断してもらいましょう。</p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100">おすすめクリニック比較を見る</Link>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。※効果・回数には個人差があります。※写真はイメージです。</p>
        </div>
      </section>
    </>
  );
}
