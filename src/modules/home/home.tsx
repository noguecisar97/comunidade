import React from 'react'
import { Banner, TopicsContainer, Container } from './styles'

import { CardTopic } from 'components/cardTopic'
import Topicos from './topicos.json'
import { ViewContainer } from 'components/view'

export const Home = (): JSX.Element => {
  return (
    <Container>
      <Banner />
      <ViewContainer>
        <TopicsContainer id="topics-home-page">
          {Topicos.map((e, i) => (
            <CardTopic
              key={`${e.name}-${i}`}
              description={e.description}
              title={e.name}
              link={e.link}
              img={e.img}
            />
          ))}
        </TopicsContainer>
      </ViewContainer>
    </Container>
  )
}
