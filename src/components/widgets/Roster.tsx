'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RosterProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Roster = ({ id, hasBackground = false }: RosterProps) => {
  const [localRosterData, setLocalRosterData] = useState<any[]>([]);
  const [visitorRosterData, setVisitorRosterData] = useState<any[]>([]);
  const [currentLocalPage, setCurrentLocalPage] = useState(1);
  const [currentVisitorPage, setCurrentVisitorPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const getRosterData = async () => {
      try {
        const [residentResponse, visitorResponse] = await Promise.all([
          axios.get('https://hq.vat-sea.com/api/vacc/idn/resident'),
          axios.get('https://hq.vat-sea.com/api/vacc/idn/visitor'),
        ]);

        const formatData = (data: any[]) =>
          data
            .map((item: any) => ({
              name: item.name
                .toLowerCase()
                .split(' ')
                .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' '),
              cid: item.cid,
              rating: item.rating.match(/\(([^)]+)\)/)?.[1], // Extract characters inside parentheses
              approvedFor: item.approved_for,
              status: item.status,
            }))
            .filter((data: any) => data.approvedFor !== null)
            .sort((a, b) => a.name.localeCompare(b.name));

        setLocalRosterData(formatData(residentResponse.data));
        setVisitorRosterData(formatData(visitorResponse.data));
      } catch (error) {
        console.error('Error fetching ATC roster:', error);
      }
    };

    getRosterData();
  }, []);

  const renderTable = (data: any[], currentPage: number, handlePageChange: (page: number) => void) => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
      <div className="flex justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  CID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3">
                  Approved For
                </th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((data, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{data.cid}</td>
                  <td className="px-6 py-4">{data.name}</td>
                  <td className="px-6 py-4 text-center">{data.rating}</td>
                  <td className="px-6 py-4">{data.approvedFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {indexOfFirstItem + 1}-{indexOfLastItem}
              </span>{' '}
              of <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i}>
                  <button
                    onClick={() => handlePageChange(i + 1)}
                    className={`px-3 py-2 leading-tight ${
                      currentPage === i + 1
                        ? 'text-blue-600 bg-blue-50 border border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-700'
                        : 'text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                    } hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white`}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  };

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">
                Controller Roster
              </p>
              <h1 className="mb-6 text-3xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl">
                Local Controller Roster
              </h1>
            </div>
          </div>
        </div>
        {renderTable(localRosterData, currentLocalPage, setCurrentLocalPage)}
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-6 mt-20 text-3xl font-bold tracking-tighter leading-tighter font-heading md:text-5xl">
                Visiting Controller Roster
              </h1>
            </div>
          </div>
        </div>
        {renderTable(visitorRosterData, currentVisitorPage, setCurrentVisitorPage)}
      </section>
    </WidgetWrapper>
  );
};

export default Roster;
