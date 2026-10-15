import React, { useState } from 'react';
import { Mail, Globe, CheckCircle2, Send, AlertCircle, ChevronDown } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: '',
    role: 'Landlord / Property Owner',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is KaaSmart and who is it built for?',
      a: 'KaaSmart is a digital property management and real estate platform built to streamline property discovery, listings, communication, and administration for property owners, landlords, tenants, managers, and real estate agents.',
    },
    {
      q: 'How does KaaSmart help property owners and landlords?',
      a: 'KaaSmart provides a centralised digital space where owners can showcase listings, manage tenancy records, review incoming tenant inquiries, and monitor maintenance requests without relying on disorganized paperwork or chats.',
    },
    {
      q: 'Can tenants explore properties and connect directly with managers?',
      a: 'Yes. Tenants can explore verified listings with transparent rental terms, submit inquiries directly to landlords or managers, and access tenancy documentation once their lease is established.',
    },
    {
      q: 'Is there a fee to get in touch or explore KaaSmart?',
      a: 'Browsing property information, learning about our platform, and reaching out to our team is completely accessible. Contact us to discuss tailored setups for multi-unit portfolios or agency listings.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMsg('Please specify a subject for your inquiry.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please write your message or inquiry details.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      role: 'Landlord / Property Owner',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0B192C] border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#00D2C4] uppercase tracking-wider mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Contact Our Team
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Have questions about KaaSmart, listing your properties, or bringing your estate onto the platform? Send us a message and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-10 text-center animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-[#00D2C4]/15 border border-[#00D2C4]/30 rounded-2xl flex items-center justify-center text-[#00D2C4] mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your message regarding "{formData.subject}" has been successfully logged. Our representative will contact you via <span className="text-[#00D2C4]">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 text-xs font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] rounded-xl transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-950/60 border border-red-800/80 text-xs text-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Full Name <span className="text-[#00D2C4]">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. David Mwangi"
                      className="w-full px-4 py-2.5 bg-[#0B192C] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D2C4] focus:ring-1 focus:ring-[#00D2C4] transition-colors"
                      required
                    />
                  </div>

                  {/* Email & Role Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-[#00D2C4]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 bg-[#0B192C] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D2C4] focus:ring-1 focus:ring-[#00D2C4] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="role"
                        className="block text-xs font-semibold text-slate-300 mb-1.5"
                      >
                        Your Primary Role
                      </label>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#0B192C] border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00D2C4] focus:ring-1 focus:ring-[#00D2C4] transition-colors"
                      >
                        <option value="Landlord / Property Owner">Landlord / Property Owner</option>
                        <option value="Tenant / Prospective Tenant">Tenant / Prospective Tenant</option>
                        <option value="Property Manager">Property Manager</option>
                        <option value="Real Estate Agent">Real Estate Agent</option>
                        <option value="Property Investor">Property Investor</option>
                        <option value="Other">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Subject <span className="text-[#00D2C4]">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Inquiring about property listing on KaaSmart"
                      className="w-full px-4 py-2.5 bg-[#0B192C] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D2C4] focus:ring-1 focus:ring-[#00D2C4] transition-colors"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-300 mb-1.5"
                    >
                      Message <span className="text-[#00D2C4]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your property, portfolio size, or questions..."
                      className="w-full px-4 py-2.5 bg-[#0B192C] border border-slate-700 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#00D2C4] focus:ring-1 focus:ring-[#00D2C4] transition-colors resize-y"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] active:bg-[#00b4a7] disabled:opacity-50 rounded-xl shadow-md transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#0B192C] border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Info & FAQ */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D2C4]/10 border border-[#00D2C4]/20 flex items-center justify-center text-[#00D2C4]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Official Web Domain</p>
                    <a
                      href="https://kaasmart.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#00D2C4] transition-colors"
                    >
                      https://kaasmart.app
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00D2C4]/10 border border-[#00D2C4]/20 flex items-center justify-center text-[#00D2C4]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Direct Inquiries</p>
                    <a
                      href="mailto:info@kaasmart.app"
                      className="text-sm font-semibold text-white hover:text-[#00D2C4] transition-colors"
                    >
                      info@kaasmart.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5">
              <h4 className="text-sm font-bold text-white mb-3">Frequently Asked Questions</h4>
              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="border-b border-slate-800/80 last:border-b-0 pb-2">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left py-2 text-xs font-medium text-slate-200 hover:text-[#00D2C4] transition-colors gap-2"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180 text-[#00D2C4]' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="text-xs text-slate-400 pb-2 leading-relaxed animate-in fade-in duration-150">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
