import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
`

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: url('images/wallpaper.jpg');
  background-size: 100vw 100%;
  background-position: center;
  background-repeat: no-repeat;

  filter: blur(1.5px) grayscale(1) brightness(0.8);

  @media screen and (max-width: 1200px) {
    background-size: 135% 100%;
  }
  @media screen and (max-width: 900px) {
    background-size: 155% 100%;
  }
  @media screen and (max-width: 700px) {
    background-size: 200% 100%;
  }
`

const FrameFontSize = keyframes`
  0% {
    left: 3rem;
    opacity: 0;
  }
  10% {
    left: 4rem;
    opacity: 0.1;
  }
  20% {
    left: 5rem;
    opacity: 0.2;
  }
  30%{
    left: 6rem;
    opacity: 0.3;
  }
  40%{
    left: 7rem;
    opacity: 0.4;
  }
  50% {
    left: 8rem;
    opacity: 0.5;
  }
  60%{
    left: 9rem;
    opacity: 0.6;
  }
  70%{
    left: 10rem;
    opacity: 0.7;
  }
  80%{
    left: 11rem;
    opacity: 0.9;
  }
  90%{
    left: 12rem;
    opacity: 1;
  }
  100% {
    left: 13rem;
    opacity: 0;
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 4rem;
  left: 3rem;
  color: ${(props) => props.theme.colors.secondary};
  z-index: 100;
  text-transform: uppercase;
  letter-spacing: 0.2rem;

  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-style: italic;

  animation: ${FrameFontSize} 1.5s infinite;
`

export const Image = styled.img`
  width: 100%;
  height: calc(100vh - 120px);
  min-height: 20rem;
  max-height: 24rem;
  filter: grayscale(0.4) brightness(0.6);

  @media screen and (max-width: 800px) {
    height: calc(100vh - 280px);
  }

  @media screen and (max-width: 600px) {
    height: calc(100vh - 380px);
  }

  opacity: 0.2;
`

export const TopicsContainer = styled.div`
  max-width: 1365px;

  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  gap: 2rem 3rem;

  padding: 6rem 1rem;
`
