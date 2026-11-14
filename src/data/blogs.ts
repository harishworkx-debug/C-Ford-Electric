export type BlogPost = {
  slug: string;
  title: string;
  targetKeyword: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  content: {
    heading: string;
    body: string[];
  }[];
  relatedServices: {
    name: string;
    href: string;
  }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-circuit-breakers-keep-tripping',
    title: 'Why Do Circuit Breakers Keep Tripping? Common Causes & Solutions',
    targetKeyword: 'Circuit Breaker Problems',
    excerpt:
      'Discover the most common causes of tripping circuit breakers—from circuit overloads and short circuits to ground faults—and when to contact a licensed electrician in Oklahoma City.',
    date: '2026-11-10',
    readTime: '5 min read',
    author: 'Glenn, Master Electrician',
    category: 'Troubleshooting',
    content: [
      {
        heading: 'Understanding Why Circuit Breakers Trip',
        body: [
          'Circuit breakers are your electrical system’s primary safety mechanism. Designed to interrupt electrical flow when current exceeds safe thresholds, they prevent overheating, conductor damage, and electrical fires.',
          'While resetting a tripped breaker once might resolve a minor spike, recurring trips indicate an underlying problem that requires professional attention rather than repeated resets.',
        ],
      },
      {
        heading: '1. Overloaded Electrical Circuits',
        body: [
          'An overloaded circuit is the single most frequent cause of tripping breakers. Every branch circuit is rated for a specific amperage (typically 15 or 20 amps). When you plug multiple high-draw appliances—such as space heaters, microwaves, or hair dryers—into the same circuit, the total electrical load surpasses the breaker rating.',
          'If you find yourself having to unplug one appliance to run another, our team can evaluate your system and run new dedicated circuits through our [Electrical Wiring Services](/electrical-wiring-oklahoma-city-ok).',
        ],
      },
      {
        heading: '2. Short Circuits and Damaged Devices',
        body: [
          'A short circuit occurs when a hot wire touches a neutral wire, creating an abrupt surge of electrical current. This instant surge trips the breaker immediately upon being reset, often accompanied by a popping sound, ozone smell, or black discoloration around the breaker or outlet.',
          'Short circuits represent a significant fire hazard and should never be ignored. If your breaker trips instantly upon being reset, contact C Ford Electric for [Professional Electrical Repair](/electrical-repair-oklahoma-city-ok) to diagnose and repair the fault.',
        ],
      },
      {
        heading: '3. Ground Fault Surges',
        body: [
          'Similar to a short circuit, a ground fault happens when an energized conductor comes into contact with the ground wire, metal conduit, or metal junction box. Ground faults frequently occur in areas with moisture, such as kitchens, bathrooms, garages, and outdoor receptacles.',
        ],
      },
      {
        heading: '4. An Aging or Undersized Electrical Panel',
        body: [
          'If your home still operates on an older 60-amp or 100-amp panel, running modern air conditioning, electric dryers, and EV chargers will continually strain your electrical capacity.',
          'In many older Oklahoma City homes, recurring breaker trips indicate that your service equipment needs to be expanded. Explore our [Electrical Panel Upgrade Services](/electrical-panel-upgrade-oklahoma-city-ok) to learn how upgrading to a modern 200-amp breaker panel protects your property.',
        ],
      },
      {
        heading: 'When to Call a Professional Electrician',
        body: [
          'Never replace a breaker with a higher amperage fuse or tape down a breaker switch. If you notice burning smells, buzzing sounds from your panel, or breakers that refuse to reset, turn off the main switch and [contact C Ford Electric](/contact) at (405) 326-4239.',
        ],
      },
    ],
    relatedServices: [
      { name: 'Professional Electrical Repair', href: '/electrical-repair-oklahoma-city-ok' },
      { name: 'Electrical Panel Upgrade Services', href: '/electrical-panel-upgrade-oklahoma-city-ok' },
      { name: 'Electrical Wiring Services', href: '/electrical-wiring-oklahoma-city-ok' },
    ],
  },
  {
    slug: '7-signs-electrical-panel-needs-upgrade',
    title: '7 Signs Your Electrical Panel Needs an Upgrade in Oklahoma City',
    targetKeyword: 'Electrical Panel Upgrade',
    excerpt:
      'Is your electrical panel keeping up with modern demands? Learn the top 7 warning signs that your Oklahoma City property needs a 200A panel upgrade.',
    date: '2026-11-05',
    readTime: '6 min read',
    author: 'Glenn, Master Electrician',
    category: 'Panel Upgrades',
    content: [
      {
        heading: 'Why Panel Capacity Matters',
        body: [
          'Your electrical panel is the central nervous system of your property. Every kilowatt consumed by your HVAC, refrigerator, computers, and EV chargers flows through this box.',
          'Many Oklahoma City homes built before 1990 were outfitted with 100-amp panels designed for homes that had far fewer electrical appliances than today. Here are seven clear indicators that an upgrade is overdue.',
        ],
      },
      {
        heading: '1. Frequent Circuit Breaker Tripping',
        body: [
          'Breakers that trip every time you run the microwave and coffee maker at the same time are warning you that the branch circuit has exceeded its thermal limits.',
          'If multiple breakers trip regularly across your home, the issue is often whole-panel capacity rather than a single device. Our team performs thorough [Electrical Troubleshooting](/electrical-repair-oklahoma-city-ok) to pinpoint the exact cause.',
        ],
      },
      {
        heading: '2. Flickering or Dimming Lights When Appliances Start',
        body: [
          'When your central air conditioning unit kicks on, do your ceiling lights dim momentarily? This common symptom means the appliance is pulling a massive inrush current that your existing service cannot supply without a noticeable voltage drop.',
        ],
      },
      {
        heading: '3. You Still Have a Fuse Box or Outdated Brand',
        body: [
          'If your electrical service still uses screw-in fuses, or panels manufactured by Federal Pacific Electric (Stab-Lok) or Zinsco, your system poses documented safety concerns. Most modern home insurance carriers either surcharge or refuse coverage for these obsolete systems.',
          'Replacing outdated equipment with a modern 200A panel via our [Electrical Panel Upgrade Services](/electrical-panel-upgrade-oklahoma-city-ok) restores code compliance and peace of mind.',
        ],
      },
      {
        heading: '4. You Are Adding an EV Charger, Hot Tub, or Heat Pump',
        body: [
          'Level 2 EV chargers typically require a dedicated 40-amp to 50-amp 240V circuit. If your existing panel has no physical breaker spaces left, you cannot safely add new high-draw equipment without a service upgrade.',
        ],
      },
      {
        heading: '5. The Panel Smells of Burning or Feels Warm to the Touch',
        body: [
          'A hot panel cover or the scent of scorched insulation indicates failing bus bars or arcing connections. This is an electrical emergency. Turn off the main breaker and [contact C Ford Electric](/contact) immediately.',
        ],
      },
      {
        heading: '6. Overuse of Extension Cords and Power Strips',
        body: [
          'If your living room or bedrooms look like an obstacle course of surge protectors, your electrical layout cannot satisfy your lifestyle. Combining panel upgrades with targeted [Electrical Wiring Services](/electrical-wiring-oklahoma-city-ok) allows for clean, code-compliant outlet placements.',
        ],
      },
      {
        heading: '7. Sub-100 Amp Electrical Service',
        body: [
          'Modern residential standards recommend a minimum of 200-amp service for average-sized single-family homes to accommodate heat pumps, induction cooking, and vehicle charging.',
        ],
      },
    ],
    relatedServices: [
      { name: 'Electrical Panel Upgrade Services', href: '/electrical-panel-upgrade-oklahoma-city-ok' },
      { name: 'Electrical Troubleshooting & Repair', href: '/electrical-repair-oklahoma-city-ok' },
      { name: 'EV Charger & Outlet Installation', href: '/services' },
    ],
  },
  {
    slug: 'when-to-replace-old-electrical-wiring',
    title: 'When Should You Replace Old Electrical Wiring? Signs of Outdated Systems',
    targetKeyword: 'Electrical Wiring Replacement',
    excerpt:
      'Learn how to identify aging knob-and-tube, ungrounded two-prong circuits, and aluminum wiring in older Oklahoma homes, and when rewiring is necessary.',
    date: '2026-10-28',
    readTime: '6 min read',
    author: 'Glenn, Master Electrician',
    category: 'Wiring',
    content: [
      {
        heading: 'The Lifespan of Residential Electrical Wiring',
        body: [
          'Copper wiring inside walls can last for decades, but the insulation surrounding it, the junction connections, and the grounding systems degrade over time.',
          'In older Oklahoma City neighborhoods—such as Crown Heights, Heritage Hills, and surrounding mid-century suburbs—homes frequently contain original wiring that cannot safely carry modern electrical loads.',
        ],
      },
      {
        heading: 'Warning Signs of Outdated Wiring',
        body: [
          'Ungrounded two-prong receptacles that do not protect modern electronics from electrical surges.',
          'Cloth-covered or knob-and-tube wiring installed before 1950, where the brittle insulation has flaked away inside wall cavities.',
          'Aluminum branch wiring installed during the late 1960s and 1970s, which is prone to oxidation, loose connections, and overheating at junction terminals.',
          'Persistent burning plastic odors or discolored wall outlet plates.',
        ],
      },
      {
        heading: 'Whole-Home Rewiring vs. Targeted Repairs',
        body: [
          'Not every home requires a complete whole-home rewire. In many cases, our electricians can perform targeted [Professional Electrical Repair](/electrical-repair-oklahoma-city-ok) to replace compromised circuits or add dedicated lines.',
          'However, when undergoing a major kitchen or bathroom remodel, opening walls provides the perfect opportunity to install code-compliant [Electrical Wiring Services](/electrical-wiring-oklahoma-city-ok) paired with a modern panel.',
        ],
      },
      {
        heading: 'Schedule an Electrical Safety Inspection',
        body: [
          'If you are buying an older Oklahoma home or have concerns about your wiring, [request an electrical inspection](/contact) with C Ford Electric at (405) 326-4239.',
        ],
      },
    ],
    relatedServices: [
      { name: 'Electrical Wiring Services', href: '/electrical-wiring-oklahoma-city-ok' },
      { name: 'Electrical Safety Inspection', href: '/services' },
      { name: 'Electrical Panel Upgrade Services', href: '/electrical-panel-upgrade-oklahoma-city-ok' },
    ],
  },
  {
    slug: 'when-to-call-electrician-flickering-lights',
    title: 'When to Call an Electrician for Flickering Lights in Your Home',
    targetKeyword: 'Flickering Lights Repair',
    excerpt:
      'Occasional bulb flicker or serious fire hazard? Learn the common causes of flickering lights in Oklahoma City homes and when to schedule professional repair.',
    date: '2026-10-15',
    readTime: '4 min read',
    author: 'Glenn, Master Electrician',
    category: 'Repairs',
    content: [
      {
        heading: 'Is Light Flickering Normal?',
        body: [
          'A loose bulb in a socket or a minor dip when a heavy compressor starts up might seem harmless, but widespread or persistent flickering often signals loose neutral wires, overloaded circuits, or utility service issues.',
        ],
      },
      {
        heading: 'Common Reasons Your Lights Are Flickering',
        body: [
          'Loose light bulb: The simplest explanation is a bulb that is not seated firmly in its socket.',
          'Incompatible dimmer switches: LED bulbs require dedicated LED-compatible dimmer switches. Mismatched dimmers frequently cause rapid strobing or humming.',
          'Heavy appliance startup: Central air conditioners, heat pumps, and well pumps draw high initial amps.',
          'Loose wiring terminations: Loose neutral or hot connections inside junction boxes or switch terminals create intermittent arcing, a leading cause of house fires.',
        ],
      },
      {
        heading: 'How C Ford Electric Diagnoses Flickering Lights',
        body: [
          'Our licensed electricians use voltage testing meters and thermal imaging to inspect your service drop, panel lugs, and branch wiring.',
          'If the issue is rooted in damaged wiring or failing receptacles, we deliver prompt [Professional Electrical Repair](/electrical-repair-oklahoma-city-ok). If your panel cannot keep up with high-load appliances, we evaluate your options for [Electrical Panel Upgrade Services](/electrical-panel-upgrade-oklahoma-city-ok).',
        ],
      },
      {
        heading: 'Contact Us for Fast Troubleshooting',
        body: [
          'Don’t ignore persistent light flickering. Call C Ford Electric at (405) 326-4239 or [contact us online](/contact) to schedule a service visit.',
        ],
      },
    ],
    relatedServices: [
      { name: 'Professional Electrical Repair', href: '/electrical-repair-oklahoma-city-ok' },
      { name: 'Light Fixture Installation', href: '/lighting-installation-oklahoma-city-ok' },
      { name: 'Electrical Panel Upgrade Services', href: '/electrical-panel-upgrade-oklahoma-city-ok' },
    ],
  },
];
