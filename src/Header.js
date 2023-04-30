import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='navigacia'>
      

<Link  className='link' to="/">home</Link>
<Link className='link'  to="/productebi">product</Link>
<Link className='link'  to="/about">about</Link>
<Link className='link'  to="/contact">contact</Link>






    </div>
  )
}
