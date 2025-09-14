import { Building2, Cog, Landmark, FlaskConical } from "lucide-react";

export const servicesData = [
  {
    icon: Building2,
    title: "Architectural & Building Acoustics",
    slug: "architectural-building-acoustics",
    shortDescription: "Acoustic design for performance spaces, commercial buildings, and residential properties.",
    subtitle: "Creating spaces where sound works for you — not against you.",
    image: {
      src: "https://picsum.photos/1200/800?random=41",
      alt: "Modern concert hall with acoustic panels",
      "data-ai-hint": "auditorium theater"
    },
    subServices: [
      "Acoustic Design for Theaters, Cinemas & Worship Spaces",
      "Internal Space Acoustic Planning",
      "Sound Isolation from External Noise",
      "Reverberant Noise Control",
      "Speech Privacy & Intelligibility Testing",
      "Transportation Noise & Vibration Control",
      "Mechanical Plant & Equipment Noise Containment",
      "Fire Alarm Acoustic Design",
      "Sound System & AV Design",
    ],
    applications: [
      "Auditoriums and lecture halls",
      "Mosques and worship halls",
      "Cinemas and theaters",
      "Corporate boardrooms and multipurpose halls",
    ],
    cta: {
      text: "Ready to design a space with world-class acoustics?",
      buttonText: "Contact Us",
    },
  },
  {
    icon: Cog,
    title: "Industrial & Workplace Acoustics",
    slug: "industrial-workplace-acoustics",
    shortDescription: "Noise control, safety compliance, and monitoring for industrial and workplace environments.",
    subtitle: "Ensuring workplace safety and compliance with effective noise control.",
    image: {
      src: "https://picsum.photos/1200/800?random=42",
      alt: "Industrial factory interior",
      "data-ai-hint": "factory machine room"
    },
    subServices: [
      "Noise containment planning",
      "Workplace industrial noise surveys & reporting",
      "Real-time machine room monitoring",
      "Vibration monitoring and analysis",
    ],
    applications: [
        "Factories", 
        "Power plants", 
        "Machine rooms", 
        "Warehouses"
    ],
    cta: {
      text: "Ensure workplace safety and compliance with effective noise control.",
      buttonText: "Contact Us",
    },
  },
  {
    icon: Landmark,
    title: "Urban Infrastructure Acoustics",
    slug: "urban-infrastructure-acoustics",
    shortDescription: "Noise impact assessments and monitoring for large-scale urban developments.",
    subtitle: "Partner with JDE for infrastructure-grade acoustic solutions.",
    image: {
      src: "https://picsum.photos/1200/800?random=43",
      alt: "Cityscape with highway traffic",
      "data-ai-hint": "highway airport"
    },
    subServices: [
      "Environmental noise impact assessments (roads, rail, airports)",
      "Airport noise monitoring system setup",
      "Large venue noise assessments",
    ],
    applications: [
        "Airports", 
        "Transport hubs", 
        "Stadiums", 
        "Outdoor venues"
    ],
    cta: {
      text: "Partner with JDE for infrastructure-grade acoustic solutions.",
      buttonText: "Contact Us",
    },
  },
  {
    icon: FlaskConical,
    title: "Specialized Services",
    slug: "specialized-services",
    shortDescription: "Advanced testing, analysis, system commissioning, and training programs.",
    subtitle: "Looking for advanced or custom acoustic services? Let’s talk.",
    image: {
      src: "https://picsum.photos/1200/800?random=44",
      alt: "Sound engineer at a mixing console",
      "data-ai-hint": "engineering equipment"
    },
    subServices: [
      "Acoustic material specification & commissioning",
      "Acoustic testing & analysis studies",
      "On-site quality assurance",
      "Training programs in acoustics & noise control",
      "Specialist MEPF acoustic services",
    ],
    applications: [
        "Cross-industry applications", 
        "Custom research projects", 
        "Product testing & validation"
    ],
    cta: {
      text: "Looking for advanced or custom acoustic services?",
      buttonText: "Let's Talk",
    },
  },
];
