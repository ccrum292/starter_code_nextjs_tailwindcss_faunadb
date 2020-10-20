import Nav from "../../components/Nav";
import Head from "next/head";
import SideNavMenu from "../../components/SideNavMenu";
import { useContext, useState } from "react";
import UserAndNavContext from "../../context/userAndNavContext";
import TabDiv from "../../components/TabDiv";
import Modal from "../../components/Modal";

export default function LoginOrRegister() {
  const { navOpen, setNavOpen } = useContext(UserAndNavContext);
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Login or Register" />
        <title>Caleb Crum Starter Code</title>
      </Head>
      <Nav />
      <div className="flex-grow flex">
        {navOpen ? null : (
          <div className="hidden lg:block">
            <SideNavMenu />
          </div>
        )}
        <TabDiv />
      </div>
    </div>
  );
}
