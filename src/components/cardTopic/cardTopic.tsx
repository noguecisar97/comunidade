import React from 'react'
import { useRouter } from 'next/router'
import { Card, Contend, Description, Img, Title } from './styles'
import { IProps } from './types'

export const CardTopic: React.FC<IProps> = ({
  img,
  title,
  description,
  link,
  ...rest
}): JSX.Element => {
  const router = useRouter()

  const changePage = (page: string): void => {
    if (page !== '') router.push(page)
  }

  return (
    <Card onClick={() => changePage(link)} {...rest}>
      <Img src={`images/${img}`} alt={`image of ${title}`} title={`image of ${title}`} />
      <Contend>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Contend>
    </Card>
  )
}
