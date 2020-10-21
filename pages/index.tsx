import Nav from '../components/Nav'
import Head from 'next/head'
import SideNavMenu from "../components/SideNavMenu"
import { useContext, useEffect } from "react";
import UserAndNavContext from "../context/userAndNavContext";
import { GetStaticProps } from "next";
import { server } from "../lib/config";

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`${server}/api/users/login`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data
    }
  }
}




export default function IndexPage(props) {
  const { navOpen, setNavOpen } = useContext(UserAndNavContext);

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
          <div className="hidden lg:block">
            <SideNavMenu />
          </div>
        )}
        <div className=""></div>
      </div>
    </div>
  );
}
