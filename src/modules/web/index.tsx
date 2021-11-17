import React from 'react'
import { WebMenu } from './components/menu'
import { WebConteudo } from './components/conteudo'
import { CustomViewContainer } from './styles'
import { ViewContainer } from 'components/view'

export const WebPage = (): JSX.Element => {
  return (
    <ViewContainer>
      <CustomViewContainer>
        <WebMenu />
        <WebConteudo />
      </CustomViewContainer>
    </ViewContainer>
  )
}
