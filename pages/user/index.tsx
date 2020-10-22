import Nav from "../../components/Nav";
import Head from "next/head";
import SideNavMenu from "../../components/SideNavMenu";
import { useContext, useState, useEffect } from "react";
import UserAndNavContext from "../../context/userAndNavContext";
import { useRouter } from "next/router";

const LoginOrRegister = () => {
  const { navOpen, setNavOpen, authToken } = useContext(UserAndNavContext);
  const [pageDisplayed, setPageDisplayed] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if (authToken) setPageDisplayed(true);
    else router.push("/loginOrRegister")
  }, [])


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
          <div className="hidden lg:block w-48">
            <SideNavMenu />
          </div>
        )}
        {pageDisplayed ?
          <div>
            This is a Secret Page with a twist
          </div> : null
        }

      </div>
    </div>
  );
}

export default LoginOrRegister;