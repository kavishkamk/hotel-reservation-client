import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Login from './coreUI/components/Login';

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
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
