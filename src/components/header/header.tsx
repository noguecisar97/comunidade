import React, { useState } from 'react'
import Image from 'next/image'

//styles
import { Button, Container, Contend, OptionMenu, Title } from './styles'
import { Menu, MenuMobile, SubMenu, OptionMobile, ButtonMobile } from './styles.menu'

//icons
import { CgMenuGridR } from 'react-icons/cg'

export const Header = (): JSX.Element => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false)

  return (
    <Container>
      <Contend>
        <Title href="/">Unnameds</Title>
        <Menu>
          <OptionMenu>Documentação</OptionMenu>
          <OptionMenu>Duvidas e Bugs</OptionMenu>
          <OptionMenu>Equipe</OptionMenu>
          <Button>
            <Image width={20} height={20} src="/svgs/user_ninja.svg" alt="" />
            Entrar
          </Button>
        </Menu>
        <MenuMobile>
          <CgMenuGridR onClick={() => setMenuMobile(!menuMobile)} />
          {menuMobile && (
            <SubMenu>
              <OptionMobile>Documentação</OptionMobile>
              <OptionMobile>Duvidas e Bugs</OptionMobile>
              <OptionMobile>Equipe</OptionMobile>
              <ButtonMobile>
                <Image width={20} height={20} src="/svgs/user_ninja.svg" alt="" />
                Entrar
              </ButtonMobile>
            </SubMenu>
          )}
        </MenuMobile>
      </Contend>
    </Container>
  )
}
