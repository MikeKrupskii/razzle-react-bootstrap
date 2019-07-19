export const addMeeting = (id,content) => {
    return dispatch => {
        dispatch({type: 'ADD_MEETING', payload: {id, content} })
    };
  };