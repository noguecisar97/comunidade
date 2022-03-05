import React from 'react'
import { CardWebContainer } from './styles'
import { IProps } from './types'

export const CardWeb = ({ img, titulo, texto, saberMais, onClick }: IProps): JSX.Element => {
  return (
    <CardWebContainer onClick={onClick}>
      <img src={`./images/${img}`} alt={titulo} />
      <h1>{titulo}</h1>
      <p>{texto}</p>
      <p>{saberMais}</p>
    </CardWebContainer>
  )
}
