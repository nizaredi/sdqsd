import React from 'react';
import { CASE_STUDIES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface ProofSectionProps {
  onStartProject: () => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({ onStartProject }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
              Verified Outcomes
            </div>
            <h2 className="text-3xl font-extrabold text-neutral-950 tracking-tight">
              Evidence of Impact
            </h2>
            <p className="mt-2 text-base text-neutral-600 max-w-xl">
              Concrete performance metrics achieved for growth-stage businesses through disciplined testing and attribution.
            </p>
          </div>

          <button
            type="button"
            onClick={onStartProject}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-neutral-700 transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>Discuss your target benchmarks</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Case Study Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="flex flex-col justify-between p-6 rounded-xl border border-neutral-200 bg-[#F9FAFB] hover:border-neutral-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-3 border-b border-neutral-200">
                  <span className="font-medium text-neutral-700">{study.clientIndustry}</span>
                  <span className="font-mono">{study.timeframe}</span>
                </div>

                {/* Primary Metric Highlight */}
                <div className="mt-6 mb-2">
                  <div className="text-4xl font-extrabold text-neutral-950 font-mono tabular-nums tracking-tight">
                    {study.primaryMetric}
                  </div>
                  <div className="text-xs font-semibold text-neutral-900 mt-1">
                    {study.primaryLabel}
                  </div>
                </div>

                {/* Secondary Metric */}
                <div className="mt-4 pt-3 border-t border-neutral-200/80">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-neutral-800 font-mono tabular-nums">
                      {study.secondaryMetric}
                    </span>
                    <span className="text-xs text-neutral-500">
                      {study.secondaryLabel}
                    </span>
                  </div>
                </div>

                {/* Brief narrative */}
                <div className="mt-6 space-y-3 text-xs leading-relaxed text-neutral-600">
                  <div>
                    <span className="font-semibold text-neutral-900">Challenge: </span>
                    {study.challenge}
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-900">Execution: </span>
                    {study.solution}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200 text-[11px] text-neutral-500 flex items-center justify-between">
                <span>Direct client attribution</span>
                <span className="font-mono text-neutral-400">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
