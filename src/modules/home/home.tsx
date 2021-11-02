import React from 'react'
import { About, Banner, Container, Image, Title, TopicsContainer } from './styles'
import { GiSupersonicArrow } from 'react-icons/gi'
import { CardTopic } from 'components/cardTopic'
import Topicos from './topicos.json'

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Banner>
        <Title>Unnameds</Title>
        <Image src="/images/home.jpg" alt="imagem" />
        <About>
          <GiSupersonicArrow /> Veja mais
        </About>
      </Banner>
      <TopicsContainer>
        {Topicos.map((e, i) => (
          <CardTopic key={`${e.name}-${i}`} description={e.description} title={e.name} />
        ))}
      </TopicsContainer>
    </Container>
  )
}
