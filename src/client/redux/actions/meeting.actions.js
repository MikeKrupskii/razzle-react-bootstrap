
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
      id: 1, name:"Monday meeting", period: {start:'10:00', finish:'16:00'}, organizers: [{name: 'Mike', email: 'mike@myhotelshop.eu'}, {name: 'Maria', email: 'maria@myhotelshop.eu'}], attendee: [{name:'Paul', email:"paul@myhotelshop.eu"}, {name:'Joe', email:"joe@myhotelshop.eu"}]
    },
    {
      id: 2, name:"Company breakfast", period: {start:'17:00', finish:'18:00'}, organizers: {name: 'Joe', email: 'joe@myhotelshop.eu'}, attendee: {name:'Paul', email:"paul@myhotelshop.eu"}
    },
    {
      id: 3, name:"Meeting of penguin lovers", period: {start:'19:00', finish:'20:00'}, organizers: {name: 'Mike', email: 'mike@myhotelshop.eu'}, attendee: {name:'Paul', email:"paul@myhotelshop.eu"}
    }

  ]})
}
}

export const updateTime = (time) => {
  return dispatch => {
    dispatch({type: "UPDATE_TIME", time})
  }
}