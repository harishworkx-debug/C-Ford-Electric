export type Review = {
  id: string;
  author: string;
  authorMeta: string;
  rating: number;
  date: string;
  text: string;
  services?: string;
  priceAssessment?: string;
  ownerResponse?: string;
  category?: 'general' | 'service';
};

export const REVIEWS_OVERVIEW = {
  rating: 5.0,
  totalReviews: 1,
  source: 'Google Reviews',
  mapsUrl: 'https://maps.app.goo.gl/ZN1LmZwvmiFy7Ua3A',
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Derrick Brown',
    authorMeta: 'Local Guide · 129 reviews · 69 photos',
    rating: 5,
    date: '4 years ago',
    text: 'Awesome company',
    services: 'Commercial & Residential Electrical',
    category: 'general',
  },
];
