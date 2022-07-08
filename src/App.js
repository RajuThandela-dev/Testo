import { Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/Dashboard";
import Router from "./Routes/Routes";
function App() {
  return (
    <div>
      <Dashboard>
        <Routes>
          {Router.map((data) => (
            <Route path={data.path} element={data.component} />
          ))}
        </Routes>
      </Dashboard>
    </div>
  );
}

export default App;
