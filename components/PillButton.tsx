import Link from "next/link";

export default function PillButton(props){
  return(
    <div className="font-bold shadowClass mb-2 rounded-full cursor-pointer bg-red-700 py-2 px-4 mt-2 ml-2 transition duration-500 ease-in-out hover:bg-red-500 transform  hover:scale-110"><Link href={props.pillroute}><a>{props.pillname}</a></Link></div>
  )
}