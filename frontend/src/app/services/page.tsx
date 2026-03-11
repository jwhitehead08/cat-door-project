/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import ServicesPageView from '../../views/ServicesPage';

export const metadata: Metadata = {
  title: 'Our Services | Pet Door Installation & Home Modifications | Digsy',
  description:
    'Explore Digsy\'s full range of pet home modification services — professional dog door and cat door installation, smart microchip access systems, and custom vertical habitats for the modern home.',
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
