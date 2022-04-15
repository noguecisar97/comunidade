import styled from 'styled-components'

export const Container = styled.div<{ fixed: boolean }>`
  width: 100%;
  background-color: ${(props) => (props.fixed ? props.theme.colors.third : 'transparent')};
  display: flex;
  justify-content: center;
  height: 85px;
  padding: 0 3%;
  position: fixed;
  top: 0;
  z-index: 900;
  border-bottom: ${(props) => props.fixed && `solid 3px ${props.theme.colors.secondary}`};
  box-shadow: ${(props) => props.fixed && '0.5px 0.5px 8px #fff8'};

  transition: background-color 10s linear 10ms;
  transition: border-bottom 4s linear;
  transition: box-shadow 4s ease;
`

export const Contend = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 1366px;
`

export const OptionMenu = styled.p`
  color: ${(props) => props.theme.colors.fourth};
  font-size: 1.6rem;
  font-style: italic;

  transition: transform 1.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    font-weight: bold;
  }
`
export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.fourth};
  background-color: ${(props) => props.theme.colors.third};
  border: solid 1px ${(props) => props.theme.colors.fifth};
  border-radius: 50px;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  transition: transform 1.2s;
  &:hover {
    background-color: ${(props) => props.theme.colors.fifth};
    cursor: pointer;
    transform: scale(1.2);
  }
`

export const Title = styled.a`
  text-decoration: none;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  letter-spacing: 0.2rem;

  :hover {
    cursor: pointer;
  }
`

export const Image = styled.img`
  width: 190px;
  height: 185px;
  position: absolute;
  top: 13px;
  left: 5px;

  transition: transform 20s ease;
  transition: top 5s ease;

  &:hover {
    cursor: pointer;
    top: 70px;
    transform: scale(1.2);
  }
`
