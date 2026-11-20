export const LANDING_DATA = {
  niche: 'Electrician',
  location: 'Oklahoma City',
  state: 'OK',
  fullLocation: 'Oklahoma City, OK',
  identity: 'Electrician in Oklahoma City',
  heroHeadline: 'Electrician in Oklahoma City, OK',
  heroSubheadline:
    'Licensed Master Electrician providing dependable residential and commercial electrical repairs, 200A panel upgrades, EV chargers, and wiring throughout the Oklahoma City metro.',
  phoneDisplay: '(405) 326-4239',
  phoneHref: 'tel:+14053264239',
  address: {
    street: '6209 SE 74th St',
    city: 'Oklahoma City',
    state: 'OK',
    zip: '73135',
    full: '6209 SE 74th St, Oklahoma City, OK 73135',
  },
  geo: {
    lat: 35.3922352,
    lng: -97.4155751,
  },
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 5:30 PM' },
    { day: 'Saturday', time: 'By appointment' },
    { day: 'Sunday', time: 'Closed' },
  ],
  trustBadges: [
    { title: 'Licensed Master Electrician', subtitle: 'Oklahoma CIB Standards' },
    { title: '100% Code-Compliant', subtitle: 'National Electrical Code (NEC)' },
    { title: 'Upfront Diagnostics', subtitle: 'Transparent, Fair Pricing' },
    { title: 'Rapid Metro Dispatch', subtitle: 'Oklahoma City & Surrounding Areas' },
  ],
  services: [
    {
      id: 'panel-upgrades',
      name: 'Electrical Panel Upgrades (200A Service)',
      short:
        'Upgrade obsolete fuse boxes and undersized 60A/100A panels to modern 200-amp breaker boxes that safely handle modern appliances, air conditioning, and EV charging.',
      bullets: [
        '200-amp main service panel replacements',
        'Elimination of fire hazards from obsolete panels',
        'Sub-panel installations & whole-home surge protection',
        'Utility coordination and full city permit compliance',
      ],
      iconKey: 'gauge',
    },
    {
      id: 'electrical-repair',
      name: 'Electrical Repair & Troubleshooting',
      short:
        'Fast, accurate diagnosis of recurring circuit breaker trips, dead outlets, flickering lights, burning odors, and electrical shorts in homes and commercial properties.',
      bullets: [
        'Precision circuit troubleshooting and fault locating',
        'GFCI, AFCI, and standard outlet & switch repair',
        'Loose neutral and voltage drop corrections',
        'Emergency diagnostic evaluations for safety hazards',
      ],
      iconKey: 'wrench',
    },
    {
      id: 'ev-charger',
      name: 'EV Charger & 240V Dedicated Circuits',
      short:
        'Certified Level 2 home EV charger installations, Tesla Wall Connectors, and heavy-duty 240-volt NEMA 14-50 garage outlets installed safely to code.',
      bullets: [
        'Level 2 electric vehicle charger installations',
        'Dedicated 240V circuits for ranges, dryers, and heat pumps',
        'Load calculation to ensure panel capacity',
        'Garage and exterior weather-rated charging stations',
      ],
      iconKey: 'plug',
    },
    {
      id: 'rewiring',
      name: 'Whole-Home Rewiring & Code Corrections',
      short:
        'Replace ungrounded two-prong circuits, aging knob-and-tube, and hazardous aluminum branch wiring in older Oklahoma homes to meet modern electrical safety standards.',
      bullets: [
        'Whole-house electrical rewiring and modern copper runs',
        'Grounding electrode and bonding system upgrades',
        'Kitchen, bathroom, and basement remodel rough-ins',
        'Remediation of high-risk aluminum branch terminations',
      ],
      iconKey: 'zap',
    },
    {
      id: 'lighting',
      name: 'Indoor & Outdoor Lighting Installation',
      short:
        'Modern recessed LED lighting layouts, chandelier installations, heavy-duty ceiling fan boxes, security floodlights, and exterior landscape illumination.',
      bullets: [
        'Energy-efficient recessed LED can lighting',
        'Exterior motion-activated security illumination',
        'Fan-rated ceiling junction boxes and fixtures',
        'Dimmers, smart switching, and commercial lighting',
      ],
      iconKey: 'lightbulb',
    },
    {
      id: 'commercial',
      name: 'Commercial Electrical Contracting',
      short:
        'Comprehensive electrical services for offices, retail stores, restaurants, and light industrial facilities across the Oklahoma City metropolitan area.',
      bullets: [
        'Commercial tenant build-outs and office finish-outs',
        '120/208V and 277/480V 3-phase power distribution',
        'Dedicated machinery circuits and disconnects',
        'Emergency lighting, exit signs, and code inspections',
      ],
      iconKey: 'building',
    },
  ],
  serviceAreas: [
    { city: 'Oklahoma City', zip: '73135, 73102, 73106, 73112', highlight: true },
    { city: 'Moore', zip: '73160, 73165', highlight: false },
    { city: 'Del City', zip: '73115', highlight: false },
    { city: 'Midwest City', zip: '73110, 73130', highlight: false },
    { city: 'Newcastle', zip: '73065', highlight: false },
    { city: 'Norman', zip: '73069, 73071, 73072', highlight: false },
    { city: 'Edmond', zip: '73003, 73013, 73034', highlight: false },
    { city: 'Yukon', zip: '73099', highlight: false },
    { city: 'Choctaw', zip: '73020', highlight: false },
    { city: 'Spencer', zip: '73084', highlight: false },
  ],
  whyChooseUs: [
    {
      title: 'Licensed Master Electrician',
      description:
        'Every job is planned and executed by a certified Master Electrician adhering strictly to Oklahoma Construction Industries Board (CIB) standards.',
    },
    {
      title: 'Root-Cause Problem Solving',
      description:
        'We do not offer temporary patches or guesswork. We systematically diagnose the root cause of electrical faults to ensure lasting safety.',
    },
    {
      title: 'Upfront & Transparent Pricing',
      description:
        'No hidden fees or unexpected charges. You receive a clear, honest explanation of the required electrical work before the job begins.',
    },
    {
      title: 'Oklahoma City Metro Focused',
      description:
        'Centrally based in Southeast Oklahoma City, we deliver prompt response times and deep familiarity with local building codes across the metro.',
    },
  ],
  faqs: [
    {
      q: 'How do I know if my electrical panel needs an upgrade in Oklahoma City?',
      a: 'Warning signs include circuit breakers that trip repeatedly when running multiple appliances, a panel that buzzes or feels warm to the touch, flickering lights, the presence of an outdated fuse box, or having no open slots for adding an EV charger or modern HVAC equipment. Upgrading to a 200-amp panel ensures modern safety and capacity.',
    },
    {
      q: 'Can you install a dedicated 240V circuit for an EV charger?',
      a: 'Yes. We install dedicated 240V circuits and hardwire Level 2 EV charging stations (including Tesla Wall Connectors) to current National Electrical Code (NEC) standards, calculating existing panel load to guarantee safe operation.',
    },
    {
      q: 'Why does my circuit breaker keep tripping?',
      a: 'Breakers trip when current exceeds safe thresholds. This is usually caused by an overloaded circuit, a short circuit (hot wire touching neutral), or a ground fault. If a breaker trips immediately after being reset, leave it off and call a licensed electrician to diagnose the fault.',
    },
    {
      q: 'Do you work on older Oklahoma City homes with ungrounded wiring?',
      a: 'Yes. Many homes built before 1965 in Oklahoma City have two-prong ungrounded outlets or aging cloth-insulated wiring. We provide whole-home rewiring, grounding electrode installations, and AFCI/GFCI protection to bring older systems up to modern safety codes.',
    },
    {
      q: 'How do I schedule service with an electrician in Oklahoma City?',
      a: 'Direct scheduling is handled by calling (405) 326-4239. You can also submit the request form on this page with details about your project, and we will follow up promptly to discuss availability.',
    },
  ],
} as const;
