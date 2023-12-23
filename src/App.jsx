import React from "react"
import {Routes,Route} from 'react-router-dom'
import HomeLayout from "./pages/HomeLayout"
import Entry from "./pages/Entry"
import Page2 from "./pages/Page2"
import Page3 from "./pages/Page3"

function App() {


  return (
    <>
       <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index={true} element={<Entry/>}/>
          <Route path="page-2" element={<HomeLayout/>}>
            <Route index={true} element={<Page2/>}/>
            <Route path="page-3" element={<Page3/>}></Route>
          </Route>
        </Route>
      </Routes> 
      
    </>
  )
}

export default App
