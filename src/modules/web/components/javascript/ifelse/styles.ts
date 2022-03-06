import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-color: ${(props) => props.theme.colors.third};

  display: flex;
  justify-content: center;
`

export const Contend = styled.div`
  max-width: 1366px;
  width: 100%;

  padding-top: 1.2rem;
`
