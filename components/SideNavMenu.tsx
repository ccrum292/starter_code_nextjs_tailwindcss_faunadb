import NavItem from "./NavItem"
import SideMenuPills from "./SideMenuPills"

export default function SideNavMenu(props) {

  return (
    <div className="hidden flex flex-col bg-gray-700 rounded-b-full pt-1 pb-12 sm:rounded-b-lg sm:py-2 lg:block max-w-md">
      <NavItem href="/" id={1} text="Hello New Worlddddddd" classNameTailwind="mx-4 mt-2 mb-2"/>
      <NavItem href="/" id={1} text="Hello New World" classNameTailwind="mx-4 mt-2 mb-2"/>
      <NavItem href="/" id={1} text="Hello New World" classNameTailwind="mx-4 mt-2 mb-2"/>
      <NavItem href="/" id={1} text="Hello New World" classNameTailwind="mx-4 mt-2 mb-2"/>
      <NavItem href="/" id={1} text="Hello New World" classNameTailwind="mx-4 mt-2 mb-2"/>
      <SideMenuPills/>
    </div>
  )
}