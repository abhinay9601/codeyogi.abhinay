import { FC, memo } from "react";
import { logout } from "../api/auth";
import Button from "../components/button/button"
interface Props {}
const Sidebar: FC<Props> = (props) => {
  return (
    <div className="h-screen w-1/4 md:w-1/6 bg-gray-600 ">
      <div>this is sidebar.</div>
      <Button
        onClick={() => {
          logout();
          window.location.href="/login"
        }}
      >
        Logout
      </Button>
    </div>
  );
};
export default memo(Sidebar);
