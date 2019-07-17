import React from "react";
import Meetings from "../components/Meetings"
import { connect } from "react-redux";
import addMeeting from "../redux/actions";
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ToolBar from "@material-ui/core/ToolBar";

class Home extends React.Component {

  state = {
    meetings: [
      { id: 1, content: 'Meeting 1 nsectetur adipisicing elit. Nostru' },
      { id: 2, content: 'Meeting 2 efkjefrf kjrfrfkj' },
      { id: 3, content: 'Meet 2212083'}
    ]
  }

render() {
  return (
    <div>
      <Meetings meetings={this.state.meetings} />
    </div>
  );
}
}

const mapStateToProps = state => ({
  meeting: state.meeting
});

const mapDispatchToProps = {
 addMeeting
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
