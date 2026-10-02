import React from 'react';
import { X, ShieldCheck, FileText, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export type ModalType = 'privacy' | 'terms' | 'charter' | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl border border-neutral-200 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-neutral-900" />
            <h3 className="text-lg font-bold text-neutral-950">
              {activeModal === 'privacy' && 'Privacy Policy & Data Protection'}
              {activeModal === 'terms' && 'Terms of Service & Agency Standards'}
              {activeModal === 'charter' && 'Client Data Sovereignty & Ownership Charter'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed">
          <div className="text-[11px] font-mono text-neutral-400">
            QUICKMAIL SOLUTIONS LLC · SHERIDAN, WYOMING · EFFECTIVE 2026
          </div>

          {activeModal === 'privacy' && (
            <>
              <p>
                At Quickmail Solutions LLC, we hold consumer privacy and regulatory governance as foundational design constraints. This Privacy Policy details how we handle information collected on this website and in client acquisition architectures.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-4">1. Consent-Based Lead Capture</h4>
              <p>
                We do not harvest unverified contact details, buy third-party cold lists, or utilize deceptive lead magnets. All leads generated on behalf of our clients or our own agency require clear, unbundled affirmative consent in compliance with the FTC, CAN-SPAM Act, and CASL regulations.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-4">2. Cookies & Server-Side Tracking</h4>
              <p>
                We prioritize first-party server-side tracking (Conversions API and server GTM) to provide accurate attribution without invasive cross-site behavioral surveillance. User opt-outs via Global Privacy Control (GPC) and cookie banners are strictly honored.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-4">3. Data Retention & Deletion</h4>
              <p>
                Project inquiries and marketing metrics are retained strictly for engagement scoping and reporting. You may request immediate removal or export of your submitted information by writing to <span className="font-mono text-neutral-900">{BUSINESS_INFO.email}</span>.
              </p>
            </>
          )}

          {activeModal === 'terms' && (
            <>
              <p>
                These Terms of Service govern the engagement framework between Quickmail Solutions LLC ("Agency") and client entities ("Client").
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-4">1. Performance & Scope Management</h4>
              <p>
                All marketing programs, ad campaigns, and landing page deployments operate under structured Statements of Work (SOW). Optimization iterations are conducted on continuous weekly sprint cadences with transparent reporting delivered monthly.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-4">2. Direct Billing & Media Spend</h4>
              <p>
                Clients maintain direct billing arrangements with all third-party advertising platforms (including Google Ads, Meta Ads, and LinkedIn). Quickmail Solutions LLC does not mark up media expenditures or hold client ad spend in escrow.
              </p>
              <h4 className="font-bold text-neutral-900 text-sm mt-4">3. Mutual Confidentiality</h4>
              <p>
                Proprietary business metrics, conversion figures, customer lists, and strategic roadmaps shared during audits and live engagements remain strictly confidential under mutual non-disclosure obligations.
              </p>
            </>
          )}

          {activeModal === 'charter' && (
            <>
              <p>
                The Quickmail Solutions Client Data Sovereignty Charter is our formal pledge that your agency partnership will never build proprietary lock-in at your expense.
              </p>
              <div className="space-y-3 mt-4">
                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-bold text-neutral-900 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>Your Ad Accounts, Your Billing</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Campaigns are configured inside your corporate Business Managers. You retain Owner-level permissions at all times.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-bold text-neutral-900 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>Perpetual Audience & Pixel Rights</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Every custom audience, conversion signal, and tracking event generated remains permanently within your ecosystem.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                  <div className="font-bold text-neutral-900 text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>Zero Exit Handover Penalties</span>
                  </div>
                  <p className="text-xs text-neutral-600 mt-1">
                    Should you decide to bring marketing in-house, we provide comprehensive documentation and smooth operational handover.
                  </p>
                </div>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-neutral-200 text-neutral-500 text-xs">
            For legal inquiries, contact: {BUSINESS_INFO.name}, {BUSINESS_INFO.address}. Email: {BUSINESS_INFO.email}.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
