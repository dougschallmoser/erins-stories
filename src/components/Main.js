import React from 'react';
import { SCMainContainer, SCNavContainer, SCPublicationsBtn, SCNav, SCBackBtn, SCNavItem } from './styles';
import { Publication } from './Publication';
import { useMain } from './useMain';
import { Bio } from './Bio';

const Main = () => {
  const { main, setMain, pubTimeframe, openStory, navigation, backBtnText, onBackHandler,onClickHandler, manyItems, data } = useMain();

  const mainClosed = 
    <>
        <SCBackBtn onClick={onBackHandler}>
          &#8592; {backBtnText}
        </SCBackBtn>
        {!openStory && <div>{pubTimeframe}</div>}
        {!openStory &&
        <SCNavContainer>
          <SCNav>
            {navigation.map(title => 
              <SCNavItem
                currentPub={data.title === title}
                manyItems={manyItems}
                onClick={onClickHandler}
                key={title}>
                  {title}
              </SCNavItem>
            )}
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