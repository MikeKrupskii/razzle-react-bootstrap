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
    //   {id: '1', name: 'meeting1' period: '13:00-14:00', organizer: 'Mike', attendee: 'Paul'},
    //   {id: '2', name: 'meeting2' period: '14:00-15:00', organizer: 'Nick', attendee: 'Bart'},
    //   {id: '3', name: 'meeting3' period: '15:00-16:00', organizer: 'Joe', attendee: 'Kurt'},
  ],
   time: moment().format("dd, Do MMMM, h:mm A")
};
const meetingReducer = (state = initialState, action) => {
    if(action.type === 'ADD_MEETING'){
        return{
            ...state,
            // meetings: [...state, ...action.payload] 'foo'
            meetings: state.meetings.push({ id: action.id, name: action.name, period: action.period, organizer: action.organizer, attendee: action.attendee})
            // meetings: [ ...state.meetings, action.content]
        }
    }
    if(action.type === "ADD_MOCKING_MEETING"){
        return{
            ...state,
           meetings : action.meetings
            // meetings: state.meetings.push({id: action.id, name: action.name period: actio period, organizer: action.organizer, attendee: action.attendee})
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