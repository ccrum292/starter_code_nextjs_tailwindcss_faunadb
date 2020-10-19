import { useContext } from 'react'
import SearchContext from "../../context"

export default function Search() {
  const {search, setSearch, searchHistory, setSearchHistory} = useContext(SearchContext)

  return (
    <div>
      hello
    </div>
  )
}