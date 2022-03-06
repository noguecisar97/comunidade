import styled from 'styled-components'

export const Card = styled.div`
  max-width: 44rem;
  min-height: 16rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  border-radius: 0.8rem;

  border: solid 1px ${(props) => props.theme.colors.fourth};
  transition: border 2s;

  :hover {
    cursor: pointer;
    border-color: ${(props) => props.theme.colors.secondary};

    img {
      filter: brightness(0.5);
    }

    p {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`

export const Img = styled.img`
  width: 100%;
  height: 16rem;

  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 2rem;
  transition: filter 2s;
`

export const Contend = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  padding: 0.7rem;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.fifth};
  cursor: pointer;
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.fifth};
  transition: color 1.2s;
`
