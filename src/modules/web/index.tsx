import React from 'react'
import { useDispatch } from 'react-redux'
import { setNewPage } from 'stores/ducks/Pagination/action'

export const WebPage = (): JSX.Element => {
  const dispatch = useDispatch()

  const changePage = (page: string): void => {
    dispatch(setNewPage({ page }))
  }

  return (
    <button
      onClick={() => {
        changePage('home')
      }}
    >
      voltar
    </button>
  )
}
