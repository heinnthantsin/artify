import React from 'react'

function Button({ customeClass, buttonName }) {
  return (
    <button className={`bg-white rounded p-1.5 md:p-1 text-textColor font-bold hover:bg-transparent hover:border border-textColor ${customeClass}`}>{buttonName}</button>
  )
}

export default Button