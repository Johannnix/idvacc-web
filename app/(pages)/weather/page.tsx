import type { Metadata } from 'next';
import Weather from '~/components/widgets/Weather';
import { event } from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `Weather`,
};

export default function Page() {
  return (
    <>
      <Weather {...event} />
    </>
  );
}
