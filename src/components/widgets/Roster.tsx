import { RosterProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Roster = ({ id, hasBackground = false }: RosterProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <section id="heroOne">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">
              Controller Roster
            </p>
            <h1 className="leading-tighter font-heading mb-6 text-3xl font-bold tracking-tighter md:text-5xl ">
              Local Controller Roster
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="px-6 py-4">Adi Kurniawan (1694519)</td>
                <td className="px-6 py-4">Tower Trainee (S1)</td>
                <td className="px-6 py-4">DEL, GND</td> */}
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="px-6 py-4">Alexander Ashari (1714763)</td>
                <td className="px-6 py-4">TMA Controller (S3)</td>
                <td className="px-6 py-4">DEL, GND, TWR</td> */}
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                {/* <td className="px-6 py-4">Andrew Eliezer (1455192)</td>
                <td className="px-6 py-4">Enroute Controller (C1)</td>
                <td className="px-6 py-4">DEL, GND, TWR, APP, CTR</td> */}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </WidgetWrapper>
);

export default Roster;
