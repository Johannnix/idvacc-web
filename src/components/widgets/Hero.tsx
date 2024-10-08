import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';
import CarouselFlow from './CarouselFlow';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {tagline && (
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">{tagline}</p>
            )}
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-3xl font-bold tracking-tighter md:text-3xl xl:text-5xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-md font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>
          </div>
          {image && (
            <div className="relative m-auto max-w-5xl">
              <CarouselFlow />
            </div>
          )}
          <p className="hidden text-base font-semibold mt-24 text-center tracking-wide text-primary-600 dark:text-primary-200 md:block">Maps</p>
          <h2 className="hidden leading-tighter font-heading font-bold tracking-tighter text-center md:text-3xl md:block">
            Live Tracker & Indonesia Map
          </h2>
          <iframe
            className="hidden md:block m-auto max-w-5xl w-full h-96 mt-8 rounded-lg"
            src="https://vatsim-radar.com/?preset=id&airports=WIII,WADD,WITT,WAJJ,WIMM,WIEE,WIPP,WAHI,WAHQ,WAHS,WIOO,WAOO,WAAA,WAFF,WAEE,WAMM,WAMG,WAPP,WASS,WADL,WARR,WIBB,WIGG,WILL,WICA,WALL,WALS,WAYY,WATO,WATT,WIDD,WIKT,WAWW,WIJJ,WAFW,WAKK,WAQT"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Hero;
