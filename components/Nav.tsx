import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from "react";
import NavItem from "./NavItem"
import UserAndNavContext from "../context/userAndNavContext";


export default function Nav() {
  const [searchDivOpen, setSearchDivOpen] = useState(false);
  const { navOpen, setNavOpen } = useContext(UserAndNavContext);

  const handleOnClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-gray-800">
        <div
          className="px-2 my-1 sm:my-0 cursor-pointer sm:transition duration-300 ease-in-out sm:transform hover:scale-125"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <FontAwesomeIcon
            style={{ color: "#e2e8f0" }}
            size="2x"
            icon={faBars}
          />
        </div>
        <div className="px-2 mx-2 flex justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">
            <a className="jost self-center text-center text-xl font-bold text-gray-300 sm:text-3xl">
              Starter Code
            </a>
          </Link>
        </div>
        <div className="flex justify-center sm:px-2 mx-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/loginOrRegister">
            <a className="jost self-center text-center font-bold text-gray-300 sm:text-3xl">
              Login or Register
            </a>
          </Link>
        </div>
      </div>
      {navOpen ? (
        <div className="flex flex-col bg-gray-700 rounded-b-full pt-1 pb-12 sm:rounded-b-lg sm:py-2 lg:hidden">
          <NavItem
            handleOnClick={handleOnClick}
            href="/"
            id={1}
            text="Home"
            classNameTailwind="px-16 mt-2 mb-2"
          />
          <NavItem
            handleOnClick={handleOnClick}
            href="/loginOrRegister"
            id={1}
            text="Login or Register"
            classNameTailwind="px-16 mt-2 mb-2"
          />
        </div>
      ) : null}
    </>
  );
}
