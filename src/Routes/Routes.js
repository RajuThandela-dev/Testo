import Overview from '../component/Dashboard/component/Navs/Overview/Overview';
import Products from '../component/Dashboard/component/Navs/Products/Products';

import Projects from '../component/Dashboard/component/Navs/Projects/Projects';

import Campaigns from '../component/Dashboard/component/Navs/Campaigns/Campaigns';

import Accounts from '../component/Dashboard/component/Navs/Accounts/Accounts';
import Settings from '../component/Dashboard/component/Navs/Settings/Settings';
import Sales from '../component/Dashboard/component/Navs/Sales/Sales';
import ErrorPage from '../component/Errorpage';


const Routes = [
  { 
    id:1,
    icon: "icon",
    name:"Overview",
    path: "/Overview",
    component: <Overview/>,
  },
  {
    id:2,
    icon: "icon",
    name:"Sales",
    path: "/Sales",
    component:<Sales/>,
  },
  {
    id:3,
    icon: "icon",
    name:"Products",
    path: "/Products",
    component:<Products/>,
  },
  {
    id:5,
    icon: "icon",
    name:"Projects",
    path: "/Projects",
    component:<Projects/>,
  },
  {
    id:6,
    icon: "icon",
    name:"Campaigns",
    path: "/Campaigns",
    component:<Campaigns/>,
  },
  {
    id:7,
    icon: "icon",
    name:"Accounts",
    path: "/Accounts",
    component:<Accounts/>,
  },
  {
    id:8,
    icon: "icon",
    name:"Settings",
    path: "/Settings",
    component:<Settings/>
  }
  
];
export default Routes
