import React from 'react';
import { BUSINESS_INFO } from '../data/content';
import { ModalType } from './LegalModals';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-12 text-xs text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="text-base font-bold tracking-tight text-neutral-950 block">
              {BUSINESS_INFO.name}
            </a>
            <p className="text-neutral-600 max-w-sm leading-relaxed">
              Marketing that turns attention into customers. We engineer transparent, high-ROI lead generation funnels and retention architectures for expanding businesses.
            </p>
            <div className="pt-2 text-[11px] text-neutral-500 font-mono">
              WYOMING REGISTRATION · SHERIDAN, WY
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Framework
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-neutral-950 transition-colors">
                  What we do
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-neutral-950 transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#standards" className="hover:text-neutral-950 transition-colors">
                  Standards & Privacy
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-neutral-950 transition-colors">
                  ROI Estimator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-950 transition-colors">
                  Start a project
                </a>
              </li>
            </ul>
          </div>

          {/* Standards & Governance */}
          <div className="md:col-span-2 space-y-2.5">
            <div className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Governance
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('charter')}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  Client Data Sovereignty
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('privacy')}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('terms')}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <span className="text-neutral-400">GDPR & CCPA Compliant</span>
              </li>
            </ul>
          </div>

          {/* Contact Details summary */}
          <div className="md:col-span-3 space-y-2.5">
            <div className="font-bold uppercase tracking-wider text-neutral-900 text-[11px]">
              Business Office
            </div>
            <div className="flex items-start gap-2 text-neutral-700 leading-normal">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5 text-neutral-900" />
              <span>{BUSINESS_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-700 pt-1">
              <Mail className="w-3.5 h-3.5 shrink-0 text-neutral-900" />
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="font-mono text-neutral-900 hover:underline"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
            <div className="pt-2 text-[11px] text-neutral-500">
              Hours: Mon–Fri, 8am–6pm MT
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenModal('privacy')}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenModal('terms')}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Terms
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
