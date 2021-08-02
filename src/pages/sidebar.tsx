import {FC ,memo} from "react";

interface Props{
}
const Sidebar :FC<Props> = (props) =>{
return(
<div className="h-screen bg-gray-600 w-80">
this is sidebar.
</div>
);
};
export default memo(Sidebar);