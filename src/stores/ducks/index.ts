import { combineReducers } from 'redux'

import pagination from './Pagination'
import webPages from './webPages'

export default combineReducers({
  pagination,
  webPages,
})
