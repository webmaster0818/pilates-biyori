import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { SiteFooter } from '@/components/SiteFooter'

export const metadata = {
  title: '利用規約 | Pilates-Biyori',
  description: 'Pilates-Biyoriの利用規約ページです。',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />

      <main className="pt-20 bg-white">
        <section className="bg-gradient-to-br from-warm-50 to-warm-100 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-warm-900">
              利用規約
            </h1>
          </div>
        </section>

        <section className="bg-white py-3 border-b border-warm-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <nav className="text-sm text-warm-400">
              <Link href="/" className="hover:text-warm-800 transition">ホーム</Link>
              {' > '}
              <span className="text-warm-600">利用規約</span>
            </nav>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 prose prose-warm">
            <p className="text-warm-600 leading-relaxed mb-6">
              この利用規約（以下、「本規約」といいます。）は、株式会社MediaX（以下、「当社」といいます。）が提供する「Pilates-Biyori」（以下、「本サイト」といいます。）の利用について定めるものです。ユーザーの皆様（以下、「ユーザー」といいます。）には、本規約に従って本サイトをご利用いただきます。本サイトを利用するに際し、最新の本規約の全文をお読みいただき、これに同意した上で、本サイトを利用するものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第1条（本サービスの目的）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本サイトは、ピラティススタジオ等の事業者の紹介および、ユーザーがピラティススタジオを選ぶ際のアドバイスを提供することを目的としています。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第2条（本規約の適用）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、本規約の内容に従い、本サイトを通じて本サービスを提供します。本サイト上に掲示する本サイト利用にあたってのルール、諸規定、プライバシーポリシーなどの利用条件等は、全て本規約の一部を構成するものとします。本規約の規定が利用条件等の規定と矛盾する場合には、利用条件等の規定が優先して適用されるものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第3条（禁止事項）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、ユーザーが以下のいずれかに該当する場合、事前の通知なく本サイトの利用を拒否することができます。
            </p>
            <ul className="list-disc list-inside text-warm-600 leading-relaxed mb-6 space-y-2">
              <li>本規約のいずれかの条項に違反した場合</li>
              <li>登録事項に虚偽の事実があることが判明した場合</li>
              <li>不正な目的をもって本サイトを利用した場合</li>
              <li>過去に本サイトの利用を拒否された場合</li>
              <li>その他、当社が本サイトの利用を不適切と判断した場合</li>
            </ul>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第4条（本規約の変更）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、ユーザーの事前の承諾を得ることなく、本規約を変更することができるものとします。本規約を変更する場合は、変更後の本規約の内容を本サイト上に掲載する方法によりユーザーに通知するものとし、当該通知後にユーザーが本サイトを利用した場合には、ユーザーは本規約の変更に同意したものとみなされます。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第5条（ご連絡手段）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社からユーザーへの連絡は、電子メール、本サイトへの掲載、その他当社が適当と判断する方法により行うものとします。連絡は、当社が連絡を発信した時点で効力が生じるものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第6条（取引）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本サイトを通じて行われる取引は、ユーザーと掲載事業者との間でのみ成立するものであり、当社は当該取引の当事者ではありません。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第7条（委任）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、本サービスに関する業務の全部または一部を第三者に委託することができるものとします。当社は、委託先を責任をもって管理するものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第8条（禁止行為）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              ユーザーは、本サイトの利用にあたり、以下の行為を行ってはなりません。
            </p>
            <ul className="list-disc list-inside text-warm-600 leading-relaxed mb-6 space-y-2">
              <li>本規約に違反する行為</li>
              <li>法令または公序良俗に違反する行為</li>
              <li>虚偽の情報を送信する行為</li>
              <li>他のユーザーの本サイト利用を妨害する行為</li>
              <li>当社のサーバーまたはネットワークシステムに不正にアクセスする行為</li>
              <li>スパム行為</li>
              <li>本サービスの運営を妨害するおそれのある行為</li>
              <li>本サイトのソースコードを入手しようとする行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社または第三者を誹謗中傷する行為</li>
              <li>当社と競合する事業を運営する行為</li>
              <li>不正な目的で本サイトを利用する行為</li>
              <li>政治活動、宗教活動、その他これらに類する行為</li>
            </ul>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第9条（知的財産権）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本サイトを構成するソフトウェア、画像、テキスト等の著作権、商標権、その他の知的財産権は、当社または当該権利を有する第三者に帰属するものとし、ユーザーへの本サイトの利用許諾は、当社または第三者の知的財産権の使用許諾を意味するものではありません。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第10条（本サービスの停止、中断）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、システムの保守点検、事故、不可抗力、掲載事業者とのトラブルその他の事由により、ユーザーに事前の通知なく本サービスを一時的に停止または中断することができるものとします。当社は、本サービスの停止または中断によりユーザーまたは第三者に生じた損害等について、一切責任を負いません。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第11条（保証の否認及び免責事項）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本サービスは、現状有姿で提供されるものとし、当社は本サービスの完全性、特定目的適合性、有用性等について、いかなる保証も行いません。本サイトに掲載されている情報の正確性についても保証するものではありません。本サイトを通じて行われた取引に関するトラブルについて、当社は一切の責任を負いません。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第12条（個人情報の利用・第三者への提供）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、ユーザーの個人情報について、当社が定めるプライバシーポリシーに従い適切に取り扱うものとします。当社は、ユーザーが体験予約や無料相談の申込を行った掲載事業者に対して、ユーザーの個人情報を提供するものとし、ユーザーは予めこれに同意するものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第13条（機密保持）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              ユーザーは、本サービスに関連して知り得た当社の秘密情報について、当社の事前の書面による承諾なく、第三者に開示または漏洩してはならないものとし、これを秘密に取り扱う義務を負うものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第14条（損害賠償責任）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              ユーザーは、本サイトの利用に関して発生した一切の問題について、自己の責任において解決するものとします。当社に費用負担が発生した場合は、ユーザーがこれを負担するものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第15条（反社会的勢力の排除）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社は、反社会的勢力に該当する者の本サイトの利用を禁止します。当社は、提供を停止したことによりユーザーに生じた損害について、一切の責任を負わないものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第16条（免責の制限）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              当社の損害賠償責任は、現実に生じた通常の損害に限定されるものとし、その額は取引額の総額を限度とします。但し、当社に故意または重過失がある場合は、この限りではありません。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第17条（分離可能性）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本規約のいずれかの条項またはその一部が、法令等により無効または執行不能と判断された場合であっても、本規約の残りの規定および一部が無効または執行不能と判断された規定の残りの部分は、引き続き完全に効力を有するものとします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第18条（不可抗力）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              天災、地変、戦争、暴動、内乱、法令の改廃制定、公権力による命令処分、輸送機関の事故、労働争議その他不可抗力による損害について、当社は一切の責任を負担しません。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第19条（合意管轄）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本規約に関連してユーザーと当社との間で生じた紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>

            <h2 className="text-2xl font-bold text-warm-900 mt-10 mb-4">第20条（協議）</h2>
            <p className="text-warm-600 leading-relaxed mb-6">
              本規約の解釈について疑義を生じた場合または本規約に定めのない事項が生じた場合には、ユーザーと当社は誠実に協議し、円満にその解決を図るものとします。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
