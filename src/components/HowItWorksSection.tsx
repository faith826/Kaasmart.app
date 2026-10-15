import React, { useState } from 'react';
import { Search, MessageSquare, Sliders, CheckCircle2, ArrowRight } from 'lucide-react';
import { StepItem } from '../types';

export const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: StepItem[] = [
    {
      number: '01',
      title: 'Discover',
      subtitle: 'Explore the property information and services available on KaaSmart.',
      description:
        'Browse curated listings with verified details, transparent pricing, detailed amenity checklists, and high-resolution photographs. Filter by property category, bedrooms, location, and tenancy terms.',
      features: [
        'Detailed listing profiles with transparent specifications',
        'Direct inquiry buttons without paywall gating',
        'Verified property locations and neighborhood overviews',
      ],
    },
    {
      number: '02',
      title: 'Connect',
      subtitle: 'Engage with the relevant property owner, manager, or service through supported platform features.',
      description:
        'Initiate conversations directly within KaaSmart. Prospective tenants schedule viewings and submit tenancy inquiries, while landlords and managers review applications with clear contextual details.',
      features: [
        'Direct inquiry messaging between parties',
        'Structured viewing schedule requests',
        'Organised conversation threads for clarity and accountability',
      ],
    },
    {
      number: '03',
      title: 'Manage',
      subtitle: 'Use the available digital tools to organise and manage property-related activities.',
      description:
        'Transition seamlessly into day-to-day tenancy. Landlords monitor unit states and tenancy agreements, while tenants access lease agreements, log maintenance tickets, and track property records.',
      features: [
        'Centralised digital documents and tenancy agreements',
        'Routine maintenance logging with photo attachments',
        'Transparent operational activity history',
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#0B192C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-2">
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            How KaaSmart Works
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From your very first search to routine lease administration, KaaSmart streamlines the property journey in three straightforward phases.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl p-7 transition-all duration-200 border flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900 border-[#00D2C4] shadow-lg shadow-[#00D2C4]/10'
                    : 'bg-slate-900/50 hover:bg-slate-900 border-slate-800'
                }`}
              >
                <div>
                  {/* Step index badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-mono text-2xl font-extrabold ${
                        isCurrent ? 'text-[#00D2C4]' : 'text-slate-600'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isCurrent ? 'text-[#00D2C4]' : 'text-slate-500'
                      }`}
                    >
                      Step {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm font-medium text-[#00D2C4] mb-4 leading-snug">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {step.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2C4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Step Preview Panel */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-[#00D2C4] uppercase">Live Walkthrough</span>
              <h4 className="text-lg font-bold text-white">
                Step {steps[activeStep].number}: {steps[activeStep].title} in Action
              </h4>
            </div>
            <div className="flex items-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                    activeStep === i
                      ? 'bg-[#00D2C4] text-[#0B192C]'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#0B192C] border border-slate-800 rounded-xl p-5 sm:p-6">
            {activeStep === 0 && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Search className="w-4 h-4 text-[#00D2C4]" />
                    <span>Viewing: Available Residential Apartments in Prime Hubs</span>
                  </div>
                  <span className="text-slate-400 font-mono">Status: Verified Listings</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <p className="text-slate-400 mb-1">Modern 2-Bedroom Suite</p>
                    <p className="font-semibold text-white">Highland Gardens · Westlands</p>
                    <p className="text-[#00D2C4] font-mono mt-2 font-bold">KES 75,000 / mo</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <p className="text-slate-400 mb-1">Executive Studio Penthouse</p>
                    <p className="font-semibold text-white">Lumina Heights · Kilimani</p>
                    <p className="text-[#00D2C4] font-mono mt-2 font-bold">KES 55,000 / mo</p>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <p className="text-slate-400 mb-1">3-Bedroom Garden Duplex</p>
                    <p className="font-semibold text-white">The Courtyard · Lavington</p>
                    <p className="text-[#00D2C4] font-mono mt-2 font-bold">KES 120,000 / mo</p>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <MessageSquare className="w-4 h-4 text-[#00D2C4]" />
                    <span>Inquiry Channel: Tenant Direct to Property Manager</span>
                  </div>
                  <span className="text-slate-400 font-mono">Encrypted Connection</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 max-w-md">
                    <p className="text-[11px] text-slate-400 mb-1">Tenant Inquiry · Lumina Heights Unit 4B</p>
                    <p className="text-slate-200">
                      "Hello! I am interested in scheduling a viewing this Saturday at 2:00 PM. Is the unit pet-friendly?"
                    </p>
                  </div>
                  <div className="bg-[#122642] p-3 rounded-lg border border-[#00D2C4]/30 max-w-md ml-auto text-right">
                    <p className="text-[11px] text-[#00D2C4] mb-1">Property Manager Response</p>
                    <p className="text-slate-100">
                      "Confirmed! Saturday at 2:00 PM is booked. Small pets are warmly welcome with management registration."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Sliders className="w-4 h-4 text-[#00D2C4]" />
                    <span>Management Desk: Tenancy Overview & Unit Records</span>
                  </div>
                  <span className="text-[#00D2C4] font-mono">Active Lease Active</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-1">Active Tenancy Agreement</span>
                    <span className="text-white font-semibold block">Lease #KS-2026-88</span>
                    <span className="text-[11px] text-emerald-400 font-mono mt-1 block">Valid through Dec 2026</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-1">Maintenance Tracker</span>
                    <span className="text-white font-semibold block">Air Filter Replacement</span>
                    <span className="text-[11px] text-[#00D2C4] font-mono mt-1 block">Scheduled for Thursday</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-1">Payment Records</span>
                    <span className="text-white font-semibold block">Direct Receipt Ledger</span>
                    <span className="text-[11px] text-slate-300 font-mono mt-1 block">All dues up to date</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
