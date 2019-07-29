// import { combineReducers } from 'redux'
// import { reducer as formReducer } from 'redux-form'
// import meetingReducer from './meeting.reducers'

// const rootReducer = combineReducers({
//   form: formReducer,
//   meetingReducer
// })

// export default rootReducer
import moment from "moment";
const initialState = {
  meetings: [
  ],
   time: moment().format("dd, Do MMMM, h:mm A")
};
const meetingReducer = (state = initialState, action) => {
    if(action.type === 'ADD_MEETING'){
        return{
            ...state,
            meetings: state.meetings.push({ id: action.id, name: action.name, period: action.period, organizers: action.organizers, attendee: action.attendee})
        }
    }
    if(action.type === "ADD_MOCKING_MEETING"){
        return{
            ...state,
           meetings : action.meetings
        }
    }
    if(action.type === "UPDATE_TIME"){
        return{
            ...state,
            time: action.time
        }
    }
    else{
        return state
    }
}

export default meetingReducer;