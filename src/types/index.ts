export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  status: 'active' | 'coming_soon';
  details: string[];
}

export interface AudienceItem {
  id: string;
  role: string;
  title: string;
  subtitle: string;
  benefits: string[];
  keyActions: string[];
  imageSrc: string;
}

export interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export interface SampleProperty {
  id: string;
  title: string;
  location: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  period: string;
  status: 'Available' | 'Pending Review' | 'Leased';
  image: string;
  features: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  role: string;
  message: string;
}
