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
      setPubTimeframe('')
      setData({})
      setNavSection('main')
      return setMain(true)
    }

    if (openStory && navSection === 'publications') {
      return setOpenStory(false);
    }

    if (navSection === 'publications') {
      setOpenStory(false);
      setData({})
      setBackBtnText('Back to Main')
      return setNavSection('publicationDates')
    }
  }

  const manyItems = getNavData(pubTimeframe)[navSection].length > 5;

  return {
    navigation: getNavData(pubTimeframe)[navSection],
    onClickHandler,
    backBtnText,
    onBackHandler,
    navSection,
    manyItems,
    data, 
    main,
    setMain,
    openStory,
    pubTimeframe
  }
}