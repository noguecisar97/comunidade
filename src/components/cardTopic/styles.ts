import styled from 'styled-components'

export const Card = styled.div`
  max-width: 44rem;
  min-height: 16rem;

  display: flex;
  gap: 1rem;
  padding: 1rem;
`

export const Img = styled.img`
  width: 17rem;
  height: 16rem;

  background-color: ${(props) => props.theme.colors.primary};
  border: 0;
  border-radius: 2rem;
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
`

export const Description = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.fifth};
`
