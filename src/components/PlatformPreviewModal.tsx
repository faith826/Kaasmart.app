import React, { useState } from 'react';
import {
  X,
  Building,
  Key,
  ShieldCheck,
  Search,
  BedDouble,
  Bath,
  MapPin,
  Wrench,
  FileCheck,
  Check,
  ArrowRight,
  Send,
  Eye
} from 'lucide-react';
import { SampleProperty } from '../types';

interface PlatformPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGoToContact: () => void;
}

export const PlatformPreviewModal: React.FC<PlatformPreviewModalProps> = ({
  isOpen,
  onClose,
  onGoToContact,
}) => {
  const [activeTab, setActiveTab] = useState<'discovery' | 'tenant' | 'landlord'>('discovery');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<SampleProperty | null>(null);
  const [inquirySent, setInquirySent] = useState(false);

  // Sample properties for the Discovery tab
  const sampleProperties: SampleProperty[] = [
    {
      id: 'p1',
      title: 'The Azure Residences - 2 Bedroom',
      location: 'Kilimani, Nairobi',
      type: 'Modern Apartment',
      bedrooms: 2,
      bathrooms: 2,
      price: 'KES 75,000',
      period: 'monthly',
      status: 'Available',
      image: '/src/assets/images/hero_property_modern_1792055300938.jpg',
      features: ['Balcony View', 'High-speed Fiber', 'Backup Generator', 'Dedicated Parking'],
    },
    {
      id: 'p2',
      title: 'Lumina Grand Studio',
      location: 'Westlands, Nairobi',
      type: 'Executive Studio',
      bedrooms: 1,
      bathrooms: 1,
      price: 'KES 50,000',
      period: 'monthly',
      status: 'Available',
      image: '/src/assets/images/property_interior_living_1792055300063.jpg',
      features: ['Modern Kitchenette', 'Rooftop Lounge', 'Biometric Entry', 'Gym Access'],
    },
    {
      id: 'p3',
      title: 'Greenwood Heights Duplex',
      location: 'Lavington, Nairobi',
      type: 'Garden Duplex',
      bedrooms: 3,
      bathrooms: 3,
      price: 'KES 130,000',
      period: 'monthly',
      status: 'Available',
      image: '/src/assets/images/smart_building_facade_1792055300837.jpg',
      features: ['Private Garden', 'Ensuite Bedrooms', 'Solar Water Heating', '24/7 Security'],
    },
  ];

  // Maintenance demo states
  const [maintenanceTickets, setMaintenanceTickets] = useState([
    { id: 'MT-102', title: 'Water heater inspection', date: 'Oct 12, 2026', status: 'Completed' },
    { id: 'MT-105', title: 'Kitchen cabinet hinge adjustment', date: 'Oct 14, 2026', status: 'In Progress' },
  ]);
  const [newTicketText, setNewTicketText] = useState('');
  const [ticketAdded, setTicketAdded] = useState(false);

  const handleAddTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicketText.trim()) return;

    setMaintenanceTickets([
      ...maintenanceTickets,
      {
        id: `MT-${106 + maintenanceTickets.length}`,
        title: newTicketText.trim(),
        date: 'Today',
        status: 'Logged',
      },
    ]);
    setNewTicketText('');
    setTicketAdded(true);
    setTimeout(() => setTicketAdded(false), 2500);
  };

  if (!isOpen) return null;

  const filteredProperties = sampleProperties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#0B192C] border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#07101d]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#00D2C4]/15 border border-[#00D2C4]/30 flex items-center justify-center text-[#00D2C4]">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">KaaSmart Interactive Explorer</span>
                <span className="text-[10px] font-mono font-medium text-[#00D2C4] bg-[#00D2C4]/10 px-2 py-0.5 rounded border border-[#00D2C4]/30">
                  Platform Preview
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Experience simulated workflows for discovery, tenant management, and landlord admin
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D2C4]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-6 py-3 bg-slate-900/60 border-b border-slate-800 flex items-center gap-2">
          <button
            onClick={() => {
              setActiveTab('discovery');
              setSelectedProperty(null);
            }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'discovery'
                ? 'bg-[#00D2C4] text-[#0B192C]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>1. Property Discovery</span>
          </button>

          <button
            onClick={() => setActiveTab('tenant')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'tenant'
                ? 'bg-[#00D2C4] text-[#0B192C]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>2. Tenant Portal</span>
          </button>

          <button
            onClick={() => setActiveTab('landlord')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              activeTab === 'landlord'
                ? 'bg-[#00D2C4] text-[#0B192C]'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>3. Landlord & Manager Desk</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-200">
          {/* TAB 1: PROPERTY DISCOVERY */}
          {activeTab === 'discovery' && (
            <div>
              {selectedProperty ? (
                /* Selected Property Detailed View */
                <div className="space-y-5 animate-in fade-in duration-150">
                  <button
                    onClick={() => {
                      setSelectedProperty(null);
                      setInquirySent(false);
                    }}
                    className="text-xs text-[#00D2C4] hover:underline flex items-center gap-1 font-medium"
                  >
                    ← Back to all listings
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-6 rounded-xl overflow-hidden border border-slate-700 aspect-video relative">
                      <img
                        src={selectedProperty.image}
                        alt={selectedProperty.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B192C]/90 text-[#00D2C4] text-[10px] font-mono px-2 py-0.5 rounded border border-[#00D2C4]/40">
                        {selectedProperty.status}
                      </div>
                    </div>

                    <div className="md:col-span-6 flex flex-col justify-between">
                      <div>
                        <div className="text-xs text-slate-400 flex items-center gap-1 mb-1">
                          <MapPin className="w-3.5 h-3.5 text-[#00D2C4]" />
                          <span>{selectedProperty.location}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {selectedProperty.title}
                        </h4>
                        <div className="text-lg font-mono font-bold text-[#00D2C4] mb-4">
                          {selectedProperty.price}{' '}
                          <span className="text-xs font-normal text-slate-400">/{selectedProperty.period}</span>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-300 mb-4 pb-4 border-b border-slate-800">
                          <span className="flex items-center gap-1">
                            <BedDouble className="w-4 h-4 text-slate-400" />
                            {selectedProperty.bedrooms} Beds
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="w-4 h-4 text-slate-400" />
                            {selectedProperty.bathrooms} Baths
                          </span>
                          <span>{selectedProperty.type}</span>
                        </div>

                        <div className="mb-4">
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                            Included Amenities
                          </span>
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            {selectedProperty.features.map((f, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-slate-300">
                                <Check className="w-3.5 h-3.5 text-[#00D2C4]" />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Inquiry Action */}
                      <div className="pt-4 border-t border-slate-800">
                        {inquirySent ? (
                          <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-xs text-emerald-200 flex items-center gap-2">
                            <Check className="w-4 h-4 text-emerald-400" />
                            <span>Inquiry simulated! Connected with manager on KaaSmart.</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => setInquirySent(true)}
                            className="w-full py-2.5 px-4 text-xs font-bold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] rounded-xl flex items-center justify-center gap-2 transition-colors"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Viewing Request to Landlord</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Listing Cards Grid */
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search location or apartment..."
                        className="w-full pl-9 pr-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2C4]"
                      />
                    </div>
                    <span className="text-xs text-slate-400">
                      Showing {filteredProperties.length} verified sample properties
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {filteredProperties.map((prop) => (
                      <div
                        key={prop.id}
                        className="bg-slate-900 border border-slate-800 hover:border-[#00D2C4]/40 rounded-xl overflow-hidden group flex flex-col justify-between"
                      >
                        <div className="relative aspect-video">
                          <img
                            src={prop.image}
                            alt={prop.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            referrerPolicy="no-referrer"
                          />
                          <span className="absolute bottom-2 left-2 bg-[#0B192C]/90 text-[#00D2C4] text-[10px] font-mono px-2 py-0.5 rounded">
                            {prop.price}
                          </span>
                        </div>

                        <div className="p-4 flex flex-col justify-between flex-1">
                          <div>
                            <p className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                              <MapPin className="w-3 h-3 text-[#00D2C4]" />
                              {prop.location}
                            </p>
                            <h5 className="text-xs font-bold text-white mb-2 line-clamp-1">
                              {prop.title}
                            </h5>
                            <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
                              <span>{prop.bedrooms} Bed</span>
                              <span>·</span>
                              <span>{prop.bathrooms} Bath</span>
                            </div>
                          </div>

                          <button
                            onClick={() => setSelectedProperty(prop)}
                            className="w-full py-2 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-[#00D2C4] hover:text-[#0B192C] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Inspect Listing</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TENANT PORTAL */}
          {activeTab === 'tenant' && (
            <div className="space-y-6">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">Current Registered Tenancy</span>
                  <h4 className="text-sm font-bold text-white">Lumina Heights · Unit 4B</h4>
                  <p className="text-xs text-[#00D2C4] font-mono">Lease Status: Valid & Active</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Next Scheduled Dues</span>
                  <span className="text-sm font-bold text-white">1st of Next Month</span>
                </div>
              </div>

              {/* Maintenance Ticket Simulator */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-[#00D2C4]" />
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                      Maintenance Request Tracker
                    </h5>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    {maintenanceTickets.length} Records
                  </span>
                </div>

                <div className="space-y-2.5 mb-4">
                  {maintenanceTickets.map((t) => (
                    <div
                      key={t.id}
                      className="p-3 bg-[#0B192C] rounded-lg border border-slate-800 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="text-slate-400 font-mono text-[11px] mr-2">{t.id}</span>
                        <span className="text-white font-medium">{t.title}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-500 text-[11px]">{t.date}</span>
                        <span className="text-[#00D2C4] font-mono font-medium">{t.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Form to submit maintenance */}
                <form onSubmit={handleAddTicket} className="flex gap-2">
                  <input
                    type="text"
                    value={newTicketText}
                    onChange={(e) => setNewTicketText(e.target.value)}
                    placeholder="Log a test repair (e.g. bathroom sink tap dripping)..."
                    className="flex-1 px-3 py-2 bg-[#0B192C] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00D2C4]"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] rounded-lg transition-colors whitespace-nowrap"
                  >
                    Log Request
                  </button>
                </form>

                {ticketAdded && (
                  <p className="text-[11px] text-emerald-400 mt-2">
                    ✓ New maintenance request logged and routed to estate manager.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: LANDLORD & MANAGER DESK */}
          {activeTab === 'landlord' && (
            <div className="space-y-6">
              {/* Portfolio Stats Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Total Properties</span>
                  <span className="text-base font-bold text-white font-mono">12 Units</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Occupancy Rate</span>
                  <span className="text-base font-bold text-[#00D2C4] font-mono">92%</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Vacant Units</span>
                  <span className="text-base font-bold text-amber-400 font-mono">1 Unit</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[11px]">Open Requests</span>
                  <span className="text-base font-bold text-white font-mono">2 Active</span>
                </div>
              </div>

              {/* Unit Inventory List */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-[#00D2C4]" />
                  <span>Managed Units Overview</span>
                </h5>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400">
                        <th className="pb-2 font-medium">Unit / Property</th>
                        <th className="pb-2 font-medium">Tenant</th>
                        <th className="pb-2 font-medium">Monthly Rent</th>
                        <th className="pb-2 font-medium">Lease End</th>
                        <th className="pb-2 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-2.5 font-medium text-white">Lumina Heights · 4B</td>
                        <td className="py-2.5 text-slate-300">Faith K.</td>
                        <td className="py-2.5 font-mono text-slate-300">KES 55,000</td>
                        <td className="py-2.5 text-slate-400 font-mono">Nov 2026</td>
                        <td className="py-2.5 text-emerald-400 font-medium">Active</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-white">Azure Court · 2A</td>
                        <td className="py-2.5 text-slate-300">Michael O.</td>
                        <td className="py-2.5 font-mono text-slate-300">KES 75,000</td>
                        <td className="py-2.5 text-slate-400 font-mono">Jan 2027</td>
                        <td className="py-2.5 text-emerald-400 font-medium">Active</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-medium text-white">Greenwood Duplex · 1</td>
                        <td className="py-2.5 text-slate-400">— Unoccupied</td>
                        <td className="py-2.5 font-mono text-slate-300">KES 130,000</td>
                        <td className="py-2.5 text-slate-400 font-mono">—</td>
                        <td className="py-2.5 text-[#00D2C4] font-medium">Listing Live</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#07101d] border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            <span>Ready to manage your property portfolio? </span>
            <span className="text-[#00D2C4] font-mono">kaasmart.app</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onGoToContact();
              }}
              className="px-4 py-2 text-xs font-bold text-[#0B192C] bg-[#00D2C4] hover:bg-[#25e0d4] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Get in Touch with Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
