import React from 'react'
import { CardWeb } from 'components/cardWeb'
import JavaScriptConteudo from './javaScriptConteudo.json'
import Router from 'next/router'

export const JavaScript = (): JSX.Element => {
  return (
    <>
      {JavaScriptConteudo.map((e, i) => (
        <CardWeb
          key={`${e.titulo}-${i}`}
          titulo={e.titulo}
          texto={e.texto}
          img={e.img}
          onClick={() => {
            if (e.path) Router.push(e.path)
          }}
          saberMais="Click para saber mais ..."
        />
      ))}
    </>
  )
}
