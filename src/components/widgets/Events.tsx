import Image from 'next/image';
import WidgetWrapper from '../common/WidgetWrapper';

export default async function EventsPage({ id = '', hasBackground = false }) {
  const res = await fetch('https://my.vatsim.net/api/v2/events/latest', {
    cache: 'no-store', // Disable caching for fresh data
  });

  if (!res.ok) {
    return (
      <WidgetWrapper id={id} hasBackground={hasBackground} containerClass="">
        <section id="heroOne">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Failed to fetch events</h2>
          </div>
        </section>
      </WidgetWrapper>
    );
  }

  const data = await res.json();

  // Filter events based on ICAO codes that start with 'WI' or 'WA'
  const filteredEventsByICAO = data.data.filter((event: any) =>
    event.airports.some((airport: any) => airport.icao.startsWith('WI') || airport.icao.startsWith('WA')),
  );

  // Filter events based on the current time (only show upcoming events)
  const dateNow = new Date();
  const utcTimeString = dateNow.toISOString();
  const filteredEvents = filteredEventsByICAO.filter(
    (event: any) => new Date(utcTimeString) < new Date(event.end_time),
  );

  return (
    <WidgetWrapper id={id} hasBackground={hasBackground} containerClass="">
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
                    <div className="max-w-sm max-h-96 flex flex-col justify-between transition-transform duration-300 ease-in-out transform bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72 hover:scale-105 overflow-hidden">
                      <Image
                        src={event.banner}
                        width={290}
                        height={160}
                        alt={event.name}
                        className="w-full rounded-t-lg"
                        layout="responsive"
                        loading="lazy"
                      />
                      <div className="p-5 flex-grow flex flex-col justify-between">
                        <div>
                          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                            {event.name}
                          </h5>
                          <hr className="w-full h-px mt-4 mb-4 bg-white" />
                        </div>
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
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
  const formattedTime = new Date(dateString).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  return { formattedDate, formattedTime };
}
