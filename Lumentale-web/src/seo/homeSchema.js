import { seoConfig } from './config.js'
import { toAbsoluteUrl } from './documentMeta.js'

export function getHomeFaqs(animonCount) {
  return [
    {
      q: 'How many Animon are on the dex?',
      a: `We currently track ${animonCount} numbered Animon with element type, emotional affinity, BST range, catch rate, and stat spreads — useful when you are comparing route captures or planning your core four.`,
    },
    {
      q: 'What is the best LumenTale starter Animon?',
      a: 'There is no single best pick — each of the five Kickstarter starters fits a different play style. Use our Starters page to compare elements, affinities, BST, and level-40 branches before you lock in a partner.',
    },
    {
      q: 'How do LumenTale affinities and emotional attributes work?',
      a: 'Every Animon has one of five emotional affinities (Felicis, Furor, Horrens, Mestus, Sereum) you can activate in battle for extra SP. They give team-wide bonuses separate from the 13 element types — see our Affinities page for when to trigger each one.',
    },
    {
      q: 'Does LumenTale have a traditional type chart?',
      a: 'Not really. Each Animon species has its own resistances rather than one global chart. Scan opponents in battle or open their dex page before you assume a move will hit super-effective.',
    },
    {
      q: 'Where can I find LumenTale evolution requirements?',
      a: 'Our Evolution Guide lists level, item, time, trait, and special conditions for each line. Steps we have not fully confirmed in-game are marked so you can double-check before spending evolution items.',
    },
    {
      q: 'Is this an official LumenTale website?',
      a: 'No — we are players who run this community site to help each other in Talea. For official news and support, visit Beehive Studios or the Steam store page.',
    },
    {
      q: 'What platforms is LumenTale: Memories of Trey available on?',
      a: 'The game launched May 26, 2026 on PC via Steam and Nintendo Switch, with backward compatibility on Nintendo Switch 2.',
    },
    {
      q: 'How do you keep pages accurate?',
      a: 'We cross-check stats and items in-game, test evolution routes where we can, and update guides after patches. If something looks wrong on your save, email us — reports from players help us fix mistakes fast.',
    },
  ]
}

export function buildHomeJsonLd({ title, description, url, animonCount }) {
  const siteUrl = seoConfig.fullDomain.replace(/\/+$/, '')
  const faqs = getHomeFaqs(animonCount)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: seoConfig.siteName,
        url: siteUrl,
        inLanguage: 'en',
        description,
        publisher: {
          '@type': 'Organization',
          name: seoConfig.siteName,
          url: siteUrl,
          logo: {
            '@type': 'ImageObject',
            url: toAbsoluteUrl(seoConfig.defaultOgImage),
          },
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: title,
        description,
        inLanguage: 'en',
        isPartOf: { '@id': `${siteUrl}/#website` },
      },
      {
        '@type': 'VideoGame',
        name: 'LumenTale: Memories of Trey',
        genre: ['Role-playing game', 'Monster collector'],
        gamePlatform: ['PC', 'Nintendo Switch'],
        publisher: { '@type': 'Organization', name: 'Team17' },
        author: { '@type': 'Organization', name: 'Beehive Studios' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  }
}
