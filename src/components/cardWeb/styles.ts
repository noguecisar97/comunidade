import styled from 'styled-components'

export const CardWebContainer = styled.div`
  max-width: 25rem;
  min-width: 14rem;
  width: 100%;

  padding: 2rem;
  min-height: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  border: solid 1px ${(props) => props.theme.colors.primary};
  border-radius: 1.5rem;
  cursor: pointer;

  h1 {
    color: ${(props) => props.theme.colors.primary};
    text-transform: lowercase;
    line-height: 2rem;
    letter-spacing: 0.2rem;
    font-size: 2.2rem;
  }

  p {
    color: ${(props) => props.theme.colors.secondary};
    margin: 0 1rem;
    text-align: center;
    font-size: 1.1rem;
  }

  p:last-child {
    align-self: flex-end;
    margin-top: auto;
  }

  img {
    width: 20rem;
    height: 10rem;
  }

  :hover {
    transform: scale(1.02);

    h1 {
      color: ${(props) => props.theme.colors.fourth};
    }

    img,
    p {
      filter: brightness(0.5);
    }
  }
`
