import React from 'react'
import { CardWeb } from '../../../../../components/cardWeb'
import CardWebConteudo from './cardWebConteudo.json'

export const JavaScript = (): JSX.Element => {
  return (
    <>
      {CardWebConteudo.map((e, i) => (
        <CardWeb key={`${e.titulo}-${i}`} titulo={e.titulo} texto={e.texto} />
      ))}
    </>
  )
}
