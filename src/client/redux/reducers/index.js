import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import meetingReducer from './meeting.reducers'

const rootReducer = combineReducers({
  form: formReducer,
  meetingReducer
})

export default rootReducer
