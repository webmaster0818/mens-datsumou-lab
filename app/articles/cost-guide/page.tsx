import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "メンズ脱毛の料金相場ガイド｜部位別の費用目安",
  description:
    "メンズ脱毛の料金相場を部位別に徹底解説。ヒゲ・全身・VIO・腕・脚など部位ごとの費用目安、医療脱毛とサロン脱毛の料金差、追加費用に注意すべきポイントを紹介。",
  alternates: { canonical: "https://mens-datsumou-lab.pages.dev/articles/cost-guide/" },
};

export default function CostGuidePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "トップ", href: "/" },
          { label: "脱毛コラム", href: "/articles/pain/" },
          { label: "メンズ脱毛の料金相場ガイド" },
        ]}
      />

      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            メンズ脱毛の料金相場ガイド
            <br className="md:hidden" />
            ｜部位別の費用目安
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            ヒゲ・全身・VIOなど部位別の料金相場、追加でかかる費用、お得に脱毛するコツを詳しく解説します。
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-lg font-bold mb-4">この記事の内容</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#price-overview" className="text-accent hover:underline">1. メンズ脱毛の料金相場一覧</a></li>
            <li><a href="#beard-price-detail" className="text-accent hover:underline">2. ヒゲ脱毛の料金相場</a></li>
            <li><a href="#fullbody-price-detail" className="text-accent hover:underline">3. 全身脱毛の料金相場</a></li>
            <li><a href="#parts-price" className="text-accent hover:underline">4. 部位別の料金相場</a></li>
            <li><a href="#hidden-cost" className="text-accent hover:underline">5. 見落としがちな追加費用</a></li>
            <li><a href="#save-tips" className="text-accent hover:underline">6. お得に脱毛する5つのコツ</a></li>
          </ol>
        </div>
      </section>

      <section id="price-overview" className="py-10">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>メンズ脱毛の料金相場一覧</h2>
          <p>
            メンズ脱毛の料金は、脱毛の種類（医療/サロン）、部位、回数によって大きく異なります。まずは各部位の料金相場を一覧で確認しましょう。
          </p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>部位</th>
                  <th>医療脱毛（相場）</th>
                  <th>サロン脱毛（相場）</th>
                  <th>回数目安</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">ヒゲ3部位</td>
                  <td>1.6〜4.5万円（5〜6回）</td>
                  <td>11〜15万円（8〜12回）</td>
                  <td>5〜15回</td>
                </tr>
                <tr>
                  <td className="font-bold">全身（顔VIO除く）</td>
                  <td>20〜35万円（5回）</td>
                  <td>22〜35万円（4〜6回）</td>
                  <td>5〜10回</td>
                </tr>
                <tr>
                  <td className="font-bold">全身+ヒゲ+VIO</td>
                  <td>25〜45万円（5〜6回）</td>
                  <td>30〜50万円（6〜12回）</td>
                  <td>5〜12回</td>
                </tr>
                <tr>
                  <td className="font-bold">VIO</td>
                  <td>10〜15万円（5回）</td>
                  <td>8〜12万円（6〜8回）</td>
                  <td>5〜10回</td>
                </tr>
                <tr>
                  <td className="font-bold">ワキ</td>
                  <td>1〜3万円（5〜6回）</td>
                  <td>2〜5万円（8〜12回）</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">腕全体</td>
                  <td>5〜10万円（5回）</td>
                  <td>6〜12万円（6〜8回）</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">脚全体</td>
                  <td>8〜15万円（5回）</td>
                  <td>8〜15万円（6〜8回）</td>
                  <td>5〜8回</td>
                </tr>
                <tr>
                  <td className="font-bold">胸・腹</td>
                  <td>5〜10万円（5回）</td>
                  <td>6〜10万円（6〜8回）</td>
                  <td>3〜6回</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">※上記は目安です。クリニック・サロンにより料金は異なります。</p>
        </div>
      </section>

      <section id="beard-price-detail" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>ヒゲ脱毛の料金相場</h2>
          <p>
            ヒゲ脱毛はメンズ脱毛で最も人気のある部位です。料金はクリニックによって大きく異なり、最安は湘南美容クリニックの6回16,800円、高いところではサロン脱毛の通い放題プランで数十万円になる場合もあります。
          </p>

          <h3>各クリニックのヒゲ脱毛料金</h3>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>料金</th>
                  <th>部位</th>
                  <th>1回あたり</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">湘南美容クリニック</td>
                  <td className="text-accent font-bold">16,800円/6回</td>
                  <td>3部位</td>
                  <td>2,800円</td>
                </tr>
                <tr>
                  <td className="font-bold">エミナルクリニック</td>
                  <td>38,500円/5回</td>
                  <td>3部位選択</td>
                  <td>7,700円</td>
                </tr>
                <tr>
                  <td className="font-bold">ゴリラクリニック</td>
                  <td>39,800円/6回</td>
                  <td>3部位</td>
                  <td>6,633円</td>
                </tr>
                <tr>
                  <td className="font-bold">メンズリゼ</td>
                  <td>39,800円/5回</td>
                  <td>3部位選択</td>
                  <td>7,960円</td>
                </tr>
                <tr>
                  <td className="font-bold">レジーナクリニックオム</td>
                  <td>44,600円/6回</td>
                  <td>3部位</td>
                  <td>7,433円</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>ヒゲ脱毛のトータルコストの考え方</h3>
          <p>
            ヒゲが濃い方は5〜6回では足りない場合があります。「コース後の追加照射料金」も含めてトータルコストを計算しましょう。
          </p>
          <ul>
            <li><strong>ゴリラクリニック</strong>：コース後3年間は1回100円。ヒゲが濃い方はトータルで最もお得になる可能性あり。</li>
            <li><strong>メンズリゼ</strong>：コース後は1回半額。5回+追加3回で約6万円。</li>
            <li><strong>湘南美容クリニック</strong>：都度払いで追加可能。6回16,800円+追加6回16,800円=12回33,600円と非常に安い。</li>
          </ul>
        </div>
      </section>

      <section id="fullbody-price-detail" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>全身脱毛の料金相場</h2>
          <p>
            全身脱毛は20〜40万円が相場です。「顔」「VIO」が含まれるかどうかで料金が大きく変わるため、自分が脱毛したい部位を明確にしてから比較しましょう。
          </p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>クリニック</th>
                  <th>全身（基本）</th>
                  <th>全身+顔</th>
                  <th>全身+VIO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">エミナルクリニック</td>
                  <td className="text-accent font-bold">206,800円/5回</td>
                  <td>260,400円</td>
                  <td>260,400円</td>
                </tr>
                <tr>
                  <td className="font-bold">レジーナクリニックオム</td>
                  <td>258,000円/5回</td>
                  <td>308,000円</td>
                  <td>333,000円</td>
                </tr>
                <tr>
                  <td className="font-bold">メンズリゼ</td>
                  <td>269,800円/5回</td>
                  <td>349,800円</td>
                  <td>349,800円</td>
                </tr>
                <tr>
                  <td className="font-bold">湘南美容クリニック</td>
                  <td>244,200円/6回</td>
                  <td colSpan={2}>293,330円（顔VIO込）</td>
                </tr>
                <tr>
                  <td className="font-bold">ゴリラクリニック</td>
                  <td>354,800円/5回</td>
                  <td>要問合せ</td>
                  <td>要問合せ</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="parts-price" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>部位別の料金相場</h2>

          <h3>VIO脱毛</h3>
          <p>
            メンズVIO脱毛は需要が急増中です。料金は5回で10〜15万円が相場。完全にツルツルにする「ハイジニーナ」から、量を減らす「ナチュラル」まで、希望に合わせて調整可能です。
          </p>

          <h3>ワキ脱毛</h3>
          <p>
            ワキは面積が小さく、単体では1〜3万円と手頃。湘南美容クリニックでは6回2,500円と破格の設定。全身脱毛に含まれていることが多いため、全身プランも検討を。
          </p>

          <h3>腕・脚脱毛</h3>
          <p>
            腕全体で5〜10万円、脚全体で8〜15万円が相場。毛が薄い部位は5回程度で効果を実感。部位別より全身脱毛の方がコスパが良い場合も多い。
          </p>

          <h3>胸・腹脱毛</h3>
          <p>
            胸・腹は5〜10万円が相場。毛量の個人差が大きい部位ですが、比較的少ない回数で効果が出る方が多い。
          </p>
        </div>
      </section>

      <section id="hidden-cost" className="py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>見落としがちな追加費用</h2>
          <p>
            コース料金だけでなく、以下の追加費用も考慮してトータルコストを計算しましょう。
          </p>
          <div className="overflow-x-auto mb-8">
            <table>
              <thead>
                <tr>
                  <th>費用項目</th>
                  <th>相場</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">麻酔代</td>
                  <td>0〜3,300円/回</td>
                  <td>レジーナオムは無料。毎回使うと総額2〜3万円追加</td>
                </tr>
                <tr>
                  <td className="font-bold">シェービング代</td>
                  <td>0〜3,300円/回</td>
                  <td>剃り残しがある場合に発生。自己処理で回避可能</td>
                </tr>
                <tr>
                  <td className="font-bold">キャンセル料</td>
                  <td>0〜コース1回分</td>
                  <td>メンズリゼは3時間前まで無料。事前に確認を</td>
                </tr>
                <tr>
                  <td className="font-bold">初診料・再診料</td>
                  <td>0〜3,000円</td>
                  <td>多くのクリニックは無料</td>
                </tr>
                <tr>
                  <td className="font-bold">薬代（肌トラブル時）</td>
                  <td>0〜2,000円</td>
                  <td>多くの医療脱毛クリニックは無料</td>
                </tr>
                <tr>
                  <td className="font-bold">追加照射代</td>
                  <td>通常の50〜100%</td>
                  <td>コースで足りない場合の追加施術</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="save-tips" className="section-alt py-12">
        <div className="max-w-4xl mx-auto px-4 article-body">
          <h2>お得に脱毛する5つのコツ</h2>
          <ol>
            <li className="mb-4">
              <strong>割引キャンペーンを活用</strong>
              <p>学割、ペア割、乗り換え割、紹介割など、各クリニックが提供する割引を最大限活用しましょう。メンズリゼの学割は20%OFFと大きいです。</p>
            </li>
            <li className="mb-4">
              <strong>追加照射の料金を確認</strong>
              <p>コースで足りない場合の追加料金は重要。ゴリラクリニックの3年間100円/回、メンズリゼの半額保証など、アフター保証が充実したクリニックを選びましょう。</p>
            </li>
            <li className="mb-4">
              <strong>部位別より全身セットを検討</strong>
              <p>ヒゲ＋全身＋VIOなど複数部位を脱毛したい場合、部位別に契約するよりセットプランの方がトータルで安くなるケースがほとんどです。</p>
            </li>
            <li className="mb-4">
              <strong>麻酔無料のクリニックを選ぶ</strong>
              <p>麻酔代は1回3,300円が相場。10回通えば33,000円の追加出費。レジーナクリニックオムなら麻酔クリーム無料で、痛みに配慮しつつコストも抑えられます。</p>
            </li>
            <li className="mb-4">
              <strong>月々の分割払いを活用</strong>
              <p>まとまった金額が用意できない場合は、医療ローンや分割払いを活用。月々数千円から脱毛を始められます。ただし、分割手数料に注意。</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-primary text-white py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">最適なプランを見つけよう</h2>
          <p className="text-gray-300 mb-8">各クリニックの詳しい料金比較はおすすめランキングをチェック。</p>
          <Link href="/ranking/" className="btn-primary bg-white text-primary hover:bg-gray-100">おすすめクリニック比較を見る</Link>
        </div>
      </section>

      <section className="py-6 border-t border-border">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xs text-gray-400">※本記事の情報は2026年4月時点のものです。最新の料金は各公式サイトをご確認ください。※料金はすべて税込表記です。</p>
        </div>
      </section>
    </>
  );
}
