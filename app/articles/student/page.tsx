import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "学生向けメンズ脱毛ガイド｜学割があるクリニック・サロン5選",
  description:
    "学生向けメンズ脱毛ガイド。学割があるクリニック・サロン5社の料金比較、学生が脱毛を始めるメリット、親の同意書、分割払いの方法まで詳しく解説。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/student/" },
  openGraph: {
    title: "学生向けメンズ脱毛ガイド｜学割があるクリニック・サロン5選",
    description: "学割があるメンズ脱毛クリニック5社を比較。学生が脱毛を始めるメリットも解説。",
    url: "https://mens-datsumou-lab.pages.dev/articles/student/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "学生向けメンズ脱毛ガイド｜学割があるクリニック・サロン5選",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/student/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "未成年でもメンズ脱毛を受けられますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "多くのクリニックでは16歳以上から施術可能です。ただし未成年の場合は親権者の同意書が必要になります。カウンセリングに親権者が同席を求められる場合もあります。",
      },
    },
    {
      "@type": "Question",
      name: "学割はどのくらいお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学割の割引率はクリニックによって異なりますが、10〜20%OFFが一般的です。メンズリゼは20%OFF、ゴリラクリニックは10%OFFです。学生のうちに契約すれば、卒業後もその料金が適用されます。",
      },
    },
    {
      "@type": "Question",
      name: "学生でも分割払いはできますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くのクリニックでは医療ローンによる分割払いに対応しています。月々3,000円〜程度から始められるプランもあります。ただし未成年の場合は親権者の同意が必要です。",
      },
    },
    {
      "@type": "Question",
      name: "学生のうちにどの部位を脱毛するのがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最も人気があるのはヒゲ脱毛です。社会人になる前にヒゲを薄くしておくと、毎朝のヒゲ剃りが楽になります。次に人気なのはVIOと全身脱毛。学割で安くなるうちに広範囲を脱毛する方も多いです。",
      },
    },
    {
      "@type": "Question",
      name: "学割以外にお得になる方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "学割以外にも、ペア割（友人と一緒に契約で10%OFF）、乗り換え割（他社から乗り換えで割引）、紹介割などが利用可能なクリニックがあります。複数の割引を併用できる場合もあるので、カウンセリングで確認しましょう。",
      },
    },
  ],
};

const studentClinics = [
  {
    name: "メンズリゼ",
    discount: "学割20%OFF",
    beard: "31,840円（5回）",
    feature: "学割の割引率が業界最大級。学生証を提示するだけでコース全体が20%OFF。ペア割との併用も可能。",
    link: "/reviews/mens-rize/",
  },
  {
    name: "ゴリラクリニック",
    discount: "学割10%OFF",
    beard: "35,820円（6回）",
    feature: "学割10%OFF＋コース後3年間1回100円の追加照射が魅力。学生のうちに契約して社会人後もお得に通える。",
    link: "/reviews/gorilla/",
  },
  {
    name: "湘南美容クリニック（メンズ）",
    discount: "学割5%OFF + 会員割引",
    beard: "15,960円（6回）",
    feature: "元々業界最安級の料金にさらに学割適用。ヒゲ3部位6回15,960円は破格。全国100院以上で通いやすい。",
    link: "/reviews/shonan-mens/",
  },
  {
    name: "メンズクリア",
    discount: "学割あり",
    beard: "通い放題プランあり",
    feature: "サロン脱毛で痛みが少ない。通い放題プランなら学生のうちに始めて卒業後も通い続けられる。",
    link: "/reviews/mens-clear/",
  },
  {
    name: "エミナルクリニック（メンズ）",
    discount: "学割10%OFF",
    beard: "34,650円（5回）",
    feature: "蓄熱式で痛みが少なく、初めての脱毛でも安心。月々1,030円〜の分割も可能で学生の味方。",
    link: "/reviews/eminal-mens/",
  },
];

export default function StudentPage() {
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
          { label: "脱毛コラム", href: "/articles/student/" },
          { label: "学生向けメンズ脱毛ガイド" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-accent text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            学生向けメンズ脱毛ガイド
            <br className="md:hidden" />
            ｜学割があるクリニック・サロン5選
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            学割を使ってお得にメンズ脱毛を始めよう。学割があるクリニック5社の比較、学生の脱毛メリット、料金・分割の方法まで解説。
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#stu-merit" className="text-accent hover:underline">1. 学生のうちに脱毛を始める5つのメリット</a></li>
            <li><a href="#stu-clinics" className="text-accent hover:underline">2. 学割があるクリニック・サロン5選</a></li>
            <li><a href="#stu-price" className="text-accent hover:underline">3. 学割適用後の料金比較</a></li>
            <li><a href="#stu-parts" className="text-accent hover:underline">4. 学生に人気の脱毛部位ランキング</a></li>
            <li><a href="#stu-consent" className="text-accent hover:underline">5. 未成年の同意書と手続き</a></li>
            <li><a href="#stu-payment" className="text-accent hover:underline">6. 学生の支払い方法と分割払い</a></li>
            <li><a href="#stu-tips" className="text-accent hover:underline">7. 学生が脱毛を始める際の注意点</a></li>
            <li><a href="#stu-faq" className="text-accent hover:underline">8. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* Section 1 */}
      <section id="stu-merit" className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>学生のうちに脱毛を始める5つのメリット</h2>
          <div className="space-y-4 my-6">
            {[
              { title: "学割で最大20%OFF", desc: "学生証を提示するだけで10〜20%の割引が受けられます。社会人になってからでは使えない特典なので、学生のうちに活用しましょう。卒業後もその料金が継続適用されるクリニックがほとんどです。" },
              { title: "時間に余裕がある", desc: "脱毛は2〜3ヶ月に1回の通院が必要。社会人になると忙しくて予約が取りにくくなりますが、学生なら平日の空き時間を活用できます。平日は予約も取りやすいです。" },
              { title: "就活前に清潔感アップ", desc: "就活では第一印象が重要。ヒゲ脱毛で清潔感をアップさせると、面接での好感度が上がります。就活の1年前には脱毛を開始しておくのがベストです。" },
              { title: "社会人後のヒゲ剃り時間を節約", desc: "社会人になると毎朝のヒゲ剃りが必須。1日5分のヒゲ剃りでも年間30時間以上。学生のうちにヒゲ脱毛しておけば、社会人生活がグッと楽になります。" },
              { title: "早く始めるほど長くメリットを享受", desc: "20歳で脱毛を完了すれば、60年以上ヒゲ剃り不要の生活を送れます。トータルで考えると、シェーバー代・クリーム代の節約効果は数十万円にもなります。" },
            ].map((item) => (
              <div key={item.title} className="card">
                <h3 className="font-bold text-primary mb-2 m-0">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="stu-clinics" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>学割があるクリニック・サロン5選</h2>
          <div className="space-y-6">
            {studentClinics.map((clinic, i) => (
              <div key={clinic.name} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-primary m-0">{clinic.name}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">学割</p>
                    <p className="font-bold text-accent">{clinic.discount}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ヒゲ脱毛（学割後）</p>
                    <p className="font-bold">{clinic.beard}</p>
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

      {/* Section 3 */}
      <section id="stu-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>学割適用後の料金比較</h2>
          <div className="overflow-x-auto mb-6">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>学割率</th>
                  <th>ヒゲ脱毛（学割後）</th>
                  <th>全身脱毛（学割後）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-bold">メンズリゼ</td><td>20%OFF</td><td>31,840円/5回</td><td>163,840円/5回</td></tr>
                <tr><td className="font-bold">ゴリラクリニック</td><td>10%OFF</td><td>35,820円/6回</td><td>254,520円/5回</td></tr>
                <tr><td className="font-bold">湘南美容（メンズ）</td><td>5%OFF</td><td>15,960円/6回</td><td>261,250円/6回</td></tr>
                <tr><td className="font-bold">メンズクリア</td><td>割引あり</td><td>通い放題あり</td><td>通い放題あり</td></tr>
                <tr><td className="font-bold">エミナル（メンズ）</td><td>10%OFF</td><td>34,650円/5回</td><td>198,000円/5回</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込の概算値です。最新の料金は各公式サイトでご確認ください。</p>
        </div>
      </section>

      {/* Section 4 */}
      <section id="stu-parts" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>学生に人気の脱毛部位ランキング</h2>
          <div className="space-y-3 my-6">
            {[
              { rank: "1位", part: "ヒゲ（鼻下・アゴ・アゴ下）", reason: "社会人になる前に処理したい部位No.1。就活対策としても人気。" },
              { rank: "2位", part: "VIO", reason: "清潔感と衛生面を重視する学生に人気。温泉やジムにも自信を持てる。" },
              { rank: "3位", part: "全身", reason: "学割で安くなるうちに全身を一気に脱毛。トータルコストで考えるとお得。" },
              { rank: "4位", part: "腕・脚", reason: "夏に半袖やハーフパンツを着るために。ムダ毛が気になる部位。" },
              { rank: "5位", part: "ワキ", reason: "比較的安い料金で脱毛でき、汗のニオイ対策にもなる。" },
            ].map((item) => (
              <div key={item.rank} className="flex items-start gap-4 card">
                <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {item.rank}
                </span>
                <div>
                  <p className="font-bold text-primary mb-1">{item.part}</p>
                  <p className="text-sm text-gray-600">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section id="stu-consent" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>未成年の同意書と手続き</h2>
          <p>
            18歳未満の学生が脱毛を受ける場合は、親権者の同意書が必要です。2022年4月から成人年齢が18歳に引き下げられたため、18歳以上なら親権者の同意なしで契約が可能です。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">18歳以上の学生</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・親権者の同意は不要</li>
                <li>・学生証の提示で学割適用</li>
                <li>・医療ローンも自分で契約可能</li>
                <li>・クレジットカード払いもOK</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-primary mb-2 m-0">18歳未満の学生</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・親権者の同意書が必要</li>
                <li>・カウンセリングに親権者の同席が必要な場合あり</li>
                <li>・医療ローンは親権者名義で契約</li>
                <li>・施術可能年齢は16歳以上が一般的</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="stu-payment" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>学生の支払い方法と分割払い</h2>
          <div className="space-y-4 my-6">
            {[
              { method: "現金一括払い", desc: "一括で支払えば分割手数料がかからず最もお得。アルバイトで貯めた資金で支払う学生も多い。" },
              { method: "クレジットカード払い", desc: "分割回数を選べるカードなら月々の負担を抑えられる。18歳以上なら自分名義のカードで支払い可能。" },
              { method: "医療ローン（分割払い）", desc: "月々3,000円〜の分割が可能。最大60回払いまで対応するクリニックも。審査はありますが、アルバイト収入でも通ることが多い。" },
              { method: "都度払い", desc: "コース契約せず1回ずつ支払う方法。まとまったお金がなくても始められる。ただし1回あたりの料金はコースより高くなる。" },
            ].map((item) => (
              <div key={item.method} className="card">
                <h3 className="font-bold text-primary mb-2 m-0">{item.method}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="stu-tips" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>学生が脱毛を始める際の注意点</h2>
          <ul>
            <li><strong>日焼けに注意</strong>：日焼けした肌はレーザー照射できません。夏場のサークル活動やアウトドアの前後は施術スケジュールに注意。</li>
            <li><strong>テスト期間は避ける</strong>：施術後は赤みが出る場合もあるため、テスト期間や就活の直前は避けましょう。</li>
            <li><strong>長期休暇を活用</strong>：夏休みや春休みに集中的に通うのがおすすめ。平日は予約が取りやすいメリットも。</li>
            <li><strong>無料カウンセリングで比較</strong>：2〜3社の無料カウンセリングを受けてから決めましょう。クリニックの雰囲気やスタッフの対応も重要です。</li>
            <li><strong>勧誘に注意</strong>：カウンセリングで高額コースを勧められても、その場で即決しないこと。持ち帰って検討する余裕を持ちましょう。</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="stu-faq" className="section-alt py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "未成年でもメンズ脱毛を受けられますか？", a: "多くのクリニックでは16歳以上から施術可能です。ただし未成年の場合は親権者の同意書が必要になります。カウンセリングに親権者が同席を求められる場合もあります。" },
              { q: "学割はどのくらいお得ですか？", a: "学割の割引率はクリニックによって異なりますが、10〜20%OFFが一般的です。メンズリゼは20%OFF、ゴリラクリニックは10%OFFです。学生のうちに契約すれば、卒業後もその料金が適用されます。" },
              { q: "学生でも分割払いはできますか？", a: "はい、多くのクリニックでは医療ローンによる分割払いに対応しています。月々3,000円〜程度から始められるプランもあります。ただし未成年の場合は親権者の同意が必要です。" },
              { q: "学生のうちにどの部位を脱毛するのがおすすめですか？", a: "最も人気があるのはヒゲ脱毛です。社会人になる前にヒゲを薄くしておくと、毎朝のヒゲ剃りが楽になります。次に人気なのはVIOと全身脱毛。学割で安くなるうちに広範囲を脱毛する方も多いです。" },
              { q: "学割以外にお得になる方法はありますか？", a: "学割以外にも、ペア割（友人と一緒に契約で10%OFF）、乗り換え割（他社から乗り換えで割引）、紹介割などが利用可能なクリニックがあります。複数の割引を併用できる場合もあるので、カウンセリングで確認しましょう。" },
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
          <h2 className="text-2xl font-bold text-white mb-4">学割で脱毛を始めよう</h2>
          <p className="text-gray-300 mb-8">学生のうちに始めるのが一番お得です。まずは無料カウンセリングへ。</p>
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
