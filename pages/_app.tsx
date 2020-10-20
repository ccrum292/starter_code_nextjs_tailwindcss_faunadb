import '../styles/index.css'
// import SearchContext from "../context/searchContext"
import UserAndSearchContext from "../context/userAndNavContext"
import { useState, useMemo } from "react"
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // const [search, setSearch] = useState("")
  // const [searchHistory, setSearchHistory] = useState([{ id: 0, text: "test1" }, { id: 1, text: "test2" }]);
  const [navOpen, setNavOpen] = useState(false);

  const value = useMemo(() => ({ navOpen, setNavOpen }), [navOpen, setNavOpen]);

  return (
    (
    <UserAndSearchContext.Provider value={value}>
      
      <Component {...pageProps} />
    
    </UserAndSearchContext.Provider>
  )
  );
}

export default MyApp
