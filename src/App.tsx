/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { AudienceSection } from './components/AudienceSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlatformPreviewModal } from './components/PlatformPreviewModal';

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B192C] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Bar Navigation */}
      <Navbar onOpenPreview={openPreview} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* A. Hero Section */}
        <Hero onExplore={openPreview} onContact={scrollToContact} />

        {/* B. About Us */}
        <AboutSection />

        {/* C. Our Services */}
        <ServicesSection />

        {/* D. Who We Serve */}
        <AudienceSection />

        {/* E. How It Works */}
        <HowItWorksSection />

        {/* F. Why Choose KaaSmart? */}
        <WhyChooseSection />

        {/* G. Call to Action */}
        <CtaSection onExplore={openPreview} onContact={scrollToContact} />

        {/* H. Contact Us */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenPreview={openPreview} />

      {/* Interactive Platform Explorer Modal */}
      <PlatformPreviewModal
        isOpen={isPreviewOpen}
        onClose={closePreview}
        onGoToContact={scrollToContact}
      />
    </div>
  );
}
