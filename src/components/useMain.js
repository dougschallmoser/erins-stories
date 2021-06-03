import { useState } from 'react';
import { getNavData, PublicationData } from './PageData';

export const useMain = () => {
  const [main, setMain] = useState(true);
  const [openStory, setOpenStory] = useState(false);
  const [navSection, setNavSection] = useState('main');
  const [pubTimeframe, setPubTimeframe] = useState('');
  const [backBtnText, setBackBtnText] = useState('')
  const [data, setData] = useState({});

  const onClickHandler = (event) => {
    if (event.target.outerText === 'View Publications →') {
      setMain(false)
      setBackBtnText('Back to Main')
      return setNavSection('publicationDates')
    }

    if (event.target.outerText in PublicationData) {
      setBackBtnText('Go Back')
      setNavSection('publications')
      return setPubTimeframe(event.target.outerText);
    }

    if (PublicationData[pubTimeframe].some(e => e.title === event.target.outerText)) {
      setOpenStory(true)
      setData(PublicationData[pubTimeframe].find(e => e.title === event.target.outerText))
    }
  }

  const onBackHandler = (event) => {
    if (navSection === 'publicationDates') {
      setNavSection('main')
      return setMain(true)
    }

    if (openStory && navSection === 'publications') {
      return setOpenStory(false);
    }

    if (navSection === 'publications') {
      setPubTimeframe('')
      setOpenStory(false);
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
    backBtnText,
    onBackHandler,
    manyItems,
    data, 
    main,
    setMain,
    openStory,
    pubTimeframe
  }
}