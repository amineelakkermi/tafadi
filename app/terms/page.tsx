import React from 'react'
import { headers } from 'next/headers'

export default async function TermsAndConditions() {
  const cookieHeader = (await headers()).get('cookie') || ''
  const cookieLocale = cookieHeader.split('; ').find(c => c.startsWith('locale='))?.split('=')[1]
  const locale = cookieLocale === 'en' ? 'en' : 'ar'
  const isEn = locale === 'en'

  const h1 = isEn ? 'Terms of Use' : 'شروط الاستخدام'

  const introP1 = isEn
    ? 'Dear customer, thank you for visiting Tafadi. These terms and conditions protect you and Tafadi, and apply to any user of this website or application. Please read them carefully before using our services. Your use of Tafadi constitutes acceptance of these terms, along with related policies such as the Privacy Policy and the Cancellation/Refund Policy.'
    : 'عميلنا العزيز، شكرًا لزيارتك لخدمة تفادي. تُوفر هذه الشروط والأحكام الحماية لك ولخدمة تفادي، ولأي مستخدم لهذا الموقع أو التطبيق. نرجو قراءة هذه الشروط بعناية قبل الاستفادة من خدماتنا. استخدامك لموقع أو تطبيق تفادي يُعد موافقة منك على الالتزام بالشروط المذكورة أدناه، بالإضافة إلى السياسات المرتبطة كسياسة الخصوصية وسياسة الإلغاء والاسترجاع.'
  const introP2 = isEn
    ? 'If you object to any clause, please contact us before using the service. We reserve the right to modify these terms at any time without prior notice. Changes become effective upon publication on the site. Please review the terms periodically.'
    : 'إذا كنت تعترض على أي بند من هذه الشروط، يرجى التواصل معنا قبل استخدام الخدمة. نحتفظ بالحق في تعديل هذه الشروط في أي وقت دون إشعار مسبق، وتصبح التعديلات نافذة فور نشرها على الموقع. يُرجى مراجعة الشروط دوريًّا لتكون على علم بأي تغييرات.'

  const ipTitle = isEn ? 'Intellectual property' : 'حقوق الملكية الفكرية'
  const ipText = isEn
    ? 'All content, including text, designs, logos, icons, and images, is owned by Tafadi and protected by intellectual property laws in Saudi Arabia. Copying, modifying, or using any content for commercial purposes without prior written permission is prohibited.'
    : 'جميع المحتويات، بما في ذلك النصوص والتصميمات والشعارات والرموز والصور، هي ملك لخدمة تفادي ومحمية بموجب قوانين حقوق الملكية الفكرية في المملكة العربية السعودية. يُمنع نسخ أو تعديل أو استخدام أي من هذه المحتويات لأغراض تجارية دون إذن خطي مسبق.'

  const thirdTitle = isEn ? 'Third-party engagement' : 'التعامل مع الأطراف الثالثة'
  const thirdText = isEn
    ? 'Tafadi may engage third parties for additional marketing, hosting, security, or other services. We will address issues with such parties but are not liable for failures or breaches arising from them.'
    : 'قد تستعين خدمة تفادي بأطراف ثالثة على سبيل المثال لا الحصر، لتقديم خدمات تسويقية إضافية أو استضافة الموقع أو تشفير وحماية أو تسويق. نحن نلتزم بالتعامل مع أي مشكلة قد تطرأ مع هذه الجهات، ولكن لا نتحمل مسؤولية الإخفاقات الناتجة أو الانتهاكات التي تحصل من خلالها.'

  const brandingTitle = isEn ? 'Commercial use of client name' : 'الاستخدام التجاري لاسم العميل'
  const brandingText = isEn
    ? 'Tafadi reserves the right to use the client’s name or logo for marketing on the website, social media platforms, or other channels upon installing Tafadi.'
    : 'تحتفظ خدمة تفادي بالحق في استخدام اسم العميل أو شعاره لأغراض تسويقية داخل الموقع، ومنصات التواصل الاجتماعي، أو أي وسيلة نشر أخرى، عند تثبيته لخدمة تفادي.'

  const refundTitle = isEn ? 'Refund and cancellation policy' : 'سياسة الاسترجاع والإلغاء'
  const refundText = isEn
    ? 'Tafadi subscriptions cannot be canceled or refunded after the amount is deducted and the trial period ends.'
    : 'لا يمكن إلغاء اشتراك تفادي أو استرجاعه بعد خصم المبلغ وانتهاء الفترة التجريبية.'

  const privacyTitle = isEn ? 'Privacy policy' : 'سياسة الخصوصية'
  const privacyText = isEn
    ? 'Tafadi is committed to protecting customer data. The privacy policy is continuously updated to ensure security. Please review the Privacy Policy page for details.'
    : 'تلتزم خدمة تفادي بحماية بيانات العملاء. تخضع سياسة الخصوصية للتحديث المستمر لضمان أمان المعلومات. يُرجى مراجعة صفحة سياسة الخصوصية للحصول على التفاصيل.'

  const purchaseTitle = isEn ? 'Purchases' : 'عمليات الشراء'
  const purchaseItems = isEn
    ? [
        'Tafadi may refuse or cancel any order for reasons including: out of stock, pricing errors, or suspected fraud.',
        'Customer notification is not required if an order is canceled.',
        'Published prices are subject to change without prior notice.',
      ]
    : [
        'يحق لتفادي رفض أو إلغاء أي طلب لأسباب تشمل: نفاد المنتج، أخطاء في التسعير، أو الاشتباه في الاحتيال.',
        'ولايلزم إخطار العميل في حالة إلغاء الطلب.',
        'الأسعار المُعلنة قابلة للتغيير دون إشعار مسبق.',
      ]

  const servicesTitle = isEn ? 'Description of services' : 'وصف الخدمات'
  const servicesText = isEn
    ? 'We strive to describe all services accurately; however, descriptions and images may not fully match the actual service due to updates or changes.'
    : 'نسعى لتقديم وصف دقيق لجميع الخدمات، لكن قد لا تكون الأوصاف والصور مطابقة تمامًا مع الخدمة الفعلية بسبب التحديثات أو التعديلات.'

  const promoTitle = isEn ? 'Discount code policy' : 'سياسة أكواد الخصم'
  const promoText = isEn
    ? 'If a discount code is not working, it means it has expired and cannot be claimed.'
    : 'إذا كان كود الخصم غير فعّال، فهذا يعني أن صلاحيته انتهت ولا يمكن المطالبة باستخدامه.'

  const disclaimerTitle = isEn ? 'Disclaimer' : 'إخلاء المسؤولية'
  const disclaimerText = isEn
    ? 'Your use of the Tafadi website or app is at your own risk. We do not guarantee uninterrupted service or error-free operation. Tafadi is not responsible for any damages to stores installing Tafadi, including but not limited to damages from hiding COD/bank transfer or technical faults.'
    : 'استخدامك لموقع أو تطبيق تفادي يكون على مسؤوليتك الشخصية. لا نضمن استمرارية الخدمة دون انقطاع أو خلوها من الأخطاء. تفادي غير مسؤولة عن أي أضرار قد تحدث للمتجر الإلكتروني الذي ثبت تفادي، على سبيل المثال لا الحصر الأضرار الناتجة عن حجب الدفع عند الاستلام أو التحويل البنكي أو أي أضرار تحدث بسبب خلل تقني أو خلل في عمل تفادي.'

  const lawTitle = isEn ? 'Governing law and jurisdiction' : 'القانون والتشريع الحاكمان'
  const lawText = isEn
    ? 'These terms and conditions are governed by the laws of the Kingdom of Saudi Arabia. Any dispute arising shall be settled in the courts of KSA. These terms constitute the full agreement and supersede any prior related agreements.'
    : 'تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية، وأي نزاع ينشأ عنها يتم تسويته في محاكم المملكة. تمثل هذه الشروط والأحكام الاتفاق الكامل بينك وبين خدمة تفادي، وتحل محل أي اتفاقيات سابقة ذات صلة.'

  return (
    <div className="max-w-4xl mx-auto px-6 pt-48 pb-16">
      <h1 className="text-4xl font-bold text-white mb-8">{h1}</h1>

      <section className="mb-8">
        <p className="text-gray-300 leading-relaxed">{introP1}</p>
        <p className="text-gray-300 leading-relaxed mt-2">{introP2}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{ipTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{ipText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{thirdTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{thirdText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{brandingTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{brandingText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{refundTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{refundText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{privacyTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{privacyText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{purchaseTitle}</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {purchaseItems.map((t, i) => (<li key={i}>{t}</li>))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{servicesTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{servicesText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{promoTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{promoText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{disclaimerTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{disclaimerText}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">{lawTitle}</h2>
        <p className="text-gray-300 leading-relaxed">{lawText}</p>
      </section>
    </div>
  )
}
