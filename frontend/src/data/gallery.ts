export type ServiceType = 'pet-door' | 'dog-door' | 'cat-door' | 'smart-access' | 'vertical-habitat';
export type MaterialType = 'drywall' | 'brick' | 'sliding-glass' | 'wood-door' | 'stucco';
export type PetType = 'cat' | 'dog' | 'both';

export interface GalleryItem {
  id: string;
  title: string;
  serviceType: ServiceType;
  material: MaterialType;
  petType: PetType;
  location: string;
  image: string;
  description: string;
}

export const SERVICE_TYPE_LABELS: Record<ServiceType, string> = {
  'pet-door': 'Pet Door',
  'dog-door': 'Dog Door',
  'cat-door': 'Cat Door',
  'smart-access': 'Smart Access',
  'vertical-habitat': 'Vertical Habitat',
};

export const MATERIAL_LABELS: Record<MaterialType, string> = {
  'drywall': 'Drywall',
  'brick': 'Brick',
  'sliding-glass': 'Sliding Glass',
  'wood-door': 'Wood Door',
  'stucco': 'Stucco',
};

// Placeholder images — swap for real installation photography when available
const PHOTOS = {
  catDoor1: 'https://picsum.photos/seed/catdoor1/800/600',
  catDoor2: 'https://picsum.photos/seed/catdoor2/800/600',
  catDoor3: 'https://picsum.photos/seed/catdoor3/800/600',
  catDoor4: 'https://picsum.photos/seed/catdoor4/800/600',
  dogDoor1: 'https://picsum.photos/seed/dogdoor1/800/600',
  dogDoor2: 'https://picsum.photos/seed/dogdoor2/800/600',
  dogDoor3: 'https://picsum.photos/seed/dogdoor3/800/600',
  dogDoor4: 'https://picsum.photos/seed/dogdoor4/800/600',
  smartDoor: 'https://picsum.photos/seed/smartdoor1/800/600',
  smartDoor2: 'https://picsum.photos/seed/smartdoor2/800/600',
  habitat1: 'https://picsum.photos/seed/habitat1/800/600',
  habitat2: 'https://picsum.photos/seed/habitat2/800/600',
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'In-Wall Cat Door — Brick Exterior',
    serviceType: 'cat-door',
    material: 'brick',
    petType: 'cat',
    location: 'College Station, TX',
    image: PHOTOS.catDoor1,
    description: 'Through-wall installation on a brick exterior with a paint-matched interior trim ring and microchip-activated flap.',
  },
  {
    id: '2',
    title: 'Large Dog Door — Sliding Glass Panel',
    serviceType: 'dog-door',
    material: 'sliding-glass',
    petType: 'dog',
    location: 'Bryan, TX',
    image: PHOTOS.dogDoor1,
    description: 'Sliding glass panel insert for a 90 lb Labrador. No permanent modification — fully removable for renters.',
  },
  {
    id: '3',
    title: 'Dual-Flap Pet Door — Drywall Interior',
    serviceType: 'pet-door',
    material: 'drywall',
    petType: 'both',
    location: 'College Station, TX',
    image: PHOTOS.catDoor2,
    description: 'Interior passage door installation connecting a utility room to a covered patio. Serves one cat and one small dog.',
  },
  {
    id: '4',
    title: 'Smart Microchip Cat Door — Wood Door',
    serviceType: 'smart-access',
    material: 'wood-door',
    petType: 'cat',
    location: 'Austin, TX',
    image: PHOTOS.smartDoor,
    description: 'App-controlled microchip door set into a solid wood exterior door. Includes curfew scheduling and push notifications.',
  },
  {
    id: '5',
    title: 'Custom Vertical Cat Habitat',
    serviceType: 'vertical-habitat',
    material: 'drywall',
    petType: 'cat',
    location: 'Houston, TX',
    image: PHOTOS.habitat1,
    description: 'Floor-to-ceiling wall-mounted catwalk and shelf system. Stud-anchored, load-rated hardware, custom white finish.',
  },
  {
    id: '6',
    title: 'Extra-Large Dog Door — Stucco Wall',
    serviceType: 'dog-door',
    material: 'stucco',
    petType: 'dog',
    location: 'Bryan, TX',
    image: PHOTOS.dogDoor2,
    description: 'Through-wall cut on a stucco exterior for a Great Dane. Extended tunnel kit, weatherproof seal, and textured finish matched to existing stucco.',
  },
  {
    id: '7',
    title: 'Cat Flap — Hollow Wood Door',
    serviceType: 'cat-door',
    material: 'wood-door',
    petType: 'cat',
    location: 'College Station, TX',
    image: PHOTOS.catDoor3,
    description: 'Low-profile cat flap set into a hollow-core interior door for laundry room access. Discreet trim in matching white.',
  },
  {
    id: '8',
    title: 'Smart Dog Door — Brick Exterior',
    serviceType: 'smart-access',
    material: 'brick',
    petType: 'dog',
    location: 'Houston, TX',
    image: PHOTOS.smartDoor2,
    description: 'App-enabled smart access panel for two Golden Retrievers. Brick cut with a custom brick-tone tunnel surround.',
  },
  {
    id: '9',
    title: 'Medium Dog Door — Wood Exterior Door',
    serviceType: 'dog-door',
    material: 'wood-door',
    petType: 'dog',
    location: 'Austin, TX',
    image: PHOTOS.dogDoor3,
    description: 'In-door install on a solid wood exterior door for a 45 lb Border Collie. Insulated dual-flap with magnetic seal closure.',
  },
  {
    id: '10',
    title: 'Wall-Mounted Habitat + Integrated Pet Door',
    serviceType: 'vertical-habitat',
    material: 'drywall',
    petType: 'cat',
    location: 'College Station, TX',
    image: PHOTOS.habitat2,
    description: 'Combined vertical habitat and through-wall cat door. The door exit point integrates directly into the lowest shelf of the habitat system.',
  },
  {
    id: '11',
    title: 'Cat Door — Sliding Glass Panel',
    serviceType: 'cat-door',
    material: 'sliding-glass',
    petType: 'cat',
    location: 'Bryan, TX',
    image: PHOTOS.catDoor4,
    description: 'Sliding glass panel insert with a small cat-sized microchip flap. Keeps the patio door sealed while giving the cat free access.',
  },
  {
    id: '12',
    title: 'Small Dog Door — Drywall Through-Wall',
    serviceType: 'dog-door',
    material: 'drywall',
    petType: 'dog',
    location: 'Austin, TX',
    image: PHOTOS.dogDoor4,
    description: 'Through-wall installation on an interior-framed wall leading to a screened porch. Paint-matched trim on both sides.',
  },
];
