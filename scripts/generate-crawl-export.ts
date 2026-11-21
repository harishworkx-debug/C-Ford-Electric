import fs from 'fs';
import { SITE } from '../src/data/site';
import { SERVICES } from '../src/data/services';
import { LOCATIONS } from '../src/data/locations';
import { BLOG_POSTS } from '../src/data/blogs';

interface CrawlRow {
  url: string;
  statusCode: number;
  status: string;
  indexability: string;
  title: string;
  metaDesc: string;
  h1: string;
  canonical: string;
  inlinksEstimate: number;
}

const rows: CrawlRow[] = [];

// Static Pages
const staticPages = [
  {
    path: '/',
    title: 'C Ford Electric | Electrician in Oklahoma City, OK',
    metaDesc:
      'Looking for an electrician in Oklahoma City, OK? Contact C Ford Electric for professional electrical services, repairs, installations and electrical upgrades. Request an estimate today.',
    h1: 'Reliable Electrical Services in Oklahoma City, Oklahoma',
    inlinks: 122,
  },
  {
    path: '/about',
    title: 'About C Ford Electric | Oklahoma City Electrical Contractors',
    metaDesc:
      'Learn about C Ford Electric, our team of licensed master electricians, our history, values, and commitment to Oklahoma City homes and businesses.',
    h1: 'About C Ford Electric',
    inlinks: 122,
  },
  {
    path: '/services',
    title: 'Electrical Services in Oklahoma City, OK | C Ford Electric',
    metaDesc:
      'Comprehensive electrical services in Oklahoma City: repairs, panel upgrades, rewiring, lighting, EV chargers, and commercial work. Call (405) 654-8819.',
    h1: 'Professional Electrical Services in Oklahoma City',
    inlinks: 122,
  },
  {
    path: '/service-areas',
    title: 'Service Areas | C Ford Electric | OKC Metro Electricians',
    metaDesc:
      'C Ford Electric serves Oklahoma City, Edmond, Norman, Moore, Yukon, Mustang, Midwest City, Del City, and surrounding OKC metro communities.',
    h1: 'Electrical Service Areas Across the OKC Metro',
    inlinks: 122,
  },
  {
    path: '/blog',
    title: 'Electrical Guides, Tips & Advice | C Ford Electric OKC',
    metaDesc:
      'Expert electrical guides, safety tips, and advice from Glenn Ford, Master Electrician at C Ford Electric. Learn about breaker tripping, panel upgrades, and more.',
    h1: 'Electrical Guides & Homeowner Tips',
    inlinks: 122,
  },
  {
    path: '/contact',
    title: 'Contact C Ford Electric | Request an Estimate | Oklahoma City, OK',
    metaDesc:
      'Contact C Ford Electric at (405) 654-8819 for electrical services across Oklahoma City, OK. Fast response, fair pricing, and master electrician expertise.',
    h1: 'Contact C Ford Electric',
    inlinks: 122,
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | C Ford Electric',
    metaDesc: 'Privacy policy for C Ford Electric LLC.',
    h1: 'Privacy Policy',
    inlinks: 122,
  },
  {
    path: '/terms',
    title: 'Terms of Service | C Ford Electric',
    metaDesc: 'Terms of service for C Ford Electric LLC.',
    h1: 'Terms of Service',
    inlinks: 122,
  },
];

for (const p of staticPages) {
  rows.push({
    url: `${SITE.url}${p.path}`,
    statusCode: 200,
    status: 'OK',
    indexability: 'Indexable',
    title: p.title,
    metaDesc: p.metaDesc,
    h1: p.h1,
    canonical: `${SITE.url}${p.path === '/' ? '/' : p.path}`,
    inlinksEstimate: p.inlinks,
  });
}

// Blog Posts
for (const b of BLOG_POSTS) {
  rows.push({
    url: `${SITE.url}/blog/${b.slug}`,
    statusCode: 200,
    status: 'OK',
    indexability: 'Indexable',
    title: `${b.title} | C Ford Electric`,
    metaDesc: b.excerpt,
    h1: b.title,
    canonical: `${SITE.url}/blog/${b.slug}`,
    inlinksEstimate: 15,
  });
}

// Location Pages
for (const l of LOCATIONS) {
  rows.push({
    url: `${SITE.url}/electrician-${l.slug}`,
    statusCode: 200,
    status: 'OK',
    indexability: 'Indexable',
    title: l.metaTitle,
    metaDesc: l.metaDescription,
    h1: `Electrician in ${l.city}, ${l.state}`,
    canonical: `${SITE.url}/electrician-${l.slug}`,
    inlinksEstimate: 20,
  });
}

// Service Location Pages
for (const s of SERVICES) {
  for (const l of LOCATIONS) {
    const isOkc = l.slug === 'oklahoma-city-ok';
    const fullName = isOkc && s.h1 ? s.h1 : `${s.name} in ${l.city}, ${l.state}`;
    const seoTitle =
      isOkc && s.metaTitle
        ? s.metaTitle
        : `${s.name} ${l.city}, ${l.state} | C Ford Electric | ${SITE.phoneDisplay}`;
    const seoDesc =
      isOkc && s.metaDescription
        ? s.metaDescription
        : `${s.name} in ${l.city}, ${l.state}. ${s.short} Call C Ford Electric at ${SITE.phoneDisplay} for ${s.name.toLowerCase()} in ${l.city}.`;

    rows.push({
      url: `${SITE.url}/${s.slug}-${l.slug}`,
      statusCode: 200,
      status: 'OK',
      indexability: 'Indexable',
      title: seoTitle,
      metaDesc: seoDesc,
      h1: fullName,
      canonical: `${SITE.url}/${s.slug}-${l.slug}`,
      inlinksEstimate: 12,
    });
  }
}

function escapeCsv(val: unknown): string {
  const str = String(val ?? '');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

const csvHeader =
  'Address,Status Code,Status,Indexability,Title 1,Meta Description 1,H1-1,Canonical Link Element 1,Inlinks\n';
const csvBody = rows
  .map((r) =>
    [
      escapeCsv(r.url),
      r.statusCode,
      r.status,
      r.indexability,
      escapeCsv(r.title),
      escapeCsv(r.metaDesc),
      escapeCsv(r.h1),
      escapeCsv(r.canonical),
      r.inlinksEstimate,
    ].join(','),
  )
  .join('\n');

fs.writeFileSync('public/website_crawl_export.csv', csvHeader + csvBody);
console.log(`Successfully generated public/website_crawl_export.csv with ${rows.length} rows!`);
