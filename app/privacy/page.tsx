import React, { FC } from 'react'

const PrivacyPolicy: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-48 pb-16">
      {/* العنوان الرئيسي */}
      <h1 className="text-4xl font-bold text-white mb-8">سياسة الخصوصية</h1>

      {/* نظرة عامة */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">نظرة عامة</h2>
        <p className="text-gray-300 leading-relaxed">
          نحن في “تفادي”، نقدر أهمية خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح هذه السياسة كيف نجمع، نستخدم، ونحمي بياناتك لتقديم خدماتنا التي تهدف إلى تحسين تجربة الشراء بالحد من المعاملات غير الجادة.
        </p>
      </section>

      {/* جمع البيانات */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">جمع البيانات</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>بيانات الهوية:</strong> نجمع بيانات شخصية مثل الاسم، العنوان، ومعلومات الاتصال عندما تسجل في منصتنا.
          </li>
          <li>
            <strong>بيانات المعاملات:</strong> نجمع معلومات حول المعاملات التي تجريها، بما في ذلك تاريخ الشراء، القيمة، وتفاصيل المنتج.
          </li>
          <li>
            <strong>بيانات التحليل:</strong> نقوم بتحليل البيانات لتقييم سلوك الشراء ونسبة المرتجعات.
          </li>
        </ul>
      </section>

      {/* استخدام البيانات */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">استخدام البيانات</h2>
        <p className="text-gray-300 mb-2">نستخدم بياناتك للأغراض التالية:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>تقييم سلوك الشراء:</strong> لتحديد ما إذا كان يجب حجب خيار الدفع عند الاستلام بناءً على سجل المرتجعات أو حجب التحويل البنكي بناء على سجل محاولات التزوير.
          </li>
          <li>
            <strong>تحسين خدماتنا:</strong> لتطوير خدماتنا وتقديم تجربة مستخدم أفضل.
          </li>
          <li>
            <strong>التواصل معك:</strong> لإرسال تحديثات الخدمة والعروض الترويجية التي قد تهمك، بناءً على موافقتك.
          </li>
        </ul>
      </section>

      {/* حماية البيانات */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">حماية البيانات</h2>
        <p className="text-gray-300 leading-relaxed">
          نتخذ جميع الإجراءات المناسبة لحماية بياناتك ضد الوصول غير المصرح به أو التعديل أو الإفصاح أو الإتلاف. نستخدم تقنيات متقدمة لتأمين وتشفير البيانات أثناء النقل والتخزين.
        </p>
      </section>

      {/* مشاركة البيانات */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">مشاركة البيانات</h2>
        <p className="text-gray-300 leading-relaxed">
          في سعينا لتحسين جودة الخدمات المقدمة، قد نقوم بتحليل واستخدام البيانات التي نجمعها لفهم أنماط السلوكيات والتحديات التي تواجهها عمليات التجارة الإلكترونية. 
          هذا الفهم يمكن أن يسهم في تطوير وتنفيذ استراتيجيات وحلول تستفيد منها شبكتنا الواسعة من المتاجر الإلكترونية المتعاونة معنا.
          ويتم ذلك دائمًا مع الحفاظ على أعلى مستويات السرية والأمان لبياناتكم، ولا يتم مشاركة أية معلومات يمكن من خلالها تحديد هويتكم الشخصية مع الأطراف الأخرى إلا وفقًا للإطار القانوني المعمول به.
        </p>
        <p className="text-gray-300 mt-2">
          نحن نقوم بمشاركة بياناتك الشخصية مع أطراف ثالثة — بما في ذلك بيانات الاتصال (كالاسم، العنوان، رقم الهاتف، والبريد الإلكتروني)، ومعلومات المعاملات (كالطلبات وتفاصيل الدفع)، وإحصائيات استخدام الموقع (مثل عنوان IP والصفحات التي تمت زيارتها) — بغرض تقديم وتحسين خدماتنا. يمكنك حذف بياناتك بالتواصل المباشر معنا ونحن نلتزم بحماية خصوصية معلوماتك.
        </p>
      </section>

      {/* حدود المسؤولية */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">حدود المسؤولية</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li><strong>حماية البيانات:</strong> لا نتعهد بتحقيق مستوى حماية معين للبيانات ولسنا ملزمين بذلك.</li>
          <li><strong>تغيير الأسعار:</strong> نحتفظ بالحق في تغيير أسعار خدماتنا في أي وقت ودون إشعار مسبق.</li>
        </ul>
      </section>

      {/* تعديلات على السياسة */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">تعديلات على سياسة الخصوصية والشروط والأحكام</h2>
        <p className="text-gray-300 leading-relaxed">
          نحتفظ بالحق في تحديث وتعديل سياسة الخصوصية والشروط والأحكام المتعلقة بمنصة “تفادي” في أي وقت ودون الحاجة إلى إخطار مسبق. 
          هذه التعديلات ستكون فعالة فور نشرها على الموقع الإلكتروني الخاص بنا. نشجع المستخدمين على مراجعة هذه الصفحة بانتظام لأية تغييرات لضمان استمرارية فهمهم وقبولهم لأية معلومات قد تؤثر على كيفية استخدامهم لمنصتنا.
        </p>
      </section>

      {/* معلومات التواصل */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">معلومات التواصل</h2>
        <p className="text-gray-300 leading-relaxed">
          لأية استفسارات أو مخاوف بخصوص سياسة الخصوصية هذه، يمكنكم التواصل معنا عبر:
        </p>
        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
          <li><strong>الموقع الإلكتروني:</strong> <a href="https://www.tafadi.sa" className="underline hover:text-white">www.tafadi.sa</a></li>
          <li><strong>البريد الإلكتروني:</strong> <a href="mailto:Tafadise@gmail.com" className="underline hover:text-white">Tafadise@gmail.com</a></li>
        </ul>
      </section>
    </div>
  )
}

export default PrivacyPolicy
