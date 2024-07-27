import axios from 'axios';
import { EventProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Image from 'next/image';

const getEvent = async () => {
  try {
    const res = await axios.get('https://hq.vat-sea.com/api/events/vacc/idn');
    return res.data;
  } catch (error) {
    throw new Error('Failed to fetch events');
  }
};

const formatDate = (dateTimeString: string) => {
  const [datePart, timePart] = dateTimeString.split('T');
  const dateParts = datePart.split('-');
  const day = dateParts[2];
  const month = dateParts[1];
  const year = dateParts[0];

  const timeParts = timePart.slice(0, 5).split(':');
  let hour = parseInt(timeParts[0], 10);
  const minute = timeParts[1];

  let period = 'am';
  if (hour >= 12) {
    period = 'pm';
    if (hour > 12) {
      hour -= 12;
    }
  }
  if (hour === 0) {
    hour = 12;
  }

  // Pad hour with leading zero if less than 10
  const formattedHour = hour.toString().padStart(2, '0');

  return `${day}/${month}/${year} at ${formattedHour}:${minute} ${period}`;
};

const Event = async ({ id, hasBackground }: EventProps) => {
  const events = await getEvent();
  const dateNow = new Date();
  const utcTimeString = dateNow.toISOString();
  const filteredEvents = events.filter((event: any) => new Date(utcTimeString) < new Date(event.end));

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
                All dates and times are in your local browser time.
              </p>
            </div>
          </div>
        </div>
        {filteredEvents.length > 0 ? (
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            {filteredEvents.map((event: any) => (
              <div key={event.id}>
                <a href={`https://hq.vat-sea.com/event/${event.id}`} target='_blank'>
                  <div className="max-w-sm transition-transform duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72 hover:scale-105">
                    <Image
                      src={event.banner_link}
                      width={290}
                      height={160}
                      alt={event.title}
                      className="w-full rounded-t-lg"
                    />
                    <div className="p-5">
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h5>
                      <hr className="w-full h-px mt-4 mb-4 bg-white" />
                      <div className="flex items-center justify-between">
                        <span className="text-green-500">Roster Released</span>
                        <span className="text-right text-gray-700 dark:text-gray-400">{formatDate(event.start)}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 dark:text-white">Event Status</span>
                        <span className="text-gray-700 dark:text-white">Event Start</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
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
