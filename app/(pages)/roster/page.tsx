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
import Roster from '~/components/widgets/Roster';
import Page404 from '~/components/widgets/Page404';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  // callToAction2Home,
  // contactHome,
  // contentHomeOne,
  // contentHomeTwo,
  // faqs2Home,
  // featuresHome,
  ourTeam,
  // pricingHome,
  // socialProofHome,
  // stepsHome,
  teamAbout,
  rosterAbout2,
  // testimonialsHome,
} from '~/shared/data/pages/about.data';
import axios from 'axios';

export const metadata: Metadata = {
  title: `Roster`,
};

export default function Page() {
  const getATCRoster =  async () => {
    await Promise.all([
      axios.get('https://hq.vat-sea.com/api/vacc/idn/resident'),
      axios.get('https://hq.vat-sea.com/api/vacc/idn/visitor'),
    ]).then(([data1,data2]) => {
      const resident = data1.data
      const visitor = data2.data
      const temp: any = []
      
      resident.map((data: any) => {
        temp.push({
          name: String(data.name).toLowerCase().split(' ').map((s: string) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '),
          cid: data.cid,
          approvedFor: data.approved_for,
          status: 'Resident ATC'
        })
      })

      visitor.map((data: any) => {
        temp.push({
          name: String(data.name).toLowerCase().split(' ').map((s: string) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '),
          cid: data.cid,
          approvedFor: data.approved_for,
          status: 'Visitor ATC'
        })
      })
      
      rosterAbout2.data = temp.filter((data: any) => data.approvedFor !== null)
    })
  }

  getATCRoster();

  return (
    <>
      {/* <Hero {...rosterAbout} /> */}
      {/* <SocialProof {...socialProofHome} /> */}
      {/* <Features {...featuresHome} /> */}
      {/* <Content {...contentHomeOne} /> */}
      {/* <Content {...contentHomeTwo} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <FAQs2 {...faqs2Home} /> */}
      {/* <Pricing {...pricingHome} /> */}
      <Roster {...rosterAbout2} />
      {/* <Contact {...contactHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
