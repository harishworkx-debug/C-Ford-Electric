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
  category?: 'ev' | 'promptness' | 'wiring' | 'pricing' | 'general';
};

export const REVIEWS_OVERVIEW = {
  rating: 5.0,
  totalReviews: 12,
  source: 'Google Reviews',
  mapsUrl: 'https://maps.app.goo.gl/oWpUijijRZ27eyHQ7',
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Melannie Wood',
    authorMeta: '1 review · 1 photo',
    rating: 5,
    date: 'a year ago',
    text: 'I had an outdoor light that kept tripping the breaker, Glenn was quick to come out and assess the problem, it was a burned out wire in the fixture, he took it home and rewired it for me and got it back on my house in two days! Thanks Glenn :)',
    services: 'Electrical wiring installation',
    priceAssessment: 'Great price',
    category: 'wiring',
  },
  {
    id: '2',
    author: 'Bree Mefford',
    authorMeta: '2 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Glenn is such a professional! He keeps his word, and is on time and on budget. I had multiple electricians come and suggest options that were thousands of dollars more to install an EV charger. I knew there had to be a less expensive solution. He helped us find a better solution at a very fair price. I highly recommend Glenn.',
    services: 'EV Charger Installation',
    priceAssessment: 'Fair price & saved thousands',
    category: 'ev',
  },
  {
    id: '3',
    author: 'auldsaint',
    authorMeta: '3 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Glenn is a genuine master electrician…a superb professional! He handled our little project quickly and with the foresight & the ease of someone who has been working in electrical services for a number of years. We couldn’t be more pleased with the work he did for us, and we wouldn’t hesitate for a second to call on him again.',
    services: 'Master Electrician Service',
    category: 'general',
  },
  {
    id: '4',
    author: 'Kevin Norman',
    authorMeta: '6 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Glenn hooked up and installed an EV Outlet in my garage. Glenn’s a straight shooter. Honest, prompt, and straight forward. I am 100% going to refer him to anyone I know who needs an electrician. He’s also pretty hilarious to work with.',
    services: 'EV Outlet Installation',
    category: 'ev',
  },
  {
    id: '5',
    author: 'Bradley Corry',
    authorMeta: '5 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Was quoted 1600 for an EV install from a big company. Glenn came and did it for under $400. He also quickly diagnosed an electrical problem in my house (and correctly guessed my house layout) from a very short description I gave him and did so free of charge (since it was a very simple fix.). This guy knows his stuff!',
    services: 'EV Install & Troubleshooting',
    priceAssessment: 'Under $400 (saved $1,200+)',
    category: 'pricing',
  },
  {
    id: '6',
    author: 'Amy M. Lyman',
    authorMeta: 'Local Guide · 29 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Glenn was first on the draw to contact us out of 5 electricians. He was able to help us within 24 hours. Glenn is polite and professional and his price was fair!',
    services: 'Fast Response & Electrical Service',
    priceAssessment: 'Fair price',
    category: 'promptness',
  },
  {
    id: '7',
    author: 'Adam Peterson',
    authorMeta: '8 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Glenn responded within 5 minutes of me asking for an estimate at 1 in the morning and he came to my house the next day. Gave me a super fair and solid estimate and came back 2 days later to get the job done. He finished super fast and it looks incredibly clean. I had another electrician from Mr Sparky come give me an estimate and they quoted me over $14,000. I couldn’t even believe it haha. Glenn said he could do it for under $1000 and I’m sure the work was even better than what I would have gotten from Mr Sparky. Can’t recommend him enough and will definitely be using him again in the future if I need anything. He also helped fix some of my outlets while he was here that haven’t been working for 2 years. He’s the best!',
    services: 'Installation, EV Charger, Wiring & Outlets',
    priceAssessment: 'Under $1,000 (Saved $13,000+ vs competitor)',
    ownerResponse: "Adam thank you for such a positive review! I'm glad I was able to help you with your electrical needs:)",
    category: 'ev',
  },
  {
    id: '8',
    author: 'Gabrielle Reese',
    authorMeta: 'Local Guide · 11 reviews · 27 photos',
    rating: 5,
    date: 'a year ago',
    text: 'Glen was lovely and provided excellent service. He was thorough and made sure to answer any questions I might have. I will definitely be working with him in the future!',
    category: 'general',
  },
  {
    id: '9',
    author: 'Austin Engle',
    authorMeta: '1 review',
    rating: 5,
    date: 'a year ago',
    text: 'Had a great experience! He installed an outlet in my closet quickly and kept things simple. Super easy to work with and fun to chat with while he worked. Definitely recommend',
    services: 'Outlet Installation',
    category: 'wiring',
  },
  {
    id: '10',
    author: 'Tami Larsen',
    authorMeta: '10 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'I contacted him he came gave us a bid and had the job completed within 2 days. Would highly recommend. Happy customer',
    services: 'Bid & Electrical Project',
    category: 'promptness',
  },
  {
    id: '11',
    author: 'Beth Young',
    authorMeta: '2 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Can’t recommend them enough. The quote was fair and the work was done quickly and professionally.',
    priceAssessment: 'Fair quote',
    ownerResponse: "Thanks Beth for the awesome review, it's was nice working for you and your husband.",
    category: 'pricing',
  },
  {
    id: '12',
    author: 'Ramon Amor',
    authorMeta: '5 reviews',
    rating: 5,
    date: 'a year ago',
    text: 'Super quick and very nice! Thank you!',
    ownerResponse: 'Ramon, I appreciate the great review!',
    category: 'promptness',
  },
];

