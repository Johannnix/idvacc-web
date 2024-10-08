import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconChevronDown,
  IconBrandDiscord,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'About',
      icon: IconChevronDown,
      links: [
        {
          label: 'About Us',
          href: '/about',
        },
        {
          label: 'Our Team',
          href: '/team',
        },
        {
          label: 'Events',
          href: '/events',
        },
        {
          label: 'Privacy Policy',
          href: 'https://vatsim.net/docs/policy/privacy-policy',
        },
      ],
    },
    {
      label: 'ATC',
      icon: IconChevronDown,
      links: [
        {
          label: 'Join Us',
          href: '/join',
        },
        {
          label: 'Controller Roster',
          href: '/roster',
        },
        // {
        //   label: 'Training Syllabus',
        //   href: '/training/syllabus',
        // },
        // {
        //   label: 'Training Manuals',
        //   href: '/training/manuals',
        // },
        {
          label: 'ATC Documents',
          href: '/atcdocs',
        },
      ],
    },
    {
      label: 'Pilots',
      icon: IconChevronDown,
      links: [
        {
          label: 'General Policy',
          href: 'https://vatsim.net/docs/policy/code-of-conduct',
        },
        {
          label: 'Weather',
          href: '/weather',
        },
        {
          label: 'Pilot Resources',
          href: 'https://vatsim.net/docs/pilots/pilots',
        },
        // {
        //   label: 'Pre-Departure Clearance',
        //   href: '/pdc',
        // },
        // {
        //   label: 'Airport Charts',
        //   href: '/charts/airport',
        // },
        // {
        //   label: 'Video Tutorials',
        //   href: '/videos',
        // },
        // {
        //   label: 'WIII Gate Finder',
        //   href: '/gatefinder',
        // },
      ],
    },
    {
      label: 'Helpdesk',
      href: 'https://hq.vat-sea.com/support/list',
    },
    {
      label: 'Training',
      href: 'https://cbt.idvacc.id/',
    },
  ],
  actions: [
    {
      text: 'Discord',
      href: 'https://community.vatsim.net/',
      targetBlank: true,
    },
  ],
  isSticky: true,
  showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'Youtube', icon: IconBrandYoutube, href: '#' },
    { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm rtl:mr-0 rtl:ml-4">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(/johannnix.png)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a className="font-semibold text-slate-900 dark:text-gray-200 hover:text-blue-600 hover:underline dark:hover:text-gray-200">
          {' '}
          Johannnix
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};

export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'About Us',
      texts: [
        'IDVACC is a division of the VATSIM network. VATSIM Southeast Asia (IDVACC) is responsible for providing ATC services for all Indonesian Airspace.',
      ],
    },
    {
      title: 'Connect with us',
      links: [
        {
          label: 'Discord',
          href: 'https://community.vatsim.net/',
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/vaccindonesia/',
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/indonesiavacc/',
        },
        {
          label: 'YouTube',
          href: 'https://www.youtube.com/@vatsimindonesia5439',
        },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Privacy Policy', href: '/#' },
        { label: 'Join IDvACC', href: '/join' },
        { label: 'Bookings', href: '/#' },
        { label: 'FAQs', href: '/#' },
        { label: 'Membership Tickets', href: '/#' },
      ],
    },
  ],
  socials: [
    { label: 'Discord', icon: IconBrandDiscord, href: 'https://community.vatsim.net/' },
    { label: 'Facebook', icon: IconBrandFacebook, href: 'https://www.facebook.com/vaccindonesia/' },
    { label: 'Instagram', icon: IconBrandInstagram, href: 'https://www.instagram.com/indonesiavacc/' },
    { label: 'Youtube', icon: IconBrandYoutube, href: 'https://www.youtube.com/@vatsimindonesia5439' },
  ],
  footNote: (
    <div className="mr-4 text-sm rtl:mr-0 rtl:ml-4">
      <span className="float-left rtl:float-right mr-1.5 rtl:mr-0 rtl:ml-1.5 h-5 w-5 rounded-sm bg-[url(/favicon.ico)] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      <span>
        Made by{' '}
        <a className="font-semibold text-slate-900 dark:text-gray-200 hover:text-slate-900 hover:underline dark:hover:text-gray-200">
          {' '}
          IDvACC
        </a>{' '}
        · All rights reserved.
      </span>
    </div>
  ),
};
