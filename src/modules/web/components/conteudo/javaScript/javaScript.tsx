import React from 'react'
import { CardWeb } from '../../../../../components/cardWeb'
import JavaScriptConteudo from './javaScriptConteudo.json'

export const JavaScript = (): JSX.Element => {
  return (
    <>
      {JavaScriptConteudo.map((e, i) => (
        <CardWeb
          key={`${e.titulo}-${i}`}
          titulo={e.titulo}
          texto={e.texto}
          saberMais="Click para saber mais ..."
        />
      ))}
    </>
  )
}
