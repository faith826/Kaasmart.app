import React, { useState } from 'react';
import { KeyRound, Users, Briefcase, UserCheck, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { AudienceItem } from '../types';

export const AudienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('landlords');

  const audiences: AudienceItem[] = [
    {
      id: 'landlords',
      role: 'Property Owners & Landlords',
      title: 'Full Clarity & Oversight of Your Real Estate Assets',
      subtitle: 'Designed for individual and commercial landlords seeking structured, stress-free property administration.',
      benefits: [
        'Centralised tracking of unit occupancies, lease periods, and tenant profiles',
        'Direct, documented communication with tenants and maintenance managers',
        'Transparent digital log of rent dues, payment history, and routine expenses',
        'Prompt visibility into unit turnover and upcoming vacancies',
      ],
      keyActions: [
        'Publish verified property listings in minutes',
        'Access unit records from any smartphone or browser',
        'Receive maintenance and repair notices promptly',
      ],
      imageSrc: '/src/assets/images/property_management_desk_1792055300963.jpg',
    },
    {
      id: 'tenants',
      role: 'Tenants & Prospective Tenants',
      title: 'Seamless Property Discovery & Modern Renting Experience',
      subtitle: 'For seekers looking for quality spaces and existing tenants wanting direct, responsive communication.',
      benefits: [
        'Explore verified property listings with authentic photos and clear details',
        'Submit digital inquiries directly to property owners and verified managers',
        'Keep lease documents, agreements, and receipt records in one accessible location',
        'Lodge maintenance requests with clear progress tracking and direct updates',
      ],
      keyActions: [
        'Search and filter homes that match your exact lifestyle',
        'Book viewing appointments or inquire immediately',
        'Enjoy clear, documented records throughout your tenancy',
      ],
      imageSrc: '/src/assets/images/property_interior_living_1792055300063.jpg',
    },
    {
      id: 'managers',
      role: 'Property Managers',
      title: 'Operational Tools for Multi-Unit Management',
      subtitle: 'Engineered for property caretakers and management agencies handling multi-tenant estates.',
      benefits: [
        'Manage multiple buildings and commercial complexes under one digital system',
        'Coordinate routine building maintenance, service requests, and vendor logs',
        'Maintain clean audit trails for tenant correspondence and incident reports',
        'Eliminate tedious paper files with instant digital search and organisation',
      ],
      keyActions: [
        'Dispatch service tasks with structured progress timestamps',
        'Communicate building-wide circulars and announcements',
        'Streamline handover checklists and tenancy inspections',
      ],
      imageSrc: '/src/assets/images/property_management_desk_1792055300963.jpg',
    },
    {
      id: 'agents',
      role: 'Real Estate Agents',
      title: 'Digital Property Showcase & Lead Connection',
      subtitle: 'For licensed agents and brokers presenting residential and commercial listings to qualified seekers.',
      benefits: [
        'Showcase exclusive listings in a clean, high-visibility digital layout',
        'Direct inquiries routed straight to your communication channels',
        'Verified property specs that present your portfolio professionally',
        'Easy sharing via direct links to clients and prospects',
      ],
      keyActions: [
        'Publish detailed property profiles with verified amenities',
        'Quickly toggle listing availability as contracts progress',
        'Enhance client confidence with modern digital presentation',
      ],
      imageSrc: '/src/assets/images/smart_building_facade_1792055300837.jpg',
    },
    {
      id: 'investors',
      role: 'Property Investors',
      title: 'Portfolio Visibility & Performance Tracking',
      subtitle: 'For individuals and syndicates investing in residential complexes and rental portfolios.',
      benefits: [
        'Holistic view of portfolio occupancy rates and lease commitments',
        'Documented historical tenant turnover and operational overheads',
        'Standardised digital documentation protecting asset value',
        'Accessible digital reporting for accounting and strategy reviews',
      ],
      keyActions: [
        'Monitor portfolio occupancy health at a glance',
        'Verify lease compliance and contractual documentation',
        'Gain peace of mind with structured digital records',
      ],
      imageSrc: '/src/assets/images/hero_property_modern_1792055300938.jpg',
    },
  ];

  const currentAudience = audiences.find((a) => a.id === activeTab) || audiences[0];

  const getRoleIcon = (id: string) => {
    switch (id) {
      case 'landlords':
        return KeyRound;
      case 'tenants':
        return Users;
      case 'managers':
        return Briefcase;
      case 'agents':
        return UserCheck;
      case 'investors':
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="audience" className="py-20 bg-[#0B192C] border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-2">
            Target Audience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Who We Serve
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            KaaSmart is tailored to every participant in the real estate journey. Select your role to see how the platform transforms your property workflow.
          </p>
        </div>

        {/* Interactive Role Switcher Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {audiences.map((aud) => {
            const Icon = getRoleIcon(aud.id);
            const isActive = aud.id === activeTab;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#00D2C4] text-[#0B192C] shadow-md shadow-[#00D2C4]/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0B192C]' : 'text-[#00D2C4]'}`} />
                <span>{aud.role}</span>
              </button>
            );
          })}
        </div>

        {/* Audience Feature Showcase Box */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00D2C4] mb-3">
                <span>Designed for</span>
                <span>·</span>
                <span className="text-white font-medium">{currentAudience.role}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {currentAudience.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
                {currentAudience.subtitle}
              </p>

              {/* Key Benefits */}
              <div className="space-y-3.5 mb-8">
                {currentAudience.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2C4] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action takeaways */}
              <div className="p-4 rounded-xl bg-[#0B192C] border border-slate-800/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Immediate Platform Value:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentAudience.keyActions.map((action, i) => (
                    <span
                      key={i}
                      className="text-xs text-slate-300 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/50"
                    >
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-lg aspect-[4/3]">
                <img
                  src={currentAudience.imageSrc}
                  alt={currentAudience.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-transparent to-transparent flex items-end p-5">
                  <div className="flex items-center gap-2 text-xs font-medium text-white">
                    <span className="text-[#00D2C4]">KaaSmart</span>
                    <span>·</span>
                    <span>Simplified for {currentAudience.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
