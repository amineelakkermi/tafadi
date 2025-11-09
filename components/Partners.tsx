'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

export default function Partners() {
  return (
    <section className="w-full flex flex-col py-10 px-4 md:px-16 bg-white text-center relative">
      
      
      <div className={styles.wrapper}>
        {Array.from({ length: 18 }, (_, index) => (
          <div 
            key={index}
            className={`${styles.item} ${styles['item' + (index + 1)]}`}
          >
            <Image 
              src={`/partners/partner${index + 1}.webp`} 
              alt={`Partner ${index + 1}`} 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
