/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProofSection } from './components/ProofSection';
import { ProcessSection } from './components/ProcessSection';
import { StandardsSection } from './components/StandardsSection';
import { RoiEstimator } from './components/RoiEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModals, ModalType } from './components/LegalModals';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  // State for prefilling contact form from other interactive sections
  const [inquiryBudget, setInquiryBudget] = useState<string>('$5,000–$10,000/mo');
  const [inquiryServices, setInquiryServices] = useState<string[]>(['Lead Generation']);
  const [inquiryNotes, setInquiryNotes] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setInquiryServices((prev) => {
      if (prev.includes(serviceTitle)) return prev;
      return [...prev, serviceTitle];
    });
    setInquiryNotes((prev) => 
      prev ? `${prev}\nInterested in ${serviceTitle}.` : `Interested in exploring ${serviceTitle}.`
    );
    scrollToContact();
  };

  const handleApplyFromEstimator = (budget: string, services: string[], details: string) => {
    setInquiryBudget(budget);
    setInquiryServices(services);
    setInquiryNotes(details);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-neutral-900 font-sans flex flex-col selection:bg-neutral-900 selection:text-white">
      {/* Top Bar Navigation */}
      <Header onOpenContact={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onStartProject={scrollToContact}
          onSeeServices={scrollToServices}
        />

        {/* Services Section ("What we do") */}
        <ServicesSection
          onSelectServiceForInquiry={handleSelectServiceForInquiry}
        />

        {/* Quantified Evidence adjacent to Claims */}
        <ProofSection
          onStartProject={scrollToContact}
        />

        {/* Process Section ("Our Process") */}
        <ProcessSection
          onStartProject={scrollToContact}
        />

        {/* Standards & Compliance Section */}
        <StandardsSection
          onOpenDataCharter={() => setActiveModal('charter')}
        />

        {/* Interactive Growth & Budget Estimator */}
        <RoiEstimator
          onApplyToInquiry={handleApplyFromEstimator}
        />

        {/* Contact Section & Business Details Box */}
        <ContactSection
          initialBudget={inquiryBudget}
          initialServices={inquiryServices}
          initialNotes={inquiryNotes}
        />
      </main>

      {/* Footer */}
      <Footer onOpenModal={(type) => setActiveModal(type)} />

      {/* Functional Legal & Compliance Modals */}
      <LegalModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
