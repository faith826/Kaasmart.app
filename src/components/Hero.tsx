import React from 'react';
import { ArrowRight, Mail, Building2, CheckCircle2, ShieldCheck, Smartphone, Users } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00D2C4]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy, Action CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quiet unboxed kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#00D2C4] mb-4 tracking-wide uppercase">
              <span>Digital Real Estate Platform</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-400">kaasmart.app</span>
            </div>

            {/* Required Hero Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 [text-wrap:balance]">
              Smarter Property Management.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2C4] to-[#25e0d4]">
                Better Living.
              </span>
            </h1>

            {/* Required Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
              KaaSmart brings property discovery and management into one convenient digital experience,
              helping property owners, managers, and tenants connect and manage property-related
              activities more efficiently.
            </p>

            {/* Two Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExplore}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] active:bg-[#00b4a7] rounded-xl shadow-lg shadow-[#00D2C4]/15 hover:shadow-xl hover:shadow-[#00D2C4]/25 transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B192C]"
              >
                <span>Explore KaaSmart</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContact}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-800 hover:text-[#00D2C4] border border-slate-700/80 rounded-xl transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Our Team</span>
              </button>
            </div>

            {/* Verified platform highlights (no fake numbers, authentic capabilities) */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="text-xs text-slate-400 font-medium">Digital Reach</p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Discovery & Listings</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Connectivity</p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Owners & Tenants</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Operations</p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Streamlined Tools</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset + Clean Digital Preview Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
              {/* Modern Residential Apartment Building Image */}
              <img
                src="/src/assets/images/hero_property_modern_1792055300938.jpg"
                alt="Modern contemporary residential apartments with illuminated windows and glass architecture"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C] via-[#0B192C]/30 to-transparent" />

              {/* Floating Interface Preview Overlay Card */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-6 bg-[#0B192C]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-2.5 pb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#00D2C4]" />
                    <span className="text-xs font-semibold text-white tracking-tight">KaaSmart Digital Portal</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#00D2C4] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified System
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Property Management</span>
                    <span className="text-slate-200 font-medium truncate block">Organised records & leases</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Tenant & Landlord Link</span>
                    <span className="text-slate-200 font-medium truncate block">Direct digital interaction</span>
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
