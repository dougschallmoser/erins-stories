import { useState } from 'react';
import { getNavData, PublicationData } from './PageData';

export const useMain = () => {
  const [navSection, setNavSection] = useState('main');
  const [pubTimeframe, setPubTimeframe] = useState('');
  const [data, setData] = useState({});

  const onClickHandler = (event) => {
    if (event.target.outerText === 'Publications') {
      return setNavSection('publicationDates')
    }

    if (event.target.outerText in PublicationData) {
      setNavSection('publications')
      return setPubTimeframe(event.target.outerText);
    }

    if (PublicationData[pubTimeframe].some(e => e.title === event.target.outerText)) {
      setData(PublicationData[pubTimeframe].find(e => e.title === event.target.outerText))
    }
  }

  const onBackHandler = (event) => {
    if (navSection === 'publicationDates') {
      return setNavSection('main')
    }

    if (navSection === 'publications') {
      return setNavSection('publicationDates')
    }
  }

  const navResolver = navSection === 'publications' ? 
    getNavData(pubTimeframe)[navSection].map(item => item.title)
    : getNavData(pubTimeframe)[navSection]

  const manyItems = navResolver.length > 5;

  return {
    navigation: navResolver,
    onClickHandler,
    backBtnText: navSection !== 'main',
    onBackHandler,
    manyItems,
    data,
    
  }
}