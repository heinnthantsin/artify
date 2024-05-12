import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import Button from '../components/Button'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData'
import style from '../assets/style/responsive'
import FollowingList from '../components/card/FollowingList'
import WhatYouCanDo from '../components/ui/WhatYouCanDo'



function Home() {
  TabTitle("Artify | Home")
  return (
    <div>
      <section>
        <h1>Hero Section</h1>
      </section>
      <section className='min-h-[80vh] py-5'>
        <WhatYouCanDo />
      </section>
      <section className='h-[80vh] my-10'>
        <h1 className={`${style.responsiveTitle} mb-10 text-center `}>Popular Product</h1>
        <div>
          <CardList itemList={productData} />
        </div>
        <div className='flex justify-center'>
          <Button customeClass="w-[200px] mx-auto m-7 mx-auto" buttonName={"See More"} />
        </div>
      </section>

    </div >
  )
}

export default Home