import Nav from '../components/Nav'
import Head from 'next/head'
import SideNavMenu from "../components/SideNavMenu"

import { useState } from 'react'

export default function IndexPage() {
  const [navOpen, setNavOpen] = useState(false)
  // let [timer, setTimer] = useState(5)
  // let timeInterval = setInterval(()=>{
  //   if(timer <= 0){
  //     return clearInterval(timeInterval)
  //   }

  //   setTimer(()=>{
  //     console.log("hit t")
  //     timer--
  //   })
  // }, 1000)

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
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      {/* <div className="flex-grow">

      </div> */}
      <div className="flex-grow lg:flex">
        {navOpen ? null :
          <div className="hidden lg:block">
            <SideNavMenu />
          </div>}
        <div className="">
        </div>
      </div>
    </div>
  )
}
