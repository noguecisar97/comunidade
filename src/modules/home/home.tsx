import { NextPage } from 'next'
import React from 'react'
import { About, Container, Image, Title } from './styles'
import { GiSupersonicArrow } from 'react-icons/gi'

export const Home: NextPage = () => {
  return (
    <Container>
      <Title>Unnameds</Title>
      <Image src="/images/home.jpg" alt="imagem" />
      <About>
        <GiSupersonicArrow /> Veja mais
      </About>
    </Container>
  )
}
