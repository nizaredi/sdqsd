import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import {
  Target,
  Compass,
  Users,
  FileText,
  BarChart3,
  ArrowRight,
  Check,
  Layers,
  ChevronRight,
  X
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-5 h-5 text-neutral-900" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-neutral-900" />;
      case 'Users':
        return <Users className="w-5 h-5 text-neutral-900" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-neutral-900" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-neutral-900" />;
      default:
        return <Layers className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Intro */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            What we do
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            Every dollar allocated is tied to quantifiable growth economics: maximizing return on investment (<span className="font-semibold text-neutral-900">ROI</span>), systematically lowering your Cost Per Lead (<span className="font-semibold text-neutral-900">CPL</span>), engineering friction-free conversion rates, and extending long-term customer lifetime value (<span className="font-semibold text-neutral-900">LTV</span>).
          </p>
        </div>

        {/* Category Segmented Controls (Interactive Filter Buttons compliant with frontend-design) */}
        <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-lg border border-neutral-200/80 max-w-fit">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-white text-neutral-950 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            All Capabilities (5)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('acquisition')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCategory === 'acquisition'
                ? 'bg-white text-neutral-950 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            Lead Generation
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('strategy')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCategory === 'strategy'
                ? 'bg-white text-neutral-950 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            Marketing Strategy
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('retention')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCategory === 'retention'
                ? 'bg-white text-neutral-950 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            CRM & Retention
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('creative')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCategory === 'creative'
                ? 'bg-white text-neutral-950 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            Content & Copywriting
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory('analytics')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
              selectedCategory === 'analytics'
                ? 'bg-white text-neutral-950 shadow-xs'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            Analytics & Reporting
          </button>
        </div>

        {/* 2-Column / 3-Column Grid with Modern Hairline Border Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-6 bg-white rounded-xl border border-neutral-200 hover:border-neutral-400/80 transition-all hover:shadow-xs relative"
            >
              <div>
                {/* Header Lockup */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-neutral-50 border border-neutral-200 group-hover:bg-neutral-100 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-neutral-500 tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Deliverables summary list */}
                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-2">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                    Core Deliverables
                  </div>
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Pill discipline: clean unboxed inline text */}
                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <div className="text-[11px] font-semibold text-neutral-500 mb-1">
                    Primary Metrics:
                  </div>
                  <div className="text-xs text-neutral-600">
                    {service.metricsFocus.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveServiceDetail(service)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  <span>View specifications</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="text-xs font-medium text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer"
                >
                  Request scope →
                </button>
              </div>
            </div>
          ))}

          {/* Marquee Bento Card with Studio Visual Asset */}
          <div className="p-6 bg-neutral-900 text-white rounded-xl flex flex-col justify-between relative overflow-hidden lg:col-span-1">
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs text-neutral-400 mb-4 font-mono">
                <span>VERIFIABLE IMPACT</span>
                <span>ATTRIBUTION</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white">
                Full-Funnel Unit Economics
              </h3>
              <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                We bridge media spend directly into verified CRM revenue. No blended guesses, no click-farm vanity statistics.
              </p>

              <div className="mt-4 aspect-16/10 rounded-lg overflow-hidden border border-neutral-700/80 bg-neutral-800">
                <img
                  src="/src/assets/images/analytics_performance_screen_1790957297658.jpg"
                  alt="Quickmail Solutions analytics and attribution dashboard"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="relative z-10 mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Weekly sprint velocity</span>
              <button
                type="button"
                onClick={() => onSelectServiceForInquiry('Full-Funnel Marketing System')}
                className="text-xs font-semibold text-white hover:text-neutral-200 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Deploy full stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeServiceDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/50 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setActiveServiceDetail(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              <span>Service Specification</span>
              <span>·</span>
              <span>Quickmail Solutions LLC</span>
            </div>

            <h3 className="mt-2 text-2xl font-bold text-neutral-950">
              {activeServiceDetail.title}
            </h3>

            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              {activeServiceDetail.longDescription}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                Full Deliverables & Protocols
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {activeServiceDetail.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-neutral-50 rounded-lg border border-neutral-200/80 text-xs text-neutral-800 flex items-start gap-2.5"
                  >
                    <Check className="w-4 h-4 text-neutral-950 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 text-xs">
              <div>
                <span className="font-semibold text-neutral-900 block mb-1">Target Business Metrics</span>
                <span className="text-neutral-600 leading-normal">{activeServiceDetail.metricsFocus.join(' · ')}</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 block mb-1">Standard Tool Stack</span>
                <span className="text-neutral-600 leading-normal">{activeServiceDetail.keyTools.join(', ')}</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveServiceDetail(null)}
                className="px-4 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-900 cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeServiceDetail.title;
                  setActiveServiceDetail(null);
                  onSelectServiceForInquiry(title);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Include in Project Brief →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
