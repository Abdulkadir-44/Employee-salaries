import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
function HomeLayout() {
    return (
        <>
            <div className='container'>
                <div className='popup'>
                    <Outlet />
                </div>
            </div>

        </>
    )
}

export default HomeLayout