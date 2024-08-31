import React from 'react';
import { JoinProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const JoinUs: React.FC<JoinProps> = ({ id, hasBackground }) => {
  const status = 'open'; // Change to 'closed' to test closed status

  return (
    <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">Join Us</p>
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
                Recruitment
              </h1>
              <p className="mb-6 text-md font-normal text-gray-600 dark:text-slate-400">
                Take control of Indonesia virtual airspace and ensure a{' '}
                <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
                  Smooth, Safe, and Efficient
                </span>{' '}
                flow of aircraft within the designated Flight Information Region (FIR). Join forces with a team of
                highly skilled online professionals dedicated to excellence in air traffic control. <br />
                <br />
                Our comprehensive training program prepares trainees to meet the highest standards of the VATSIM Global
                Controller Administration Policy (GCAP), with a strong emphasis on local procedures. Navigate through
                Indonesia dynamic and challenging airspace with confidence. Are you ready to take on the challenge?
                Explore further details below!
              </p>

            {/* Controller Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white rounded-lg shadow-md p-4 dark:bg-[#1e293b]">
                <h3 className="text-xl font-bold mb-2">RESIDENT CONTROLLER</h3>
                <div className={`bg-${status === 'open' ? 'green-500' : 'red-500'} text-white rounded-lg px-4 py-2`}>
                  {status === 'open' ? 'OPEN' : 'CLOSED'}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 dark:bg-[#1e293b]">
                <h3 className="text-xl font-bold mb-2">VISITING CONTROLLER</h3>
                <div className={`bg-${status === 'open' ? 'green-500' : 'red-500'} text-white rounded-lg px-4 py-2`}>
                  {status === 'open' ? 'OPEN' : 'CLOSED'}
                </div>
              </div>
            </div>

            <div className="mt-14 text-left">
              <div className="text-md font-normal text-gray-600 dark:text-slate-400">
                <strong className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">
                  Becoming a controller in IDvACC is an easy process.
                </strong>
                <br />
                <br />
                <strong className="dark:text-[#cbd5e1]">What's IDvACC?</strong>
                <br />
                IDvACC is the Indonesian division of the VATSIM network, responsible for providing Air Traffic Control
                (ATC) service and ATC Training across Indonesian airspace.
                <br />
                <br />
              </div>
              <div className="text-md font-normal text-gray-600 dark:text-slate-400">
                <strong className="dark:text-[#cbd5e1]">
                  Step 1 - Completing the Computer-Based Training (CBT) Modules
                </strong>
                <ol className="list-decimal ml-5">
                  <li>
                    Open the CBT page by using the "Training" button at the top of the IDvACC website or by visiting{' '}
                    <a
                      href="http://cbt.idvacc.id"
                      className="underline text-primary-600 dark:text-primary-200 transition-colors duration-300 hover:text-primary-800 dark:hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      cbt.idvacc.id
                    </a>
                    .
                  </li>
                  <li>Log in using your VATSIM credentials.</li>
                  <li>Click the "Courses" button on the left tab.</li>
                  <li>Complete the required courses and topics inside (Block 1 & Block 2).</li>
                  <li>Once all training is completed, the "Pretest" button will appear.</li>
                </ol>
              </div>
              <div className="text-md font-normal text-gray-600 dark:text-slate-400 mt-4">
                <strong className="dark:text-[#cbd5e1]">Step 2 - Taking the Pretest</strong>
                <ol className="list-decimal ml-5">
                  <li>Take the pretest, and make sure to score at least 80%.</li>
                  <li>
                    After successfully passing the pretest, a generated code will be provided.{' '}
                    <strong className="dark:text-[#cbd5e1]">Save this code</strong> as it will only appear once.
                  </li>
                </ol>
              </div>
              <div className="text-md font-normal text-gray-600 dark:text-slate-400 mt-4">
                <strong className="dark:text-[#cbd5e1]">Step 3 - Submitting Your Application</strong>
                <ol className="list-decimal ml-5">
                  <li>
                    Go to the{' '}
                    <a
                      href="https://hq.vat-sea.com/support/create"
                      className="underline text-primary-600 dark:text-primary-200 transition-colors duration-300 hover:text-primary-800 dark:hover:text-primary-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IDvACC Support Portal
                    </a>{' '}
                    to create a ticket.
                  </li>
                  <li>
                    Set the assigned staff to "Indonesia vACC Staff" and the subject to “Resident Controller
                    Application”
                  </li>
                  <li>
                    In the description field, include:
                    <ul className="list-disc ml-5 mt-2">
                      <li>
                        <strong className="dark:text-[#cbd5e1]">The generated code from the CBT.</strong>
                      </li>
                      <li>
                        <strong className="dark:text-[#cbd5e1]">A self-introduction</strong>, including:
                        <ul className="list-disc ml-5 mt-2">
                          <li>Your time zone of residence.</li>
                          <li>Any aviation background you may have.</li>
                          <li>Why you are interested in becoming a controller.</li>
                          <li>What made you choose IDvACC as your subdivision.</li>
                          <li>Any other information that you would like to provide to support your application.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
              <p className="text-md font-normal text-gray-600 dark:text-slate-400 mt-4">
                By following these steps, you’ll be on your way to starting your ATC training with IDvACC!
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </WidgetWrapper>
  );
};

export default JoinUs;
