import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenPreview: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPreview }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B192C]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-[#0B192C] border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar 3-Zone Contract: [Brand] - [Nav links] - [Primary CTA] */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4] rounded-lg shrink-0"
            aria-label="KaaSmart Home"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#00D2C4] transition-colors whitespace-nowrap shrink-0 focus:outline-none focus-visible:text-[#00D2C4]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPreview}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] active:bg-[#00b4a7] rounded-lg transition-all shadow-sm hover:shadow-[#00D2C4]/20 hover:shadow-md whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B192C] focus-visible:ring-[#00D2C4]"
            >
              <span>Explore Platform</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0B192C] px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-[#00D2C4] hover:bg-slate-800/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPreview();
                }}
                className="w-full text-center px-4 py-2.5 text-sm font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] rounded-lg transition-colors"
              >
                Explore KaaSmart Platform
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
