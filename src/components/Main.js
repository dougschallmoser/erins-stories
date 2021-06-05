import React from 'react';
import { SCMainContainer, SCNavContainer, SCPublicationsBtn, SCPubTimeframe, SCNav, SCBackBtn, SCNavItem } from './styles';
import { Publication } from './Publication';
import { useMain } from './useMain';
import { Bio } from './Bio';

const Main = () => {
  const { main, setMain, navSection, pubTimeframe, openStory, navigation, backBtnText, onBackHandler, onClickHandler, manyItems, data } = useMain();

  const mainClosed = 
    <>
      <SCBackBtn onClick={onBackHandler}>
        &#8592; {backBtnText}
      </SCBackBtn>
      {!openStory && <SCPubTimeframe>{navSection === 'publications' && pubTimeframe}</SCPubTimeframe>}
      {!openStory &&
      <SCNavContainer>
        <SCNav>
          {navSection === 'publicationDates' ? 
            navigation.map(title => 
              <SCNavItem
                currentNav={data.title === title || pubTimeframe === title}
                manyItems={manyItems}
                onClick={onClickHandler}
                key={title}>
                  {title}
              </SCNavItem>
            ) :
            navigation.map(item => 
              <SCNavItem
                currentNav={data.title === item.title || pubTimeframe === item.title}
                forthcoming={item.link === ''}
                manyItems={manyItems}
                onClick={onClickHandler}
                key={item.title}>
                  {item.title} {!item.link && navSection === 'publications' && <span>forthcoming</span>}
              </SCNavItem>
            )
          }
        </SCNav>
      </SCNavContainer>
      }
    </>

  const mainOpen = 
    <>
      <Bio setMain={setMain}/>
      <SCNavContainer>
        <SCNav>
          <SCPublicationsBtn onClick={onClickHandler}>
            View Publications &#8594;
          </SCPublicationsBtn>
        </SCNav>
      </SCNavContainer>
    </>

  return (
    <SCMainContainer>
      {!main && mainClosed }
      {main && mainOpen}
      {!main && data && openStory && 
        <Publication 
          data={data}
        />
      }
    </SCMainContainer>
  )
}

export { Main }