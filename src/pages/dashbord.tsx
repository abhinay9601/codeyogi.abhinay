import {FC ,memo} from "react";
import { Link } from "react-router-dom";


interface Props{
}
const dashbord :FC<Props> = (props) =>{
return(
<div className="flex-grow"> 
  {/* <Avatar Size="medium" status="undefined"></Avatar> */}
  
<p>This is dashboard page</p>
<Link to="/recordingpage"><span className="text-blue-500 underline">Recoding page</span></Link>
</div>
);
};
export default memo(dashbord);