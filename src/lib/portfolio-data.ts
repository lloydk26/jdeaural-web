export const portfolio = {
  'Corporate & Commercial': [
    { 
      name: 'Mazda Philippines', 
      images: [
        { src: 'https://picsum.photos/800/600?random=11', 'data-ai-hint': 'car dealership' },
        { src: 'https://picsum.photos/800/600?random=21', 'data-ai-hint': 'modern car interior' },
        { src: 'https://picsum.photos/800/600?random=31', 'data-ai-hint': 'sleek car headlights' },
      ],
      description: 'A comprehensive acoustic treatment for the main showroom of Mazda Philippines, ensuring a comfortable and quiet environment for customers and staff. The project involved sound absorption panels and ceiling treatments to minimize reverberation from the large, open space.'
    },
    { 
      name: 'Google Philippines', 
      images: [
        { src: 'https://picsum.photos/800/600?random=12', 'data-ai-hint': 'modern office interior' },
        { src: 'https://picsum.photos/800/600?random=22', 'data-ai-hint': 'collaborative workspace' },
        { src: 'https://picsum.photos/800/600?random=32', 'data-ai-hint': 'office lounge area' },
      ],
      description: 'We provided acoustic solutions for Google\'s main office in the Philippines, focusing on creating focus zones, quiet rooms, and collaborative spaces with optimal speech intelligibility and minimal distractions. Custom acoustic baffles and wall panels were used.'
    },
    { 
      name: 'METS Place', 
      images: [
        { src: 'https://picsum.photos/800/600?random=13', 'data-ai-hint': 'office building exterior' },
        { src: 'https://picsum.photos/800/600?random=23', 'data-ai-hint': 'corporate lobby' },
        { src: 'https://picsum.photos/800/600?random=33', 'data-ai-hint': 'high-rise facade' },
      ],
      description: 'Acoustic design and consultation for METS Place, a commercial office building. Our work included façade sound insulation design, noise control for mechanical systems, and acoustical planning for tenant spaces to ensure a premium work environment.'
    },
  ],
  'Hospitality & Residential': [
    { 
      name: 'Marriott Hotel', 
      images: [
        { src: 'https://picsum.photos/800/600?random=14', 'data-ai-hint': 'luxury hotel interior' },
        { src: 'https://picsum.photos/800/600?random=24', 'data-ai-hint': 'hotel ballroom' },
        { src: 'https://picsum.photos/800/600?random=34', 'data-ai-hint': 'elegant restaurant' },
      ],
      description: 'Complete acoustical design for the Marriott Hotel, covering guest rooms, ballrooms, restaurants, and public areas. The goal was to achieve a high level of sound isolation between spaces and control reverberation for a luxurious guest experience.'
    },
    { 
      name: 'Seibu Tower BGC', 
      images: [
        { src: 'https://picsum.photos/800/600?random=15', 'data-ai-hint': 'modern condominium' },
        { src: 'https://picsum.photos/800/600?random=25', 'data-ai-hint': 'condo swimming pool' },
        { src: 'https://picsum.photos/800/600?random=35', 'data-ai-hint': 'residential building lobby' },
      ],
      description: 'Provided soundproofing and acoustic solutions for Seibu Tower, a residential condominium in BGC. We focused on reducing noise transmission between units and from outside, ensuring residents enjoy peace and privacy.'
    },
    { 
      name: 'Pajuyo Residences', 
      images: [
        { src: 'https://picsum.photos/800/600?random=16', 'data-ai-hint': 'house exterior' },
        { src: 'https://picsum.photos/800/600?random=26', 'data-ai-hint': 'modern living room' },
        { src: 'https://picsum.photos/800/600?random=36', 'data-ai-hint': 'cozy bedroom' },
      ],
      description: 'Acoustic treatment for a private residence, including a home theater, music room, and general living spaces. Custom solutions were designed to provide sound isolation and optimal room acoustics tailored to the client\'s lifestyle.'
    },
  ],
  'Education & Institutions': [
    { 
      name: 'Chiang Kai Shek College Gymnasium', 
      images: [
        { src: 'https://picsum.photos/800/600?random=17', 'data-ai-hint': 'school gymnasium' },
        { src: 'https://picsum.photos/800/600?random=27', 'data-ai-hint': 'basketball court' },
        { src: 'https://picsum.photos/800/600?random=37', 'data-ai-hint': 'indoor sports arena' },
      ],
      description: 'Acoustic design and remediation for the Chiang Kai Shek College Gymnasium to control excessive reverberation and improve speech clarity during events. The project involved installing high-impact acoustic wall panels and ceiling absorbers.'
    },
  ],
  'Industrial & Healthcare': [
    { 
      name: 'Global East Medical Center', 
      images: [
        { src: 'https://picsum.photos/800/600?random=18', 'data-ai-hint': 'hospital building' },
        { src: 'https://picsum.photos/800/600?random=28', 'data-ai-hint': 'hospital waiting room' },
        { src: 'https://picsum.photos/800/600?random=38', 'data-ai-hint': 'patient room' },
      ],
      description: 'Acoustical planning for the Global East Medical Center, ensuring patient privacy (HIPAA compliance), comfortable healing environments, and clear communication systems. We addressed sound isolation in patient rooms, consultation areas, and control of mechanical noise.'
    },
  ],
  'Worship & Memorial': [
    { 
      name: 'Forest Lake Iloilo Chapels', 
      images: [
        { src: 'https://picsum.photos/800/600?random=19', 'data-ai-hint': 'modern chapel' },
        { src: 'https://picsum.photos/800/600?random=29', 'data-ai-hint': 'chapel interior' },
        { src: 'https://picsum.photos/800/600?random=39', 'data-ai-hint': 'memorial park' },
      ],
      description: 'Acoustic design for the chapels at Forest Lake Iloilo to create a serene and contemplative atmosphere. The project focused on speech intelligibility for services and reverberation control to enhance the sanctity of the space.'
    },
  ],
};

export const categories = Object.keys(portfolio);

export const allProjects = categories.flatMap(category => 
  (portfolio as any)[category].map((project: any) => ({ ...project, category }))
);
