{/*
import Image from 'next/image';
import partner4 from '../public/partners/partner4.webp';
import partner5 from '../public/partners/partner5.webp';


export default function DownloadButton() {
  return (
    <div className="flex items-center gap-5">
      <a
        href="https://s.salla.sa/auth?intended_to=https%3A%2F%2Fs.salla.sa%2Fapps%2Finstall%2F1450881912%3Ftrial%3D1%26utm_source%3Dapps"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-3 w-48 h-16 rounded-full border border-white/15 bg-white/10 text-sm hover:bg-white/20 transition-colors"
      >
        تحميل عبر سلة
     
      </a>
      <a
        href="https://zid.sa/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-3 w-48 h-16 rounded-full border border-white/15 bg-white/10 text-sm hover:bg-white/20 transition-colors"
      >
        تحميل عبر زد

      </a>
    </div>
  );
}
  
*/}


import Image from 'next/image';
import partner4 from '../public/partners/partner4.webp';
import partner5 from '../public/partners/partner5.webp';
import zid from '../public/partners/zid.png';


export default function DownloadButton() {
  return (
    <div className="flex flex-wrap items-center gap-5 justify-center"> 
       <a
        href="https://s.salla.sa/auth?intended_to=https%3A%2F%2Fs.salla.sa%2Fapps%2Finstall%2F1450881912%3Ftrial%3D1%26utm_source%3Dapps"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-3 w-48 h-16 rounded-full border border-white/15 bg-white/10 text-sm hover:bg-white/20 transition-colors"
      >
        تحميل عبر 
      <Image src={partner4} width={50} height={50} alt="Salla" className="logo object-contain" />

      </a>

       <a
        href="https://zid.sa/"
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center justify-center gap-3 w-48 h-16 rounded-full border border-white/15 bg-white/10 text-sm hover:bg-white/20 transition-colors"
      >
        تحميل عبر 
      <Image src={zid} width={50} height={50} alt="Salla" className="logo object-contain" />

      </a>
      
    </div>
  );
}
