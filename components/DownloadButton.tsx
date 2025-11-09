export default function DownloadButton() {
  return(
   <div className="flex items-center gap-5">
          <a
            href="https://s.salla.sa/auth?intended_to=https%3A%2F%2Fs.salla.sa%2Fapps%2Finstall%2F1450881912%3Ftrial%3D1%26utm_source%3Dapps"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm hover:bg-white/20 transition-colors"
          >
            تحميل عبر سلة
          </a>
          <a
            href="https://zid.sa/"
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm hover:bg-white/20 transition-colors"
          >
            تحميل عبر زد
          </a>
    </div>    
  )

}