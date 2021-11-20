import styled from 'styled-components'

export const CardWebContainer = styled.div`
  max-width: 28.2rem;
  min-width: 16rem;
  width: 100%;
  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 1.5rem;
  cursor: pointer;

  h1 {
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    margin: 0 1rem;
    text-align: center;
    font-size: 1.1rem;
  }

  :hover {
    transform: scale(1.1);
  }
`
