import allReducers from './ducks'
import rootSaga from './sagas'

import { State as PaginationState } from './ducks/Pagination/types'
import { State as WebPagesState } from './ducks/webPages/types'

export type ApplicationState = {
  pagination: PaginationState
  webPages: WebPagesState
}

export { allReducers, rootSaga }
