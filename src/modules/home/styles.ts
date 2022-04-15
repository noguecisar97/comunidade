import styled from 'styled-components'

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
  background-size: 140% 125%;
  /* background-position: center; */
  background-position: 15% 5%;
  background-repeat: no-repeat;

  filter: grayscale(1) brightness(0.8);

  @media screen and (max-width: 1200px) {
    background-size: 175% 120%;
    background-position: 25% 5%;
  }
  @media screen and (max-width: 900px) {
    background-size: 200% 115%;
    background-position: 35% 5%;
  }
  @media screen and (max-width: 700px) {
    background-size: 250% 100%;
    background-position: center;
  }
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
