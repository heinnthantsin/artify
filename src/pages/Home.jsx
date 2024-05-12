import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import Button from '../components/Button'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData'
import style from '../assets/style/responsive'
import FollowingList from '../components/card/FollowingList'



function Home() {
  TabTitle("Artify | Home")
  return (
    <div>
      <section>
        <h1>Hero Section</h1>
      </section>
      <section className='p-5 h-[80vh] my-50'>
        <h1 className={`${style.responsiveTitle} text-center mb-10`}>What You Can Do</h1>
        <div className='flex flex-col sm:flex-col lg:flex-row gap-3  md:align-center'>
          <div className=' lg:w-[50%] text-justify h-full mt-[50px] '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur nostrum deserunt ut libero ducimus delectus ex magni odit, autem officia, eius quidem, dolor nihil architecto beatae pariatur suscipit quod illo iusto? Corrupti voluptates ea quae in temporibus officiis reiciendis?</p>
          </div>
          <div className='lg:w-[50%] h-[60vh] rounded-2xl'>
            <img className='w-full h-full object-cover rounded-lg' src="src\assets\img\arts\handmade_5.jpg" />
          </div>
        </div>
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