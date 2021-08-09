import { FC, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";
import Progressbar from "../../components/progressbar/Progressbar"

interface Props {}
const Dashbord: FC<Props> = (props) => {
  const [query ,setQuery] =useState("ill");
  useEffect(() => {
    fetchGroups({status:'all-groups',query});
  },[query]);
  return (
    <div className="flex-grow">
     <Progressbar className="w-1/2" ></Progressbar>

      <p>This is dashboard page</p>
      <Link to="/recordingpage">
        <span className="text-blue-500 underline">Recoding page</span>
      </Link>
    </div>
  );
};
export default memo(Dashbord);
