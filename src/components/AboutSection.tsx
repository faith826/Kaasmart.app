import React from 'react';
import { Target, Compass, Sparkles, Eye, Shield, Cpu, HeartHandshake } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Leveraging digital tools and thoughtful software architecture to modernise real estate routines.',
      icon: Cpu,
    },
    {
      title: 'Transparency',
      description: 'Ensuring property details, communication, and agreements remain clear, accessible, and honest.',
      icon: Eye,
    },
    {
      title: 'Accessibility',
      description: 'Designing intuitive experiences so anyone can navigate properties and records without technical barriers.',
      icon: Sparkles,
    },
    {
      title: 'Reliability',
      description: 'Providing a dependable digital backbone that landlords, managers, and tenants can count on day in and day out.',
      icon: Shield,
    },
    {
      title: 'Customer Focus',
      description: 'Centring all platform improvements on the practical needs and feedback of our real estate community.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#0B192C] border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-2">
            About KaaSmart
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 [text-wrap:balance]">
            Simplifying Real Estate Processes Through Modern Technology
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            KaaSmart is a technology-driven property platform focused on making property-related
            processes simpler, more accessible, and more efficient. By bringing property
            information and management tools into a digital environment, KaaSmart aims to
            improve the experience for property owners, tenants, managers, and other real estate
            stakeholders.
          </p>
        </div>

        {/* Who We Are: Split Column with Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          <div className="lg:col-span-6 flex flex-col justify-between bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Who We Are</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                At KaaSmart, we see real estate not merely as structures, but as dynamic spaces
                where lives unfold and investments grow. Traditional property interactions are often
                scattered across fragmented channels, paper logs, and disjointed conversations.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                We bridge that divide. KaaSmart brings property discovery, tenant communication,
                and administrative record-keeping under a single, unified digital roof—built to be
                accessible on any device with no unnecessary complexity.
              </p>
            </div>

            {/* Quick Core Mission / Vision Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800 mt-4">
              <div className="bg-[#0B192C] p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-[#00D2C4] font-semibold text-sm mb-1.5">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To simplify property discovery and management through accessible digital solutions.
                </p>
              </div>

              <div className="bg-[#0B192C] p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-2 text-[#00D2C4] font-semibold text-sm mb-1.5">
                  <Compass className="w-4 h-4" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  To create a smarter, more connected, and more efficient property ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Architectural visual */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-slate-800 min-h-[340px]">
            <img
              src="/src/assets/images/smart_building_facade_1792055300837.jpg"
              alt="Modern geometric urban architecture and sustainable residential terraces"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/80 via-transparent to-transparent flex items-end p-6">
              <p className="text-xs text-slate-300 font-medium">
                Modern living spaces united through smarter digital management.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white tracking-tight">Our Core Values</h3>
            <p className="text-sm text-slate-400 mt-1">
              The fundamental principles steering every feature and interaction on KaaSmart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-[#00D2C4]/40 rounded-xl p-5 transition-all duration-200 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#00D2C4]/10 border border-[#00D2C4]/20 flex items-center justify-center text-[#00D2C4] mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">{val.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
