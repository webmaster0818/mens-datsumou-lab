import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズ脱毛の部位別ガイド｜人気部位ランキングと料金一覧",
  description:
    "メンズ脱毛の部位別ガイド。人気部位ランキングTOP5と各部位の料金一覧、必要回数、痛みレベルを徹底解説。ヒゲ・VIO・全身・腕・足・胸・背中の特徴がわかる。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/body-parts-guide/" },
  openGraph: {
    title: "メンズ脱毛の部位別ガイド｜人気部位ランキングと料金一覧",
    description: "メンズ脱毛の人気部位ランキングと部位別の料金・回数・痛みを徹底解説。",
    url: "https://mens-datsumou-lab.pages.dev/articles/body-parts-guide/",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "メンズ脱毛の部位別ガイド｜人気部位ランキングと料金一覧",
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  author: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  publisher: { "@type": "Organization", name: "メンズ脱毛ラボ" },
  mainEntityOfPage: "https://mens-datsumou-lab.pages.dev/articles/body-parts-guide/",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "メンズ脱毛で一番人気の部位はどこですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "最も人気の部位はヒゲ（髭）脱毛です。毎日のヒゲ剃りの手間をなくせることから、メンズ脱毛を始める方の約7割がまずヒゲ脱毛から始めています。次いでVIO、全身脱毛が人気です。",
      },
    },
    {
      "@type": "Question",
      name: "どの部位から脱毛を始めるのがおすすめですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "初めての方にはヒゲ脱毛がおすすめです。効果を実感しやすく、料金もリーズナブルなため、脱毛の痛みや効果を体験するのに最適です。ヒゲ脱毛に満足したら、VIOや全身脱毛にステップアップする方が多いです。",
      },
    },
    {
      "@type": "Question",
      name: "部位によって脱毛の痛みは違いますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、部位によって痛みは大きく異なります。最も痛いのはヒゲ（特に鼻下）とVIOです。腕や足、胸・背中は比較的痛みが少なく、多くの方が麻酔なしでも耐えられます。",
      },
    },
    {
      "@type": "Question",
      name: "複数部位を同時に脱毛できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "はい、多くのクリニックでは1回の来院で複数部位の施術が可能です。全身脱毛コースなら、1回の来院で全身をまとめて施術できるため時間効率が良いです。施術時間は全身で60〜120分程度です。",
      },
    },
    {
      "@type": "Question",
      name: "部位別コースと全身脱毛、どちらがお得ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "脱毛したい部位が3箇所以上ある場合は、全身脱毛コースの方がお得になることが多いです。例えば腕＋足＋胸を個別に契約すると20〜30万円になりますが、全身脱毛なら20万円前後で全部位をカバーできるクリニックもあります。",
      },
    },
  ],
};

const partsRanking = [
  {
    rank: 1,
    name: "ヒゲ（髭）",
    popularity: "非常に高い",
    priceRange: "16,800〜110,660円",
    sessions: "6〜15回",
    painLevel: "強い",
    description: "メンズ脱毛の定番部位。毎日のヒゲ剃りの手間を省け、青ヒゲ解消にも効果的。",
    link: "/articles/beard/",
    linkText: "ヒゲ脱毛の詳細を見る",
  },
  {
    rank: 2,
    name: "VIO",
    popularity: "高い",
    priceRange: "29,280〜153,800円",
    sessions: "5〜10回",
    painLevel: "強い",
    description: "衛生面の改善が主な理由。蒸れやかゆみ対策として若年層を中心に急増中。",
    link: "/articles/vio/",
    linkText: "VIO脱毛の詳細を見る",
  },
  {
    rank: 3,
    name: "全身",
    popularity: "高い",
    priceRange: "206,800〜354,800円",
    sessions: "5〜8回",
    painLevel: "部位により異なる",
    description: "複数部位を一度に脱毛できてコスパが良い。トータルコストで考えると部位別より割安。",
    link: "/articles/full-body/",
    linkText: "全身脱毛の詳細を見る",
  },
  {
    rank: 4,
    name: "腕・足",
    popularity: "やや高い",
    priceRange: "75,000〜158,800円",
    sessions: "5〜10回",
    painLevel: "弱い〜中程度",
    description: "夏場の露出に備えて脱毛する方が多い。ツルツルにせず薄くする減毛も人気。",
    link: "/articles/arm-leg/",
    linkText: "腕・足脱毛の詳細を見る",
  },
  {
    rank: 5,
    name: "胸・背中",
    popularity: "中程度",
    priceRange: "33,800〜258,000円",
    sessions: "5〜10回",
    painLevel: "弱い",
    description: "プールや温泉で気になる方に人気。自己処理が難しい背中はクリニック脱毛が最適。",
    link: "/articles/chest-back/",
    linkText: "胸・背中脱毛の詳細を見る",
  },
];

export default function BodyPartsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Breadcrumb items={[{ label: "トップ", href: "/" }, { label: "脱毛コラム", href: "/articles/body-parts-guide/" }, { label: "部位別ガイド" }]} />

      <section className="bg-[#1e3a5f] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#2563eb] text-sm font-bold mb-2">2026年4月最新</p>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            メンズ脱毛の部位別ガイド
            <br className="md:hidden" />
            ｜人気部位ランキングと料金一覧
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            メンズ脱毛の人気部位をランキング形式で紹介。各部位の料金相場・回数目安・痛みレベルを一覧で比較します。
          </p>
        </div>
      </section>

      {/* 目次 */}
      <section className="py-8 border-b border-[#cbd5e1]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#parts-ranking" className="text-[#2563eb] hover:underline">1. 人気部位ランキングTOP5</a></li>
            <li><a href="#parts-price" className="text-[#2563eb] hover:underline">2. 部位別の料金一覧</a></li>
            <li><a href="#parts-sessions" className="text-[#2563eb] hover:underline">3. 部位別の必要回数</a></li>
            <li><a href="#parts-pain" className="text-[#2563eb] hover:underline">4. 部位別の痛みレベル</a></li>
            <li><a href="#parts-choose" className="text-[#2563eb] hover:underline">5. 部位の選び方・おすすめの組み合わせ</a></li>
            <li><a href="#parts-whole" className="text-[#2563eb] hover:underline">6. 全身脱毛との比較</a></li>
            <li><a href="#parts-faq" className="text-[#2563eb] hover:underline">7. よくある質問</a></li>
          </ol>
        </div>
      </section>

      {/* 導入 */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <p>
            メンズ脱毛を始めようと思ったとき、「どの部位から脱毛すればいいのか」「部位によって料金や回数はどのくらい違うのか」と悩む方は多いでしょう。
          </p>
          <p>
            この記事では、メンズ脱毛で人気の部位をランキング形式で紹介し、各部位の料金相場・必要回数・痛みレベルを一覧で比較します。自分にぴったりの脱毛部位を見つけましょう。
          </p>
        </div>
      </section>

      {/* 人気部位ランキング */}
      <section id="parts-ranking" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メンズ脱毛 人気部位ランキングTOP5</h2>
          <div className="space-y-6">
            {partsRanking.map((part) => (
              <div key={part.rank} className="bg-white border border-[#cbd5e1] rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center ${part.rank <= 3 ? "bg-[#d97706]" : "bg-[#2563eb]"}`}>
                    {part.rank}
                  </span>
                  <h3 className="text-lg font-bold text-[#1e3a5f] m-0">{part.name}</h3>
                  <span className="text-xs bg-[#f8fafc] border border-[#cbd5e1] rounded px-2 py-1">人気度：{part.popularity}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">料金相場</p>
                    <p className="font-bold text-[#2563eb]">{part.priceRange}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">必要回数</p>
                    <p className="font-bold">{part.sessions}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">痛みレベル</p>
                    <p className="font-bold">{part.painLevel}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{part.description}</p>
                <Link href={part.link} className="text-[#2563eb] text-sm font-bold hover:underline">
                  {part.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金一覧 */}
      <section id="parts-price" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の料金一覧（医療脱毛の相場）</h2>
          <p>以下は主要クリニック5社の平均的な料金をもとにした相場です。</p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>料金相場（5〜6回）</th>
                  <th>1回あたり目安</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ3部位</td>
                  <td>16,800〜44,600円</td>
                  <td>2,800〜7,433円</td>
                  <td>湘南が最安</td>
                </tr>
                <tr>
                  <td className="font-bold">ヒゲ全部位</td>
                  <td>39,800〜110,660円</td>
                  <td>6,633〜13,833円</td>
                  <td>ほほ・首込み</td>
                </tr>
                <tr>
                  <td className="font-bold">VIO</td>
                  <td>29,280〜153,800円</td>
                  <td>4,880〜30,760円</td>
                  <td>湘南が最安</td>
                </tr>
                <tr>
                  <td className="font-bold">全身（顔VIO除く）</td>
                  <td>206,800〜354,800円</td>
                  <td>41,360〜70,960円</td>
                  <td>エミナルが最安</td>
                </tr>
                <tr>
                  <td className="font-bold">腕セット</td>
                  <td>75,000〜158,800円</td>
                  <td>15,000〜31,760円</td>
                  <td>ひじ上＋ひじ下＋手指</td>
                </tr>
                <tr>
                  <td className="font-bold">脚セット</td>
                  <td>82,500〜158,800円</td>
                  <td>13,750〜31,760円</td>
                  <td>太もも＋ひざ下＋足指</td>
                </tr>
                <tr>
                  <td className="font-bold">胸・腹</td>
                  <td>33,800〜147,800円</td>
                  <td>6,760〜29,560円</td>
                  <td>セットプランあり</td>
                </tr>
                <tr>
                  <td className="font-bold">背中</td>
                  <td>33,800〜82,500円</td>
                  <td>6,760〜13,750円</td>
                  <td>上下で分かれる場合も</td>
                </tr>
                <tr>
                  <td className="font-bold">ワキ</td>
                  <td>2,500〜30,000円</td>
                  <td>500〜6,000円</td>
                  <td>単発が安い</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※料金は税込。2026年4月時点の主要5社の料金をもとに算出。</p>

          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">料金の詳細比較はこちら</p>
            <Link href="/articles/cost-guide/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ脱毛の料金ガイド｜安いクリニックの選び方
            </Link>
          </div>
        </div>
      </section>

      {/* 回数 */}
      <section id="parts-sessions" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の必要回数（医療脱毛の場合）</h2>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>薄くする</th>
                  <th>かなり減らす</th>
                  <th>ツルツル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ</td>
                  <td>3〜5回</td>
                  <td>5〜8回</td>
                  <td>10〜15回</td>
                </tr>
                <tr>
                  <td className="font-bold">VIO</td>
                  <td>3〜5回</td>
                  <td>5〜8回</td>
                  <td>8〜12回</td>
                </tr>
                <tr>
                  <td className="font-bold">腕・足</td>
                  <td>3〜5回</td>
                  <td>5〜8回</td>
                  <td>8〜10回</td>
                </tr>
                <tr>
                  <td className="font-bold">胸・背中</td>
                  <td>3〜5回</td>
                  <td>5〜8回</td>
                  <td>8〜10回</td>
                </tr>
                <tr>
                  <td className="font-bold">ワキ</td>
                  <td>3〜5回</td>
                  <td>5〜8回</td>
                  <td>8〜10回</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            ヒゲが最も回数がかかる部位です。毛が太く密集しているため、ツルツルを目指すには10回以上の照射が必要になることが多いです。その他の部位は5〜10回で満足できるケースがほとんどです。
          </p>
          <div className="bg-white border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">回数の詳細はこちら</p>
            <Link href="/articles/how-many-times/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ脱毛は何回で終わる？部位別の回数目安
            </Link>
          </div>
        </div>
      </section>

      {/* 痛みレベル */}
      <section id="parts-pain" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の痛みレベル</h2>
          <p>脱毛の痛みは毛の太さ、皮膚の薄さ、骨の近さなどによって異なります。</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4 border-l-4 border-l-red-400">
              <p className="font-bold text-red-600 mb-2">痛みが強い部位</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・ヒゲ（特に鼻下）</li>
                <li>・VIO（特にIライン）</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">麻酔の使用がおすすめ</p>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4 border-l-4 border-l-[#d97706]">
              <p className="font-bold text-[#d97706] mb-2">中程度の痛み</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・ワキ</li>
                <li>・すね（骨に近い部分）</li>
                <li>・ひざ</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">多くの方が耐えられるレベル</p>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4 border-l-4 border-l-green-500">
              <p className="font-bold text-green-600 mb-2">痛みが少ない部位</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>・腕（二の腕）</li>
                <li>・太もも</li>
                <li>・胸・背中</li>
              </ul>
              <p className="text-xs text-gray-400 mt-2">麻酔なしでOKな方が多い</p>
            </div>
          </div>

          <div className="bg-[#f8fafc] border border-[#cbd5e1] rounded-lg p-5 my-6">
            <p className="text-sm font-bold text-[#1e3a5f] mb-2">痛み対策の詳細はこちら</p>
            <Link href="/articles/pain/" className="text-sm text-[#2563eb] hover:underline">
              → メンズ脱毛の痛みはどのくらい？部位別の痛みと対策
            </Link>
          </div>
        </div>
      </section>

      {/* 部位の選び方 */}
      <section id="parts-choose" className="bg-[#f8fafc] py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位の選び方・おすすめの組み合わせ</h2>

          <h3>初めての方におすすめ</h3>
          <p>
            初めてメンズ脱毛をする方には「ヒゲ脱毛」から始めるのがおすすめです。料金が比較的リーズナブルで、効果を実感しやすく、毎日のヒゲ剃りが楽になるという実益も大きいです。
          </p>

          <h3>コスパ重視の方におすすめ</h3>
          <p>
            複数部位を検討している方は「全身脱毛」がコスパ抜群です。腕＋足＋胸＋背中を個別に契約すると30〜50万円になりますが、全身脱毛なら20万円前後でカバーできます。
          </p>

          <h3>おすすめの組み合わせパターン</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">パターンA：まずはお試し</p>
              <p className="text-sm text-gray-600">ヒゲ3部位のみ → 16,800円〜</p>
              <p className="text-xs text-gray-400 mt-1">脱毛の痛みや効果を体験したい方に</p>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">パターンB：ヒゲ＋VIO</p>
              <p className="text-sm text-gray-600">人気TOP2部位 → 46,080円〜</p>
              <p className="text-xs text-gray-400 mt-1">清潔感と衛生面を両方改善したい方に</p>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">パターンC：全身脱毛（顔VIO除く）</p>
              <p className="text-sm text-gray-600">腕・足・胸・背中すべて → 206,800円〜</p>
              <p className="text-xs text-gray-400 mt-1">全体的にすっきりしたい方に</p>
            </div>
            <div className="bg-white border border-[#cbd5e1] rounded-lg p-4">
              <p className="font-bold text-[#1e3a5f] mb-2">パターンD：全身＋顔＋VIO</p>
              <p className="text-sm text-gray-600">全部位フルセット → 260,400円〜</p>
              <p className="text-xs text-gray-400 mt-1">徹底的に脱毛したい方に</p>
            </div>
          </div>
        </div>
      </section>

      {/* 全身脱毛との比較 */}
      <section id="parts-whole" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別 vs 全身脱毛 どちらがお得？</h2>
          <p>
            部位別コースと全身脱毛コース、どちらを選ぶべきかは脱毛したい部位の数によります。
          </p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>脱毛部位数</th>
                  <th>おすすめプラン</th>
                  <th>理由</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">1〜2部位</td>
                  <td>部位別コース</td>
                  <td>全身より安く済む</td>
                </tr>
                <tr>
                  <td className="font-bold">3部位以上</td>
                  <td>全身脱毛</td>
                  <td>トータルで安くなることが多い</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>迷ったらまず1部位から</h3>
          <p>
            「いきなり全身は不安」という方は、まずヒゲなど1部位から始めてみましょう。脱毛の痛みや効果を実感したうえで、追加で他の部位を検討するのも賢い選択です。
          </p>
          <p>
            多くのクリニックでは途中でコース変更や追加が可能です。カウンセリング時に「最初はヒゲだけだが、後から他の部位も検討したい」と伝えておくとスムーズです。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="parts-faq" className="bg-[#f8fafc] py-12">
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
          <h2 className="text-2xl font-bold text-white mb-4">あなたに最適な部位を見つけよう</h2>
          <p className="text-gray-300 mb-8">
            まずは無料カウンセリングで、あなたの悩みに合った脱毛プランを相談してみましょう。
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
