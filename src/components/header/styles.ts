import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  height: 80px;
  padding: 0 2vw;

  position: sticky;
  top: 0;
  z-index: 900;

  box-shadow: 1px 1px 10px #0006;
`

export const Contend = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1366px;
`

export const OptionMenu = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.1rem;
  font-style: italic;

  &:hover {
    cursor: pointer;
  }
`
export const Button = styled.button`
  width: 10rem;
  height: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.fifth};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: ${(props) => props.theme.colors.third};
    cursor: pointer;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  font-style: italic;
  letter-spacing: 0.2rem;
`
