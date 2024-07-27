import React from 'react';
import { EventProps, RosterProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const docsConstant = [
  {
    name: 'Indonesia vACC ATC General SOP 2024',
    filename: 'idvacc_atc_sop.pdf',
  },
  {
    name: 'ATC Guide',
    filename: 'atc_guide.pdf',
  },
];

const ATCDocs = ({ id, hasBackground }: EventProps) => {
  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">ATC</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl lg:text-5xl">
                ATC Documents
              </h1>
              <p className="mb-6 font-normal text-gray-600 text-md dark:text-slate-400">
                Here is a list of ATC Documents can be accessed below
              </p>
              <div className="flex flex-col gap-3 mt-4">
                {docsConstant.map(({ name, filename }, idx) => (
                  <DocumentsData name={name} filename={filename} key={idx} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

interface Docs {
  name: string;
  filename: string;
}

const DocumentsData = ({ name, filename }: Docs) => {
  return (
    <div className="p-4 text-white bg-gray-800 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base">{name}</h2>
        </div>
        <a download href={`./${filename}`} className="text-gray-400 hover:text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" height="24px" width="24px">
            <path d="M18.948 11.112C18.511 7.67 15.563 5 12.004 5c-2.756 0-5.15 1.611-6.243 4.15-2.148.642-3.757 2.67-3.757 4.85 0 2.757 2.243 5 5 5h1v-2h-1c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.757 2.673-3.016l.581-.102.192-.558C8.153 8.273 9.898 7 12.004 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-2v2h2c2.206 0 4-1.794 4-4a4.008 4.008 0 00-3.056-3.888z" />
            <path d="M13.004 14v-4h-2v4h-3l4 5 4-5z" />
          </svg>
        </a>
      </div>
    </div>
    // <a download href={`./${filename}`}>
    //   <div className="p-4 mx-24 border-2 border-white rounded-lg hover:bg-[#afafaf] transition hover:text-black font-semibold hover:cursor-pointer">
    //     {name}
    //   </div>
    // </a>
  );
};

export default ATCDocs;
