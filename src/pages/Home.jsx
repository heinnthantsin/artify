import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import Button from '../components/Button'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData'
import style from '../assets/style/responsive'
import WhatYouCanDo from '../components/ui/WhatYouCanDo'
import Hero from '../components/ui/Hero'



function Home() {
  TabTitle("Artify | Home")
  return (
    <div>
      <section className='min-h-[60vh] p-5'>
        <Hero />
      </section>
      <section className='min-h-[80vh] py-5 px-5 my-10'>
        <WhatYouCanDo />
      </section>
      <section className='min-h-[80vh] my-10 px-5'>
        <h1 className={`${style.responsiveTitle} lg:mb-10 mb-8 text-center `}>Popular Product</h1>
        <div>
          <CardList itemList={productData} />
        </div>
        <div className='flex justify-center'>
          <Button customeClass="w-[200px] mx-auto m-7" buttonName={"See More"} />
        </div>
      </section>

    </div >
  )
}

export default Home