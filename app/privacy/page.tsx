import React from 'react'
import { headers } from 'next/headers'

export default async function PrivacyPolicy() {
  const cookieHeader = (await headers()).get('cookie') || ''
  const cookieLocale = cookieHeader.split('; ').find(c => c.startsWith('locale='))?.split('=')[1]
  const locale = cookieLocale === 'en' ? 'en' : 'ar'
  const isEn = locale === 'en'

  const h1 = isEn ? 'Privacy Policy' : 'سياسة الخصوصية'
  const overviewTitle = isEn ? 'Overview' : 'نظرة عامة'
  const overviewText = isEn
    ? 'At Tafadi, we value your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and protect your data to deliver our services aimed at reducing non-serious transactions.'
    : 'نحن في “تفادي”، نقدر أهمية خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نجمع، نستخدم، ونحمي بياناتك لتقديم خدماتنا التي تهدف إلى تحسين تجربة الشراء بالحد من المعاملات غير الجادة.'

  const collectionTitle = isEn ? 'Data collection' : 'جمع البيانات'
  const collectionItems = isEn
    ? [
        { b: 'Identity data:', t: ' we collect personal data such as name, address, and contact info when you register.' },
        { b: 'Transaction data:', t: ' we collect information about transactions such as purchase history, value, and product details.' },
        { b: 'Analytics data:', t: ' we analyze data to assess buying behavior and return rates.' },
      ]
    : [
        { b: 'بيانات الهوية:', t: ' نجمع بيانات شخصية مثل الاسم، العنوان، ومعلومات الاتصال عندما تسجل في منصتنا.' },
        { b: 'بيانات المعاملات:', t: ' نجمع معلومات حول المعاملات التي تجريها، بما في ذلك تاريخ الشراء، القيمة، وتفاصيل المنتج.' },
        { b: 'بيانات التحليل:', t: ' نقوم بتحليل البيانات لتقييم سلوك الشراء ونسبة المرتجعات.' },
      ]

  const useTitle = isEn ? 'Data usage' : 'استخدام البيانات'
  const useIntro = isEn ? 'We use your data for:' : 'نستخدم بياناتك للأغراض التالية:'
  const useItems = isEn
    ? [
        'Assessing buying behavior: to decide whether COD should be hidden based on returns, or bank transfer hidden based on forgery attempts.',
        'Improving our services: to enhance our service and user experience.',
        'Communicating with you: to send service updates and promotional offers with your consent.',
      ]
    : [
        'تقييم سلوك الشراء: لتحديد ما إذا كان يجب حجب خيار الدفع عند الاستلام بناءً على سجل المرتجعات أو حجب التحويل البنكي بناء على سجل محاولات التزوير.',
        'تحسين خدماتنا: لتطوير خدماتنا وتقديم تجربة مستخدم أفضل.',
        'التواصل معك: لإرسال تحديثات الخدمة والعروض الترويجية التي قد تهمك، بناءً على موافقتك.',
      ]

  const protectTitle = isEn ? 'Data protection' : 'حماية البيانات'
  const protectText = isEn
    ? 'We take appropriate measures to protect your data from unauthorized access, alteration, disclosure, or destruction, using advanced technologies for data security and encryption during transmission and storage.'
    : 'نتخذ جميع الإجراءات المناسبة لحماية بياناتك ضد الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نستخدم تقنيات متقدمة لتأمين وتشفير البيانات أثناء النقل والتخزين.'

  const shareTitle = isEn ? 'Data sharing' : 'مشاركة البيانات'
  const shareP1 = isEn
    ? 'To improve service quality, we may analyze and use collected data to understand e-commerce behavior and challenges. This helps develop strategies used by our partner stores. We always maintain the highest levels of data confidentiality and do not share personally identifiable information except under applicable law.'
    : 'في سعينا لتحسين جودة الخدمات المقدمة، قد نقوم بتحليل واستخدام البيانات التي نجمعها لفهم أنماط السلوكيات والتحديات التي تواجهها عمليات التجارة الإلكترونية. هذا الفهم يمكن أن يسهم في تطوير وتنفيذ استراتيجيات وحلول تستفيد منها شبكتنا الواسعة من المتاجر الإلكترونية المتعاونة معنا. ويتم ذلك دائمًا مع الحفاظ على أعلى مستويات السرية والأمان لبياناتكم، ولا يتم مشاركة أية معلومات يمكن من خلالها تحديد هويتكم الشخصية مع الأطراف الأخرى إلا وفقًا للإطار القانوني المعمول به.'
  const shareP2 = isEn
    ? 'We may share personal data with third parties — including contact data (name, address, phone, email), transaction data (orders and payment details), and site usage statistics (such as IP and visited pages) — to provide and improve our services. You can request deletion of your data by contacting us.'
    : 'نحن نقوم بمشاركة بياناتك الشخصية مع أطراف ثالثة — بما في ذلك بيانات الاتصال (كالاسم، العنوان، رقم الهاتف، والبريد الإلكتروني)، ومعلومات المعاملات (كالطلبات وتفاصيل الدفع)، وإحصائيات استخدام الموقع (مثل عنوان IP والصفحات التي تمت زيارتها) — بغرض تقديم وتحسين خدماتنا. يمكنك حذف بياناتك بالتواصل المباشر معنا ونحن نلتزم بحماية خصوصية معلوماتك.'

  const liabilityTitle = isEn ? 'Limitation of liability' : 'حدود المسؤولية'
  const liabilityItems = isEn
    ? [
        'Data protection: we do not guarantee any specific level of data protection and are not obligated to do so.',
        'Price changes: we reserve the right to change service prices at any time without prior notice.',
      ]
    : [
        'حماية البيانات: لا نتعهد بتحقيق مستوى حماية معين للبيانات ولسنا ملزمين بذلك.',
        'تغيير الأسعار: نحتفظ بالحق في تغيير أسعار خدماتنا في أي وقت ودون إشعار مسبق.',
      ]

  const changesTitle = isEn ? 'Changes to the policy and terms' : 'تعديلات على سياسة الخصوصية والشروط والأحكام'
  const changesText = isEn
    ? 'We may update this privacy policy and related terms at any time without prior notice. Changes take effect upon publication on our website. Please review this page regularly to stay informed.'
    : 'نحتفظ بالحق في تحديث وتعديل سياسة الخصوصية والشروط والأحكام المتعلقة بمنصة “تفادي” في أي وقت ودون الحاجة إلى إخطار مسبق. هذه التعديلات ستكون فعالة فور نشرها على الموقع الإلكتروني الخاص بنا. نشجع المستخدمين على مراجعة هذه الصفحة بانتظام لأية تغييرات لضمان استمرارية فهمهم وقبولهم لأية معلومات قد تؤثر على كيفية استخدامهم لمنصتنا.'

  const contactTitle = isEn ? 'Contact information' : 'معلومات التواصل'
  const contactIntro = isEn ? 'For inquiries about this privacy policy, contact us via:' : 'لأية استفسارات أو مخاوف بخصوص سياسة الخصوصية هذه، يمكنكم التواصل معنا عبر:'
  const websiteLabel = isEn ? 'Website:' : 'الموقع الإلكتروني:'
  const emailLabel = isEn ? 'Email:' : 'البريد الإلكتروني:'

  return (
    <div className="max-w-4xl mx-auto px-6 pt-48 pb-16">
      <h1 className="text-4xl font-bold text-white mb-8">{h1}</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{overviewTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{overviewText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{collectionTitle}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {collectionItems.map((it, idx) => (
            <li key={idx}>
              <strong>{it.b}</strong>{it.t}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{useTitle}</h2>
        <p className="text-gray-300 mb-2">{useIntro}</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {useItems.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{protectTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{protectText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{shareTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{shareP1}</p>
        <p className="text-gray-300 mt-2">{shareP2}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{liabilityTitle}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {liabilityItems.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{changesTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{changesText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{contactTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{contactIntro}</p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li><strong>{websiteLabel}</strong> <a href="https://www.tafadi.sa" className="underline hover:text-white">www.tafadi.sa</a></li>
          <li><strong>{emailLabel}</strong> <a href="mailto:Tafadise@gmail.com" className="underline hover:text-white">Tafadise@gmail.com</a></li>
        </ul>
      </section>
    </div>
  )
}
