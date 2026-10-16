// ピラティスFAQ（全エリア共通）

const faqs = [
  {
    question: 'ピラティス初心者でも大丈夫ですか？',
    answer: '問題ありません。ピラティススタジオのほとんどが初心者向けのレッスンを用意しています。インストラクターが基礎から指導するため、運動が苦手な方でも始めやすい環境です。',
  },
  {
    question: 'マットピラティスとマシンピラティスの違いは？',
    answer: 'マットピラティスは自重を使ったエクササイズで、マシンピラティスは専用マシン（リフォーマーなど）を使ったトレーニングです。マシンは負荷を調整しやすく、初心者におすすめです。マットは場所を選ばず、自宅でも続けやすい点が特徴です。',
  },
  {
    question: 'ピラティススタジオの料金相場は？',
    answer: 'ピラティススタジオの料金相場は、月4回で12,000円〜16,000円程度です。体験レッスンは無料〜3,000円が一般的です。プライベートレッスンは1回8,000円〜12,000円が相場となっています。',
  },
  {
    question: 'どのくらいの頻度で通えばいいですか？',
    answer: 'ピラティス初心者は週1〜2回（月4〜8回）がおすすめです。慣れてきたら週2〜3回に増やすと効果を実感しやすくなります。大切なのは継続することです。無理のないペースで長く続けることが、目標達成への近道です。',
  },
  {
    question: 'ピラティスで痩せますか？',
    answer: 'ピラティスにはダイエット効果が期待できます。インナーマッスルを鍛えることで基礎代謝が上がり、太りにくい体質づくりにつながります。ただし即効性はないので、最低でも2〜3ヶ月は継続することが大切です。食事管理を並行すると、より効果的です。',
  },
  {
    question: '体験レッスンは何を持っていけばいいですか？',
    answer: '基本的には、動きやすい服装（Tシャツ、レギンスなど）と飲み物があれば問題ありません。マットやタオルは、スタジオでレンタルできる場合が一般的です。詳細は各スタジオの体験レッスン案内でご確認ください。',
  },
  {
    question: 'ピラティスとヨガの違いは何ですか？',
    answer: 'ピラティスは体幹（コア）を鍛えることに特化したエクササイズです。ヨガは柔軟性と精神的なリラックスを重視します。ピラティスは筋力強化、ヨガは心身のバランスを整えることが主な目的です。目的に合わせてお選びください。',
  },
  {
    question: 'ピラティスで肩こりや腰痛は改善しますか？',
    answer: '改善が期待できます。ピラティスは姿勢改善に効果的で、正しい姿勢を身につけることで肩こりや腰痛の根本原因を解消できます。ただし、痛みがひどい場合は医師に相談してからスタートすることをおすすめします。',
  },
  {
    question: 'ピラティスはどのくらいで効果が出ますか？',
    answer: 'ピラティスの効果を実感し始めるのは、2ヶ月を過ぎた頃が目安とされています。すぐに変化が表れなくても、最低2ヶ月は継続することをおすすめします。',
  },
  {
    question: 'パーソナルとグループ、どちらがおすすめですか？',
    answer: 'それぞれに利点があります。パーソナルは一人ひとりに合わせた指導で効果が出やすく、短期間で結果を出したい方におすすめです。グループは料金を抑えやすく、ほかの参加者と一緒に続けられる点が利点です。まずは体験レッスンで両方を試すことをおすすめします。',
  },
]

export function PilatesFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-warm-900 mb-8 text-center">
          よくある質問
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-warm-200 rounded-lg overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-warm-50 transition">
                  <h3 className="font-bold text-warm-900 pr-4">【質問{index + 1}】{faq.question}</h3>
                  <svg className="w-5 h-5 text-warm-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-warm-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
