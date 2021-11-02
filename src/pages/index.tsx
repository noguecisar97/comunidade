import React from 'react'
import { NextPage } from 'next'
import { Home } from 'modules/home'
import { Container } from './styles'

export const HomePage: NextPage = (): JSX.Element => {
  return (
    <Container>
      <Home />
    </Container>
  )
}

export default HomePage
