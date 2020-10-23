import Link from "next/link"
import { useState } from "react";
import { server } from "../lib/config";

interface NewUserObject {
  email: string,
  password: string
}

export default function RegisterForm(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== secondPassword) {
      return setError(`Passwords must match.`);
    }
    setError("");
    const newUserObject: NewUserObject = {
      email: email,
      password: password
    }

    const res = await fetch(`${server}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(newUserObject)
    })

    const data = await res.json();
    props.setSuccessfulRegistration(true);
    props.setIndexOfActiveTab(0);
  }

  return (
    <div className="w-full bg-gray-800">
      <p className="mx-2 font-bold text-red-700">{error}</p>
      <form onSubmit={e => handleSubmit(e)} className="bg-gray-800 w-full flex flex-col justify-center items-center">
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="email">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} type="password" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="password" placeholder="Password" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="re-enterPassword">Re-enter Password</label>
          <input onChange={e => setSecondPassword(e.target.value)} type="password" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="re-enterPassword" placeholder="Re-enter Password" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="font-bold shadowClass mb-4 rounded-full cursor-pointer bg-red-700 py-2 px-4 mt-2 ml-2 transition duration-500 ease-in-out hover:bg-red-500 transform  hover:scale-110">
            <a>Submit</a>
          </button>
        </div>
      </form>
    </div>
  )

}