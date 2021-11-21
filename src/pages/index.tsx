import React from 'react'

// paginas
import { Home } from 'modules/home'

// styles
import { Container } from '../components/containerPages/styles'

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default HomePage
