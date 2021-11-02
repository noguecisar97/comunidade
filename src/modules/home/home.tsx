import { NextPage } from 'next'
import React from 'react'
import { Container, Image, Title } from './styles'

export const Home: NextPage = () => {
  return (
    <Container>
      <Title>Unnameds</Title>
      <Image src="/images/home.jpg" alt="imagem" />
    </Container>
  )
}
