import { Action } from 'redux'

export enum ActionTypes {
  SET_NEW_PAGE = '@PAGE/SET_NEW',
  INIT_PAGES = '@PAGE/INIT',
}

export type SetNewPageAction = Action<ActionTypes.SET_NEW_PAGE> & {
  page: string
}

export type InitPageAction = Action<ActionTypes.INIT_PAGES>

export type ActionArgs = SetNewPageAction | InitPageAction

export type State = {
  pages: Page[]
}

export type SetNewPageActionArgs = {
  page: string
}

export type Page = {
  isActive: boolean
  title: string
  page: string
}
