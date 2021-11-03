import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-x: hidden;
`

export const Banner = styled.div`
  position: relative;
  width: 100vw;
`

const FrameFontSize = keyframes`
  0% {
    font-size: 4.5rem;
  }
  50% {
    font-size: 5.2rem;
  }
  100% {
    font-size: 4.5rem;
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 4rem;
  left: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  z-index: 100;
  text-transform: uppercase;
  letter-spacing: 0.8rem;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-style: italic;

  text-shadow: ${(props) => props.theme.colors.fifth} 3px 3px 5px;

  &:hover {
    color: ${(props) => props.theme.colors.fifth};
    text-shadow: ${(props) => props.theme.colors.secondary} 3px 3px 5px;
  }

  animation: ${FrameFontSize} 4s infinite;
`

export const Image = styled.img`
  width: 100%;
  height: calc(100vh - 80px);
  filter: grayscale(0.4) brightness(0.6);

  @media screen and (max-width: 800px) {
    height: calc(100vh - 280px);
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh - 380px);
  }
`

export const About = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3.4rem;
  font-weight: bolder;
  font-style: italic;

  position: absolute;
  bottom: 1.6rem;

  cursor: pointer;
  width: 100%;

  display: flex;
  justify-content: center;

  &:hover {
    font-size: 4.6rem;
  }
`

export const TopicsContainer = styled.div`
  max-width: 1365px;

  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 2rem 3rem;

  padding: 6rem 1rem;
`

export const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.secondary};

  &:active {
    color: ${(props) => props.theme.colors.secondary};
  }
`
