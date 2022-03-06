import React from 'react'
import Router from 'next/router'
import { Container, Contend } from './styles'

export const PageIfElse = (): JSX.Element => {
  return (
    <Container>
      <Contend>
        <button
          onClick={() => {
            Router.push('/web')
          }}
        >
          Voltar
        </button>
        <h1>IF ELSE</h1>
      </Contend>
    </Container>
  )
}
