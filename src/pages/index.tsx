import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Home } from 'modules/home'
import { WebPage } from 'modules/web'
import { Container } from './styles'
import { useSelector } from 'react-redux'
import { ApplicationState } from 'stores'

export const HomePage: NextPage = (): JSX.Element => {
  const { pages } = useSelector((state: ApplicationState) => {
    return {
      pages: state.pagination.pages,
    }
  })

  const elementos: { [key: string]: JSX.Element } = {
    Home: <Home />,
    Web: <WebPage />,
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
