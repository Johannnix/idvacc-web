'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ManagementTeamProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

interface TeamMember {
  name: string;
  position_name: string;
  position_code: string;
}

interface ManagementTeamState {
  teams: {
    name: string;
    occupation: string;
  }[];
}

const ManagementTeam = ({ id, hasBackground }: ManagementTeamProps) => {
  const [managementTeam, setManagementTeam] = useState<ManagementTeamState>({ teams: [] });

  useEffect(() => {
    const getStaffData = async () => {
      try {
        const { data } = await axios.get<TeamMember[]>('https://hq.vat-sea.com/api/vacc/idn/staff');
        if (data) {
          const teams = data.map((item) => ({
            name: String(item.name)
              .toLowerCase()
              .split(' ')
              .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' '),
            occupation: `${item.position_name} | ${item.position_code}`,
          }));
          teams.sort((a, b) => a.occupation.split(' | ')[1].localeCompare(b.occupation.split(' | ')[1]));
          setManagementTeam({ teams });
        }
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    getStaffData();
  }, []);

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      <section id="heroOne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-base font-semibold tracking-wide text-primary-600 dark:text-primary-200">Our Team</p>
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
                Management Team
              </h1>
              <p className="mb-6 text-md font-normal text-gray-600 dark:text-slate-400">
                Meet our staff team who manage day to day operations of the vACC.
              </p>
              {managementTeam.teams.map((team, index) => (
                <div
                  key={index}
                  className=" text-gray-600 mb-4 bg-white rounded-lg shadow-md p-4 dark:bg-[#1e293b] dark:text-white"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left">
                      <h2 className="text-xl font-bold">{team.name}</h2>
                      <p className="text-gray-600 dark:text-slate-400">{team.occupation}</p>
                    </div>
                    <div className="cursor-pointer">
                      <a href="" className="hover:text-slate-400 text-gray-600">
                        <svg viewBox="0 0 16 16" fill="currentColor" height="24" width="24">
                          <path
                            fillRule="evenodd"
                            d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </WidgetWrapper>
  );
};

export default ManagementTeam;
