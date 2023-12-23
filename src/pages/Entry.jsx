import React from 'react'
import { NavLink } from 'react-router-dom'
const Entry = () => {
  return (
    <div className='entry-wrapper'>
       <div className='header'>
        <h1>Çalışan Zammı</h1>
       </div>
       <div className='text'>
       <p>Bir yılın daha sonuna gelmiş bulunmaktayız,her yıl olduğu gibi bu yılda çalışanlarımıza zam yapmak istiyoruz bu konda siz çalışanlarımızdan da yardım almak istedik,Bir çalışanımız olarak lütfen çalışanlarımıza ne kadar zam yapmamız gerektiğini seçeneklerden birini işaretleyerek belirtin,bir sonraki sayfa için İleri butonuna basınız...</p>
       <div className='Navlink'>
            <NavLink className="button" to='/page-2'> İleri </NavLink>
       </div>
       </div>
    </div>
  )
}

export default Entry