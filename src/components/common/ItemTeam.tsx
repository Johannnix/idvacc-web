import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { Team } from '~/shared/types';

const ItemTeam = ({
  name,
  occupation,
  image,
  items,
  containerClass,
  imageClass,
  panelClass,
  nameClass,
  occupationClass,
  itemsClass,
}: Team) => {
  return (
    <div className="dark:bg-[#0f172a] bg-white px-4 py-4 dark:border-[#313b4b] rounded-lg border border-styled ng-star-inserted">
      {/* <Image src={image.src} width={240} height={320} alt={image.alt} className={twMerge('', imageClass)} /> */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="font-light">{occupation}</p>
        </div>
        <div className="flex justify-center items-center">
          <ul>
            {items &&
              items.map(
                ({ title, href, icon: Icon }, index2) =>
                  Icon &&
                  href && (
                    <li
                      key={`team-${index2}`}
                      className="m-1 flex items-center justify-center rounded text-primary-700 hover:text-gray-500"
                    >
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={title as string}
                        className="flex items-center justify-center rounded-sm bg-transparent p-0.5 text-slate-500 hover:bg-slate-200 hover:text-slate-500 hover:dark:bg-slate-800 hover:dark:text-slate-200"
                      >
                        <Icon className="h-6 w-6 p-0.5" />
                      </a>
                    </li>
                  ),
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemTeam;
