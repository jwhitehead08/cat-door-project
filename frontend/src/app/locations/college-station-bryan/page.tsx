/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next';
import CollegeStationBryanView from '../../../views/CollegeStationBryan';

export const metadata: Metadata = {
  title: 'Pet Home Modifications & Installations | College Station & Bryan, TX | Digsy',
  description:
    "Professional dog door and cat door installation in Aggieland. Digsy provides modern home modifications for pets in College Station and Bryan, TX. Enhance your pet's stimulation and safety.",
  keywords: [
    'pet home modifications College Station',
    'dog door installation Bryan TX',
    'cat door installer Aggieland',
    'modern pet furniture',
    'Digsy pet mods',
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Digsy – College Station & Bryan, TX',
  description:
    'Professional pet door and home modification installation for dog and cat owners in the Brazos Valley.',
  url: 'https://digsy.com/locations/college-station-bryan',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'College Station',
    addressRegion: 'TX',
    postalCode: '77840',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 30.628,
    longitude: -96.3344,
  },
  areaServed: [
    { '@type': 'City', name: 'College Station' },
    { '@type': 'City', name: 'Bryan' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Pet Home Modification Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dog Door Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cat Door Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pet Home Modifications' } },
    ],
  },
};

export default function CollegeStationBryanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CollegeStationBryanView />
    </>
  );
}
