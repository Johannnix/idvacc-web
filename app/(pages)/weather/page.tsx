"use client";

import { useState } from 'react';
import Head from 'next/head';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: `Weather`,
// }

export default function Page() {
  const [icaoCodes, setIcaoCodes] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddIcaoCode = () => {
    const codes = inputValue.split(' ').map(code => code.trim().toUpperCase()).filter(code => code);
    setIcaoCodes(codes);
  };

  return (
    <>
      <Head>
        <title>Weather</title>
      </Head>
      <div className="container p-4 mx-auto min-h-dvh">
        <h1 className="mb-4 text-2xl font-bold">Weather Information</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter ICAO codes separated by space (e.g., WIII WADD CYVR CYEG)"
            className="p-2 mr-2 border rounded placeholder:text-sm"
          />
          <button onClick={handleAddIcaoCode} className="p-2 text-white bg-blue-500 rounded">
            Add ICAO Codes
          </button>
        </div>
        <div>
          {icaoCodes.map((code, index) => (
            <div key={index} className="mb-4 bg-white">
              <a
                href={`https://metar-taf.com/${code}`}
                id={`metartaf-${code}`}
                className="block text-lg font-medium text-black h-[500px]"
                style={{ padding: '2em' }}
              >
                METAR Information for {code}
              </a>
              <script
                async
                defer
                src={`https://metar-taf.com/embed-js/${code}?layout=landscape&qnh=hPa&rh=dp&target=${code}`}
              ></script>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
