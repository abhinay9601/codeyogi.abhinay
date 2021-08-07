import { FC, memo } from "react";
import Logo from "./logo.svg";
import { BiSearch } from "react-icons/bi";
import Canada from "./ca.png";
import { FaRegEnvelope } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import Avtar from "../avtar/avtar";
interface Props {}
const Navbar: FC<Props> = (Props) => {
  return (
    <div className="h-14 shadow-lg px-8 bg-gray-900 flex items-center justify-between">
      <div className="flex justify-between w-5/12">
        <div className=" mr-4 w-8 h-auto flex ">
          <img src={Logo} alt="Cork-logo"></img>
          <h1 className="pl-4 text-gray-400 font-semibold  text-2xl">CORK</h1>
        </div>
        <div className="relative">
          <input
            className="pl-8 bg-gray-700 w-96 h-8 rounded-md"
            type="text"
            placeholder="Search..."
          />
          <BiSearch className="absolute cursor-pointer text-gray-500 top-2 text-xl left-2 "></BiSearch>
        </div>
      </div>

      <div className="flex items-center justify-between w-36">
        <img src={Canada} alt="Country-img" width="25" />
        <FaRegEnvelope className="text-white text-2xl"></FaRegEnvelope>
        <BsBell className="text-white text-2xl"></BsBell>
        <Avtar Size="small" status="online"></Avtar>
      </div>
    </div>
  );
};
export default memo(Navbar);
