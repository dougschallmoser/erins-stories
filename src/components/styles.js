import styled from 'styled-components';

export const SCMainContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  width: 75vw;
  height: 75vh;
  background-color: rgba(0,0,0, 0.541);
  box-shadow: 0px 0px 30px 4px rgba(255, 255, 255, 0.281);
  border: 1px solid #fff;
  overflow-y: scroll;
  display: flex;
`;

export const SCLeftContainer = styled.div`
  flex: 0 0 25%;
  text-align: left;
`;

export const SCRightContainer = styled.div`
  flex: 0 0 75%;
`;

export const SCNavContainer = styled.div`
  margin-top: 1rem;
`;

export const SCNav = styled.ul`
  flex: 0 0 80%;
  text-align: left;
  padding: 0;

  & span {
    display: none;
  }
`;

export const SCBackBtn = styled.span`
  font-size: 1.5rem;
  text-align: left;
  color: #00b496;
  cursor: pointer;
`;

export const SCNavItem = styled.li`
  width: 250px;
  font-size: ${props => (props.manyItems ? '2.5rem' : '3.5rem')};
  font-family: 'Amatic SC', cursive;
  list-style: none;
  cursor: pointer;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: all 0.2s;
  margin-left: 0;
  color: ${props => (props.currentPub ? '#00b496' : '#fff')};

  &:hover {
    color: #00b496;
  }

`;