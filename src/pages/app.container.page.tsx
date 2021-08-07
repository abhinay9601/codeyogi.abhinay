import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Dashbord from "./dashbord";
import Recordings from "./recordingspage";
import LecturePage from "./lecture.page";
import Navbar from "../components/dashboard.components/Navbar";
import { AiOutlineMenu } from "react-icons/ai";
import {AiOutlineDown} from "react-icons/ai";

interface Props {}
const Appcontainer: FC<Props> = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-12 shadow-lg px-8 text-gray-600 flex items-center justify-between">
        <div className="flex items-center">
          <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
          <p className="text-md m-4">Dashboard / Sales</p>
        </div>
        <div>
       <div className="w-24 h-8 flex border cursor-pointer rounded-md border-gray-300 shadow-md items-center justify-around">
         <p>Setting</p>
         <AiOutlineDown></AiOutlineDown>
       </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/dashboard" exact>
            <Dashbord></Dashbord>
          </Route>
          <Route path="/recordingpage" exact>
            <Recordings></Recordings>
          </Route>
          <Route path="/batch/:batchnumber/lecture/:lecturenumber">
            <LecturePage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default memo(Appcontainer);
