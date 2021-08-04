import {FC ,memo} from "react";

interface Props{
}
const Sidebar :FC<Props> = (props) =>{
return(
<div className="h-screen w-1/6 bg-gray-600 ">
this is sidebar.
</div>
);
};
export default memo(Sidebar);