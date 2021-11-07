import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  height: 80px;
  padding: 0 2vw;
`

export const Contend = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1366px;
`

export const OptionMenu = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.2rem;
  font-style: italic;

  &:hover {
    cursor: pointer;
  }
`
export const Button = styled.button`
  width: 13rem;
  height: 4.5rem;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.fifth};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  border-radius: 50px;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${(props) => props.theme.colors.third};
    cursor: pointer;
  }
`
