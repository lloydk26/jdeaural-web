export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Corporate Office Complex',
    category: 'Corporate & Commercial',
    description: 'Complete acoustic design for a modern corporate headquarters featuring open-plan offices, meeting rooms, and conference facilities.',
    image: 'https://picsum.photos/800/600?random=1',
    slug: 'corporate-office-complex'
  },
  {
    id: '2',
    title: 'Luxury Hotel Renovation',
    category: 'Hospitality & Residential',
    description: 'Acoustic treatment for guest rooms, lobby areas, and restaurant spaces to enhance guest experience.',
    image: 'https://picsum.photos/800/600?random=2',
    slug: 'luxury-hotel-renovation'
  },
  {
    id: '3',
    title: 'University Gymnasium',
    category: 'Education & Institutions',
    description: 'Sports facility acoustic design focusing on speech intelligibility and noise control during events.',
    image: 'https://picsum.photos/800/600?random=3',
    slug: 'university-gymnasium'
  },
  {
    id: '4',
    title: 'Contemporary Chapel',
    category: 'Worship & Memorial',
    description: 'Sacred space acoustic design balancing reverberation for music and clarity for spoken word.',
    image: 'https://picsum.photos/800/600?random=4',
    slug: 'contemporary-chapel'
  },
];
