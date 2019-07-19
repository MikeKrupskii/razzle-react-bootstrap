// import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import meetingReducer from './meeting.reducers'

// const rootReducer = combineReducers({
//   form: formReducer,
//   meetingReducer
// })

// export default rootReducer


const initialState = {
  meetings: [
      {id: '1', content: 'meeting1'},
      {id: '2', content: 'meeting2'},
      {id: '3', content: 'meeting3'}
  ]
};

const meetingReducer = (state = initialState, action) => {
    if(action.type === 'ADD_MEETING'){
        return{
            ...state,
            meetings: [...state, ...action.payload]
            
        }
    }
    else{
        return state
    }
}

export default meetingReducer;