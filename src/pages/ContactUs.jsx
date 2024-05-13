import React from 'react'
import { TabTitle } from '../utils/GeneralFunctions'
import style from '../assets/style/responsive'
import FormCompo from '../components/form/ContactUsForm'

function ContactUs() {
  TabTitle("Artify | Contact Us")
  return (
    <section className='min-h-[80vh] px-5'>
      <h1 className={`${style.responsiveTitle} text-center lg:mb-10 mb-8`}>What You Can Do</h1>
      <section className='flex flex-col sm:flex-col lg:flex-row sm:gap-5  md:align-center sm:min-h-[600px]:'>
        <div className=' lg:w-[50%] text-justify h-full '>
          <p className={`${style.responsiveContent} text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur nostrum deserunt ut libero ducimus delectus ex magni odit, autem officia, eius quidem, dolor nihil architecto beatae pariatur suscipit quod illo iusto? Corrupti voluptates ea quae in temporibus officiis reiciendis?</p>
        </div>
        <div className='lg:w-[50%] h-[50vh] sm:min-h-[50vh] rounded-2xl'>
          <img className='w-full h-full object-cover rounded-lg' src="src\assets\img\arts\handmade_5.jpg" />
        </div>
      </section>
      <section className='mt-20 w-full'>
        <div className='w-fit mx-auto'>
          <FormCompo />
        </div>
      </section>
    </section>
  )
}

export default ContactUs