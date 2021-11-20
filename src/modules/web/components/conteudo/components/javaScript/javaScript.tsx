import React, { useState } from 'react'
import { CardWeb } from 'components/cardWeb'
import JavaScriptConteudo from './javaScriptConteudo.json'

export const JavaScript = (): JSX.Element => {
  const [conteudo, setConteudo] = useState<string>('')

  const topicos: { [key: string]: JSX.Element } = {
    Variaveis: <>ABCDEF</>,
  }

  if (conteudo !== '') {
    return (
      <>
        <button onClick={() => setConteudo('')}>voltar</button>
        {topicos[conteudo]}
      </>
    )
  }

  return (
    <>
      {JavaScriptConteudo.map((e, i) => (
        <CardWeb
          key={`${e.titulo}-${i}`}
          titulo={e.titulo}
          texto={e.texto}
          onClick={() => setConteudo(e.titulo)}
          saberMais="Click para saber mais ..."
        />
      ))}
    </>
  )
}
