import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
// import { BrowserRouter, Redirect, Route } from "react-router-dom";

import AuthPage from "./authhero";
import Login from "./loginpage";
import Signup from "./signuppage";

interface Props {}
const combine1: FC<Props> = (props) => {
  return (
    <div className="flex fle-row justify-between">
      <Switch>
        <Route path="/login" >
          <Login></Login>
        </Route>
        <Route path="/signuppage" exact>
          <Signup></Signup>
        </Route>
      </Switch>
      <AuthPage></AuthPage>
    </div>
  );
};
export default memo(combine1);
