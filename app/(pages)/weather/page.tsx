"use client";

import { useState } from 'react';
import Head from 'next/head';

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
      <div className="container p-4 mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Weather Information</h1>
        <div className="mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter ICAO codes separated by space (e.g., WIII WADD CYVR CYEG)"
            className="p-2 mr-2 border"
          />
          <button onClick={handleAddIcaoCode} className="p-2 text-white bg-blue-500">
            Add ICAO Codes
          </button>
        </div>
        <div>
          {icaoCodes.map((code, index) => (
            <div key={index} className="mb-4">
              <a
                href={`https://metar-taf.com/${code}`}
                id={`metartaf-${code}`}
                className="block text-lg font-medium text-black"
                style={{ width: '1000px', height: '500px' }}
              >
                METAR Information for {code}
              </a>
              <script
                async
                defer
                src={`https://metar-taf.com/embed-js/${code}?layout=landscape&qnh=hPa&rh=rh&target=${code}`}
              ></script>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}