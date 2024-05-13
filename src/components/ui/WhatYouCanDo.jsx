import React from 'react'
import style from '../../assets/style/responsive'

function WhatYouCanDo() {
    return (
        <>
            <h1 className={`${style.responsiveTitle} text-center lg:mb-10 mb-8`}>What You Can Do</h1>
            <div className='flex flex-col sm:flex-col lg:flex-row sm:gap-5  md:align-center sm:min-h-[600px]:'>
                <div className=' lg:w-[50%] text-justify h-full '>
                    <p className={`${style.responsiveContent} text-justify`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consequatur nostrum deserunt ut libero ducimus delectus ex magni odit, autem officia, eius quidem, dolor nihil architecto beatae pariatur suscipit quod illo iusto? Corrupti voluptates ea quae in temporibus officiis reiciendis?</p>
                </div>
                <div className='lg:w-[50%] h-[50vh] sm:min-h-[50vh] rounded-2xl'>
                    <img className='w-full h-full object-cover rounded-lg' src="src\assets\img\arts\handmade_5.jpg" />
                </div>
            </div >
        </>
    )
}

export default WhatYouCanDo