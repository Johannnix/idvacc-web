'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import headerLogo from '~/assets/images/404.png';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace('https://idvacc-web.vercel.app');
    }, 6000);
  }, []);

  return (
    <div
      className="dark:bg-[#0f172a] bg-white dark:text-white text-black min-h-screen flex lg:flex-row flex-col gap-10 justify-center items-center overflow-hidden"
    >
      <Image src={headerLogo} alt="idvacc-logo" className="md:h-36 h-36 w-auto" />
      <div className="hidden h-48 pr-5 border-white lg:border-r-2 lg:block">
        &nbsp;
      </div>
      <h1
        id="text"
        className="md:text-3xl text-xl p-2 lg:text-left text-center font-bold animate-masuk"
        style={{
          animation: 'masuk 10s infinite',
        }}
      >
        Waduuh, halamannya belum siap! Tunggu bentar, ya!
      </h1>
      <style>
        {`
          @keyframes masuk {
            0% {
              opacity: 0;
              transform: translateX(100px);
            }
            25% {
              opacity: 1;
              transform: translateX(0);
            }
            75% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0;
              transform: translateX(100px);
            }
          }
         .animate-masuk {
            animation: masuk 10s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default App;
