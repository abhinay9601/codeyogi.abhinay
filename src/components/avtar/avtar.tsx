import { FC, memo } from "react";
import "../../index.css";
import User from "./profile.jpeg";

interface Props  {
  Size?: "large" | "medium" | "small";
status?: "online" | "offline" | "undefined";
}
const statusClass = {
  online : " bg-green-700 border-2 border-grey-300  ",
  offline: "bg-gray-400 border-2 border-grey-300  ",
  undefined: ""
};
const sizeClass  = {
  large: " w-12 ",
  medium: " w-10 ",
  small: " w-8 "
};
const positionClass= {
  small: " w-2 h-2 bottom-0 left-6 ",
  medium:" w-3 h-3 bottom-0 left-6 ",
  large: " w-4 h-4 bottom-0 left-8"
};

const Avtar: FC<Props> = ({Size ,status}) => {
  return (
    <div>
     <div className="relative">
        <img className={"h-auto rounded-full "  + sizeClass[Size!]} src={User} alt="User-logo"  />
       <div className={" rounded-full absolute "  + statusClass[status!] + positionClass[Size!] }></div>
      </div>
    </div>
  );
};
Avtar.defaultProps = {
  Size: "medium",

};
export default memo(Avtar);
