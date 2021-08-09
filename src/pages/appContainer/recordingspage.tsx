import {FC ,memo} from "react";
import { Link } from "react-router-dom";

interface Props{
}
const Recording :FC<Props> = (props) =>{
return(
<div>
<p>This is recording page</p>
<Link to="/dashboard"><span className="text-blue-500 underline">Dashboad</span></Link>

</div>
);
};
export default memo(Recording);