import React from 'react';
import { RosterProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Image from 'next/image';

const JoinUs = ({ id, hasBackground }: RosterProps) => {
  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">Join Us</p>
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
                Recruitment
              </h1>
              <p className="mb-6 text-md font-normal text-gray-600 dark:text-slate-400">
                Take control of Indonesia virtual airspace and ensure a <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">Smooth, Safe, and Efficient</span>{' '} flow of aircraft
                within the designated Flight Information Region (FIR). Join forces with a team of highly skilled online
                professionals dedicated to excellence in air traffic control. <br />
                <br />
                Our comprehensive training program prepares trainees to meet the highest standards of the VATSIM Global
                Rating Policy, with a strong emphasis on local procedures. Navigate through Indonesia dynamic and
                challenging airspace with confidence. Are you ready to take on the challenge? Explore further details
                below!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4 dark:bg-[#1e293b]">
                  <h3 className="text-xl font-bold mb-2">RESIDENT CONTROLLER</h3>
                  <div className="bg-red-500 text-white rounded-lg px-4 py-2">CLOSED</div>
                  {/* <p className="mt-2">Until Further Notice</p> */}
                </div>
                <div className="bg-white rounded-lg shadow-md p-4 dark:bg-[#1e293b]">
                  <h3 className="text-xl font-bold mb-2">VISITING CONTROLLER</h3>
                  <div className="bg-red-500 text-white rounded-lg px-4 py-2">CLOSED</div>
                  {/* <p className="mt-2">Until Further Notice</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default JoinUs;
