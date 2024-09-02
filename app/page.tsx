import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Steps from '~/components/widgets/Steps';
import Features from '~/components/widgets/Features';
import FAQs2 from '~/components/widgets/FAQs2';
import Contact from '~/components/widgets/Contact';
import {
  contactHome,
  faqs2Home,
  featuresHome,
  heroHome,
  partnersHome,
  stepsHome,
} from '~/shared/data/pages/home.data';
import Partners from '~/components/widgets/Partners';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      {/* <SocialProof {...socialProofHome} /> */}
      <Features {...featuresHome} />
      {/* <Content {...contentHomeOne} /> */}
      {/* <Content {...contentHomeTwo} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Testimonials {...testimonialsHome} /> */}
      <FAQs2 {...faqs2Home} />
      {/* <Pricing {...pricingHome} /> */}
      <Partners {...partnersHome} />
      {/* <Team {...teamHome} /> */}
      <Contact {...contactHome} />
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
