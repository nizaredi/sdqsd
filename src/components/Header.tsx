import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F9FAFB]/90 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-neutral-900 hover:text-neutral-700 transition-colors"
          >
            Quickmail Solutions
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
            <a
              href="#services"
              className="hover:text-neutral-900 transition-colors hover:underline underline-offset-4"
            >
              Services
            </a>
            <a
              href="#process"
              className="hover:text-neutral-900 transition-colors hover:underline underline-offset-4"
            >
              Process
            </a>
            <a
              href="#standards"
              className="hover:text-neutral-900 transition-colors hover:underline underline-offset-4"
            >
              Standards
            </a>
            <a
              href="#estimator"
              className="hover:text-neutral-900 transition-colors hover:underline underline-offset-4"
            >
              ROI Estimator
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-900 transition-colors hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap shadow-xs"
            >
              <span>Start a project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-600 hover:text-neutral-900 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-5 space-y-3">
          <div className="flex flex-col space-y-2 pt-2 pb-3 border-b border-neutral-100 text-sm font-medium text-neutral-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-neutral-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-neutral-900 transition-colors"
            >
              Process
            </a>
            <a
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-neutral-900 transition-colors"
            >
              Standards & Compliance
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-neutral-900 transition-colors"
            >
              ROI Estimator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 hover:text-neutral-900 transition-colors"
            >
              Contact & Business Details
            </a>
          </div>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            <span>Start a project →</span>
          </button>
        </div>
      )}
    </header>
  );
};
