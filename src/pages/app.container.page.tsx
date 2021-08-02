import {FC ,memo} from "react";
import { Switch,Route } from "react-router-dom"; 
import Sidebar from "./sidebar";
import Dashbord from "./dashbord";
import Recordings from "./recordingspage";
import LecturePage from "./lecture.page";


interface Props{}
const Appcontainer : FC<Props> =(props) => {
  return(
    <div className="flex flex-row"> 
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
  );
  };
  export default memo(Appcontainer);