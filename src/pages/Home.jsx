import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import Button from '../components/Button'
import CardList from '../components/card/CardList'
import productData from '../data/ProductData'
import style from '../assets/style/responsive'



function Home() {
  TabTitle("Artify | Home")
  return (
    <div>
      <section>
        <h1>Hero Section</h1>
      </section>
      <section>
        <h1 className={`${style.responsiveTitle} text-center `}>What You Can Do</h1>
        <div className='flex flex-col sm:flex-col lg:flex-row gap-3  md:align-center'>
          <div className=' lg:w-[50%] text-justify h-full mt-[50px] '>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur nostrum deserunt ut libero ducimus delectus ex magni odit, autem officia, eius quidem, dolor nihil architecto beatae pariatur suscipit quod illo iusto? Corrupti voluptates ea quae in temporibus officiis reiciendis?</p>
          </div>
          <div className='lg:w-[50%]'>
            <img src="src\assets\img\sweet_dreams.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <h1 className={`${style.responsiveTitle} mb-6 text-center `}>Popular Product</h1>
        <div>
          <CardList itemList={productData} />
        </div>
        <div className='flex justify-center'>
          <Button customeClass="w-[100px] mx-auto m-7 mx-auto" buttonName={"See More"} />
        </div>
      </section>

    </div >
  )
}

export default Home