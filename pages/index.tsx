import Nav from '../components/Nav'
import Head from 'next/head'
import SideNavMenu from "../components/SideNavMenu"
import { useContext, useEffect } from "react";
import UserAndNavContext from "../context/userAndNavContext";

export default function IndexPage() {
  const { navOpen, setNavOpen } = useContext(UserAndNavContext);
  const getConnection = async () => {
    const maryP = await fetch('/api')
    const data = await maryP.json()
    console.log(res);
    console.log(data);
  }

  useEffect(() => {
    // const secret = process.env.FAUNADB_SECRET_KEY
    // console.log(secret);

    getConnection()

  }, [])


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
      <Nav     />
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
