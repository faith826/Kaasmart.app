import React from 'react';
import { Logo } from './Logo';
import { ArrowUp, Mail, Globe, Shield } from 'lucide-react';

interface FooterProps {
  onOpenPreview: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPreview }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07101d] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="inline-block mb-4">
              <Logo size="md" />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              KaaSmart is a digital property management and real estate platform designed to simplify how people discover, manage, and interact with properties.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <a
                href="https://kaasmart.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00D2C4] hover:underline flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>https://kaasmart.app</span>
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="mailto:info@kaasmart.app"
                className="text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#00D2C4]" />
                <span>info@kaasmart.app</span>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-[#00D2C4] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#00D2C4] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00D2C4] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#00D2C4] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00D2C4] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Stakeholders Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Who We Serve</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#audience" className="hover:text-[#00D2C4] transition-colors">
                  Property Owners & Landlords
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-[#00D2C4] transition-colors">
                  Tenants & Seekers
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-[#00D2C4] transition-colors">
                  Property Managers
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-[#00D2C4] transition-colors">
                  Real Estate Agents
                </a>
              </li>
              <li>
                <a href="#audience" className="hover:text-[#00D2C4] transition-colors">
                  Property Investors
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Access Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 mb-5">
              <li>
                <button
                  onClick={onOpenPreview}
                  className="text-left text-[#00D2C4] hover:underline transition-colors"
                >
                  Interactive Platform Explorer
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-200 transition-colors">
                  Property Discovery
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-slate-200 transition-colors">
                  Digital Administration
                </a>
              </li>
            </ul>
            <div className="p-3 bg-[#0B192C] rounded-lg border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <Shield className="w-4 h-4 text-[#00D2C4] shrink-0 mt-0.5" />
              <span>Authentic platform information verified for KaaSmart.app</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">
            &copy; {currentYear} KaaSmart. All rights reserved. Real Estate Technology & Property Discovery.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500 font-mono text-[11px]">kaasmart.app</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#00D2C4] transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
