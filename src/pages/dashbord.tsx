import { FC, memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";

interface Props {}
const Dashbord: FC<Props> = (props) => {
  useEffect(() => {
    fetchGroups({status:'all-groups'});
  },[]);
  return (
    <div className="flex-grow">
      {/* <Avatar Size="medium" status="undefined"></Avatar> */}

      <p>This is dashboard page</p>
      <Link to="/recordingpage">
        <span className="text-blue-500 underline">Recoding page</span>
      </Link>
    </div>
  );
};
export default memo(Dashbord);
