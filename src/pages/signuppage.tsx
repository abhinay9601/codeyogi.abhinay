// import react from "react";
import {FC ,memo} from "react";
import { Link } from "react-router-dom";

interface Props{
}
const signuppage :FC<Props> = (props) =>{
return(
<div>
<p>This is signup page</p>
Already have account?<Link to="/login"><span className="text-blue-500 underline">Signin</span></Link>

</div>
);
};
export default memo(signuppage);