import { Menu } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ContainerPrincipal, CustomNav } from './styles'
import { SiCss3, SiHtml5, SiNextdotjs, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import { GrGraphQl } from 'react-icons/gr'
import { SiJavascript } from 'react-icons/si'
import { BsGearWideConnected, BsArrowLeft } from 'react-icons/bs'
import { setWebPage } from 'stores/ducks/webPages/action'

import Router from 'next/router'

export const WebMenu = (): JSX.Element => {
  const dispatch = useDispatch()
  const [display, setDisplay] = useState('')

  function abrirMenu(): void {
    setDisplay(display === 'flex' ? 'none' : 'flex')
  }

  const changeWebPage = (page: string): void => {
    if (page !== '') dispatch(setWebPage({ page }))
  }

  return (
    <ContainerPrincipal display="flex">
      <div>
        <button className="btn" onClick={() => abrirMenu()}>
          <Menu />
        </button>
      </div>
      <CustomNav display={display}>
        <ul>
          <li onClick={() => Router.push('/')}>
            <BsArrowLeft /> Voltar
          </li>
          <li onClick={() => changeWebPage('javascript')}>
            <SiJavascript /> Java Script
          </li>
          <li onClick={() => changeWebPage('css')}>
            <SiCss3 /> CSS
          </li>
          <li onClick={() => changeWebPage('html')}>
            <SiHtml5 /> HTML
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
