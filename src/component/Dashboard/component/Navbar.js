import { InputBase, Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ChatBubbleRoundedIcon from "@material-ui/icons/ChatBubbleRounded";
import React from "react";
import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Typography } from "@material-ui/core";
let useStyle = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(2, 2),
   //   backgroundColor:"#F5F5F5"
    },
    paper: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,

      border: "solid 1px rgb(0,0,0,0.5)",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconRound:{
        border:'solid rgb(0,0,0,0.2)',
        borderRadius:theme.spacing(50)

        ,padding:theme.spacing(1),
      //  backgroundColor:theme.palette.info.light,
    },
    iconSeperation:{
        display:'flex',
        justifyContent:"end",
        gap:"10px"
    },
    profile:{
        display:'flex',
        justifyContent:"end",
        gap:"10px",
        border:'solid rgb(0,0,0,0.2)',
        borderRadius:theme.spacing(50)

        ,padding:theme.spacing(1),
    }
  };
});
export default function Navbar() {
  let classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={5}>
          <Paper className={classes.paper}>
            <InputBase
              className={classes.input}
              placeholder="Search "
              inputProps={{ "aria-label": "Search" }}
            />
          </Paper>
        </Grid>
        <Grid item md  className={classes.iconSeperation}>
          <div className={classes.iconRound}>
            <ChatBubbleRoundedIcon  />
          </div>
          <div className={classes.iconRound}>
            <NotificationsRoundedIcon  />
          </div>
          <div className={classes.profile}>
            <PersonRoundedIcon/>
            <Typography>Profile</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
