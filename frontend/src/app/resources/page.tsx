/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import ResourcesPageView from '../../views/ResourcesPage';

export const metadata: Metadata = {
  title: 'Pet Door Resources & Guides | Digsy',
  description:
    'Practical guides for homeowners choosing and installing pet doors — from sizing and material selection to installation type comparisons and Texas-specific climate advice.',
};

export default function ResourcesPage() {
  return <ResourcesPageView />;
}
