import allReducers from './ducks'
import rootSaga from './sagas'

import { State as WebPagesState } from './ducks/webPages/types'

export type ApplicationState = {
  webPages: WebPagesState
}

export { allReducers, rootSaga }
