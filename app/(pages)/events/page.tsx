import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Events from '~/components/widgets/Events';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  // callToAction2Home,
  // contactHome,
  // contentHomeOne,
  // contentHomeTwo,
  // faqs2Home,
  // featuresHome,
  // pricingHome,
  // socialProofHome,
  // stepsHome,
  event,
  // testimonialsHome,
} from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `Events`,
};

export default function Page() {
  return (
    <>
      {/* <Hero {...Events} /> */}
      {/* <SocialProof {...socialProofHome} /> */}
      {/* <Features {...featuresHome} /> */}
      {/* <Content {...contentHomeOne} /> */}
      {/* <Content {...contentHomeTwo} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      {/* <FAQs2 {...faqs2Home} /> */}
      {/* <Pricing {...pricingHome} /> */}
      <Events {...event} />
      {/* <Contact {...contactHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
