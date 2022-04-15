import React, { useEffect, useState } from 'react'
import Image from 'next/image'

//styles
import * as ST from './styles'
import * as STMenu from './styles.menu'

//icons
import { CgMenuGridR } from 'react-icons/cg'

export const Header = (): JSX.Element => {
  const [menuMobile, setMenuMobile] = useState<boolean>(false)

  const [fixed, setFixed] = useState<boolean>(false)

  useEffect(() => {
    if (window) {
      window.onscroll = function () {
        if (window.scrollY >= 100 && !fixed) {
          setFixed(true)
        } else if (window.scrollY < 100 && fixed) {
          setFixed(false)
        }
      }
    }
  }, [fixed])

  return (
    <ST.Container fixed={fixed}>
      <ST.Contend>
        <ST.Image fixed={fixed} src="images/logoGrande.png" alt="" />
        <STMenu.Menu>
          <ST.OptionMenu> Home </ST.OptionMenu>
          <ST.Button>
            <Image width={16} height={16} src="/svgs/user_ninja.svg" alt="" />
            Entrar
          </ST.Button>
        </STMenu.Menu>
        <STMenu.MenuMobile>
          <CgMenuGridR onClick={() => setMenuMobile(!menuMobile)} />
          {menuMobile && (
            <STMenu.SubMenu>
              <STMenu.OptionMobile>Home</STMenu.OptionMobile>
              <STMenu.ButtonMobile>
                <Image width={20} height={20} src="/svgs/user_ninja.svg" alt="" />
                Entrar
              </STMenu.ButtonMobile>
            </STMenu.SubMenu>
          )}
        </STMenu.MenuMobile>
      </ST.Contend>
    </ST.Container>
  )
}
