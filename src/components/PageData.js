export const PublicationData = {
  'Summer 2021': [
    {
      title: 'Follow Through',
      link: '',
      source: 'Rejection Letters',
      date: ''
    },
    {
      title: 'Red Ribbon',
      link: 'https://www.sledgehammerlit.com/post/red-ribbon-by-erin-schallmoser',
      source: 'Sledgehammer',
      date: '08/08/2021'
    },
    {
      title: 'Chocolate, Chocolate',
      link: 'https://florafiction.com/chocolate-chocolate-by-erin-schallmoser/',
      source: 'Flora Fiction',
      date: '08/03/2021'
    },
    {
      title: 'At the pop punk concert',
      link: 'https://maudlinhouse.net/at-the-pop-punk-concert/',
      source: 'Maudlin House',
      date: '07/27/2021'
    },
    {
      title: 'Inherited Beliefs',
      link: 'https://emergeliteraryjournal.com/inherited-beliefs/',
      source: 'Emerge Literary Journal',
      date: '07/26/2021'
    },
    {
      title: 'Jupiter at the River',
      link: 'https://www.sledgehammerlit.com/post/jupiter-at-the-river-by-erin-schallmoser',
      source: 'Sledgehammer',
      date: '07/11/2021'
    },
    {
      title: 'Fake Noodle',
      link: 'https://issuu.com/varietypackzine/docs/varietypack_issuefive',
      source: 'Variety Pack',
      date: '06/30/2021'
    },
    {
      title: 'Response to my husband on a Sunday afternoon',
      link: 'https://moonparkreview.com/issue-sixteen-summer-2021/response-to-my-husband-on-a-sunday-afternoon/',
      source: 'Moonpark Review',
      date: '06/20/2021'
    }
  ],
  'Spring 2021': [
    {
      title: 'If You Were a Tasmanian Devil',
      link: 'https://www.hobartpulp.com/web_features/if-you-were-a-tasmanian-devil',
      source: 'Hobart',
      date: '05/25/2021'
    },
    {
      title: 'Front Porch Kathy',
      link: 'https://www.wrongdoingmag.com/spring-2021.html',
      source: 'Wrongdoing Magazine',
      date: '05/15/2021'
    },
    {
      title: 'Passenger',
      link: 'https://rejection-letters.com/2021/05/18/passenger-erin-schallmoser/',
      source: 'Rejection Letters',
      date: '05/18/2021'
    },
    {
      title: 'Salt Craving / Do You Remember the Ocean',
      link: 'https://www.coveneditions.com/deathcap-april2021',
      source: 'deathcap',
      date: '04/24/2021'
    },
    {
      title: 'Ministrations of the Universe',
      link: 'https://whitewallreview.com/ministrations-of-the-universe/',
      source: 'White Wall Review',
      date: '03/29/2021'
    }
  ],
  'Winter 2021': [
    {
      title: `Fruit Flies`,
      link: 'https://www.horseeggliterary.com/post/fruit-flies-by-erin-schallmoser',
      source: 'Horse Egg Literary',
      date: '03/13/2021'
    },
    {
      title: `The Alchemy of Starlight`,
      link: 'https://miniskirtmagazine.com/issue-01/the-alchemy-of-starlight-by-erin-schallmoser/',
      source: 'miniskirt magazine',
      date: '03/07/2021'
    },
    {
      title: `Writing as a Jellyfish Bloom`,
      link: 'https://www.theaurorajournal.org/aurora-anonymous/writing-as-a-jellyfish-bloom',
      source: 'The Aurora Journal (Aurora Anonymous)',
      date: '03/06/2021'
    },
    {
      title: `Lydia`,
      link: 'https://www.thehungerjournal.com/lydia-erin-schallmoser',
      source: 'The Hunger',
      date: '02/17/2021'
    },
    {
      title: `We Know Just Enough`,
      link: 'http://www.svjlit.com/dispatches/schuylkill-valley-journal-featuring-the-work-of-authors-and-artists-from-philadelphia-and-beyond-online/2021/1/26/we-know-just-enough-by-erin-schallmoser',
      source: 'Schuylkill Valley Journal (Dispatch)',
      date: '01/26/2021'
    },
    {
      title: `Dead Things`,
      link: 'https://www.twinpiesliterary.com/nye-special/deadthings',
      source: 'Twin Pies Literary',
      date: '01/22/2021'
    },
    {
      title: `The Horses`,
      link: 'https://macromic.org/2021/01/20/the-horses-by-erin-schallmoser/',
      source: '(mac)ro(mic)',
      date: '01/20/2021'
    },
    {
      title: `Ingrid's Earthworm`,
      link: 'https://www.secondchancelit.com/schallmoser',
      source: 'Second Chance Lit',
      date: '01/02/2021'
    }
  ],
  'Fall 2020': [
    {
      title: 'Unicorn Cake',
      link: 'https://www.litromagazine.com/usa/2020/11/unicorn-cake/',
      source: 'Litro',
      date: '11/08/2020'
    }
  ],
  'Summer 2020': [
    {
      title: 'The Crawdad',
      link: 'https://flashfictionmagazine.com/blog/2020/07/18/the-crawdad/',
      source: 'Flash Fiction Magazine',
      date: '07/18/2020'
    }
  ],
  'Other Writing': [
    {
      title: `Review: Leonie Rowland's "The Dressmaker`,
      link: 'https://www.wrongdoingmag.com/blog/review-leonie-rowland',
      source: 'Wrongdoing Magazine',
      date: '07/12/2021'
    },
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