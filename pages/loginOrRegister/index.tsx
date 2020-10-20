import Nav from "../../components/Nav";
import Head from "next/head";
import SideNavMenu from "../../components/SideNavMenu";
import { useContext } from "react";
import UserAndNavContext from "../../context/userAndNavContext";

export default function LoginOrRegister() {
  const { navOpen, setNavOpen } = useContext(UserAndNavContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Register" />
        <title>Caleb Crum Starter Code</title>
      </Head>
      <Nav />
      <div className="flex-grow lg:flex">
        {navOpen ? null : (
          <div className="hidden lg:block">
            <SideNavMenu />
          </div>
        )}
        <div className="" />
      </div>
    </div>
  );
}
