// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import CardList from '../components/card/CardList'
import artistData from '../data/ArtistData'
import FollowingList from '../components/card/FollowingList'
import Filter from '../components/filter/Filter'
import DefaultPagination from '../components/util/DefaulePagination'
import SearchData from '../components/filter/SearchData'


function Artist() {
  TabTitle("Artify | Artist")
  const [filteredData, setFiltereData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    if (selectedCategory !== "All") {
      setFiltereData(artistData.map(data => {
        if (data.category === selectedCategory) return data;
      }).filter(data => data !== undefined))
    }
    if (selectedCategory === "All") {
      setFiltereData(artistData);
    }
    console.log("Filtered Data", filteredData);
  }, [selectedCategory])

  return (
    <div>
      <div>
        <SearchData />
      </div>
      <Filter selectedCategory={selectedCategory} setSelectedCategory={(value) => setSelectedCategory(value)} />
      {filteredData.length > 0 && <CardList itemList={filteredData} />}
      <div className='flex justify-center mt-4'>
        <DefaultPagination />
      </div>
      <FollowingList itemList={artistData} sectionTitle={"New Artists"} />
    </div>
  )
}

export default Artist