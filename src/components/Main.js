import React from 'react';
import { SCMainContainer, SCLeftContainer, SCNavContainer, SCRightContainer, SCNav, SCBackBtn, SCNavItem } from './styles';
import { Publication } from './Publication';
import { useMain } from './useMain';

const Main = () => {
  const { navigation, backBtnText, onBackHandler,onClickHandler, manyItems, data } = useMain();

  return (
    <SCMainContainer>
      <SCLeftContainer>
        <SCNavContainer>
          {backBtnText &&
            <SCBackBtn onClick={onBackHandler}>
              &#8592; Go back
            </SCBackBtn>
          }
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
      </SCLeftContainer>
      <SCRightContainer>
        {data && 
          <Publication 
            data={data}
          />
        }
      </SCRightContainer>
    </SCMainContainer>
  )
}

export { Main }