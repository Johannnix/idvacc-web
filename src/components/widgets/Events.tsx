import axios, { AxiosError } from 'axios';
import { NextResponse } from 'next/server';
import { EventProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Image from 'next/image';

interface Event {
  id: number;
  type: string;
  name: string;
  link: string;
  organisers: {
    region: string;
    division: string;
    subdivision: string | null;
    organised_by_vatsim: boolean;
  }[];
  airports: {
    icao: string;
  }[];
  routes: any[];
  start_time: string;
  end_time: string;
  short_description: string;
  description: string;
  banner: string;
}

interface ValidationError {
  message: string;
  errors: Record<string, string[]>;
}

const getEvent = async () => {
  try {
    const response = await axios.get<{ data: Event[] }>('https://my.vatsim.net/api/v2/events/latest');
    const { data } = response.data;
    if (data) {
      const filteredData = data.filter((event) =>
        event.airports.some((airport) => airport.icao.startsWith('WI') || airport.icao.startsWith('WA')),
      );
      return filteredData;
    } else {
      throw new AxiosError('No events found', '204');
    }
  } catch (e: any) {
    if (axios.isAxiosError<ValidationError, Record<string, unknown>>(e)) {
      throw new Error(e.message);
    }
  }
};

const formatDate = (dateTimeString: string) => {
  const date = new Date(dateTimeString);
  const utcDay = String(date.getUTCDate()).padStart(2, '0');
  const utcMonth = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
  const utcYear = date.getUTCFullYear();

  let utcHours = date.getUTCHours();
  const utcMinutes = String(date.getUTCMinutes()).padStart(2, '0');
  const period = utcHours >= 12 ? 'PM' : 'AM';
  utcHours = utcHours % 12 || 12; // Convert to 12-hour format
  const formattedTime = `${String(utcHours).padStart(2, '0')}:${utcMinutes} ${period}`;

  const formattedDate = `${utcDay}/${utcMonth}/${utcYear} at`;

  return { formattedDate, formattedTime };
};

const Event = async ({ id, hasBackground }: EventProps) => {
  let events;
  try {
    events = await getEvent();
  } catch (error) {
    console.error(error);
    return (
      <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
        <section id="heroOne">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Failed to fetch events</h2>
          </div>
        </section>
      </WidgetWrapper>
    );
  }

  const dateNow = new Date();
  const utcTimeString = dateNow.toISOString();
  const filteredEvents = events
    ? events.filter((event: any) => new Date(utcTimeString) < new Date(event.end_time))
    : [];

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">Events</p>
              <h1 className="mb-6 text-4xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl lg:text-5xl">
                Upcoming Events
              </h1>
              <p className="mb-6 font-normal text-gray-600 text-md dark:text-slate-400">
                All dates and times are in Zulu (UTC) time.
              </p>
            </div>
          </div>
        </div>
        {filteredEvents.length > 0 ? (
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            {filteredEvents.map((event: any) => {
              const { formattedDate, formattedTime } = formatDate(event.start_time);
              return (
                <div key={event.id}>
                  <a href={event.link} target="_blank" rel="noopener noreferrer">
                    <div className="max-w-sm transition-transform duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72 hover:scale-105">
                      <Image
                        src={event.banner}
                        width={290}
                        height={160}
                        alt={event.name}
                        className="w-full rounded-t-lg"
                        layout="responsive"
                        loading='lazy'
                      />
                      <div className="p-5">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {event.name}
                        </h5>
                        <hr className="w-full h-px mt-4 mb-4 bg-white" />
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-green-500">Roster</span>
                            <span className="text-right text-gray-700 dark:text-gray-400">{formattedDate}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-green-500">Released</span>
                            <span className="text-right text-gray-700 dark:text-gray-400">{formattedTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 dark:text-white">Event Status</span>
                          <span className="text-gray-700 dark:text-white">Event Start</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">No Upcoming Events</h2>
          </div>
        )}
      </section>
    </WidgetWrapper>
  );
};

export default Event;
