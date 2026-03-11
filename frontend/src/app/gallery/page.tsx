/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import GalleryPageView from '../../views/GalleryPage';

export const metadata: Metadata = {
  title: 'Installation Gallery | Finished Pet Door Projects | Digsy',
  description:
    'Browse Digsy\'s finished installation gallery. Filter by service type, wall material, and pet type to see real results across dog doors, cat doors, smart access systems, and vertical habitats.',
};

export default function GalleryPage() {
  return <GalleryPageView />;
}
