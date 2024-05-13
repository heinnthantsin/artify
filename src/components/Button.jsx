import React from 'react'

function Button({ customeClass, buttonName }) {
  return (
    <button className={`bg-[#008080] text-white rounded p-1.5 md:p- font-bold hover:bg-transparent hover:border-2 border-[#008080] hover:text-[#008080] transition duration-500 ${customeClass}`}>{buttonName}</button>
  )
}

export default Button