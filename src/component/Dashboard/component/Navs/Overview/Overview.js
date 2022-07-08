import React from "react";
import { Grid } from "@material-ui/core";
import HelperCard from "./component/HelperCard";
import { makeStyles } from "@material-ui/core";
let useStyle = makeStyles((theme) => {
  return {
    root:{
       backgroundColor:"#F5F5F5",
      
       padding:theme.spacing(5)
    },
    card: {
      display: "flex",
      justifyContent: "space-between",

      

    },
    
  };
});
export default function Overview() {
  let classes = useStyle();
  return (
    <Grid container className={classes.root}>
      <Grid item md >
        <div className={classes.card}>
        <HelperCard product="User" amount={2000} percentage={24} />
        <HelperCard product="Sales" amount={4000} percentage={-25} />
        <HelperCard product="Loads" amount={60000} percentage={50} />
        </div>
      

      </Grid>
      <Grid item md={3}>
        <h2>hello</h2>
      </Grid>
    </Grid>
  );
}
