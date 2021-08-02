import {FC , memo} from "react";
import {useParams} from "react-router-dom"
interface Props{
}
interface routerparm{
  lecturenumber : string;
  batchnumber : string;
}
const Lecture :FC<Props> = (props) =>{
  const {lecturenumber ,batchnumber} =useParams<routerparm>();
return(
<div>
This is page is of lecture: {lecturenumber} and batch is:{batchnumber}
</div>
);
};
export default memo(Lecture);