import React from 'react';
import { STANDARDS_PILLARS } from '../data/content';
import { ShieldCheck, Lock, Check, FileText } from 'lucide-react';

interface StandardsSectionProps {
  onOpenDataCharter: () => void;
}

export const StandardsSection: React.FC<StandardsSectionProps> = ({ onOpenDataCharter }) => {
  return (
    <section id="standards" className="py-20 md:py-28 bg-[#F9FAFB] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Integrity & Trust
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Standards & Compliance
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
              We hold your brand reputation to the highest standard. We operate exclusively with consent-based funnels, strict privacy controls, and 100% client data sovereignty.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenDataCharter}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-900 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-700" />
            <span>Read Client Data Charter</span>
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {STANDARDS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-700">
                    <ShieldCheck className="w-4 h-4 text-neutral-900" />
                    <span>GOVERNANCE PROTOCOL</span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950">
                  {pillar.title}
                </h3>

                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="mt-6 pt-5 border-t border-neutral-100 space-y-2.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Operating Commitments:
                  </div>
                  {pillar.commitments.map((comm, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-neutral-950 shrink-0 mt-0.5" />
                      <span>{comm}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Audited on every campaign</span>
                <span className="font-mono text-neutral-700">ENFORCED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Accountability Box */}
        <div className="mt-12 p-6 rounded-xl border border-neutral-200 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-neutral-100 text-neutral-900">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-neutral-950">
                Direct Ad Account Integrity Guarantee
              </div>
              <div className="text-xs text-neutral-600">
                You never pay ad costs through agency markups. Media invoices are billed directly to your corporate payment method with zero intermediary surcharges.
              </div>
            </div>
          </div>
          <span className="text-xs font-mono text-neutral-500 shrink-0">
            TRANSPARENT LEDGER
          </span>
        </div>

      </div>
    </section>
  );
};
