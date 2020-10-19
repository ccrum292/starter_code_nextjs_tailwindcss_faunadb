import PillButton from "./PillButton";

export default function SideMenuPills(){

  const infoForPills = [
    {
      id: 1,
      pillname:"pduct",
      pillroute: "/category/entertainment"
    },
    {
      id: 2,
      pillname:"produsdfct",
      pillroute: "/category/entertainment"
    },
    {
      id: 3,
      pillname:"produdafsfsdfsfct",
      pillroute: "/category/entertainment"
    },
    {
      id: 4,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 5,
      pillname:"prodasdsuct",
      pillroute: "/category/entertainment"
    },
    {
      id: 6,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 7,
      pillname:"produsdct",
      pillroute: "/category/entertainment"
    },
    {
      id: 8,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 9,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 10,
      pillname:"productfsdfasdfaf",
      pillroute: "/category/entertainment"
    },
    {
      id: 11,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 12,
      pillname:"produ",
      pillroute: "/category/entertainment"
    },
    {
      id: 13,
      pillname:"produasdfact",
      pillroute: "/category/entertainment"
    },
    {
      id: 14,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 15,
      pillname:"product",
      pillroute: "/category/entertainment"
    },
    {
      id: 16,
      pillname:"product",
      pillroute: "/category/entertainment"
    }
  ]


  return(
    <div className="jost flex flex-wrap bg justify-around">
      {infoForPills.map(data => {
        return (
          <PillButton key={data.id} pillname={data.pillname} pillroute={data.pillroute}/>
        )
      })}
    </div>
  )
};