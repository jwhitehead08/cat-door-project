/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import ProcessPageView from '../../views/ProcessPage';

export const metadata: Metadata = {
  title: 'How It Works | Pet Door & Home Modification Process | Digsy',
  description:
    'Learn how Digsy installs pet doors and custom home modifications in three simple steps — consultation, precision installation, and seamless living. See what to expect on install day.',
};

export default function ProcessPage() {
  return <ProcessPageView />;
}
