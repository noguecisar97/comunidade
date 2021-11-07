import { ButtonCustom } from 'components/button'
import { ViewContainer } from 'components/view'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setNewPage } from 'stores/ducks/Pagination/action'

export const LinguagensPage = (): JSX.Element => {
  const dispatch = useDispatch()

  const changePage = (page: string): void => {
    dispatch(setNewPage({ page }))
  }

  return (
    <ViewContainer>
      <ButtonCustom
        onClick={() => {
          changePage('home')
        }}
        hover
      >
        voltar
      </ButtonCustom>
    </ViewContainer>
  )
}
