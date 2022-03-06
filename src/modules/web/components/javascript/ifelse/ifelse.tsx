import React from 'react'
import Router from 'next/router'

export const PageIfElse = (): JSX.Element => {
  return (
    <div>
      <button
        onClick={() => {
          Router.push('/web')
        }}
      >
        Voltar
      </button>
      <h1>IF ELSE</h1>
    </div>
  )
}
