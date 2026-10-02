import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, Check, Sparkles } from 'lucide-react';

interface RoiEstimatorProps {
  onApplyToInquiry: (budget: string, services: string[], details: string) => void;
}

export const RoiEstimator: React.FC<RoiEstimatorProps> = ({ onApplyToInquiry }) => {
  const [adSpend, setAdSpend] = useState<number>(10000);
  const [industry, setIndustry] = useState<'b2b' | 'ecommerce' | 'services' | 'highticket'>('b2b');
  const [goal, setGoal] = useState<'lower_cpl' | 'scale_volume' | 'compound_ltv'>('lower_cpl');

  const calculations = useMemo(() => {
    // Model parameters based on real agency benchmarks
    let baselineCpl = 85;
    let conversionRate = 0.038;
    let averageDealValue = 4500;
    let channelMix = {
      search: 45,
      social: 35,
      crm: 20
    };

    if (industry === 'ecommerce') {
      baselineCpl = 32;
      conversionRate = 0.024;
      averageDealValue = 180;
      channelMix = { search: 30, social: 50, crm: 20 };
    } else if (industry === 'services') {
      baselineCpl = 65;
      conversionRate = 0.045;
      averageDealValue = 2800;
      channelMix = { search: 55, social: 25, crm: 20 };
    } else if (industry === 'highticket') {
      baselineCpl = 160;
      conversionRate = 0.028;
      averageDealValue = 18500;
      channelMix = { search: 40, social: 40, crm: 20 };
    }

    if (goal === 'lower_cpl') {
      baselineCpl = Math.round(baselineCpl * 0.72);
    } else if (goal === 'scale_volume') {
      baselineCpl = Math.round(baselineCpl * 0.95);
    }

    const estimatedLeads = Math.max(1, Math.round(adSpend / baselineCpl));
    const estimatedPipeline = Math.round(estimatedLeads * (industry === 'ecommerce' ? 1 : 0.22) * averageDealValue);
    const lowCpl = Math.round(baselineCpl * 0.88);
    const highCpl = Math.round(baselineCpl * 1.15);

    return {
      estimatedLeads,
      lowCpl,
      highCpl,
      estimatedPipeline,
      channelMix
    };
  }, [adSpend, industry, goal]);

  const handleApply = () => {
    const budgetStr = `$${adSpend.toLocaleString()}/mo`;
    const services = ['Lead Generation', 'Analytics & Reporting', 'Marketing Strategy'];
    const details = `Estimated based on ${industry.toUpperCase()} model aiming to ${
      goal === 'lower_cpl' ? 'Lower CPL' : goal === 'scale_volume' ? 'Scale Volume' : 'Compound Retention'
    }. Projected ~${calculations.estimatedLeads} qualified leads at $${calculations.lowCpl}-$${calculations.highCpl} CPL.`;

    onApplyToInquiry(budgetStr, services, details);
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Unit Economics
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Growth & Budget Estimator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Estimate anticipated lead velocity, projected CPL, and channel allocation based on empirical performance benchmarks.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-[#F9FAFB] rounded-2xl border border-neutral-200">
            
            {/* Monthly Spend Slider */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="ad-spend-slider" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Monthly Advertising Budget
                </label>
                <span className="font-mono text-xl font-bold text-neutral-950 tabular-nums">
                  ${adSpend.toLocaleString()}
                  <span className="text-xs text-neutral-500 font-sans font-normal"> / mo</span>
                </span>
              </div>
              <input
                id="ad-spend-slider"
                type="range"
                min={2500}
                max={50000}
                step={500}
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full mt-4 h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-2">
                <span>$2,500/mo</span>
                <span>$15,000/mo</span>
                <span>$30,000/mo</span>
                <span>$50,000+/mo</span>
              </div>
            </div>

            {/* Industry Model Selector */}
            <div className="mt-8 pt-6 border-t border-neutral-200">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-3">
                Business & Revenue Model
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'b2b', label: 'B2B & Enterprise' },
                  { id: 'services', label: 'Professional Services' },
                  { id: 'ecommerce', label: 'E-Commerce / D2C' },
                  { id: 'highticket', label: 'High-Ticket Specialty' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndustry(item.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-colors cursor-pointer ${
                      industry === item.id
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Core Objective Selector */}
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-3">
                Primary Campaign Objective
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'lower_cpl', label: 'Lower CPL' },
                  { id: 'scale_volume', label: 'Scale Volume' },
                  { id: 'compound_ltv', label: 'Compound LTV' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-colors cursor-pointer ${
                      goal === item.id
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Projection Results Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 bg-neutral-950 text-white rounded-2xl border border-neutral-900 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-neutral-400 font-mono pb-4 border-b border-neutral-800">
                <span>ESTIMATED RUNTIME BENCHMARKS</span>
                <span>ATTRIBUTABLE MODEL</span>
              </div>

              {/* 2x2 Metric Grid */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Est. Monthly Inquiries / Leads</div>
                  <div className="text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
                    ~{calculations.estimatedLeads}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">High-intent prospects</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <div className="text-xs text-neutral-400">Projected CPL Range</div>
                  <div className="text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
                    ${calculations.lowCpl}–${calculations.highCpl}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Direct attribution target</div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 col-span-2">
                  <div className="text-xs text-neutral-400">Projected Attributed Pipeline / GMV</div>
                  <div className="text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
                    ${calculations.estimatedPipeline.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">Based on estimated conversion & average transaction value</div>
                </div>
              </div>

              {/* Channel Split Recommendation */}
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Recommended Channel Allocation
                </div>
                
                {/* Visual bar */}
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-neutral-800">
                  <div
                    style={{ width: `${calculations.channelMix.search}%` }}
                    className="bg-white"
                    title={`Google Search Intent: ${calculations.channelMix.search}%`}
                  />
                  <div
                    style={{ width: `${calculations.channelMix.social}%` }}
                    className="bg-neutral-400"
                    title={`Paid Social Funnel: ${calculations.channelMix.social}%`}
                  />
                  <div
                    style={{ width: `${calculations.channelMix.crm}%` }}
                    className="bg-neutral-600"
                    title={`CRM & Lifecycle: ${calculations.channelMix.crm}%`}
                  />
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-neutral-300 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span>Search ({calculations.channelMix.search}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
                    <span>Social ({calculations.channelMix.social}%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-600"></span>
                    <span>CRM & Retention ({calculations.channelMix.crm}%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Transfer this forecast directly into your project scope.
              </span>
              <button
                type="button"
                onClick={handleApply}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-neutral-950 bg-white rounded-lg hover:bg-neutral-100 transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Apply to Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
