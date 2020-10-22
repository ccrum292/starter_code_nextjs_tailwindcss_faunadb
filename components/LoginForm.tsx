import { useState, useContext } from "react";
import { server } from "../lib/config";
import { useRouter } from "next/router";
import TokenStore from "../lib/ts/TokenStore";
import signInUserWithAuthToken from "../lib/ts/signInUserWithAuthToken";
import UserAndNavContext from "../context/userAndNavContext";

interface UserLoginBody {
  email: string,
  password: string
}

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser, setAuthToken } = useContext(UserAndNavContext);

  const handleSubmit = async e => {
    e.preventDefault()
    if (email.length === 0 && password.length === 0) {
      return
    }

    const userLoginBody: UserLoginBody = {
      email: email,
      password: password
    }

    const res = await fetch(`${server}/api/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(userLoginBody)
    })

    const data = await res.json();
    TokenStore.setToken(data.secret);
    const userData = await signInUserWithAuthToken()
    setUser(userData);
    setAuthToken(data.secret);
    router.push('/')

  }

  return (
    <div className="w-full bg-gray-800">
      { props.successfulRegistration ? <p className="mx-2 font-bold text-red-700">Registration Successful, Please Log in. </p> : null}
      <form onSubmit={e => handleSubmit(e)} className="bg-gray-800 w-full flex flex-col justify-center items-center">
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="email">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} type="password" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="password" placeholder="Password" />
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