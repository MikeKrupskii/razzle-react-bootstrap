
export const addMeeting = (id, name, period, organizers, attendee) => {
    return dispatch => {
        dispatch({type: 'ADD_MEETING', id, name, period, organizers, attendee })
    };
  };
  
//   export const addMeeting = (id, name, period, organizer, organizerEmail, attendee, attendeeEmail) => {
//     return dispatch => {
//         dispatch({type: 'ADD_MEETING', mwwtings:[
//             {
//                 id:1,
//                 nane: 'abamr 1`cc'

//             }
//         ] })
//     };
//   };

export const getMeeting = () => {
return dispatch => {
  dispatch({type: 'ADD_MOCKING_MEETING', meetings:[
    {
      id: 1, name:"meeting1", period: ['14:00', '15:00'], organizers: [{name: 'Mike', email: 'mike@myhotelshop.eu'}, {name: 'Maria', email: 'maria@myhotelshop.eu'}], attendee: {name:'Paul', email:"paul@myhotelshop.eu"}
    },
    {
      id: 2, name:"meeting2", period: ['15:00', '16:00'], organizers: {name: 'Joe', email: 'joe@myhotelshop.eu'}, attendee: {name:'Paul', email:"paul@myhotelshop.eu"}
    },
    {
      id: 3, name:"meeting3", period: ['16:00', '17:00'], organizers: {name: 'Mike', email: 'mike@myhotelshop.eu'}, attendee: {name:'Paul', email:"paul@myhotelshop.eu"}
    }

  ]})
}
}

export const updateTime = (time) => {
  return dispatch => {
    dispatch({type: "UPDATE_TIME", time})
  }
}