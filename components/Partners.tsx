'use client';

import Image from 'next/image';
import styles from './Partners.module.css';


import partner1 from '../public/partners/partner1.webp'
import partner2 from '../public/partners/partner2.webp'
import partner3 from '../public/partners/partner3.webp'
import partner4 from '../public/partners/partner4.webp'
import partner5 from '../public/partners/partner5.webp'
import partner6 from '../public/partners/partner6.webp'
import partner7 from '../public/partners/partner7.webp'
import partner8 from '../public/partners/partner8.webp'
import partner9 from '../public/partners/partner9.webp'
import partner10 from '../public/partners/partner10.webp'
import partner11 from '../public/partners/partner11.webp'
import partner12 from '../public/partners/partner12.webp'
import partner13 from '../public/partners/partner13.webp'
import partner14 from '../public/partners/partner14.webp'
import partner15 from '../public/partners/partner15.webp'
import partner16 from '../public/partners/partner16.webp'
import partner17 from '../public/partners/partner17.webp'
import partner18 from '../public/partners/partner18.webp'

import Heading from './Heading';

const images = [
  partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8,
  partner9, partner10, partner11, partner12, partner13, partner14, partner15,
  partner16, partner17 , partner18
];

export default function Partners() {
  return (
    <section className={`relative lg:px-12 px-6 lg:py-12 py-6 bg-black/30`}>
    <div className="max-w-3xl mx-auto my-16">

      <div className='gradient-circle5' />

       <Heading
       as="h1"
       title={"أبرز عملاءنــا"}
                
       containerClassName="space-y-6"
       textClassName="text-gray-300 text-base sm:text-lg leading-relaxed"
       useDefaultParagraph={false}
       align="center"
       />
      </div> 
    <div className="relative
    bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] backdrop-blur-xl
    max-w-6xl mx-auto rounded-full bg-black/30 flex flex-col py-10 px-4 md:px-16 
    text-center relative">

      
     
       <div className={styles.wrapper}>
        {images.map((src, index) => (
          <div 
            key={index}
            className={`${styles.item} ${styles['item' + (index + 1)]}`}
          >
            <Image 
              src={src}
              alt={`Partner ${index + 1}`} 
              width={100} 
              height={100} 
              className="object-contain logo"
            />
          </div>
        ))}
      </div>


    </div>
    </section>
  );
}



