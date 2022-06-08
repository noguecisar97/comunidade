import React from 'react'

import dynamic from 'next/dynamic'

// styles
import { Container } from '../components/containerPages/styles'

// paginas
const Home = dynamic(() => import('../modules/home'), {
  loading: () => <p>Carregando...</p>,
  ssr: false,
})

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default HomePage
