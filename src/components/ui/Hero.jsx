import { Carousel } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Button from "../Button";
export default function CarouselCustomNavigation() {


    const slides = [
        {
            imageUrl: 'src/assets/img/arts/handmade_1.jpg',
            buttonContent: 'Expore Product...',
        },
        {
            imageUrl: 'src/assets/img/arts/handmade_3.jpg',
            buttonContent: 'Click Me 2',
        },
        {
            imageUrl: 'src/assets/img/arts/handmade_8.jpg',
            buttonContent: 'Click Me 3',
        },
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % slides.length;
            setActiveIndex(nextIndex);
        }, 3000);
        console.log(activeIndex)
        return () => clearInterval(interval);
    }, [activeIndex, slides.length]);

    return (
        // <Carousel
        //     className="rounded-xl"
        //     navigation={({ setActiveIndex, activeIndex, length }) => (
        //         <div className="absolute bottom-4 right-0 z-20 flex -translate-x-2/4 gap-2">
        //             {new Array(length).fill('').map((_, i) => (
        //                 <span
        //                     key={i}
        //                     className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
        //                         }`}
        //                     onClick={() => setActiveIndex(i)}
        //                 />
        //             ))}
        //         </div>
        //     )}
        //     activeIndex={activeIndex} // Pass the activeIndex to the Carousel component
        // >
        //     {slides.map((slide, index) => (
        //         <div key={index} className="relative h-auto overflow-y-hidden">
        //             <img src={slide.imageUrl} alt={`image ${index + 1}`} className="h-[80vh] w-full object-cover" />
        //             <Button
        //                 customeClass="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-4 py-2 rounded-md shadow-md"
        //                 buttonName={slide.buttonContent}
        //             />
        //         </div>
        //     ))}
        // </Carousel>
        <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 right-0 z-20 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill('').map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
            activeIndex={activeIndex} // Pass the activeIndex to the Carousel component
        >
            {slides.map((slide, index) => (
                <div key={index} className="relative h-auto overflow-y-hidden">
                    <img src={slide.imageUrl} alt={`image ${index + 1}`} className="h-[80vh] w-full object-cover" />
                    <Button
                        customeClass="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-4 py-2 rounded-md shadow-md"
                        buttonName={slide.buttonContent}
                    />
                </div>
            ))}
        </Carousel>
    );
}

