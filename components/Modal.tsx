import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Modal({ modalOpen, setModalOpen }) {

  return (
    <>
      {
        modalOpen ?
          <div className="fixed top-0 left-0 min-h-screen min-w-full z-50 bg-gray-800 bg-opacity-90 flex justify-center items-center">
            <div className="flex-grow flex flex-col items-center justify-center lg:w-8/12 lg:mx-auto">
              <div className="shadowClass border-4 border-gray-300 rounded-lg bg-gray-700">
                Some Text Here
              </div>
            </div>
            <div className="absolute bottom-0 my-auto w-full h-full flex items-center  justify-between">
              <FontAwesomeIcon onClick={e => {
                e.preventDefault()
                setModalOpen(() => !modalOpen)
              }} className="no-select absolute top-0 right-0 cursor-pointer mr-4 mt-2 opacity-75 transition duration-700 ease-in-out transform sm:hover:opacity-100 sm:hover:scale-110" style={{ color: "#fff" }} size="2x" icon={faTimes} />
            </div>
          </div > : null
      }
    </>
  )
}