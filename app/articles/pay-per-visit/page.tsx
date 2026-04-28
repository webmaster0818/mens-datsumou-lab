import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "都度払いメンズ脱毛おすすめ5選｜コースなし・1回ずつ通える",
  description:
    "都度払い（1回ずつ）で通えるメンズ脱毛クリニック・サロン5選。コース契約なしで1回ごとに支払えるサービスの料金比較、メリット・デメリット、向いている人を解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/pay-per-visit/" },
  openGraph: {
    title: "都度払いメンズ脱毛おすすめ5選｜コースなし・1回ずつ通える",
    description: "都度払いで通えるメンズ脱毛5選。コース契約不要で1回ずつ支払えるサービスを比較。",
    url: "https://mens-datsumou-lab.pages.dev/articles/pay-per-visit/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "都度払いメンズ脱毛おすすめ5選｜コースなし・1回ずつ通える",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/pay-per-visit/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "都度払いとコース契約はどちらがお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "トータルの回数が決まっているならコース契約の方が1回あたりの料金は安くなります。ただし、途中で満足した場合やコースの回数分通えるか不安な場合は、都度払いの方がリスクが少ないです。",
      },
    },
    {
      "@type": "Question",
      name: "都度払いだと予約は取りにくいですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "コース契約の方と同じシステムで予約するため、予約の取りやすさに差はありません。ただし、コース契約者が優先されるクリニックもゼロではないので、カウンセリング時に確認しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "都度払いから途中でコースに切り替えることはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くのクリニックでは都度払いからコース契約への切り替えが可能です。何回か都度払いで試してから、効果を実感したらコースに切り替えるという方法もあります。",
      },
    },
    {
      "@type": "Question",
      name: "都度払いで何回通えばヒゲ脱毛は終わりますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "目標によって異なりますが、薄くする程度なら3〜5回、ツルツルにするなら10〜15回が目安です。都度払いなら自分が満足した時点でやめられるので、余計な回数分を支払うリスクがありません。",
      },
    },
    {
      "@type": "Question",
      name: "都度払いでも麻酔は使えますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、都度払いでも麻酔は利用可能です。麻酔クリーム（2,000〜3,300円）や笑気麻酔（2,200〜3,300円）が別途料金でかかります。レジーナクリニックオムなら麻酔クリームが無料で使えます。",
      },
    },
  ],
};

const ppvClinics = [
  {
    name: "湘南美容クリニック（メンズ）",
    beardOnce: "5,700円",
    bodyOnce: "要確認",
    feature: "ヒゲ3部位1回5,700円と都度払いでも業界最安級。全国100院以上で通いやすく、コース契約への切り替えも柔軟。",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "メンズリゼ",
    beardOnce: "12,800円",
    bodyOnce: "要確認",
    feature: "都度払いプランを明示的に用意。コース終了後は1回半額で追加照射が可能。学割・ペア割との併用もOK。",
    link: "/reviews/mens-rize/",
  },
  {
    name: "レジーナクリニックオム",
    beardOnce: "14,880円",
    bodyOnce: "要確認",
    feature: "都度払いでも麻酔クリームが無料。痛みが心配な方は都度払いで試してからコースを検討できる。平日21時まで営業。",
    link: "/reviews/regina-homme/",
  },
  {
    name: "ゴリラクリニック",
    beardOnce: "10,800円",
    bodyOnce: "要確認",
    feature: "男性専門で安心。コース終了後は3年間1回100円で追加照射可能。まずは都度払いで試すのもアリ。",
    link: "/reviews/gorilla/",
  },
  {
    name: "メンズクリア",
    beardOnce: "4,200円〜",
    bodyOnce: "要確認",
    feature: "サロン脱毛のため医療脱毛より安め。都度払い1回4,200円〜。痛みが少ないので、脱毛初体験に最適。",
    link: "/reviews/mens-clear/",
  },
];

export default function PayPerVisitPage() {
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
          { label: "脱毛コラム", href: "/articles/pay-per-visit/" },
          { label: "都度払いメンズ脱毛5選" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            都度払いメンズ脱毛おすすめ5選
            <br className="md:hidden" />
            ｜コースなし・1回ずつ通える
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            「コース契約はハードルが高い」「まずは1回試してみたい」という方に。都度払いで通えるメンズ脱毛クリニック・サロン5選を紹介。
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#ppv-what" className="text-accent hover:underline">1. 都度払いとは？コース契約との違い</a></li>
            <li><a href="#ppv-merit" className="text-accent hover:underline">2. 都度払いのメリット・デメリット</a></li>
            <li><a href="#ppv-clinics" className="text-accent hover:underline">3. 都度払い対応クリニック5選</a></li>
            <li><a href="#ppv-price" className="text-accent hover:underline">4. 都度払い料金比較表</a></li>
            <li><a href="#ppv-vs-course" className="text-accent hover:underline">5. 都度払い vs コース契約：料金シミュレーション</a></li>
            <li><a href="#ppv-who" className="text-accent hover:underline">6. 都度払いが向いている人</a></li>
            <li><a href="#ppv-tips" className="text-accent hover:underline">7. 都度払いで効率よく脱毛するコツ</a></li>
            <li><a href="#ppv-faq" className="text-accent hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* Section 1 */}
      <section id="ppv-what" className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払いとは？コース契約との違い</h2>
          <p>
            都度払いとは、脱毛の施術を1回ごとに支払う方法です。5回コース・6回コースのようなまとめ契約をせず、自分のペースで通えるのが最大の特徴です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">都度払い</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・1回ずつ支払い</li>
                <li>・好きなタイミングでやめられる</li>
                <li>・まとまったお金が不要</li>
                <li>・1回あたりの料金はやや高め</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">コース契約</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・5〜6回分まとめて契約</li>
                <li>・途中解約は手続きが必要</li>
                <li>・初回にまとまった金額が必要</li>
                <li>・1回あたりの料金はお得</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="ppv-merit" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払いのメリット・デメリット</h2>

          <h3>メリット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {[
              { title: "リスクが少ない", desc: "合わなければいつでもやめられる。解約手続きも不要。" },
              { title: "まとまったお金が不要", desc: "1回数千円〜1万円程度。学生やお金に余裕がない方でも始めやすい。" },
              { title: "お試し感覚で始められる", desc: "「まずは1回やってみたい」という方に最適。痛みや効果を確認してから継続を判断できる。" },
              { title: "自分のペースで通える", desc: "コースの有効期限に縛られず、忙しい時期は休んで余裕のある時に通える。" },
            ].map((item) => (
              <div key={item.title} className="card">
                <p className="font-bold text-primary mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3>デメリット</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            {[
              { title: "1回あたりの料金が高い", desc: "コースの1回あたりと比べると2〜3倍高いことも。回数が多くなると割高に。" },
              { title: "トータルでは割高になりがち", desc: "10回以上通う場合はコース契約の方がトータルで安くなるケースが多い。" },
              { title: "モチベーション管理が必要", desc: "コースのように「残り○回」という意識がないため、通うのが面倒になりやすい。" },
              { title: "追加照射の特典がない", desc: "コース終了後の1回半額や追加照射1回100円などの特典は受けられない。" },
            ].map((item) => (
              <div key={item.title} className="card">
                <p className="font-bold text-secondary mb-1">{item.title}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section id="ppv-clinics" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払い対応クリニック5選</h2>
          <div className="space-y-6">
            {ppvClinics.map((clinic, i) => (
              <div key={clinic.name} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary m-0">{clinic.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ヒゲ脱毛（1回）</p>
                    <p className="font-bold text-accent">{clinic.beardOnce}</p>
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

      {/* Section 4 */}
      <section id="ppv-price" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払い料金比較表</h2>
          <div className="overflow-x-auto mb-6">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>ヒゲ脱毛1回</th>
                  <th>コース1回あたり</th>
                  <th>差額</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">湘南美容（メンズ）</td><td>5,700円</td><td>2,800円</td><td>+2,900円</td></tr>
                <tr><td className="font-bold">ゴリラクリニック</td><td>10,800円</td><td>6,633円</td><td>+4,167円</td></tr>
                <tr><td className="font-bold">メンズリゼ</td><td>12,800円</td><td>7,960円</td><td>+4,840円</td></tr>
                <tr><td className="font-bold">レジーナオム</td><td>14,880円</td><td>7,433円</td><td>+7,447円</td></tr>
                <tr><td className="font-bold">メンズクリア</td><td>4,200円〜</td><td>通い放題あり</td><td>-</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の情報です。</p>
        </div>
      </section>

      {/* Section 5 */}
      <section id="ppv-vs-course" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払い vs コース契約：料金シミュレーション</h2>
          <p>
            湘南美容クリニックのヒゲ3部位を例に、都度払いとコース契約の料金を回数別に比較します。
          </p>
          <div className="overflow-x-auto mb-6">
            <table>
              <thead>
                <tr>
                  <th>回数</th>
                  <th>都度払い合計</th>
                  <th>コース契約</th>
                  <th>お得な方</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1回</td><td>5,700円</td><td>16,800円（6回分）</td><td className="text-accent font-bold">都度払い</td></tr>
                <tr><td>3回</td><td>17,100円</td><td>16,800円（6回分）</td><td className="text-accent font-bold">コース</td></tr>
                <tr><td>6回</td><td>34,200円</td><td>16,800円</td><td className="text-accent font-bold">コース</td></tr>
                <tr><td>10回</td><td>57,000円</td><td>33,600円（6回×2）</td><td className="text-accent font-bold">コース</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            3回以上通う可能性があるならコース契約の方がお得になります。1〜2回で試したい方、効果を確認してから決めたい方は都度払いがおすすめです。
          </p>
        </div>
      </section>

      {/* Section 6 */}
      <section id="ppv-who" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払いが向いている人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">都度払いがおすすめ</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・まずは1回試してみたい方</li>
                <li>・まとまったお金を用意できない方</li>
                <li>・コース契約に縛られたくない方</li>
                <li>・他社のコース終了後の追加照射として</li>
                <li>・すでにかなり毛が薄い方（1〜2回で済む）</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">コース契約がおすすめ</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・3回以上は確実に通う方</li>
                <li>・ツルツルを目指す方（10回以上必要）</li>
                <li>・1回あたりの料金を抑えたい方</li>
                <li>・コース終了後の追加照射特典を使いたい方</li>
                <li>・脱毛する決意が固い方</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="ppv-tips" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>都度払いで効率よく脱毛するコツ</h2>
          <ul>
            <li><strong>最初の1〜2回は都度払いで試す</strong>：痛み・効果・クリニックの雰囲気を確認してからコースに切り替えるのが賢い方法。</li>
            <li><strong>施術間隔は2〜3ヶ月空ける</strong>：毛周期に合わせた間隔で通うのが最も効率的。早く通いすぎても効果は変わりません。</li>
            <li><strong>日焼け対策を徹底する</strong>：日焼けすると施術を断られる場合があります。余計な1回分の料金を無駄にしないために。</li>
            <li><strong>都度払いが安いクリニックを選ぶ</strong>：湘南美容のヒゲ3部位1回5,700円は圧倒的に安い。都度払いを考えるなら湘南がおすすめ。</li>
            <li><strong>3回通って判断する</strong>：1回目ではあまり効果を実感できないことも。3回通えば毛量の変化が目に見えてわかります。</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="ppv-faq" className="section-alt py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "都度払いとコース契約はどちらがお得ですか？", a: "トータルの回数が決まっているならコース契約の方が1回あたりの料金は安くなります。ただし、途中で満足した場合やコースの回数分通えるか不安な場合は、都度払いの方がリスクが少ないです。" },
              { q: "都度払いだと予約は取りにくいですか？", a: "コース契約の方と同じシステムで予約するため、予約の取りやすさに差はありません。ただし、コース契約者が優先されるクリニックもゼロではないので、カウンセリング時に確認しましょう。" },
              { q: "都度払いから途中でコースに切り替えることはできますか？", a: "はい、多くのクリニックでは都度払いからコース契約への切り替えが可能です。何回か都度払いで試してから、効果を実感したらコースに切り替えるという方法もあります。" },
              { q: "都度払いで何回通えばヒゲ脱毛は終わりますか？", a: "目標によって異なりますが、薄くする程度なら3〜5回、ツルツルにするなら10〜15回が目安です。都度払いなら自分が満足した時点でやめられるので、余計な回数分を支払うリスクがありません。" },
              { q: "都度払いでも麻酔は使えますか？", a: "はい、都度払いでも麻酔は利用可能です。麻酔クリーム（2,000〜3,300円）や笑気麻酔（2,200〜3,300円）が別途料金でかかります。レジーナクリニックオムなら麻酔クリームが無料で使えます。" },
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
          <h2 className="text-2xl font-bold text-white mb-4">まずは1回、試してみよう</h2>
          <p className="text-gray-300 mb-8">都度払いなら気軽にスタートできます。無料カウンセリングへ。</p>
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
