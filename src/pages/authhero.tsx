import {FC ,memo} from "react";

interface Props{
}
const combine1 :FC<Props> = (props) =>{
return(
<div className="h-screen w-1/2 bg-gray-800 text-white" >
  <div className="w-3/4 mx-auto mt-20">
  <img src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png" alt="cork-logo" />
</div>
</div>
);
};
export default memo(combine1);