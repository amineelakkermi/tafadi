'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

interface Partner {
  src: string;
  alt: string;
}

export default function Partners() {
  // Création dynamique des chemins pour 22 images
  const partners: Partner[] = Array.from({ length: 18 }, (_, i) => ({
    src: `/partner/partner${i + 1}.webp`,
    alt: `Partner ${i + 1}`,
  }));

  // Si tu veux un effet de boucle continue
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full bg-black/30 flex flex-col gap-5 justify-center items-center py-5 px-4 md:px-16
     text-center relative">
     
      <div className={styles.wrapper}>
        {duplicatedPartners.map((partner, index) => (
          <div
            key={index}
            className={`${styles.item} ${styles['item' + ((index % 18) + 1)]}`}
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              width={100}
              height={100}
              className="object-contain"
              priority={index < 8} // précharge les premières images pour fluidité
            />
          </div>
        ))}
      </div>
    </section>
  );
}
