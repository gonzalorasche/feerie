// DATOS PROVISORIOS: reemplazar title, venue, year y type por los reales.
// Cada evento es una carpeta en fotos-events/<slug>/ : todas las fotos .webp
// que haya adentro aparecen en la galería desplegable de ese evento.

export const EVENT_TYPES = [
  'Weddings',
  'Brand Activation',
  'Corporate',
  'Nightlife',
  'Private Events',
] as const;

export type EventType = (typeof EVENT_TYPES)[number];

export type FeerieEvent = {
  /** carpeta en fotos-events */
  slug: string;
  title: string;
  venue: string;
  year: string;
  type: EventType;
};

export const events: FeerieEvent[] = [
  {
    slug: 'event1',
    title: 'Garden Wedding Reception',
    venue: 'Coral Gables',
    year: '2024',
    type: 'Weddings',
  },
  {
    slug: 'event2',
    title: 'Product Launch Night',
    venue: 'Wynwood',
    year: '2024',
    type: 'Brand Activation',
  },
  {
    slug: 'event3',
    title: 'Annual Corporate Gala',
    venue: 'Downtown Miami',
    year: '2023',
    type: 'Corporate',
  },
  {
    slug: 'event4',
    title: 'Cabaret Club Night',
    venue: 'South Beach',
    year: '2025',
    type: 'Nightlife',
  },
  {
    slug: 'event5',
    title: 'Private Birthday Soirée',
    venue: 'Key Biscayne',
    year: '2023',
    type: 'Private Events',
  },
];

const photos = import.meta.glob<{ default: ImageMetadata }>('../../fotos-events/**/*.webp', {
  eager: true,
});

export function eventPhotos(slug: string): ImageMetadata[] {
  return Object.entries(photos)
    .filter(([path]) => path.includes(`/fotos-events/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default);
}
