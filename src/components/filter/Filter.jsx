import React from "react";

function Filter({ selectedCategory, setSelectedCategory }) {
    return (
        <div className="w-full flex justify-center items-center lg:gap-4 md:gap-2 gap-1 flex-wrap">
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'All' ? 'bg-gray-600 text-white' : 'bg-[#f2f2f2] text-gray-900'}`} onClick={() => setSelectedCategory("All")}>All</button>
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'Ceramic' ? 'bg-gray-600 text-white' : 'bg-[#f2f2f2] text-gray-900'}`} onClick={() => setSelectedCategory("Ceramic")}>Ceremic</button>
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'Painting' ? 'bg-gray-600 text-white' : 'bg-[#f2f2f2] text-gray-900'}`} onClick={() => setSelectedCategory("Painting")}>Painting</button>
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'Digital Art' ? 'bg-gray-600 text-white' : 'bg-[hsl(0,0%,95%)] text-gray-900'}`} onClick={() => setSelectedCategory("Digital Art")}>Digital Art</button>
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'NFT' ? 'bg-gray-600 text-white' : 'bg-[#f2f2f2] text-gray-900'}`} onClick={() => setSelectedCategory("NFT")}>NFT</button>
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'Handcraft' ? 'bg-gray-600 text-white' : 'bg-[#f2f2f2] text-gray-900'}`} onClick={() => setSelectedCategory("Handcraft")}>Handcraft</button>
            <button className={`py-1 px-2 rounded-md ${selectedCategory === 'Photograph' ? 'bg-gray-600 text-white' : 'bg-[#f2f2f2] text-gray-900'}`} onClick={() => setSelectedCategory("Photograph")}>Photograph</button>
        </div >
    )
}

export default Filter
