export const mainNavItems = [
  {
    id: 'work',
    label: 'Work',
    path: '/',
  },
  {
    id: 'about',
    label: 'About',
    path: '/about',
  },
  {
    id: 'resume',
    label: 'Resume',
    path: '/resume',
  }
];

export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'fab fa-linkedin',
    username: 'annanguyen42',
    url: '#', // Replace with actual URL
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: 'fab fa-github',
    username: 'wailingwombat',
    url: '#', // Replace with actual URL
  },
  {
    id: 'website',
    label: 'Website',
    icon: 'fas fa-globe',
    username: 'anna_nguyen',
    url: '#', // Replace with actual URL
  }
];

export const projectSections = {
  'mobile-app': [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'outcome', label: 'Outcome' }
  ],
  'ecommerce': [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'outcome', label: 'Outcome' }
  ],
  'brand-identity': [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'outcome', label: 'Outcome' }
  ],
  'packaging': [
    { id: 'overview', label: 'Overview' },
    { id: 'process', label: 'Process' },
    { id: 'outcome', label: 'Outcome' }
  ]
};

export const resumeSections = [
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' }
];

// Add project routes
export const projectRoutes = {
  'dashboard-survey': '/projects/dashboard-survey',
  'it-support-chatbot': '/projects/it-support-chatbot',
  'mail-migration': '/projects/mail-migration',
  'blockchain': '/projects/blockchain'
};

// You can use this in your Header/Navigation components like:
// import { mainNavItems } from '@/constants/navigation';