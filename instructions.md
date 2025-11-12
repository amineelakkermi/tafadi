#  موقع تفادي | Tafadi Website


---

## المتطلبات الأساسية

قبل البدء، تأكد من تثبيت الأدوات التالية على جهازك:

- [Node.js 20+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- حساب على [Vercel](https://vercel.com/) (اختياري للنشر)

---

##  التثبيت المحلي (Local Setup)

1. **استنساخ المشروع من GitHub**
   git clone https://github.com/USERNAME/tafadi.git
   cd tafadi

2. **تثبيت الحزم**
   
   npm install

3. **تشغيل المشروع محليًا**
   npm run dev
   ثم افتح المتصفح على:
   http://localhost:3000

---

##  بناء المشروع للإنتاج (Production Build)

إذا كنت تريد إنشاء نسخة جاهزة للنشر:

```bash
npm run build
npm start
```

سيتم تشغيل الموقع على:
```
http://localhost:3000
```

---

##  النشر على Vercel (موصى به)

1. أنشئ حسابًا على [Vercel](https://vercel.com/signup)
2. اضغط **New Project → Import Git Repository**
3. اختر المستودع (`tafadi`)
4. Vercel سيتعرف تلقائيًا على الإعدادات:
   - Framework: `Next.js`
   - Build Command: `next build`
   - Output Directory: `.next`
5. اضغط **Deploy**


##  ربط الدومين (Domain)

بعد النشر على Vercel:

1. افتح إعدادات المشروع → **Settings → Domains → Add Domain**
2. أضف الدومين:  
   ```
   tafadi.sa
   ```
3. حدّث DNS في لوحة Hetzner أو مزود الدومين كالتالي:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   ولقيمة www:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```


