import React from 'react'
import { Container } from './styles'

export const Header = (): JSX.Element => {
  return (
    <Container>
      <div>
        <p>Documentação</p>
        <p>Duvidas e Bugs</p>
        <p>Equipe</p>
        <div>
          <img src="" alt="" />
          <button>Entrar</button>
        </div>
      </div>
    </Container>
  )
}
