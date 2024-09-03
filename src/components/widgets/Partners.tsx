import Image from 'next/image';
import Headline from '../common/Headline';
import { PartnersProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const partners = [
  { src: '/images/partners/vatsim.png', alt: 'Vatsim', link: 'https://www.vatsim.net' },
  { src: '/images/partners/vatsea.png', alt: 'Vatsea', link: 'https://vat-sea.com/' },
  { src: '/images/partners/vatsimRadar.svg', alt: 'Vatsim Radar', link: 'https://vatsim-radar.com/' },
  { src: '/images/partners/gv.png', alt: 'Garuda Virtual', link: 'https://garudavirtual.org/' },
  // Add other partners here with their corresponding links
];

const Partners = ({ header, id, hasBackground = false }: PartnersProps) => (
  <WidgetWrapper id={id || ''} hasBackground={hasBackground} containerClass="max-w-6xl">
    {header && <Headline header={header} titleClass="text-3xl sm:text-3xl" />}
    <div className="flex justify-center flex-wrap gap-6">
      {partners.map((partner, index) => (
        <div key={index} className="flex items-center">
          <a href={partner.link} target="_blank" rel="noopener noreferrer">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={190}
              height={65}
              className="object-contain transition duration-200 grayscale hover:grayscale-0"
            />
          </a>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Partners;
