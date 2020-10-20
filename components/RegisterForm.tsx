import Link from "next/link"

export default function RegisterForm() {

  const handleSubmit = e => {
    e.preventDefault()
    console.log("hit")
  }

  return (
    <div className="w-full">
      <form onSubmit={e => handleSubmit(e)} className="bg-gray-800">
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" for="email">Email</label>
          <input type="email" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" for="password">Password</label>
          <input type="password" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="password" placeholder="Password" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" for="re-enterPassword">Re-enter Password</label>
          <input type="password" className="jost shadowClass appearance-none border rounded mx-2 py-2 px-4 text-grey-700 leading-tight focus:outline-none" id="re-enterPassword" placeholder="Re-enter Password" />
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