import React, { useState } from 'react';
import {
  Search,
  Building,
  MessageSquare,
  LayoutGrid,
  FileText,
  Cpu,
  ChevronRight,
  CheckCircle2,
  Clock,
  X
} from 'lucide-react';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 'discovery',
      title: 'Property Discovery',
      description: 'Help users explore available properties and access relevant property information.',
      iconName: 'Search',
      status: 'active',
      details: [
        'Explore verified residential and commercial units',
        'Review comprehensive property details, pricing, and locations',
        'Direct inquiry submission without middlemen delay',
        'Intuitive photo galleries and feature overviews',
      ],
    },
    {
      id: 'management',
      title: 'Property Management',
      description: 'Support property owners and managers in organising property-related information and activities.',
      iconName: 'Building',
      status: 'active',
      details: [
        'Centralised property and unit inventory tracking',
        'Lease timeline management and renewal visibility',
        'Structured maintenance logging and status tracking',
        'Consolidated record access across multiple buildings',
      ],
    },
    {
      id: 'connections',
      title: 'Landlord & Tenant Connections',
      description: 'Make communication and property-related interactions easier.',
      iconName: 'MessageSquare',
      status: 'active',
      details: [
        'Direct messaging channel between tenants and managers',
        'Clear issue reporting with contextual notes',
        'Transparent updates on property inquiries and requests',
        'Reduced friction and prompt response cycles',
      ],
    },
    {
      id: 'listings',
      title: 'Property Listings',
      description: 'Provide a digital space for showcasing available properties.',
      iconName: 'LayoutGrid',
      status: 'active',
      details: [
        'High-visibility digital showcase for available spaces',
        'Structured property profiles with verified amenities',
        'Easy listing status management (Available, Pending, Leased)',
        'Accessible digital link sharing across social and messaging channels',
      ],
    },
    {
      id: 'administration',
      title: 'Digital Property Administration',
      description: 'Help organise records, property details, and routine administrative tasks.',
      iconName: 'FileText',
      status: 'active',
      details: [
        'Organised digital repository for tenancy documentation',
        'Payment schedules, receipt logging, and rent records',
        'Inspection notes and condition reports',
        'Eliminates lost paperwork and misplaced physical files',
      ],
    },
    {
      id: 'smart-solutions',
      title: 'Smart Property Solutions',
      description: 'Introduce digital tools that improve convenience and operational efficiency.',
      iconName: 'Cpu',
      status: 'coming_soon',
      details: [
        'Automated digital rent reconciliation gateways (Planned)',
        'Smart utility consumption monitoring integrations (Coming Soon)',
        'Predictive maintenance alert modules (Under Development)',
        'Integrated digital key access authorization (Roadmap)',
      ],
    },
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return Search;
      case 'Building':
        return Building;
      case 'MessageSquare':
        return MessageSquare;
      case 'LayoutGrid':
        return LayoutGrid;
      case 'FileText':
        return FileText;
      case 'Cpu':
      default:
        return Cpu;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#0B192C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-2">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Our Platform Services
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            KaaSmart equips real estate stakeholders with dedicated digital capabilities, from first discovery to long-term day-to-day property administration.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const isComingSoon = service.status === 'coming_soon';

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`group relative bg-slate-900/60 hover:bg-slate-900 border rounded-2xl p-7 transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isComingSoon
                    ? 'border-slate-800/80 hover:border-slate-700'
                    : 'border-slate-800 hover:border-[#00D2C4]/50 shadow-sm hover:shadow-lg hover:shadow-[#00D2C4]/5'
                }`}
              >
                <div>
                  {/* Top row: Number index & Status unboxed text */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-slate-500 font-semibold">
                      0{index + 1}.
                    </span>
                    {isComingSoon ? (
                      <span className="text-[11px] font-medium text-amber-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-[#00D2C4] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Active Feature
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#0B192C] border border-slate-700/80 flex items-center justify-center text-[#00D2C4] mb-5 group-hover:scale-105 group-hover:border-[#00D2C4]/40 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00D2C4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom link affordance */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
                  <span>View feature scope</span>
                  <ChevronRight className="w-4 h-4 text-[#00D2C4] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#0B192C] border border-slate-700 max-w-lg w-full rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#00D2C4] mb-2">
              <span>KaaSmart Platform Capabilities</span>
              <span>·</span>
              <span>{selectedService.status === 'coming_soon' ? 'Roadmap' : 'Operational'}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedService.title}
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="border-t border-slate-800 pt-4 mb-6">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Key Functional Highlights
              </h4>
              <ul className="space-y-2.5">
                {selectedService.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00D2C4] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 text-xs font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] rounded-xl transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
