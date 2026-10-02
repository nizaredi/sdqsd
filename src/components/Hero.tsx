import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, BarChart2 } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onSeeServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onSeeServices }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Unboxed inline metadata tag */}
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-500 mb-4 tracking-wide">
              <span>Performance Marketing</span>
              <span aria-hidden="true">·</span>
              <span>Growth Architecture</span>
              <span aria-hidden="true">·</span>
              <span>Wyoming, USA</span>
            </div>

            {/* Main Heading from brief */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08] text-balance">
              Marketing that turns attention into customers.
            </h1>

            {/* Subheading from brief */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed max-w-2xl">
              We plan, run and measure marketing programs for growing businesses: finding the right prospects, converting them, and keeping them coming back.
            </p>

            {/* Action Buttons from brief */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onStartProject}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap shadow-xs cursor-pointer"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onSeeServices}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-neutral-800 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50 hover:border-neutral-400 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>See our services</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="mt-10 pt-8 border-t border-neutral-200/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>100% direct ad account billing</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>Strict consent & data privacy</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <TrendingUp className="w-4 h-4 text-neutral-900 shrink-0" />
                <span>Zero vanity metrics</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset & Proof Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl border border-neutral-200 bg-white p-2 shadow-xs overflow-hidden">
              <div className="relative aspect-16/10 rounded-lg overflow-hidden bg-neutral-100">
                <img
                  src="/src/assets/images/hero_marketing_office_1790957285380.jpg"
                  alt="Quickmail Solutions modern agency operations and client strategy room"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Sub-card live telemetry badge */}
              <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-semibold text-neutral-900">Current Q4 Acquisition Window</span>
                </div>
                <span className="text-neutral-500 font-mono tabular-nums">Active Campaigns</span>
              </div>

              {/* Quantitative Snapshot */}
              <div className="grid grid-cols-2 gap-px bg-neutral-200 border-t border-neutral-200">
                <div className="bg-white p-3.5">
                  <div className="text-xs text-neutral-500">Average ROAS</div>
                  <div className="text-xl font-bold text-neutral-900 font-mono tabular-nums">3.8x</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Across active accounts</div>
                </div>
                <div className="bg-white p-3.5">
                  <div className="text-xs text-neutral-500">Median CPL Drop</div>
                  <div className="text-xl font-bold text-neutral-900 font-mono tabular-nums">-42%</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">Within first 60 days</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Hero Proof Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-neutral-200">
          <div>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono tabular-nums tracking-tight">
              $14.2M+
            </div>
            <div className="text-xs font-medium text-neutral-700 mt-1">Client Pipeline Generated</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Attributed revenue across B2B & direct funnels</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono tabular-nums tracking-tight">
              -42%
            </div>
            <div className="text-xs font-medium text-neutral-700 mt-1">Median CPL Reduction</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Through negative matching & landing page A/B tests</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono tabular-nums tracking-tight">
              94%
            </div>
            <div className="text-xs font-medium text-neutral-700 mt-1">Client Retention Rate</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">Partnerships extending beyond 12-month marks</div>
          </div>

          <div>
            <div className="text-3xl font-extrabold text-neutral-950 font-mono tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs font-medium text-neutral-700 mt-1">Direct Account Ownership</div>
            <div className="text-[11px] text-neutral-500 mt-0.5">You own your data, ad accounts, and pixel assets</div>
          </div>
        </div>

      </div>
    </section>
  );
};
