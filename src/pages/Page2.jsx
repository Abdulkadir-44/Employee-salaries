import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Page2 = () => {
    const [move,setMove]=useState(false);

    const handleMouseEnter=()=>{
        setMove(!move)
    }
  return (
    <div className='page2-wrapper'>
        <div className='header'>
            <h2>Yapılacak zam miktarları</h2>
        </div>
        <div className='page2-Navlink'>
            <NavLink className="percentages" to="page-3">%0</NavLink>
            <NavLink onMouseEnter={handleMouseEnter} className={`percentages ${move?'move':''}`}>%100</NavLink>
          
        </div>
    </div>
  )
}

export default Page2