import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import Routes from "../../Routes/Routes";
import theme from "../../theme";
import Navbar from "./component/Navbar";
import Navigation from "./component/Navigation/Navigation";


let useStyle=makeStyles(theme=>{
   return{
    back:{
      //backgroundColor:"#F5F5F5"
    }
   }
})
const Dashboard = (props) => {
    
    let classes=useStyle()
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        
       <Grid container>
         <Grid items md={2} className={classes.back}>
           <Navigation />
         </Grid>
         <Grid items md> 
         <Navbar/>
         {props.children}
         </Grid>
       </Grid>
      </div>
    </ThemeProvider>
  );
};
export default Dashboard;
