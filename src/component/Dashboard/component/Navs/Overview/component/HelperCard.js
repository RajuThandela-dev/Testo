import { CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Card } from "@material-ui/core";
import React from "react";
let useStyle = makeStyles((theme) => {
  return {
    root: {
      minWidth: 222,
      boxShadow: theme.spacing(3),
    },
    container: {
      display: "flex",
      gap: "10px",
      marginTop: theme.spacing(1),
      alignItems: "center",
    },
    percentage: {
      color: "green",
    },
  };
});
const HelperCard = ({ product, amount, percentage }) => {
  let classes = useStyle();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" style={{ fontSize: "10px" }}>
          {product}
        </Typography>
        <div className={classes.container}>
          <Typography
            variant="h1"
            style={{ fontSize: "30px", fontWeight: "60" }}
          >
            {amount}
          </Typography>
          <Typography
            variant="body2"
            className={classes.percentage}
            style={{ fontSize: "10px",color:(percentage>0)?"green":"red"}}
            
          >{`${percentage}%`}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export default HelperCard;
