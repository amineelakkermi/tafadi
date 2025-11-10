'use client';

import React from 'react';
import { LucidePhoneCall, MessageCircle, PhoneCall, PhoneCallIcon } from 'lucide-react';

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
      href="https://wa.me/966554413535"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="التواصل عبر واتساب"
      onClick={handleWhatsappClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
    >
      <LucidePhoneCall size={32} color="#fff" strokeWidth={2.5} />
    </a>
  );
};

export default WhatsappButton;
