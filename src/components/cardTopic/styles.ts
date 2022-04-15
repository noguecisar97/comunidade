import styled from 'styled-components'

export const Card = styled.div`
  max-width: 30rem;
  min-height: 36rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 0.4rem;

  border: solid 1px ${(props) => props.theme.colors.fifth};
  transition: border 2s;

  text-align: justify;

  @keyframes pulsate {
    0% {
      box-shadow: 0 0 8px ${(props) => props.theme.colors.fifth},
        0 0 8px ${(props) => props.theme.colors.fifth};
    }
  }

  img {
    filter: brightness(0.6);
  }

  :hover {
    animation: pulsate 4s;
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.secondary};

    img {
      filter: brightness(1);
    }

    h2 {
      color: ${(props) => props.theme.colors.secondary};
    }

    p {
      color: ${(props) => props.theme.colors.fourth};
    }
  }
`

export const Img = styled.img`
  width: 100%;
  height: 16rem;

  border: 0;
  border-radius: 0.4rem;
  transition: filter 2s;
`

export const Contend = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding: 0.7rem;
`

export const Title = styled.h2`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.fifth};
  cursor: pointer;
`

export const Description = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.fifth};
  transition: color 1.2s;
`
