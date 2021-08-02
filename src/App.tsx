import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Login from "./pages/loginpage";
import "./App.css";
import Notfound from "./pages/notfoundpage"
import AppContainer from "./pages/app.container.page";
import Combine1 from "./pages/comb-login-signup";


// import logo from './logo.svg';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login", "/signuppage"]} exact>
            <Combine1></Combine1>
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordingpage",
              "/batch/:batchnumber/lecture/:lecturenumber"
            ]}
            exact
          >
            <AppContainer></AppContainer>
          </Route>
          <Route>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
