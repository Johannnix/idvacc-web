// import type { Metadata } from 'next';

// import fs from 'fs';
// import path from 'path';
// import md from 'markdown-it';

// export const metadata: Metadata = {
//   title: 'Terms and conditions',
// };

// const Page = () => {
//   const filePath = path.join(process.cwd(), 'src/content/terms/terms.md');
//   const fileContent = fs.readFileSync(filePath, 'utf8');

//   return (
//     <div
//       className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
//       dangerouslySetInnerHTML={{
//         __html: md({
//           html: true,
//         }).render(fileContent),
//       }}
//     />
//   );
// };

// export default Page;
// import type { Metadata } from 'next';

// import fs from 'fs';
// import path from 'path';
// import md from 'markdown-it';

// export const metadata: Metadata = {
//   title: 'Privacy',
// };

// const Page = () => {
//   const filePath = path.join(process.cwd(), 'src/content/privacy/privacy.md');
//   const fileContent = fs.readFileSync(filePath, 'utf8');

//   return (
//     <div
//       className="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
//       dangerouslySetInnerHTML={{
//         __html: md({
//           html: true,
//         }).render(fileContent),
//       }}
//     />
//   );
// };

// export default Page;

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

export const metadata: Metadata = {
  title: `FGP`,
};

export default function Page() {
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
      {/* <Roster {...rosterAbout2} /> */}
      <Page404 />
      {/* <Contact {...contactHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}

