import NavItem from "./NavItem"
import SideMenuPills from "./SideMenuPills"
import { useContext } from "react";
import UserAndNavContext from "../context/userAndNavContext";

export default function SideNavMenu(props) {
  const { navOpen, setNavOpen } = useContext(UserAndNavContext);

  const handleOnClick = () => {
    console.log("hit");
  };


  return (
    <div className="h-full hidden flex flex-col bg-gray-700 pt-1 pb-12 sm:py-2 lg:block max-w-xs">
      <NavItem
        handleOnClick={handleOnClick}
        href="/"
        id={1}
        text="Home"
        classNameTailwind="mx-4 mt-2 mb-2"
      />
      <NavItem
        href="/loginOrRegister"
        id={1}
        text="Login or Register"
        classNameTailwind="mx-4 mt-2 mb-2"
      />
      {/* <SideMenuPills /> */}
    </div>
  );
}