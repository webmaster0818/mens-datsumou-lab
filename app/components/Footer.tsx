import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">メンズ脱毛ラボ</h3>
            <p className="text-sm leading-relaxed">
              メンズ脱毛の比較・口コミ情報サイト。医療脱毛・サロン脱毛の料金、効果、痛みを徹底比較し、あなたに最適なクリニック選びをサポートします。
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">カテゴリ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-white text-gray-400">おすすめクリニック比較</Link></li>
              <li><Link href="/articles/beard/" className="hover:text-white text-gray-400">ヒゲ脱毛</Link></li>
              <li><Link href="/articles/full-body/" className="hover:text-white text-gray-400">全身脱毛</Link></li>
              <li><Link href="/articles/pain/" className="hover:text-white text-gray-400">痛み対策</Link></li>
              <li><Link href="/articles/medical-vs-salon/" className="hover:text-white text-gray-400">医療 vs サロン</Link></li>
              <li><Link href="/articles/cost-guide/" className="hover:text-white text-gray-400">料金相場ガイド</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">クリニック口コミ</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews/gorilla/" className="hover:text-white text-gray-400">ゴリラクリニック</Link></li>
              <li><Link href="/reviews/mens-rize/" className="hover:text-white text-gray-400">メンズリゼ</Link></li>
              <li><Link href="/reviews/regina-homme/" className="hover:text-white text-gray-400">レジーナクリニックオム</Link></li>
              <li><Link href="/reviews/mens-clear/" className="hover:text-white text-gray-400">メンズクリア</Link></li>
              <li><Link href="/reviews/eminal-mens/" className="hover:text-white text-gray-400">エミナルクリニック(メンズ)</Link></li>
              <li><Link href="/reviews/shonan-mens/" className="hover:text-white text-gray-400">湘南美容クリニック(メンズ)</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex gap-4">
            <Link href="/terms/" className="hover:text-white text-gray-400">利用規約</Link>
            <Link href="/privacy-policy/" className="hover:text-white text-gray-400">プライバシーポリシー</Link>
            <Link href="/content-policy/" className="hover:text-white text-gray-400">コンテンツポリシー</Link>
          </div>
          <p>&copy; {new Date().getFullYear()} メンズ脱毛ラボ All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
