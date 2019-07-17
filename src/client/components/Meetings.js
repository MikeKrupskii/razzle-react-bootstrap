import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/ToolBar';

const Meetings = ({ meetings }) => {
    const meetingsList = meetings.length ? (
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
    )
}

export default Meetings