import { combineReducers } from 'redux'

import home from '../app/Home/reducers'
import detail from '../app/Detail/reducers'

export default combineReducers({
  home,
  detail
})
