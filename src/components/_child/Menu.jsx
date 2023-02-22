import React from 'react'
import Link from 'next/link'

const Menu = ({open, arr}) => {

  // arr.map(item => {
  //   console.log(typeof(item.link),item.link)
  //   console.log(typeof(item.title),item.title)
  // })

  const style = open ? {display: "block"} : {display: "none"}
  return (
    <div className=' bg-slate-50 p-3 rounded-xl rounded-tl-none	absolute z-10' style={style}>
    <ul>
        {
          arr.map(item =>
            <li key={item.id} className=" h-4 py-4 flex items-center justify-left">
              <Link href="/" className='hover:underline text-black'>{item.title}</Link>
            </li>
          )
        }
    </ul>
  </div>
  )
}

export default Menu