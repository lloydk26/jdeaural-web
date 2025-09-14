import { Building2, Cog, Landmark, FlaskConical } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  slug: string;
  fullDescription: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Architectural & Building Acoustics',
    description: 'Reverberation control, sound isolation, and system design for performance and public spaces.',
    icon: Building2,
    slug: 'architectural-building-acoustics',
    fullDescription: 'Our architectural acoustics services focus on creating optimal sound environments in buildings through careful design of room acoustics, sound isolation, and noise control systems.',
    features: [
      'Room acoustic design and analysis',
      'Sound isolation and privacy solutions',
      'Reverberation time optimization',
      'Speech intelligibility enhancement',
      'Noise control system design'
    ]
  },
  {
    id: '2',
    title: 'Industrial & Workplace Acoustics',
    description: 'Noise containment, vibration analysis, and safety compliance for industrial environments.',
    icon: Cog,
    slug: 'industrial-workplace-acoustics',
    fullDescription: 'Comprehensive acoustic solutions for industrial and workplace environments, ensuring compliance with safety standards and creating comfortable working conditions.',
    features: [
      'Noise exposure assessments',
      'Vibration analysis and control',
      'OSHA compliance consulting',
      'Equipment noise reduction',
      'Worker protection programs'
    ]
  },
  {
    id: '3',
    title: 'Urban Infrastructure Acoustics',
    description: 'Noise impact assessments and monitoring for large-scale urban developments.',
    icon: Landmark,
    slug: 'urban-infrastructure-acoustics',
    fullDescription: 'Large-scale acoustic consulting for urban planning, transportation projects, and infrastructure development with focus on community impact and regulatory compliance.',
    features: [
      'Environmental noise assessments',
      'Traffic noise studies',
      'Community noise impact analysis',
      'Regulatory compliance support',
      'Long-term monitoring programs'
    ]
  },
  {
    id: '4',
    title: 'Specialized Acoustic Services',
    description: 'Advanced testing, analysis, system commissioning, and training programs.',
    icon: FlaskConical,
    slug: 'specialized-acoustic-services',
    fullDescription: 'Advanced acoustic testing, research, and specialized consulting services for unique acoustic challenges and cutting-edge applications.',
    features: [
      'Advanced acoustic measurements',
      'Research and development consulting',
      'System commissioning and testing',
      'Training and education programs',
      'Expert witness services'
    ]
  },
];
