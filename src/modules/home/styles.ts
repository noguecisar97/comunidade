import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
`

const FrameFontSize = keyframes`
  0% {
    font-size: 5.5rem;
  }
  50% {
    font-size: 6.2rem;
  }
  100% {
    font-size: 5.5rem;
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
