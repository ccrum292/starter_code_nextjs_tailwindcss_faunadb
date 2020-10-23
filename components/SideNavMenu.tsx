import NavItem from "./NavItem";
import { useContext } from "react";
import UserAndNavContext from "../context/userAndNavContext";
import LgPillButton from "./LgPillButton";
import { useRouter } from "next/router";
import handleLogoutAPI from "../lib/ts/handleLogout";

export default function SideNavMenu(props) {
  const { authToken, setAuthToken, setUser } = useContext(UserAndNavContext);
  const router = useRouter();

  const handleOnClick = () => {
    console.log("hit");
  };

  const handleLogout = async () => {
    const data = await handleLogoutAPI()
    if (!data) return
    setAuthToken(null);
    setUser(null);
    router.push("/");
  }

  return (
    <div className="h-full hidden flex flex-col bg-gray-700 pt-1 pb-12 sm:py-2 lg:block">
      <NavItem
        handleOnClick={handleOnClick}
        href="/"
        id={1}
        text="Home"
        classNameTailwind="mx-4 mt-2 mb-2"
      />
      {authToken ?
        <> 
          <NavItem
            href="/user"
            id={2}
            text="User"
            classNameTailwind="mx-4 mt-2 mb-2"
          />
          <LgPillButton
            handleOnClick={handleLogout}
            id={1}
            text="Logout"
            classNameTailwind="mx-4 mt-2 mb-2"
          />
        </> :
        <NavItem
          href="/loginOrRegister"
          id={2}
          text="Login or Register"
          classNameTailwind="mx-4 mt-2 mb-2"
        />
      }
    </div>
  );
}