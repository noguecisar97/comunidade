import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Title = styled.h1`
  position: absolute;
  top: 100px;
  left: 10%;
  color: ${(props) => props.theme.colors.secondary};
  z-index: 100;

  font-size: 5.5rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-style: italic;

  text-shadow: ${(props) => props.theme.colors.fifth} 4px 8px 5px;
`

export const Image = styled.img`
  width: 100%;
  height: calc(100vh - 80px);
  filter: grayscale(0.1) brightness(0.6);
`
