
const initialState = {
    meetings: []
  };

  const meetingReducer = (state = initialState, action) => {
      if(action.type === 'ADD_MEETING'){
          return{
              ...state,
              meetings : [...state.meetings, action.addMeeting]

          }
      }
  }

  export default meetingReducer;