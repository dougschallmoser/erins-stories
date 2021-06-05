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
  flex-direction column;
`;

export const SCPubTimeframe = styled.div`
  font-family: 'Amatic SC', cursive;
  font-size: 4rem;
  border-bottom: 1px solid #00b496;
`;

export const SCNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const SCNav = styled.ul`
  padding-left: 0;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;
  animation-delay: 0s;
  opacity: 0;
`;

export const SCPublicationsBtn = styled.span`
  font-family: 'Amatic SC', cursive;
  padding: 0 1rem;
  background: #00b496;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  animation: fadeIn ease 2s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  opacity: 0;
`;

export const SCBackBtn = styled.span`
  position: absolute;
  font-size: 2rem;
  font-family: 'Amatic SC', cursive;
  padding-left: 0.5rem;
  padding-right: 1rem;
  background: #00b496;
  border: 2px solid #fff;
  color: #fff;
  cursor: pointer;
  animation: fadeIn ease 1s;
  animation-fill-mode: forwards;
  opacity: 0;
`;

export const SCNavItem = styled.li`
  font-size: ${props => (props.manyItems ? '2.5rem' : '3.5rem')};
  font-family: 'Amatic SC', cursive;
  list-style: none;
  cursor: ${props => (props.forthcoming ? 'default' : 'pointer')};
  text-align: left;
  overflow: hidden;
  transition: all 0.2s;
  margin-left: 0;
  color: ${props => (props.currentNav ? '#00b496' : '#fff')};
  position: relative;
  overflow: visible;

  &:hover {
    color: ${props => (props.forthcoming ? '' : '#00b496')};
  }

  & span {
    position: absolute;
    top: -0.2rem;
    left: 0;
    font-size: 0.35em;
    color: #c4c4c4;
    cursor: ${props => (props.forthcoming ? 'default' : 'pointer')};
  }

`;