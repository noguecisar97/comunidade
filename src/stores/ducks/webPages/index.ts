import { State, SetWebPageAction, ActionArgs, ActionTypes } from './types'

export const INITIAL_STATE: State = {
  pages: [
    {
      isActive: true,
      title: 'JavaScript',
      page: 'javascript',
    },
    {
      isActive: false,
      title: 'HTML',
      page: 'html',
    },
    {
      isActive: false,
      title: 'CSS',
      page: 'css',
    },
  ],
}

export function setPage(state: State, action: SetWebPageAction): State {
  return {
    pages: state.pages.map((e) => {
      if (e.page === action.page) {
        e.isActive = true
        return e
      }

      e.isActive = false
      return e
    }),
  }
}

const reducer = (state: State = INITIAL_STATE, action: ActionArgs): State => {
  if (action.type === ActionTypes.SET_WEB_PAGE) {
    return setPage(state, action)
  }

  return state
}

export default reducer
