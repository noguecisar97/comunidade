import React from 'react'
import { CardWebContainer } from './styles'
import { IProps } from './types'

export const CardWeb = ({ titulo, texto, saberMais }: IProps): JSX.Element => {
  return (
    <CardWebContainer>
      <h1> {titulo}</h1>
      <p>{texto}</p>
      <p>{saberMais}</p>
    </CardWebContainer>
  )
}
