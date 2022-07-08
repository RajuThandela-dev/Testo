import { List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import Routes from "../../../../Routes/Routes";

import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
let useStyle = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: "blue",
      height: "100vh",
    },
  };
});
const Navigation = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <Typography variant='h3' align="center" style={{fontSize:"30px",padding:"20px"}}>Sytemx</Typography>
      <List>
        {Routes.map((text) => (
          <ListItem
            button
            key={text.id}
            onClick={() => {
              navigate(text.path);
            }}
          >
            <ListItemText primary={text.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default Navigation;
