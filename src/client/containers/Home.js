import React from "react";
// import Meetings from "../components/Meetings"
import { connect } from "react-redux";
import { addMeeting, getMeeting, updateTime } from "../redux/actions";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import ToolBar from "@material-ui/core/ToolBar";
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import moment from "moment";
import "../../stylesheets/style.scss";
import AccountBox from "@material-ui/icons/AccountBox";
import CalendarToday from "@material-ui/icons/CalendarToday";

// const renderList = (organizers) => organizers.length > 0 ? (
//   organizers.map(organizer => {
//     return (
//       <a
//         className="list-group-item"
//       >
//         <AccountBox /> {organizer.name} <br></br>
//         {organizer.email}
//       </a>
//     )
//   })
// ) : (
//     <p> No meetings today </p>
//   );

  const renderList = (list) => list.length > 0 && typeof list !== 'undefined' ? (
    list.map(eachElement => {
      return (
        <a
          className="list-group-item"
        >
          <AccountBox /> {eachElement.name} <br></br>
         <span className="email">{eachElement.email} </span>
        </a>
      )
    })
  ) : (
      <p> No meetings today </p>
    );

    // const renderTime = (period) => period && period.length > 0 ? (
    //   period.map(eachElement => {
    //     return (
    //       <div className="current-time">
    //         {eachElement.start}{" to "}{eachElement.finish}
    //       </div>
    //     )
    //   })
    // ): (<p> time period not defined </p>);

class Home extends React.Component {

  componentDidMount = () => {
    this.props.getMeeting();
    // this.getCurrentMeeting;
    setInterval(() => {
      this.getTime();
    }, 1000);
    setInterval(() => {
    }, 60000);
  };

  getTime = () => {
    let time = moment().format("dddd, Do MMMM, h:mm A");
    this.props.updateTime(time);
  };



  render() {

    const { meetings } = this.props;
    const { time } = this.props;

    const getCurrentMeeting = () => {
    let now = moment().format("HH:mm");
    if(meetings){
    for (let i=0; i<meetings.length; i++){
      let meetingItem = meetings[i];
      let format = 'HH:mm';
      let startTime = moment(meetingItem.period.start, format);
      let endTime = moment(meetingItem.period.finish, format);
      let currentTime = moment(now ,format);
      if (
        moment(currentTime).isBetween(
          moment(startTime),
          moment(endTime)
        )
      ) {
        return meetingItem
      }
      else{
        return( [] )
      }
    }
    }
    else{
      console.log("something")
    }
    }
    

    const currentMeeting = meetings ? (getCurrentMeeting()) : ({
      id: 1, name:"meeting1", period: {start:'9:00', finish:'16:00'}, organizers: [{name: 'Msdike', email: 'mike@myhotelshop.eu'}, {name: 'Maria', email: 'maria@myhotelshop.eu'}], attendee: [{name:'Paul', email:"paul@myhotelshop.eu"}, {name:'Joe', email:"joe@myhotelshop.eu"}]
    });
    console.log(currentMeeting);
    // console.log(currentMeeting.period);

    const ongoingList = currentMeeting ? (
      (
        <div> <span className="badge">
        {currentMeeting.name}
        {/* <div className="current-time"> {renderTime(currentMeeting.period)} {" "}</div> */}
        <div className="current-time"> {currentMeeting.period.start} {" "}</div>

        </span>
        <br></br>
        Organizers <br></br>
        {/* {renderList(currentMeeting.organizers)} */}
        <br></br>
        Attendees <br></br> 
        {/* {renderList(currentMeeting.attendee)} */}
        {" "}</div>
      )
    ): ( <p> no ongoing meeting</p>);

      
    
    console.log(ongoingList);
    
    const meetingsList = meetings ? (
      meetings.map(meeting => {
        return (
          <a
            className="list-group-item"
            key={meeting.id}
          >
            {meeting.summary}{" "}
            <span className="badge">
              {meeting.name}
              <div className="current-time">{meeting.period.start}{" to "}{meeting.period.finish}{" "}</div>
              </span>
              <br></br>
              <span className="badge"> Organizers <br></br> </span>
              {renderList(meeting.organizers)}
              <br></br>
              <span className="badge"> Attendees <br></br> </span>
              {renderList(meeting.attendee)}
              {" "}
            
          </a>
        )
      })
    ) : (
        <p> No meetings today </p>
      );
      console.log(meetingsList);



    const upcomingList = meetings ? (
      meetings.map(meeting => {
        return (
          <a
            className="list-group-item"
            key={meeting.id}
          >
            {meeting.summary}{" "}
            <span className="badge">
              <CalendarToday/> {meeting.name}
              <div className="current-time">{meeting.period.start}{" to "}{meeting.period.finish}{" |"} {moment().format("MMM Do YYYY")}  </div>
            </span>
          </a>
        )
      })
    ) : (
        <p> No meetings today </p>
      );


    return (
      <div className="container">
        
        <div className='current-status'>
          <Card style={{width:'500px'}}>
          <div className="time"> {time} </div>
            <CardContent>
              {/* <Typography> {time} </Typography> */}
              <Typography style={{ font: 23 }}> Ongoing meeting</Typography>
              <Typography> { meetingsList[0]} </Typography>

            </CardContent>
          </Card>
        </div>

        <div className='upcoming-meetings'>
          <Typography spacing={24} style={{ padding: 24 }}>
            
        </Typography>
          <Paper>
            <Grid container direction="column" wrap="nowrap" spacing={24} style={{ padding: 24 }}>
            Upcoming meetings
              <Grid item>
                <Typography>
                  {upcomingList}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetings: state.meetings,
  time: state.time
});

const mapDispatchToProps = {
  addMeeting,
  getMeeting,
  updateTime
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
