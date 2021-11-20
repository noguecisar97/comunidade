import React from 'react'
import { CardWebContainer } from './styles'
import { IProps } from './types'

export const CardWeb = ({ titulo, texto, saberMais, onClick }: IProps): JSX.Element => {
  return (
    <CardWebContainer onClick={onClick}>
      <h1> {titulo}</h1>
      <p>{texto}</p>
      <p>{saberMais}</p>
    </CardWebContainer>
  )
}
