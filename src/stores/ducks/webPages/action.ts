import { ActionTypes, SetWebPageAction } from './types'

export const setWebPage = (payload: Omit<SetWebPageAction, 'type'>): SetWebPageAction => ({
  type: ActionTypes.SET_WEB_PAGE,
  page: payload.page,
})
