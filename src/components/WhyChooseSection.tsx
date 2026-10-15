import React from 'react';
import {
  Smartphone,
  FolderKanban,
  MessageSquareShare,
  SlidersHorizontal,
  Sparkles,
  Layers
} from 'lucide-react';

export const WhyChooseSection: React.FC = () => {
  const reasons = [
    {
      title: 'Convenient Digital Access',
      description:
        'Access your properties, documents, and communication threads anytime, anywhere from any smartphone, tablet, or desktop browser.',
      icon: Smartphone,
    },
    {
      title: 'Organised Property Information',
      description:
        'Eliminate misplaced paperwork and fragmented chats. Maintain structured unit inventories, lease agreements, and payment records in one place.',
      icon: FolderKanban,
    },
    {
      title: 'Improved Communication',
      description:
        'Direct, contextual messaging between landlords, property managers, and tenants keeps expectations clear and resolutions fast.',
      icon: MessageSquareShare,
    },
    {
      title: 'Simplified Property Processes',
      description:
        'Cut out unnecessary bureaucracy. From listing a vacancy to lodging a routine repair, every routine task follows a clean, intuitive path.',
      icon: SlidersHorizontal,
    },
    {
      title: 'Modern, User-Friendly Experience',
      description:
        'Designed with human-centred software standards, ensuring quick onboarding for tech-savvy investors and first-time tenants alike.',
      icon: Sparkles,
    },
    {
      title: 'Technology Built for Real Estate',
      description:
        'Purposefully constructed around real property workflows and genuine stakeholder requirements, rather than generic spreadsheets.',
      icon: Layers,
    },
  ];

  return (
    <section id="why-choose" className="py-20 bg-[#0B192C] border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-2">
            The KaaSmart Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Why Choose KaaSmart?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            By digitising property workflows, KaaSmart removes unnecessary friction, saving hours of administrative effort while elevating everyday living standards.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-[#00D2C4]/50 rounded-2xl p-7 transition-all duration-200 group flex flex-col justify-between hover:shadow-lg hover:shadow-[#00D2C4]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#0B192C] border border-slate-800 group-hover:border-[#00D2C4]/40 flex items-center justify-center text-[#00D2C4] group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-600 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#00D2C4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
