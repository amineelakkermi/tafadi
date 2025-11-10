'use client';

import Image from 'next/image';
import whatsapp from '../public/whatsapp.png';
import React from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const WhatsappButton: React.FC = () => {
  const handleWhatsappClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-11476353249/kSDF82KLD8_sdfjswQ',
        event_category: 'Contact',
        event_label: 'WhatsApp Click',
      });
    }
  };

  return (
    <a
      href="https://wa.me/966532697893"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="التواصل عبر واتساب"
      onClick={handleWhatsappClick}
      className="fixed bottom-3 right-0 z-[9999] flex items-center justify-center rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <Image src={whatsapp} alt="WhatsApp" width={90} height={90} />
    </a>
  );
};

export default WhatsappButton;
