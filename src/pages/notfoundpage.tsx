import {FC ,memo} from "react";

interface Props{
}
const example :FC<Props> = (props) =>{
return(
<div>
<p>The page is no longer available.</p>
</div>
);
};
export default memo(example);