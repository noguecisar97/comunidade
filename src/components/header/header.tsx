import React from 'react'
import Image from 'next/image'
import { Button, Container, Contend, OptionMenu } from './styles'

export const Header = (): JSX.Element => {
  return (
    <Container>
      <Contend>
        <OptionMenu>Documentação</OptionMenu>
        <OptionMenu>Duvidas e Bugs</OptionMenu>
        <OptionMenu>Equipe</OptionMenu>
        <Button>
          <Image width={25} height={25} src="/svgs/user_ninja.svg" alt="" />
          Entrar
        </Button>
      </Contend>
    </Container>
  )
}
