import router from 'next/router'
import React, { useEffect } from 'react'

import { Container404 } from './styles'

const NotFound = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <Container404>
      <h1> 404 </h1>
      <img src="/images/robozinho.gif" alt="404" />

      <h2>Página não encontrada! :/</h2>
      <p> Desculpe, a página que voce procura não existe no nosso site... </p>
      <p> Você será redirecionado para a Homepage em 5 segundos</p>
    </Container404>
  )
}

export default NotFound
