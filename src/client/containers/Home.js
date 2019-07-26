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

  const renderList = (argumentss) => argumentss.length > 0 ? (
    argumentss.map(argumentt => {
      return (
        <a
          className="list-group-item"
        >
          <AccountBox /> {argumentt.name} <br></br>
          {argumentt.email}
        </a>
      )
    })
  ) : (
      <p> No meetings today </p>
    );

class Home extends React.Component {

  componentDidMount = () => {
    this.props.getMeeting();
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
    console.log(meetings);
    const { time } = this.props;
    console.log(time);

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
              <div className="current-time">{meeting.period[0]}{" to "}{meeting.period[1]}{" "}</div>

              <br></br>
              Organizers <br></br>
              {renderList(meeting.organizers)}
              <br></br>
              Attendees <br></br> 
              {renderList(meeting.attendee)}
              {meeting.attendee.name}
              {" "}
            </span>
          </a>
        )
      })
    ) : (
        <p> No meetings today </p>
      );

    const upcomingList = meetings ? (
      meetings.map(meeting => {
        return (
          <a
            className="list-group-item"
            key={meeting.id}
          >
            {meeting.summary}{" "}
            <span className="badge">
              {meeting.name}
              <div className="current-time">{meeting.period[0]}{" to "}{meeting.period[1]}{" |"} {moment().format("MMM Do YYYY")}  </div>
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
          <Card>
            {time}
            <CardContent>
              <Typography> {time} </Typography>
              <Typography style={{ font: 23 }}> Ongoing meeting</Typography>
              <Typography> {meetingsList[0]} </Typography>
            </CardContent>
          </Card>
        </div>

        <div className='upcoming-meetings'>
          <Typography spacing={24} style={{ padding: 24 }}>
            Upcoming meetings
        </Typography>
          <Paper>
            <Grid container direction="column" wrap="nowrap" spacing={24} style={{ padding: 24 }}>
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
