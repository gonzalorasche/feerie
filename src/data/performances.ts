export interface Performance {
  slug: string;
  name: string;
  description: string;
  featured?: boolean;
}

export const performances: Performance[] = [
  {
    slug: 'burlesque',
    name: 'Burlesque',
    description:
      'A refined art form performed by professional dancers, featuring uniquely designed costumes and original choreography that blend elegance, charm and theatricality.',
  },
  {
    slug: 'firebelly-dance',
    name: 'Firebelly Dance',
    featured: true,
    description:
      'An enchanting belly dance ablaze with fire, where timeless elegance and fierce energy collide in a spectacle of light and allure.',
  },
  {
    slug: 'flamenco',
    name: 'Flamenco',
    description:
      'A captivating fusion of tradition and charm. The show begins with the passion of authentic flamenco, then transforms into burlesque: playful, glamorous and irresistibly seductive.',
  },
  {
    slug: 'vintage',
    name: 'Vintage',
    description:
      'A show that captures the spirit of the Roaring Twenties, blending Charleston, Swing and Jazz. It revives the energy and sophistication of an unforgettable era.',
  },
  {
    slug: 'greeters',
    name: 'Greeters',
    description:
      'Embodying elegance and allure, they welcome guests with charm and transform hospitality into an art of unforgettable moments.',
  },
  {
    slug: 'ambient-performances',
    name: 'Ambient Performances',
    description:
      'Energetic performers who enhance nightlife venues with captivating dance and stage presence, adding glamour and vibrancy to the atmosphere.',
  },
];

type ImageModule = { default: ImageMetadata };

const modules = import.meta.glob<ImageModule>('../assets/performances/*/*.webp', { eager: true });

export function imagesFor(slug: string): ImageMetadata[] {
  return Object.entries(modules)
    .filter(([path]) => path.includes(`/performances/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}
