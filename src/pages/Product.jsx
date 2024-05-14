import React, { useEffect, useState } from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData'
import FollowingList from '../components/card/FollowingList';
import DefaultPagination from '../components/util/DefaulePagination';
import Filter from '../components/filter/Filter';
import { Input } from '@material-tailwind/react';
import SearchData from '../components/filter/SearchData';


function Product() {
  TabTitle("Artify | Art");
  const [filteredData, setFiltereData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  useEffect(() => {
    if (selectedCategory !== "All") {
      // @ts-ignore
      setFiltereData(productData.map(data => {
        if (data.category === selectedCategory) return data;
      }).filter(data => data !== undefined))
    }
    if (selectedCategory === "All") {
      // @ts-ignore
      setFiltereData(productData);
    }
  }, [selectedCategory])
  return (
    <>
      <SearchData />
      <Filter selectedCategory={selectedCategory} setSelectedCategory={val => setSelectedCategory(val)} />
      {
        filteredData.length > 0 ? <CardList itemList={filteredData} /> : <h1>No Data Available</h1>
      }
      <div className='flex justify-center mt-4'>
        <DefaultPagination />
      </div>
      <FollowingList itemList={productData.slice(0, 12)} sectionTitle={"Recommended Product"} />
    </>
  )
}

export default Product