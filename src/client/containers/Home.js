import React from "react";
// import Meetings from "../components/Meetings"
import { connect } from "react-redux";
import { addMeeting } from "../redux/actions";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ToolBar from "@material-ui/core/ToolBar";

class Home extends React.Component {

  // state = {
  //   meetings: [
  //     { id: 1, content: 'Meeting 1 nsectetur adipisicing elit. Nostru' },
  //     { id: 2, content: 'Meeting 2 efkjefrf kjrfrfkj' },
  //     { id: 3, content: 'Meet 2212083'}
  //   ]
  // }

  render() {
    const { meetings } = this.props;
    console.log(meetings)
    // this.props.addMeeting("4", "meeting4");
    const meetingsList = meetings ? (
      meetings.map(meeting => {
        return (
          <div key={meeting.id}>
            <span>
              {meeting.content}
            </span>
          </div>
        )
      })
    ) : (
        <p> No meetings today </p>
      )


    return (
      <div>
        <ToolBar spacing={24} style={{ padding: 24 }}>
          <Typography>
            Now: {meetingsList[0]}
          </Typography>
        </ToolBar>

        <Typography>
            Today:
        </Typography>
        <Paper>
          <Grid container direction="column" wrap="nowrap" spacing={24} style={{ padding: 24 }}>
            <Grid item>
              <Typography>
                {meetingsList}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetings: state.meetings
});

const mapDispatchToProps = {
  addMeeting
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
