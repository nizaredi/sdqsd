import React, { useState } from 'react';
import { PROCESS_TIMELINE } from '../data/content';
import { CheckCircle2, Clock, Calendar, FileCheck, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartProject: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const [selectedPhaseId, setSelectedPhaseId] = useState<string>('week-1');
  const activePhase = PROCESS_TIMELINE.find((p) => p.id === selectedPhaseId) || PROCESS_TIMELINE[0];

  return (
    <section id="process" className="py-20 md:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Our Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            A milestone-driven execution sprint structured to eliminate wasted ad spend, install clean attribution, and achieve conversion velocity quickly.
          </p>
        </div>

        {/* Phase selector buttons / timeline indicator */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PROCESS_TIMELINE.map((step) => {
            const isSelected = step.id === selectedPhaseId;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setSelectedPhaseId(step.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-neutral-900 shadow-xs ring-1 ring-neutral-900'
                    : 'bg-white/60 border-neutral-200 hover:border-neutral-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-1.5 font-mono">
                  <span>PHASE {step.phase}</span>
                  <span className="font-sans font-semibold text-neutral-900">{step.timeframe}</span>
                </div>
                <div className="font-bold text-neutral-900 text-sm tracking-tight">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Expanded Active Phase Detailed View */}
        <div className="mt-8 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left detail description */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                <span className="font-mono text-neutral-900 font-semibold">{activePhase.timeframe}</span>
                <span>·</span>
                <span>{activePhase.title}</span>
              </div>

              <h3 className="text-2xl font-bold text-neutral-950">
                {activePhase.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {activePhase.summary}
              </p>

              {/* Milestones list */}
              <div className="mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">
                  Core Milestones Executed:
                </div>
                <div className="space-y-2.5">
                  {activePhase.milestones.map((milestone, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables summary */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3 flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-neutral-900" />
                  <span>Phase Deliverables Handed to You</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePhase.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-800"
                    >
                      {deliv}
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Commitment transparency */}
              <div className="mt-6 p-3.5 rounded-lg bg-neutral-100/80 border border-neutral-200 text-xs text-neutral-700 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-neutral-900">Your Team's Time Commitment: </span>
                  {activePhase.clientCommitment}
                </div>
              </div>
            </div>

            {/* Right side visual representation */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div className="rounded-xl overflow-hidden border border-neutral-200 aspect-4/3 bg-neutral-100">
                <img
                  src="/src/assets/images/creative_campaign_strategy_1790957309348.jpg"
                  alt="Quickmail Solutions strategy mapping and agile campaign execution"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 bg-neutral-50">
                <div className="text-xs font-semibold text-neutral-900 mb-1">
                  Ready to initiate Week 1?
                </div>
                <p className="text-xs text-neutral-600 mb-4 leading-relaxed">
                  We schedule kickoff calls within 48 hours of project approval and start discovery immediately.
                </p>
                <button
                  type="button"
                  onClick={onStartProject}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <span>Book Initial Discovery Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
