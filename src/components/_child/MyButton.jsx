import React from 'react'

const MyButton = (props) => {
  return (
    <button {...props} className=' py-2 px-3 bg-[#00AFD7] rounded-lg font-medium text-base text-white'>{props.children}</button>
  )
}

export default MyButton