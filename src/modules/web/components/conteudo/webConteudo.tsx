import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'stores'
import { JavaScript } from './components'
import { DivConteudoPrincipal } from './styles'

export const WebConteudo = (): JSX.Element => {
  const { webpages } = useSelector((state: ApplicationState) => {
    return {
      webpages: state.webPages.pages,
    }
  })

  const [page, setPage] = useState<string>('javascript')

  const pages: { [key: string]: JSX.Element } = {
    javascript: <JavaScript />,
    css: <>css</>,
    html: <>html</>,
  }

  useEffect(() => {
    webpages.map((e) => {
      if (e.isActive) {
        setPage(e.page)
      }
    })
  }, [webpages])

  return <DivConteudoPrincipal>{pages[page]}</DivConteudoPrincipal>
}
