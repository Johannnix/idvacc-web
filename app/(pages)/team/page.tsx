import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team2 from '~/components/widgets/Team2';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  ourTeam,
  teamAbout,
} from '~/shared/data/pages/about.data';
import axios from 'axios';


export const metadata: Metadata = {
  title: `Our Team`,
};

export default function Page() {
  const getStaffData = async () => {
    const { data } = await axios.get('https://hq.vat-sea.com/api/vacc/idn/staff')
    if (data) {
      teamAbout.teams.forEach((team, index) => {
        team.name = String(data[index].name).toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        team.occupation = `${data[index].position_name} | ${data[index].position_code}`;
      })
      teamAbout.teams.sort((a, b) => a.occupation.split(' | ')[1].localeCompare(b.occupation.split(' | ')[1]));
    }
  }

  getStaffData();

  return (
    <>
      <Hero {...ourTeam} />
      {/* <SocialProof {...socialProofHome} /> */}
      {/* <Features {...featuresHome} /> */}
      {/* <Content {...contentHomeOne} /> */}
      {/* <Content {...contentHomeTwo} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <FAQs2 {...faqs2Home} /> */}
      {/* <Pricing {...pricingHome} /> */}
      <Team2 {...teamAbout} />
      {/* <Contact {...contactHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
