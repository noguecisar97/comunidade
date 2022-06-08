import styled from 'styled-components'

export const Button = styled.button`
  background-color: unset;
  border: none;

  color: ${(props) => props.theme.colors.fourth};
  font-size: 1.4rem;
  font-weight: bold;
  align-self: flex-start;
  display: flex;
  gap: 1rem;
  width: 12rem;
  transition: color 2s;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.colors.third};

  justify-content: center;
`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 4rem;
`

export const Contend = styled.div`
  max-width: 1366px;
  width: 100%;
  padding: 2rem;
  padding-top: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`

export const Text = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.3rem;
  padding: 0 1rem;
`

export const Code = styled.div`
  background-color: ${(props) => props.theme.colors.fourth};
  border: solid 1px ${(props) => props.theme.colors.secondary};
  margin-top: 10px;
  box-sizing: border-box;
  padding: 1rem;

  p {
    color: ${(props) => props.theme.colors.secondary};
    font-size: 1.2rem;
  }
`
