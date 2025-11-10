'use client';

import React from 'react';
import { Send } from 'lucide-react';

type Locale = 'ar' | 'en'

const EmailScrolling: React.FC<{ locale?: Locale }> = ({ locale = 'ar' }) => {
  const text = locale === 'en' ? 'Install Tafadi now' : 'حمل تفادي الآن';
  const items = Array.from({ length: 18 }, () => text);

  return (
    <div className="relative w-full overflow-hidden select-none py-16 fade-edges border-t border-gray-600">
      <div className="track" aria-hidden>
        {items.map((item, index) => (
          <span key={`a-${index}`} className="chunk">
            <a
              className='flex gap-5 items-center'
              href="https://s.salla.sa/auth?intended_to=https%3A%2F%2Fs.salla.sa%2Fapps%2Finstall%2F1450881912%3Ftrial%3D1%26utm_source%3Dapps"
              target='_blank'
              rel="noreferrer noopener"
            >
              <span className="label text-gray-300">{item}</span>
              <span className="plane-wrap" aria-hidden>
                <Send className="plane" />
              </span>
            </a>
          </span>
        ))}
      </div>
      <div className="track" aria-hidden>
        {items.map((item, index) => (
          <span key={`b-${index}`} className="chunk">
            <a
              className='flex gap-5 items-center'
              href="https://s.salla.sa/auth?intended_to=https%3A%2F%2Fs.salla.sa%2Fapps%2Finstall%2F1450881912%3Ftrial%3D1%26utm_source%3Dapps"
              target='_blank'
              rel="noreferrer noopener"
            >
              <span className="label text-gray-300">{item}</span>
              <span className="plane-wrap" aria-hidden>
                <Send className="plane" />
              </span>
            </a>
          </span>
        ))}
      </div>

      <style jsx>{`
        .track { position: absolute; left: 0; top: 50%; display: inline-flex; gap: 3.5rem; width: max-content; transform: translateY(-50%); animation: scroll-x 60s linear infinite; white-space: nowrap; will-change: transform; }
        .chunk { display: inline-flex; align-items: center; gap: 1.25rem; }
        .label { font-weight: 900; font-size: clamp(2.75rem, 6vw, 2.25rem); letter-spacing: 0.01em; line-height: 1; text-shadow: 0 2px 0 rgba(0,0,0,0.35), 0 0 14px rgba(168,85,247,0.18); }
        .plane-wrap { display: inline-flex; align-items: center; justify-content: center; width: clamp(1.75rem, 5vw, 3rem); height: clamp(1.75rem, 5vw, 3rem); border-radius: 9999px; background: radial-gradient(circle at 30% 30%, rgba(168,85,247,0.25), rgba(124,58,237,0.15) 60%, rgba(124,58,237,0.05) 100%); border: 1px solid rgba(168,85,247,0.35); box-shadow: 0 2px 12px rgba(168,85,247,0.25), inset 0 0 12px rgba(168,85,247,0.18); transform: translateZ(0); transition: transform 300ms ease, box-shadow 300ms ease, background 300ms ease; animation: plane-pulse 2.2s ease-in-out infinite; }
        .plane { width: 60%; height: 60%; color: rgba(255,255,255,0.95); filter: drop-shadow(0 0 6px rgba(168,85,247,0.35)); transition: transform 300ms ease; }
        .chunk:hover .plane-wrap, a:focus-visible .plane-wrap { transform: scale(1.08) rotate(6deg); box-shadow: 0 4px 18px rgba(168,85,247,0.35), inset 0 0 18px rgba(168,85,247,0.28); }
        .chunk:hover .plane, a:focus-visible .plane { transform: rotate(12deg) translateY(-1px); }
        @keyframes plane-pulse { 0%, 100% { box-shadow: 0 2px 12px rgba(168,85,247,0.22), inset 0 0 10px rgba(168,85,247,0.16); } 50% { box-shadow: 0 4px 16px rgba(168,85,247,0.35), inset 0 0 16px rgba(168,85,247,0.26); } }
        .fade-edges { -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0)); mask-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0)); }
        @keyframes scroll-x { from { transform: translate(0, -50%); } to { transform: translate(-50%, -50%); } }
      `}</style>
    </div>
  );
};

export default EmailScrolling;


