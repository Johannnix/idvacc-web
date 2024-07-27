import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  EventProps,
  RosterProps,
  TestimonialsProps,
} from '~/shared/types';
import {
  IconAdjustments,
  IconBulb,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'The official vACC of Indonesia on VATSIM!',
  subtitle:
    'We have a vast history, and over the past years have evolved massively to include many new and exciting features in VATSIM Indonesia that we love to share with the community.',
  tagline: 'About Us',
};

export const ourTeam: TeamProps = {
  title: 'Management Team',
  subtitle: 'Meet our staff team who manage day to day operations of the vACC.',
  tagline: 'Our Team',
  teams: [
    {
      name: 'Gery Kurniawan',
      occupation: 'Director | ACCIDN1',
      image: {
        src: "",
        alt: 'Gery Kurniawan',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Daniel Surya',
      occupation: 'Training Director | ACCIDN3',
      image: {
        src: "",
        alt: 'Daniel Surya',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Jonathan Handoyo',
      occupation: 'Events Director | ACCIDN4',
      image: {
        src: "",
        alt: 'Jonathan Handoyo',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Mohamad Fauzi',
      occupation: 'Facilities Director | ACCIDN5',
      image: {
        src: "",
        alt: 'Mohamad Fauzi',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Syarif Rahman',
      occupation: 'Public Relations Manager | ACCIDN6',
      image: {
        src: "",
        alt: 'Syarif Rahman',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Johan Winarto',
      occupation: 'Webmaster | ACCIDN7',
      image: {
        src: "",
        alt: 'Johan Winarto',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    }
  ],
};

export const event: EventProps = {
  id: 'team-on-about',
  hasBackground: false,
};

export const rosterAbout: HeroProps = {
  title: 'Local Controller Roster',
  tagline: 'Controller Roster',
};

export const weather: HeroProps = { 
  title: 'VATSIM Weather Information',
  tagline: 'Weather',
}

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 13269,
      description: 'Downloads',
    },
    {
      title: 24.8,
      description: 'Stars',
    },
    {
      title: 1767.77,
      description: 'Forks',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: true,
  header: {
    title: 'Our mission',
    subtitle:
      'We want to showcase and share our love of Aviation with everyone from Indonesia and even the rest of the world!',
    tagline: 'Mission and Vision',
  },
};

export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: true,
  header: {
    title: 'Our Vision',
    subtitle:
      'We want to inspire the young and old to get involved in aviation. If that means them becoming a pilot or an air traffic controller, we want to inspire you to do whatever you want!',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Customer-centricity',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconUser,
    },
    {
      title: 'Innovation and adaptability',
      description:
        'Etiam ornare, purus nec venenatis porttitor, velit leo convallis dui, at porttitor nibh tortor quis velit.',
      icon: IconBulb,
    },
    {
      title: 'Quality assurance',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconThumbUp,
    },
    {
      title: 'Accessibility and customization',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconAdjustments,
    },
    {
      title: 'Collaboration and partnership',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Ethical and responsible design',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconHomeEco,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: true,
  teams: [
    {
      name: 'Gery Kurniawan',
      occupation: 'Director | ACCIDN1',
      image: {
        src: "",
        alt: 'Gery Kurniawan',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Daniel Surya',
      occupation: 'Training Director | ACCIDN3',
      image: {
        src: "",
        alt: 'Daniel Surya',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Jonathan Handoyo',
      occupation: 'Events Director | ACCIDN4',
      image: {
        src: "",
        alt: 'Jonathan Handoyo',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Muhammad Fauzy',
      occupation: 'Facilities Director | ACCIDN5',
      image: {
        src: "",
        alt: 'Muhammad Fauzy',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Syarif Rahman',
      occupation: 'Public Relations Manager | ACCIDN6',
      image: {
        src: "",
        alt: 'Syarif Rahman',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Johan Winarto',
      occupation: 'Webmaster | ACCIDN7',
      image: {
        src: "",
        alt: 'Johan Winarto',
      },
      items: [
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

export const rosterAbout2: RosterProps = {
  id: 'team-on-about',
  hasBackground: false,
  data: [
    {
      name: '',
      cid: 0,
      approvedFor: '',
      status: ''
    }
  ]
};
