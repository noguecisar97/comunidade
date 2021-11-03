import allReducers from './ducks'
import rootSaga from './sagas'

import { State as PaginationState } from './ducks/Pagination/types'

export type ApplicationState = {
  pagination: PaginationState
}

export { allReducers, rootSaga }
