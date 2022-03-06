import styled from 'styled-components'

export const Container404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 80px);
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.third};

  * {
    color: ${(props) => props.theme.colors.secondary};
  }

  img {
    height: 28rem;
    width: 28rem;
  }

  h1 {
    font-size: 10rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }
`
