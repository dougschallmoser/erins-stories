export const PublicationData = {
  'Summer 2021': [
    {
      title: 'Follow Through',
      link: '',
      source: 'Rejection Letters'
    },
    {
      title: 'Red Ribbon',
      link: '',
      source: 'Sledgehammer'
    },
    {
      title: 'Inherited Beliefs',
      link: '',
      source: 'Emerge Literary Journal'
    },
    {
      title: 'Jupiter at the River',
      link: 'https://www.sledgehammerlit.com/post/jupiter-at-the-river-by-erin-schallmoser',
      source: 'Sledgehammer'
    },
    {
      title: 'Fake Noodle',
      link: 'https://issuu.com/varietypackzine/docs/varietypack_issuefive',
      source: 'Variety Pack'
    },
    {
      title: 'Response to my husband on a Sunday afternoon',
      link: 'https://moonparkreview.com/issue-sixteen-summer-2021/response-to-my-husband-on-a-sunday-afternoon/',
      source: 'Moonpark Review'
    }
  ],
  'Spring 2021': [
    {
      title: 'If You Were a Tasmanian Devil',
      link: 'https://www.hobartpulp.com/web_features/if-you-were-a-tasmanian-devil',
      source: 'Hobart'
    },
    {
      title: 'Front Porch Kathy',
      link: 'https://www.wrongdoingmag.com/spring-2021.html',
      source: 'Wrongdoing Magazine'
    },
    {
      title: 'Passenger',
      link: 'https://rejection-letters.com/2021/05/18/passenger-erin-schallmoser/',
      source: 'Rejection Letters'
    },
    {
      title: 'Salt Craving / Do You Remember the Ocean',
      link: 'https://www.coveneditions.com/deathcap-april2021',
      source: 'deathcap'
    },
    {
      title: 'Ministrations of the Universe',
      link: 'https://whitewallreview.com/ministrations-of-the-universe/',
      source: 'White Wall Review'
    }
  ],
  'Winter 2021': [
    {
      title: `Fruit Flies`,
      link: 'https://www.horseeggliterary.com/post/fruit-flies-by-erin-schallmoser',
      source: 'Horse Egg Literary'
    },
    {
      title: `The Alchemy of Starlight`,
      link: 'https://miniskirtmagazine.com/issue-01/the-alchemy-of-starlight-by-erin-schallmoser/',
      source: 'miniskirt magazine'
    },
    {
      title: `Writing as a Jellyfish Bloom`,
      link: 'https://www.theaurorajournal.org/aurora-anonymous/writing-as-a-jellyfish-bloom',
      source: 'The Aurora Journal (Aurora Anonymous)'
    },
    {
      title: `Lydia`,
      link: 'https://www.thehungerjournal.com/lydia-erin-schallmoser',
      source: 'The Hunger'
    },
    {
      title: `We Know Just Enough`,
      link: 'http://www.svjlit.com/dispatches/schuylkill-valley-journal-featuring-the-work-of-authors-and-artists-from-philadelphia-and-beyond-online/2021/1/26/we-know-just-enough-by-erin-schallmoser',
      source: 'Schuylkill Valley Journal (Dispatch)'
    },
    {
      title: `Dead Things`,
      link: 'https://www.twinpiesliterary.com/nye-special/deadthings',
      source: 'Twin Pies Literary'
    },
    {
      title: `The Horses`,
      link: 'https://macromic.org/2021/01/20/the-horses-by-erin-schallmoser/',
      source: '(mac)ro(mic)'
    },
    {
      title: `Ingrid's Earthworm`,
      link: 'https://www.secondchancelit.com/schallmoser',
      source: 'Second Chance Lit'
    }
  ],
  'Fall 2020': [
    {
      title: 'Unicorn Cake',
      link: 'https://www.litromagazine.com/usa/2020/11/unicorn-cake/',
      source: 'Litro'
    }
  ],
  'Summer 2020': [
    {
      title: 'The Crawdad',
      link: 'https://flashfictionmagazine.com/blog/2020/07/18/the-crawdad/',
      source: 'Flash Fiction Magazine'
    }
  ]
}

export const getNavData = (section) => {
  return {
    'main': [
      'Goto Publications',
    ],
    'publicationDates': Object.keys(PublicationData),
    'publications': PublicationData[section]
  }
}