import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4`}></li>;
};

const NavBar = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4 md:justify-center">
      <div className="flex-initial justify-center items-center md:flex-[0.5]">
        <img src={logo} alt="Logo" className="w-32 cursor-ponter" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  );
};

export default NavBar;
