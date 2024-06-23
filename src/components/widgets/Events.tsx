import { RosterProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';
import Image from 'next/image';

const Event = ({ id, hasBackground }: RosterProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">
              Events
            </p>
            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
              Upcoming Events
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 flex-col md:flex-row">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72">
          <a href="#">
            <Image
              src="https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={290}
              height={160}
              alt=""
              className="rounded-t-lg w-full"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Spilled Milk Run Monday
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">South East Queensland</p>
            <hr className="w-full bg-white h-px mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-green-500">Roster Released</span>
              <span className="text-gray-700 dark:text-gray-400 text-right">24/06/2024 at 03:00 pm</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-white">Event Status</span>
              <span className="text-gray-700 dark:text-white">Event Start</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72">
          <a href="#">
            <Image
              src="https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={290}
              height={160}
              alt=""
              className="rounded-t-lg w-full"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Spilled Milk Run Monday
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">South East Queensland</p>
            <hr className="w-full bg-white h-px mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-green-500">Roster Released</span>
              <span className="text-gray-700 dark:text-gray-400 text-right">24/06/2024 at 03:00 pm</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-white">Event Status</span>
              <span className="text-gray-700 dark:text-white">Event Start</span>
            </div>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-72">
          <a href="#">
            <Image
              src="https://images.unsplash.com/photo-1570051008600-b34baa49e751?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={290}
              height={160}
              alt=""
              className="rounded-t-lg w-full"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Spilled Milk Run Monday
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">South East Queensland</p>
            <hr className="w-full bg-white h-px mt-4 mb-4" />
            <div className="flex justify-between items-center">
              <span className="text-green-500">Roster Released</span>
              <span className="text-gray-700 dark:text-gray-400 text-right">24/06/2024 at 03:00 pm</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-white">Event Status</span>
              <span className="text-gray-700 dark:text-white">Event Start</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </WidgetWrapper>
);

export default Event;
