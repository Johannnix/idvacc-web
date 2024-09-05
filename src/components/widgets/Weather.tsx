'use client';
import React, { useState } from 'react';
import axios, { AxiosError } from "axios";
import { EventProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import parseMETAR from 'ts-metar-parser';
import { format } from 'date-fns-tz';

// Weather data interface
interface WeatherProps {
  raw_text: string;
  raw_parts: string[];
  icao?: string;
  observed?: string;
  wind?: {
    degrees: number;
    degrees_from?: number;
    degrees_to?: number;
    speed_kts: number;
    speed_mps: number;
    gust_kts: number;
    gust_mps: number;
  };
  visibility?: {
    miles: string;
    miles_float: number;
    meters: string;
    meters_float: number;
  };
  conditions?: {
    code: string;
  }[];
  clouds?: {
    code: string;
    base_feet_agl: number;
    base_meters_agl: number;
  }[];
  ceiling?: {
    code: string;
    feet_agl: number;
    meters_agl: number;
  };
  temperature?: {
    celsius: number;
    fahrenheit: number;
  };
  dewpoint?: {
    celsius: number;
    fahrenheit: number;
  };
  humidity_percent?: number;
  barometer?: {
    hg: number;
    kpa: number;
    mb: number;
  };
  flight_category: string;
}

// CardWeather component
const CardWeather = ({ airport, data }: { airport: string; data: WeatherProps }) => {
  return (
    <>
      <div className="mt-8 lg:mx-[300px] min-h-96 border border-gray-300 shadow-md dark:border-none dark:bg-slate-800 rounded p-3">
        <h1 className="text-xl font-semibold">Weather & METAR for {airport} ({data.icao?.toUpperCase()})</h1>
        <div className="mt-5">
          {data ? (
            <>
              <pre className="text-sm lg:text-xl text-wrap">{data.raw_text}</pre>
              <div className="mt-3">
                <p>Updated at : {format(`${data.observed}`, 'dd MMM yyyy p', { timeZone: 'GMT' })}</p>
                <div className="gap-6 mx-auto mt-3 w-fit">
                  <div className="flex flex-col items-start justify-center gap-5 mt-6">
                    <h1 className="text-6xl font-bold md:text-7xl">{data.temperature?.celsius}&#176;C</h1>
                    <p className="text-lg md:text-xl">Wind: {data.wind?.degrees} @ {data.wind?.speed_kts} kts</p>
                    <p className="text-lg md:text-xl">QNH: {data.barometer?.mb} / {data.barometer?.hg?.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm font-semibold">METAR not found</p>
          )}
        </div>
      </div>
    </>
  );
};

const Weather = ({ id, hasBackground }: EventProps) => {
  const [icao, setIcao] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [airport, setAirport] = useState<string>('');
  const [metar, setMetar] = useState<string>('');

  // Fetch airport information
  const getAirport = async (icao: string) => {
    const data = await axios
      .get(`https://airportdb.io/api/v1/airport/${icao}?apiToken=0fc4b3c45664bc5e3dd2bb7366d0ba3deb4ba7f591e5a3a983b42a7af3edc14951ec203daadf6c7110b3702cb6423042`)
      .catch((error: AxiosError) => {
        setAirport('');
      });

    if (data) setAirport(data.data.name);
  };

  // Fetch METAR information
  const getMetar = async (icao: string) => {
    const { data } = await axios.get(`https://metar.vatsim.net/${icao}`);
    if (data) {
      setMetar(data);
    }
  };

  // Handle form submit
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await getAirport(icao);
    await getMetar(icao);
    setLoading(false);
  };

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">Weather</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl lg:text-5xl">
                VATSIM Weather Information
              </h1>
            </div>
          </div>
        </div>

        {/* Search form */}
        <form className="lg:max-w-md max-w-lg lg:mx-96 mx-auto mt-12 lg:mt-0" onSubmit={handleSearch}>
          <label htmlFor="weather" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="text"
              name="weather"
              id="weather"
              value={icao}
              onChange={(e) => setIcao(e.target.value)}
              className="block lg:w-full w-96 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Use ICAO Code (example: WIII)"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        {/* Render weather information */}
        {metar && (
          <>
            {loading ? (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            ) : (
              <CardWeather airport={airport} data={parseMETAR(metar)} />
            )}
          </>
        )}
      </section>
    </WidgetWrapper>
  );
};

export default Weather;
