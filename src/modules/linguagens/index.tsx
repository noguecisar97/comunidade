import { ViewContainer } from 'components/view'
import React from 'react'
import { LinguagensPageMenu } from './menu/LinguagensPageMenu'

export const LinguagensPage = (): JSX.Element => {
  return (
    <ViewContainer>
      <LinguagensPageMenu />
    </ViewContainer>
  )
}
