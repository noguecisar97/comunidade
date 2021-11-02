import React from 'react'
import { Card, Contend, Description, Img, Title } from './styles'
import { IProps } from './types'

export const CardTopic: React.FC<IProps> = ({ img, title, description, ...rest }): JSX.Element => {
  return (
    <Card {...rest}>
      <Img src={img ?? '/images/home.jpg'} alt={`image of ${title}`} title={`image of ${title}`} />
      <Contend>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Contend>
    </Card>
  )
}
