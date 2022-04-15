import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`

export const MenuMobile = styled.div<{ open: boolean }>`
  display: none;
  position: relative;

  svg {
    z-index: 100;

    width: 25px;
    height: 25px;

    color: ${(props) => (props.open ? props.theme.colors.fourth : props.theme.colors.secondary)};
    fill: ${(props) => (props.open ? props.theme.colors.fourth : props.theme.colors.secondary)};
  }

  @media screen and (max-width: 650px) {
    display: flex;
  }
`

export const SubMenu = styled.div<{ open: boolean }>`
  position: fixed;
  width: ${(props) => (props.open ? '60vw' : '0vw')};
  overflow: hidden;

  padding-top: 80px;

  height: 100vh;

  right: ${(props) => (props.open ? '0px' : '-60vw')};
  top: 0px;

  transition: right 10s;

  background-color: ${(props) => props.theme.colors.third};
  border-left: solid 1px ${(props) => props.theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const OptionMobile = styled.p`
  color: ${(props) => props.theme.colors.fourth};
  font-size: 1.6rem;
  font-style: italic;
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 1.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
    transform: scale(1.2);
  }
`
export const ButtonMobile = styled.button`
  width: 12rem;
  height: 4rem;
  color: ${(props) => props.theme.colors.fourth};
  background-color: ${(props) => props.theme.colors.fifth};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  margin: 1rem;

  transition: transform 1.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.fifth};
    cursor: pointer;
    transform: scale(1.2);
  }
`
