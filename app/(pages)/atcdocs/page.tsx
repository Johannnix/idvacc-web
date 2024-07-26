// import type { Metadata } from "next"

// interface Docs {
//   name: string,
//   filename: string
// }

// export const metadata: Metadata = {
//   title: `ATC Documents`,
// }

// const docsConstant: Docs[] = [
//   {
//     name: "Indonesia vACC ATC General SOP 2024",
//     filename: "idvacc_atc_sop.pdf"
//   },
//   {
//     name: "ATC Guide",
//     filename: "atc_guide.pdf"
//   }
// ]

// export default function Page() {
//   return (
//     <div className="flex flex-col gap-4 p-3 min-h-dvh">
//       <div className="text-center">
//         <h1 className="text-xl font-bold md:text-3xl">ATC Documents</h1>
//         <p className="text-sm">Here is a list of ATC Documents can be accessed below</p>
//       </div>
//       <div className="flex flex-col gap-3 mt-4">
//         {docsConstant &&
//           docsConstant.map(({name, filename}: Docs, idx) => {
//             return (
//               <DocumentsData name={name} filename={filename} key={idx} />
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// const DocumentsData = ({name, filename}: Docs) => {
//   return (
//     <a download href={`./${filename}`}>
//       <div className="p-4 mx-24 border-2 border-white rounded-lg hover:bg-[#afafaf] transition hover:text-black font-semibold hover:cursor-pointer">
//         {name}
//       </div>
//     </a>
//   )
// }

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
import ATCDoc from '~/components/widgets/AtcDocs';
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
  title: `ATC Documents`,
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
      {/* <Events {...event} /> */}
      <ATCDoc {...event} />
      {/* <Contact {...contactHome} /> */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
    </>
  );
}
