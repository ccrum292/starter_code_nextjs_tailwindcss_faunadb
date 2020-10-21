import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function TabDiv() {
  const [indexOfActiveTab, setIndexOfActiveTab] = useState(0);
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);

  const handleTabClick = e => {
    setIndexOfActiveTab(e.target.value);
  }

  const tabActive = "cursor-pointer jost border-t-4 border-r-4 border-l-4 rounded-t-lg py-2 px-4 text-white font-semibold bg-gray-800 transition duration-500 ease-in-out transform hover:bg-gray-800 hover:underline";
  const tabInactive = "cursor-pointer py-2 px-4 jost text-white cursor-pointer border-b-4 rounded-t-lg transition duration-500 ease-in-out transform hover:bg-gray-800 hover:underline";

  return (
    <div className="flex-grow flex flex-col items-center justify-center lg:w-8/12 lg:mx-auto">

      <div className="shadowClass rounded-lg">
        <ul className="flex">
          <li value={0} onClick={e => handleTabClick(e)} className={indexOfActiveTab === 0 ? tabActive : tabInactive}>
            Login
          </li>
          <li value={1} onClick={e => handleTabClick(e)} className={indexOfActiveTab === 1 ? tabActive : tabInactive}>
            Register
          </li>
        </ul>
        <div className="bg-gray-700 border-b-4 border-r-4 border-l-4 border-gray-300 rounded-b-lg">
          {
            indexOfActiveTab === 0 ?
              <LoginForm successfulRegistration={successfulRegistration} setSuccessfulRegistration={setSuccessfulRegistration} /> :
              <RegisterForm successfulRegistration={successfulRegistration} setSuccessfulRegistration={setSuccessfulRegistration} indexOfActiveTab={indexOfActiveTab} setIndexOfActiveTab={setIndexOfActiveTab} />
          }
        </div>
      </div>

    </div>
  )
}