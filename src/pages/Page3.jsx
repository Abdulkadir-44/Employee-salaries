import React from 'react'
import { NavLink } from 'react-router-dom'

const Page3 = () => {
    return (
        <div>
            <div className='header'>
                <h4>Kesinlikle bizde öyle tahmin ediyorduk !</h4>
            </div>
            <div className='text'>
                <p>Çalışanlarımızla iletişim halinde olmaktan çok mutluyuz bizlere bu konuda yardım ettiğiniz için siz çalışanlarımıza minnettarız 😊</p>
            </div>
            <div className='Navlink'>
                <NavLink to="/" className="button">Çıkış</NavLink>
            </div>

        </div>
    )
}

export default Page3