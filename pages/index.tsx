import Nav from '../components/Nav'
import Head from 'next/head'
import SideNavMenu from "../components/SideNavMenu"
import { useContext, useEffect } from "react";
import UserAndNavContext from "../context/userAndNavContext";
import { GetStaticProps } from "next";
import { server } from "../lib/config";


export default function IndexPage(props) {
  const { navOpen, setNavOpen, user, setUser, authToken, setAuthToken } = useContext(UserAndNavContext);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Next.js and Tailwind eCommerce Store"
        />
        <title>Caleb Crum Starter Code</title>
      </Head>
      <Nav />
      <div className="flex-grow lg:flex">
        {navOpen ? null : (
          <div className="hidden lg:block w-48">
            <SideNavMenu />
          </div>
        )}
        <div className="text-white"></div>
      </div>
    </div>
  );
}
