'use client'
import { RosterProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Roster = ({ id, hasBackground = false, data }: RosterProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <section id="heroOne">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">
              Controller Roster
            </p>
            <h1 className="mb-6 text-3xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl ">
              Resident & Visitor Controller Roster
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name (CID)
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Approved For
                </th>
                <th scope="col" className="px-6 py-3">
                  ATC Status
                </th>
              </tr>
            </thead>
            <tbody>
              {
                data &&
                data.map((data, index) => {
                  return (
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">{data.cid}</td>
                      <td className="px-6 py-4">{data.name}</td>
                      <td className="px-6 py-4">{data.approvedFor}</td>
                      <td className="px-6 py-4">{data.status}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </WidgetWrapper>
);

export default Roster;
