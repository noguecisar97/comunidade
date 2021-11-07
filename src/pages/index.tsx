import React, { useEffect, useState } from 'react'

// paginas
import { Home } from 'modules/home'
import { WebPage } from 'modules/web'
import { LinguagensPage } from 'modules/linguagens'

// styles
import { Container } from './styles'

// Redux
import { useSelector } from 'react-redux'
import { ApplicationState } from 'stores'

export const HomePage: React.FC = (): JSX.Element => {
  const { pages } = useSelector((state: ApplicationState) => {
    return {
      pages: state.pagination.pages,
    }
  })

  const elementos: { [key: string]: JSX.Element } = {
    Home: <Home />,
    Web: <WebPage />,
    Linguagens: <LinguagensPage />,
  }

  const [page, setPage] = useState<string>('Home')

  useEffect(() => {
    pages.map((e) => {
      if (e.isActive) {
        setPage(e.title)
      }
    })
  }, [pages])

  return <Container>{elementos[page]}</Container>
}

export default HomePage
