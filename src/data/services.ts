import { IMAGES, type ImageKey } from './images';

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  category: 'Residential' | 'Commercial' | 'General';
  image: ImageKey;
  /** H1 on the service detail page */
  h1: string;
  /** meta title */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  problems: string[];
  process: { title: string; body: string }[];
  detail: string[];
  faqs: FAQ[];
};

export const SERVICES: Service[] = [
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    short:
      'Fast diagnosis and repair of faulty outlets, switches, breakers, and wiring across the Oklahoma City metro.',
    category: 'General',
    image: 'panelMultimeter',
    h1: 'Professional Electrical Repair Services in Oklahoma City',
    metaTitle: 'Electrical Repair in Oklahoma City, OK | C Ford Electric',
    metaDescription:
      'Looking for professional electrical repair in Oklahoma City, OK? C Ford Electric handles circuit breaker problems, flickering lights, faulty outlets, and wiring troubleshooting. Call (405) 326-4239.',
    intro:
      'When outlets stop working, breakers keep tripping, or lights flicker without explanation, C Ford Electric provides professional electrical repair services throughout Oklahoma City. Our licensed electricians diagnose the root cause and complete code-compliant repairs to ensure your home or business remains safe and dependable.',
    problems: [
      'Common electrical problems in homes and businesses (circuit overloads and power surges)',
      'Circuit breaker problems and electrical troubleshooting (repeated tripping or buzzing breakers)',
      'Flickering lights, dimming fixtures, and faulty switches',
      'Faulty or dead outlets, warm-to-the-touch receptacles, and ungrounded outlets',
      'Electrical wiring concerns, burning odors, or scorch marks near junction boxes',
      'When to contact a professional electrician: GFCI/AFCI failures, sparking devices, or intermittent outages',
    ],
    process: [
      {
        title: 'Call and describe your electrical issue',
        body: 'Tell us what you are experiencing — which outlets, breakers, or fixtures are affected and when the issue began. This helps our electricians prepare before arriving.',
      },
      {
        title: 'Comprehensive on-site diagnosis & troubleshooting',
        body: 'We test the circuit, panel, and affected devices using precision diagnostic tools to locate voltage drops, faulty neutrals, or hidden shorts.',
      },
      {
        title: 'Safe, code-compliant repair and verification',
        body: 'We repair or replace faulty devices, secure connections to current Oklahoma electrical code, and test the circuit under normal load before leaving.',
      },
    ],
    detail: [
      'Common electrical problems rarely resolve on their own. Recurring circuit breaker trips, warm outlets, and flickering lights usually indicate deeper system strain or aging wiring that demands immediate attention from a qualified electrician rather than temporary workarounds.',
      'Electrical troubleshooting requires systematic diagnosis. At C Ford Electric, we inspect every component along the affected branch circuit — from the main panel breaker and intermediate junction boxes to end receptacles — pinpointing the exact failure point without guesswork.',
      'Wiring concerns such as loose terminations, overloaded circuits, or degraded insulation present serious fire hazards. We address common residential and commercial electrical concerns promptly with durable, code-approved repairs.',
      'Knowing when to contact a professional electrician is vital for personal safety. If you detect burning smells, notice sparks from an outlet, or experience persistent breaker trips, shut off the circuit at the panel and contact C Ford Electric immediately at (405) 326-4239.',
    ],
    faqs: [
      {
        q: 'Can you repair a breaker that keeps tripping?',
        a: 'Yes. Repeated tripping usually points to an overloaded circuit, a short, or a faulty breaker. We diagnose the cause and repair or replace the affected component.',
      },
      {
        q: 'Do you repair electrical issues in commercial buildings?',
        a: 'Yes. C Ford Electric performs electrical repair work for commercial and industrial properties in addition to residential homes.',
      },
      {
        q: 'What should I do if an outlet is warm or discolored?',
        a: 'Stop using that outlet and call us right away. Heat or discoloration can indicate a loose connection or overloaded circuit that creates a fire risk.',
      },
      {
        q: 'When should I contact a professional electrician instead of DIY?',
        a: 'Any time you experience burning odors, buzzing panels, sparking outlets, or recurring trips, contact a licensed electrician. Electrical work carries fire and shock hazards that require proper training and tools.',
      },
    ],
  },
  {
    slug: 'electrical-installation',
    name: 'Electrical Installation',
    short:
      'Professional installation of outlets, switches, fixtures, circuits, and devices — done right the first time.',
    category: 'General',
    image: 'installBulb',
    h1: 'Electrical Installation in Oklahoma City, OK',
    metaTitle: 'Electrical Installation Oklahoma City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Professional electrical installation in Oklahoma City, OK — outlets, switches, fixtures, circuits, and devices. C Ford Electric installs it right. Call (405) 326-4239.',
    intro:
      'From a new outlet in the garage to a full circuit run for a kitchen remodel, C Ford Electric handles electrical installation work for homes and businesses throughout Oklahoma City. Every installation is sized, wired, and grounded to code.',
    problems: [
      'You need additional outlets where none exist',
      'A new appliance requires a dedicated circuit',
      'Older two-prong outlets need upgrading to grounded three-prong',
      'You are remodeling and need new circuits or fixture boxes',
      'Outdoor or garage areas need weather-rated installations',
    ],
    process: [
      {
        title: 'Tell us what you need installed',
        body: 'Describe the device, fixture, or outlet location and what it will power. We confirm capacity and circuit requirements over the phone.',
      },
      {
        title: 'Install to code',
        body: 'We run the circuit, install the box and device, and ground everything to current Oklahoma electrical code.',
      },
      {
        title: 'Test and label',
        body: 'We verify correct voltage and polarity, test the device under load, and label the panel breaker for easy reference.',
      },
    ],
    detail: [
      'Proper installation matters. An outlet wired with reversed polarity, a fixture box that is not rated for its weight, or a circuit that is oversized for its wire can all create hidden hazards. C Ford Electric installs every device and circuit to code the first time.',
      'We install outlets, switches, light fixtures, ceiling fans, dedicated appliance circuits, exterior circuits, and more — for both residential and commercial properties across the Oklahoma City metro.',
    ],
    faqs: [
      {
        q: 'Can you add a dedicated circuit for a new appliance?',
        a: 'Yes. We install dedicated circuits for appliances, HVAC equipment, EV chargers, and other loads that require their own breaker.',
      },
      {
        q: 'Do you install outdoor outlets and fixtures?',
        a: 'Yes. We use weather-rated boxes and GFCI protection for all exterior installations.',
      },
      {
        q: 'Can you install fixtures I already purchased?',
        a: 'In most cases yes — call us with the fixture details and we will confirm whether it is suitable for your installation location.',
      },
    ],
  },
  {
    slug: 'electrical-panel-upgrade',
    name: 'Electrical Panel Upgrade',
    short:
      'Upgrade outdated or undersized panels to safely handle the demands of a modern home or business.',
    category: 'General',
    image: 'breakerPanel',
    h1: 'Electrical Panel Upgrade Services in Oklahoma City',
    metaTitle: 'Electrical Panel Upgrades Oklahoma City, OK | C Ford Electric',
    metaDescription:
      'Upgrade your electrical panel in Oklahoma City, OK. C Ford Electric evaluates panel capacity, replaces outdated fuse boxes, and installs modern 200A breaker panels. Call (405) 326-4239.',
    intro:
      'An electrical panel plays an important role in distributing electricity throughout your property. If your electrical system struggles to handle modern appliances, experiences recurring breaker issues or requires additional capacity, an electrical panel evaluation may be appropriate. C Ford Electric can explain available electrical upgrade options and help property owners understand the requirements for their project.',
    problems: [
      'Your property still relies on an obsolete fuse box or a panel over 30 years old',
      'Circuit breakers trip repeatedly when running modern high-draw appliances',
      'Adding an EV charger, induction stove, heat pump, or workshop equipment',
      'No physical breaker spaces remaining for new circuits in your existing panel',
      'Sub-100-amp electrical service that cannot meet today\'s residential power needs',
      'Presence of problematic panel brands known for safety hazards or failure to trip',
    ],
    process: [
      {
        title: 'Panel evaluation & load calculation',
        body: 'We evaluate your existing panel condition, service drop size, grounding electrodes, and current electric demand to establish necessary capacity.',
      },
      {
        title: 'Permitting & upgrade planning',
        body: 'We size the new 200A service panel, map branch circuits, and coordinate with local utilities and code authorities.',
      },
      {
        title: 'Installation & circuit labeling',
        body: 'We install the new panel, transfer circuits neatly, verify grounding and bonding, and clearly label every breaker for your convenience.',
      },
    ],
    detail: [
      'An electrical panel plays an important role in distributing electricity throughout your property. If your electrical system struggles to handle modern appliances, experiences recurring breaker issues or requires additional capacity, an electrical panel evaluation may be appropriate.',
      'C Ford Electric can explain available electrical upgrade options and help property owners understand the requirements for their project. We examine your meter base, service entrance cable, main breaker, and distribution panel to provide honest, transparent recommendations.',
      'Modern Oklahoma City homes rely heavily on electricity for central air conditioning, electric vehicle chargers, modern kitchen suites, and home electronics. Many pre-1980 homes in the OKC metro were constructed with 60A or 100A panels that simply cannot handle these concurrent loads safely.',
      'Upgrading to a modern 200-amp breaker panel enhances safety, protects high-value appliances, provides expansion slots for future additions, and ensures full compliance with current Oklahoma electrical code.',
    ],
    faqs: [
      {
        q: 'How do I know if my panel needs an upgrade?',
        a: 'Common signs include frequent breaker trips, a fuse box, a panel over 30 years old, or no space for new circuits. Call us and we can help you assess it.',
      },
      {
        q: 'How long does a panel upgrade take?',
        a: 'Most residential panel upgrades are completed in a single day, though service upgrades that involve the meter and entrance may take longer.',
      },
      {
        q: 'Do you upgrade commercial panels too?',
        a: 'Yes. C Ford Electric performs panel and service work for commercial and industrial properties as well as residential.',
      },
    ],
  },
  {
    slug: 'electrical-wiring',
    name: 'Electrical Wiring Services',
    short:
      'New wiring, rewiring, and wiring repair for homes, additions, remodels, and commercial build-outs.',
    category: 'Residential',
    image: 'wiring',
    h1: 'Electrical Wiring Services in Oklahoma City, OK',
    metaTitle: 'Electrical Wiring Services Oklahoma City | C Ford Electric',
    metaDescription:
      'Reliable electrical wiring services in Oklahoma City, OK. C Ford Electric handles wiring repair, whole-home rewiring, additions, and code-compliant installations. Call (405) 326-4239.',
    intro:
      'C Ford Electric provides comprehensive electrical wiring services for homes, additions, remodels, and commercial properties throughout Oklahoma City. From targeted electrical wiring repair in OKC to whole-home rewiring, our licensed electricians ensure every circuit is properly sized, grounded, and code-compliant.',
    problems: [
      'Knob-and-tube or aluminum branch wiring requiring remediation or modern replacement',
      'Ungrounded outlets or outdated two-wire circuits lacking a dedicated equipment ground',
      'Electrical wiring repair in OKC for shorted wires, overloaded circuits, and damaged lines',
      'Room additions, converted garages, and finished basements requiring new dedicated circuits',
      'Remodeling projects requiring relocated service drops, sub-panels, and new branch wiring',
    ],
    process: [
      {
        title: 'Scope the wiring work',
        body: 'We identify what needs to be run, where, and what loads each circuit will serve.',
      },
      {
        title: 'Run and connect',
        body: 'We route cable through accessible areas, install boxes and devices, and make up all connections to code.',
      },
      {
        title: 'Test every circuit',
        body: 'We verify continuity, grounding, and polarity on every new circuit before it goes live.',
      },
    ],
    detail: [
      'Wiring is the backbone of any electrical system. Older Oklahoma City homes — especially those built before 1960 — may still contain knob-and-tube or ungrounded wiring that cannot safely support modern loads and lacks the grounding that today\'s devices and surge protection require.',
      'C Ford Electric handles new wiring for additions and remodels, whole-home rewires, and commercial build-outs. We also replace aluminum branch wiring, which is associated with connection failures, and repair wiring damaged by storms or renovations.',
    ],
    faqs: [
      {
        q: 'Do you offer whole-home rewiring?',
        a: 'Yes. We rewire entire homes to replace outdated or ungrounded wiring, typically during a remodel or when bringing an older home up to code.',
      },
      {
        q: 'Can you wire a room addition or garage conversion?',
        a: 'Yes. We run new circuits and devices for additions, converted garages, finished basements, and accessory structures.',
      },
      {
        q: 'What about aluminum wiring?',
        a: 'We replace or remediate aluminum branch wiring, which is a known fire-risk connection point in homes built in the 1960s and 70s.',
      },
    ],
  },
  {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    short:
      'Indoor and outdoor light fixture installation — recessed lighting, fixtures, exterior security, and landscape lighting.',
    category: 'Residential',
    image: 'chromeLight',
    h1: 'Light Fixture Installation in Oklahoma City, OK',
    metaTitle: 'Light Fixture Installation Oklahoma City | C Ford Electric',
    metaDescription:
      'Professional light fixture installation in Oklahoma City, OK. C Ford Electric installs recessed lighting, interior fixtures, exterior security lights, and LED upgrades. Call (405) 326-4239.',
    intro:
      'C Ford Electric provides expert light fixture installation and lighting upgrades for homes and commercial facilities across Oklahoma City. From modern recessed can lighting to exterior security lights and commercial fixture layouts, we manage all wiring, mounting, and switching.',
    problems: [
      'You want to replace outdated surface lighting with modern recessed can fixtures',
      'Exterior areas need dedicated security, floodlight, or pathway illumination',
      'A heavy chandelier or ceiling fan requires a properly rated fan-rated junction box',
      'You are installing landscape, accent, or under-cabinet LED lighting',
      'Commercial office or retail spaces needing efficient lighting layouts',
    ],
    process: [
      {
        title: 'Plan the fixture layout',
        body: 'We confirm fixture types, placement, switching, and circuit requirements before any work begins.',
      },
      {
        title: 'Install fixtures and boxes',
        body: 'We mount fixtures in properly rated boxes, run any needed circuits, and set up switches and controls.',
      },
      {
        title: 'Aim and test',
        body: 'We verify every fixture operates correctly and that switches and dimmers are compatible with the installed lamps.',
      },
    ],
    detail: [
      'Lighting installation is one of the most common upgrades in Oklahoma City homes. Converting old surface-mounted lights to recessed fixtures, adding exterior security lighting, and installing landscape lighting all improve both function and value.',
      'C Ford Electric installs recessed lighting, ceiling fixtures, chandeliers, exterior security lights, pathway and landscape lighting, and commercial lighting layouts. We also install dimmers and smart switches where compatible.',
    ],
    faqs: [
      {
        q: 'Can you install recessed lighting in an existing ceiling?',
        a: 'Yes. We install IC-rated recessed housings in finished ceilings, including options for insulated ceilings.',
      },
      {
        q: 'Do you install outdoor and security lighting?',
        a: 'Yes. We install exterior fixtures, security lighting, and landscape lighting with weather-rated boxes and GFCI protection.',
      },
      {
        q: 'Will you install a light fixture I already bought?',
        a: 'Usually yes — call us with the fixture details and mounting location and we will confirm it is suitable.',
      },
    ],
  },
  {
    slug: 'residential-electrician',
    name: 'Residential Electrician',
    short:
      'A full-service residential electrician for Oklahoma City homes — repairs, installations, upgrades, and rewiring.',
    category: 'Residential',
    image: 'residentialFusebox',
    h1: 'Residential Electrician in Oklahoma City, OK',
    metaTitle: 'Residential Electrician Oklahoma City | C Ford Electric',
    metaDescription:
      'Trusted residential electrician in Oklahoma City, OK. C Ford Electric handles home electrical repairs, installations, panel upgrades, wiring, and lighting. Call (405) 326-4239.',
    intro:
      'C Ford Electric is a trusted residential electrician serving homeowners across the Oklahoma City metro. From troubleshooting faulty outlets and upgrading outdated panels to complete home rewiring and lighting installations, we deliver dependable residential electrical work.',
    problems: [
      'You need a dependable residential electrician for your home in Oklahoma City',
      'An older home needs electrical updates for modern safety and appliance capacity',
      'You are remodeling a kitchen or bathroom and need electrical work done right',
      'You want to add dedicated circuits for an EV charger, hot tub, or HVAC unit',
      'Your breaker panel or residential wiring requires professional evaluation',
    ],
    process: [
      {
        title: 'Call and describe the work',
        body: 'Tell us what your home needs — a repair, an installation, or a larger project — and we will plan the visit.',
      },
      {
        title: 'On-site electrical work',
        body: 'We complete the work to code, keep the work area clean, and answer any questions about your system.',
      },
      {
        title: 'Test and walk through',
        body: 'We verify everything works and walk you through what was done before we leave.',
      },
    ],
    detail: [
      'Homeowners across Oklahoma City count on C Ford Electric for residential electrical work that is done correctly and safely. We handle the full range of residential needs — repairs, installations, panel upgrades, wiring, lighting, and more.',
      'Whether you live in an older home that needs its panel and wiring brought up to date or a newer home where you are adding an EV charger or finishing a basement, we provide residential electrical service tailored to the job.',
    ],
    faqs: [
      {
        q: 'Do you work on older Oklahoma City homes?',
        a: 'Yes. We frequently update panels, wiring, and devices in older homes to meet modern safety and capacity requirements.',
      },
      {
        q: 'Can you help with a kitchen or bathroom remodel?',
        a: 'Yes. We install new circuits, outlets, lighting, and dedicated appliance circuits as part of remodeling projects.',
      },
      {
        q: 'Do you handle small jobs like a single outlet or fixture?',
        a: 'Yes. We handle small residential repairs as well as larger installation and upgrade projects.',
      },
    ],
  },
  {
    slug: 'commercial-electrician',
    name: 'Commercial Electrician',
    short:
      'Commercial and industrial electrical contractor for Oklahoma City businesses — build-outs, service, and power distribution.',
    category: 'Commercial',
    image: 'switchboard',
    h1: 'Commercial Electrical Contractor in Oklahoma City',
    metaTitle: 'Commercial Electrician Oklahoma City, OK | C Ford Electric',
    metaDescription:
      'Licensed commercial electrical contractor in Oklahoma City, OK. C Ford Electric specializes in commercial installations, tenant improvements, electrical distribution, and maintenance. Call (405) 326-4239.',
    intro:
      'C Ford Electric is a licensed commercial electrical contractor in Oklahoma City. We provide commercial electrical installations, maintenance, troubleshooting, electrical distribution systems, and tenant improvement projects for businesses across the Oklahoma City metro area.',
    problems: [
      'Commercial electrical installations for retail, office, and light industrial spaces',
      'Electrical maintenance and troubleshooting to prevent business disruption and downtime',
      'Wiring and electrical upgrades for heavy commercial equipment and machinery',
      'Electrical distribution systems, three-phase power, and commercial panel upgrades',
      'Tenant improvement projects, retail build-outs, and commercial remodeling',
      'Commercial project consultation, lighting design, and electrical load planning',
    ],
    process: [
      {
        title: 'Commercial project consultation & review',
        body: 'We review architectural drawings, commercial tenant specs, electrical load requirements, and project deadlines.',
      },
      {
        title: 'Installation & system build-out',
        body: 'Our electricians run conduit, pull commercial branch wiring, install distribution gear, and coordinate on-site with other trades.',
      },
      {
        title: 'Testing, commissioning & inspection',
        body: 'We conduct complete system commissioning, test phase balance and voltage regulation, and ensure timely municipal code sign-off.',
      },
    ],
    detail: [
      'C Ford Electric provides comprehensive electrical contracting for commercial facilities, offices, retail centers, restaurants, medical clinics, and industrial facilities in Oklahoma City. We understand that operational downtime impacts revenue, which is why we schedule work efficiently and maintain strict job-site safety.',
      'Our commercial capabilities include electrical distribution systems, 120/208V and 277/480V 3-phase service, dedicated equipment circuits, commercial lighting control, and complete tenant finish-out wiring.',
      'Whether you are planning a new commercial build-out, renovating existing tenant space, or need ongoing facility electrical maintenance, C Ford Electric delivers dependable workmanship and responsive communication.',
    ],
    faqs: [
      {
        q: 'Do you do tenant build-outs?',
        a: 'Yes. We handle electrical work for tenant build-outs including new circuits, lighting, panels, and device installations.',
      },
      {
        q: 'Can you service our existing commercial building?',
        a: 'Yes. We provide electrical service and repair for existing commercial and industrial properties.',
      },
      {
        q: 'Do you work on industrial and medical facilities?',
        a: 'Yes. C Ford Electric performs electrical work for industrial and medical facilities in addition to retail and office space.',
      },
    ],
  },
  {
    slug: 'new-construction-electrical',
    name: 'New Construction Electrical',
    short:
      'Complete electrical rough-in and finish work for new homes and commercial buildings across Oklahoma City.',
    category: 'General',
    image: 'greenBoxes',
    h1: 'New Construction Electrical in Oklahoma City, OK',
    metaTitle: 'New Construction Electrical Oklahoma City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'New construction electrical in Oklahoma City, OK. C Ford Electric handles full rough-in and finish work for new homes and commercial buildings. Call (405) 326-4239.',
    intro:
      'C Ford Electric provides complete new construction electrical work for residential and commercial builds throughout the Oklahoma City metro. From rough-in to final trim, we install every system to code.',
    problems: [
      'You are building a new home and need full electrical installation',
      'A commercial new build needs electrical rough-in and finish',
      'You need coordination with other trades on a new build',
      'Your project requires correctly sized service and panels',
    ],
    process: [
      {
        title: 'Plan the electrical system',
        body: 'We review the plans, confirm device and circuit locations, and size the service and panel for the build.',
      },
      {
        title: 'Rough-in',
        body: 'We run all wiring, install boxes, and set the panel before the walls close — coordinated with the builder and other trades.',
      },
      {
        title: 'Finish and energize',
        body: 'After walls are closed, we install devices and fixtures, test every circuit, and energize the system.',
      },
    ],
    detail: [
      'New construction is one of C Ford Electric\'s core specialties. We install complete electrical systems for new homes and commercial buildings across the Oklahoma City metro — from the service entrance and panel through every circuit, device, and fixture.',
      'A correctly planned and installed electrical system is far easier to live with and maintain. We size service and panels for the home\'s actual needs, place devices where they are useful, and label every circuit clearly at the panel.',
    ],
    faqs: [
      {
        q: 'Do you do electrical work for new home construction?',
        a: 'Yes. We handle complete rough-in and finish electrical for new residential construction throughout the Oklahoma City area.',
      },
      {
        q: 'Can you handle commercial new construction?',
        a: 'Yes. C Ford Electric performs new construction electrical work for commercial and industrial buildings as well.',
      },
      {
        q: 'Do you coordinate with builders and other trades?',
        a: 'Yes. We coordinate scheduling with the builder, plumber, and HVAC contractor so the rough-in and finish stay on track.',
      },
    ],
  },
  {
    slug: 'electrical-inspection',
    name: 'Electrical Safety Inspection',
    short:
      'Thorough electrical inspections for home buyers, sellers, and owners who want to know their system is safe.',
    category: 'General',
    image: 'outdoorPanel',
    h1: 'Electrical Safety Inspections in Oklahoma City, OK',
    metaTitle: 'Electrical Safety Inspection Oklahoma City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Electrical safety inspection in Oklahoma City, OK. C Ford Electric inspects panels, wiring, grounding, and devices for homes and businesses. Call (405) 326-4239.',
    intro:
      'C Ford Electric provides electrical safety inspections for homes and businesses in the Oklahoma City metro. Whether you are buying a home, planning an upgrade, or just want peace of mind, we give you a clear picture of your electrical system.',
    problems: [
      'You are buying a home and want the electrical system checked',
      'Your home is older and has not been inspected in years',
      'You are planning a remodel or panel upgrade',
      'Your insurance company has requested an electrical inspection',
      'You have noticed odd electrical behavior and want answers',
    ],
    process: [
      {
        title: 'Visual and diagnostic inspection',
        body: 'We inspect the service entrance, panel, grounding, wiring, and a sample of devices throughout the property.',
      },
      {
        title: 'Identify concerns',
        body: 'We flag any safety issues, code deficiencies, or components that should be repaired or replaced.',
      },
      {
        title: 'Clear summary',
        body: 'You receive a clear explanation of what we found and what, if anything, we recommend addressing.',
      },
    ],
    detail: [
      'An electrical inspection is one of the most valuable steps you can take before buying an older home, finishing a remodel, or planning a panel upgrade. C Ford Electric inspects the service entrance, panel, grounding system, wiring, and devices — then tells you plainly what we find.',
      'We do not invent problems. If your system is in good shape, we tell you. If there are concerns, we explain them in plain language and let you decide how to proceed.',
    ],
    faqs: [
      {
        q: 'Should I get an inspection before buying a home?',
        a: 'Yes — especially for homes more than 30 years old. An electrical inspection can reveal panel, wiring, or grounding issues before you commit.',
      },
      {
        q: 'How long does an inspection take?',
        a: 'A typical residential inspection takes one to two hours depending on the size and age of the property.',
      },
      {
        q: 'Do you inspect commercial properties?',
        a: 'Yes. We perform electrical inspections for commercial and industrial properties as well as residential homes.',
      },
    ],
  },
  {
    slug: 'storm-damage-repair',
    name: 'Storm Damage Repair',
    short:
      'Electrical repair for storm-damaged service entrances, panels, and wiring across the Oklahoma City metro.',
    category: 'General',
    image: 'outdoorFusebox',
    h1: 'Electrical Storm Damage Repair in Oklahoma City, OK',
    metaTitle: 'Storm Damage Electrical Repair Oklahoma City OK | C Ford Electric | (405) 326-4239',
    metaDescription:
      'Storm damaged your electrical service? C Ford Electric repairs storm-damaged entrances, panels, and wiring in Oklahoma City, OK. Call (405) 326-4239.',
    intro:
      'Oklahoma storms can damage service entrances, meter bases, panels, and wiring. C Ford Electric repairs storm-damaged electrical systems for homes and businesses throughout the Oklahoma City metro area.',
    problems: [
      'A storm pulled down your service entrance or meter base',
      'Lightning damaged your panel or appliances',
      'Wind or debris damaged exterior electrical equipment',
      'Water intrusion affected your panel or devices',
      'You have no power after a storm and the utility has restored service',
    ],
    process: [
      {
        title: 'Call right after the storm',
        body: 'Contact us as soon as it is safe. We assess the damage and coordinate with the utility if needed.',
      },
      {
        title: 'Repair damaged equipment',
        body: 'We replace or repair the damaged service entrance, meter base, panel, or wiring to code.',
      },
      {
        title: 'Restore and verify',
        body: 'We restore service, test every affected circuit, and confirm the system is safe to operate.',
      },
    ],
    detail: [
      'Oklahoma\'s severe weather can damage the electrical system on the outside of your home before it ever reaches the panel — torn service drops, broken meter bases, and lightning-damaged equipment are all common after storms.',
      'C Ford Electric repairs storm-damaged service entrances, meter bases, panels, and wiring, and we coordinate with the utility company where their equipment is involved. If you have storm damage, call us right away.',
    ],
    faqs: [
      {
        q: 'A storm pulled my service drop down — what do I do?',
        a: 'Stay away from any downed wires and call us right away. We repair the service entrance and coordinate with the utility as needed.',
      },
      {
        q: 'Can lightning damage my electrical panel?',
        a: 'Yes. A nearby strike can damage breakers, appliances, and electronics. We inspect the panel and affected circuits and repair as needed.',
      },
      {
        q: 'Do you coordinate with the utility company?',
        a: 'Yes. Where the utility\'s equipment is involved, we coordinate the repair so service is restored safely.',
      },
    ],
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
