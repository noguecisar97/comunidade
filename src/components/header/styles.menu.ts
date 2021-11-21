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

export const MenuMobile = styled.div`
  display: none;
  position: relative;

  svg {
    width: 25px;
    height: 25px;

    color: ${(props) => props.theme.colors.secondary};
    fill: ${(props) => props.theme.colors.secondary};
  }

  @media screen and (max-width: 650px) {
    display: flex;
  }
`

export const SubMenu = styled.div`
  position: absolute;
  width: 50vw;
  padding: 1rem;
  border-radius: 1rem;

  right: 0;
  top: 3rem;

  background-color: ${(props) => props.theme.colors.primary};
  border: solid 1px ${(props) => props.theme.colors.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  p:nth-child(3) {
    border-bottom: solid 1px ${(props) => props.theme.colors.secondary};
  }
`

export const OptionMobile = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.6rem;
  font-style: italic;
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.fifth};
  }
`
export const ButtonMobile = styled.button`
  width: 12rem;
  height: 4rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.fifth};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  margin: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.third};
    cursor: pointer;
  }
`
