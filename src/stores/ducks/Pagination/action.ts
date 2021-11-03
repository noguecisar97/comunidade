import { ActionTypes, SetNewPageAction } from './types'

export const setNewPage = (payload: Omit<SetNewPageAction, 'type'>): SetNewPageAction => ({
  type: ActionTypes.SET_NEW_PAGE,
  page: payload.page,
})
