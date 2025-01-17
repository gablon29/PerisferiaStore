import React from 'react'
import { MdSearch } from 'react-icons/md'
import { useContext, useState } from 'react'

import { FiltersContext } from '../../context/FiltersContext'

const Search = () => {
  const [search, setSearch] = useState('')

  const {filters, setFilters} = useContext(FiltersContext)
  
  
  const handleClickSearch = () => {
    setFilters({...filters, searched:search})
  }

  const handleInputSearch = (evt) => {
    const productSearched = evt.target.value
    // setSearch(productSearched) for use with the button later
    setFilters({...filters, searched:productSearched})
  }

  return (
    <div className='flex items-center'>
      <input type="search" className='w-[180px] h-8 rounded-lg text-base text-black p-3' onChange={handleInputSearch} />
      <button onClick={handleClickSearch}> <MdSearch /> </button>
    </div>
  )
}
export default Search
