import { Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNewPage } from 'stores/ducks/Pagination/action'
import { ContainerPrincipal, CustomButton, CustomNav } from './styles'
import { SiCss3, SiHtml5, SiNextdotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'
import { SiJavascript } from 'react-icons/si'
import { BsGearWideConnected } from 'react-icons/bs'

export const LinguagensPageMenu = (): JSX.Element => {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState('')

  const changePage = (page: string): void => {
    dispatch(setNewPage({ page }))
  }

  function abrirMenu(): void {
    setDisplay(display === 'flex' ? 'none' : 'flex')
  }

  return (
    <ContainerPrincipal display="flex">
      <div>
        <CustomButton
          onClick={() => {
            changePage('home')
          }}
          hover
        >
          voltar
        </CustomButton>

        <button className="btn" onClick={() => abrirMenu()}>
          <Menu />
        </button>
      </div>
      <CustomNav display={display}>
        <ul>
          <li>
            <SiJavascript /> Java Script
          </li>
          <li>
            <SiCss3 /> Css
          </li>
          <li>
            <SiHtml5 /> Html
          </li>
          <li>
            <SiReact /> React.js
          </li>
          <li>
            <BsGearWideConnected /> API-Rest
          </li>
          <li>
            <SiNextdotjs /> Next.js
          </li>
          <li>
            <SiTypescript /> TypeScript
          </li>
          <li>
            <SiPython /> Python
          </li>
          <li>
            <GrGraphQl /> GraphQL
          </li>
        </ul>
      </CustomNav>
    </ContainerPrincipal>
  )
}
