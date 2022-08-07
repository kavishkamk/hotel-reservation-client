import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from './coreUI/pages/Login';
import Registration from './coreUI/pages/Registration';
import HotelDetails from './coreUI/pages/HotelDetails';

function App() {
  // this is the router to set ther routing of app
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/registration" exact>
          <Registration />
        </Route>
        <Route path="/hotel/:hid" exact>
          <HotelDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
