import React from 'react'
import { useDispatch } from 'react-redux'
import { setNewPage } from 'stores/ducks/Pagination/action'
import { Card, Contend, Description, Img, Title } from './styles'
import { IProps } from './types'

export const CardTopic: React.FC<IProps> = ({
  img,
  title,
  description,
  link,
  ...rest
}): JSX.Element => {
  const dispatch = useDispatch()

  const changePage = (page: string): void => {
    if (page !== '') dispatch(setNewPage({ page }))
  }

  return (
    <Card {...rest}>
      <Img src={img ?? '/images/home.jpg'} alt={`image of ${title}`} title={`image of ${title}`} />
      <Contend>
        <Title onClick={() => changePage(link)}>{title}</Title>
        <Description>{description}</Description>
      </Contend>
    </Card>
  )
}
