import type { Metadata } from 'next';
import ATCDoc from '~/components/widgets/AtcDocs';
import { event } from '~/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `ATC Documents`,
};

export default function Page() {
  return (
    <>
      <ATCDoc {...event} />
    </>
  );
}
