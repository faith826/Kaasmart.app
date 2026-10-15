import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface CtaSectionProps {
  onExplore: () => void;
  onContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onExplore, onContact }) => {
  return (
    <section className="py-20 bg-[#0B192C] relative overflow-hidden">
      {/* Subtle turquoise backlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00D2C4]/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-slate-900 via-[#122642] to-slate-900 border border-[#00D2C4]/30 rounded-3xl p-8 sm:p-14 text-center shadow-2xl relative">
          {/* Unboxed kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Modern Real Estate Technology</span>
          </div>

          {/* Required Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            Ready to Experience Property Management the Smarter Way?
          </h2>

          {/* Required Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover how KaaSmart can support your property journey.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onExplore}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] active:bg-[#00b4a7] rounded-xl shadow-lg shadow-[#00D2C4]/20 hover:shadow-xl hover:shadow-[#00D2C4]/30 transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-750 hover:text-[#00D2C4] border border-slate-700 rounded-xl transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
            >
              <Mail className="w-4 h-4" />
              <span>Get in Touch</span>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
            <span>Website: </span>
            <a
              href="https://kaasmart.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D2C4] hover:underline"
            >
              https://kaasmart.app
            </a>
            <span className="mx-2">·</span>
            <span>Direct Digital Access for Owners, Tenants & Managers</span>
          </div>
        </div>
      </div>
    </section>
  );
};
