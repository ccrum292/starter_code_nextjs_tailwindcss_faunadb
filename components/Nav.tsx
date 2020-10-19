import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NavItem from "./NavItem"

export default function Nav(props) {
  const [searchDivOpen, setSearchDivOpen] = useState(false)
  
  return (
    <>
      <div className="flex items-center justify-between bg-gray-800">
        <div className="px-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125" onClick={() => { props.setNavOpen(!props.navOpen) }}>
          <FontAwesomeIcon style={{ color: "#e2e8f0" }} size="2x" icon={faBars} />
        </div>
        <div className="px-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-110">
          <Link href="/">
            <a className="jost self-center text-xl font-bold text-gray-300 sm:text-3xl">Caleb's Commerce</a>
          </Link>
        </div>
        <div onClick={() => { setSearchDivOpen(!searchDivOpen) }} className="p-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125">
          <FontAwesomeIcon style={{ color: "#e2e8f0" }} size="2x" icon={faSearch} />
        </div>
        <div className="m-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-125">
          <FontAwesomeIcon style={{ color: "#e2e8f0" }} size="2x" icon={faShoppingCart} />
        </div>
      </div>
      {props.navOpen ?
        <div className="flex flex-col bg-gray-700 rounded-b-full pt-1 pb-12 sm:rounded-b-lg sm:py-2 lg:hidden">
          <NavItem href="/" id={1} text="Hello World" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/" id={1} text="Hello World" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/" id={1} text="Hello World" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/" id={1} text="Hello World" classNameTailwind="px-16 mt-2 mb-2"/>
          <NavItem href="/" id={1} text="Hello World" classNameTailwind="px-16 mt-2 mb-2"/>
        </div> 
        : null}
    </>
  )
}
