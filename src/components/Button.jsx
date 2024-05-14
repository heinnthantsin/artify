import React from 'react'

function Button({ customeClass, buttonName }) {
  return (
<<<<<<< HEAD
    <button className={`bg-[#5c5e60] text-white rounded p-1.5 md:p- font-bold hover:bg-transparent hover:border-2 border-[#008080] hover:text-[#008080] transition duration-500 ${customeClass}`}>{buttonName}</button>
=======
    <button className={`bg-[#5c5e60] text-gray-300 rounded p-1.5 md:p-2 lg:px-4 font-semibold
    md:hover:scale-110 hover:bg-[#3c4d5d] transition duration-500 ${customeClass}`}>{buttonName}</button>
>>>>>>> babf03334382e0fc2a25c4255a27816c449273d5
  )
}

export default Button