import { Action } from 'redux'

export enum ActionTypes {
  SET_WEB_PAGE = '@WEB/SET_PAGE',
  INIT_WEB_PAGE = '@WEB/INIT',
}

export type SetWebPageAction = Action<ActionTypes.SET_WEB_PAGE> & {
  page: string
}

export type InitPageAction = Action<ActionTypes.INIT_WEB_PAGE>

export type ActionArgs = SetWebPageAction | InitPageAction

export type State = {
  pages: Page[]
}

export type SetWebPageActionArgs = {
  page: string
}

export type Page = {
  isActive: boolean
  title: string
  page: string
}
