import React, { FC, Suspense  } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
// import Login from "./pages/loginpage";
import "./App.css";
import Notfound from "./pages/notfoundpage"
// import AppContainer from "./pages/app.container.page";
// import Combine from "./pages/comb-login-signup";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerPageLazy from "./pages/appContainer/app.container.lazy";
import CombinePageLazy from "./pages/auth/auth.lazy"

interface Props{}

// import logo from './logo.svg';
const App:FC<Props>= () => {
  const token = localStorage.getItem(LS_AUTH_TOKEN) ;
  return (
    <div>
      <Suspense fallback={<div className="text-red-500">Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
           {token ? <Redirect to="/dashboard" />: <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signuppage"]} exact>
           {token ? <Redirect to="/dashboard" /> : <CombinePageLazy />}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordingpage",
              "/batch/:batchnumber/lecture/:lecturenumber"
            ]}
            exact
          >           
            <AppContainerPageLazy /> 
          </Route>
          <Route>
            <Notfound></Notfound>
          </Route>
        </Switch>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
