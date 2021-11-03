import { State, SetNewPageAction, ActionArgs, ActionTypes } from './types'

export const INITIAL_STATE: State = {
  pages: [
    {
      isActive: true,
      title: 'Home',
      page: 'home',
    },
    {
      isActive: false,
      title: 'Web',
      page: 'web',
    },
  ],
}

export function setPage(state: State, action: SetNewPageAction): State {
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
  if (action.type === ActionTypes.SET_NEW_PAGE) {
    return setPage(state, action)
  }

  return state
}

export default reducer
