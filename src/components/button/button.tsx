import { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";
// import { HiLockClosed } from "react-icons/hi";
import "../../index.css";
import {IconType} from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  children: string;
  type?: "submit" | "reset" | "reset" | undefined;
  Icon? : IconType;
}

const themeClass={
  primary: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
  secondary : "bg-gray-600 hover:bg-gray-700 focus:ring-gray-500"
};
const iconThemeClasses = {
  primary:"text-indigo-500 group-hover:text-indigo-400",
  secondary: " text-gray-500 group-hover:text-gray-400"
};
const Button: FC<Props> = ({ children, className, theme,Icon, ...rest }) => {

  
  return (
    <div>
      <button
        {...rest}
        className={
          "group relative w-28 flex justify-center py-2  border border-transparent text-sm font-medium rounded-md text-white   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
          themeClass[theme!] +
          " " +
          className
        }
      >
        {Icon &&<span className="absolute left-0 inset-y-0 flex items-center pl-3">
          <Icon
            className={"h-5 w-5 " + iconThemeClasses[theme!]}
            aria-hidden="true"
          />
        </span>}
        {children}
      </button>
    </div>
  );
};
Button.defaultProps = {
  theme: "primary",
};
export default memo(Button);
