import React from 'react'
import Router from 'next/router'
import { Button, Code, Container, Contend, Text, Title } from './styles'
import { BsArrowLeft } from 'react-icons/bs'

export const PageIfElse = (): JSX.Element => {
  return (
    <Container>
      <Contend>
        <Button
          onClick={() => {
            Router.push('/web')
          }}
        >
          <BsArrowLeft />
          Voltar
        </Button>
        <div>
          <Title>IF ELSE</Title>

          <Text>
            Para utilização segue a seguinte sintaxe na qual a partir da condição é designado o
            caminho segue dentro de um script
          </Text>
          <Code>
            <p>{`if (condição) {`}</p>
            <p>{`///***se condicao correto***///`}</p>
            <p>{`} else {`}</p>
            <p>{`///***se condicao falsa***///`}</p>
            <p>{`}`}</p>
          </Code>
        </div>
      </Contend>
    </Container>
  )
}
