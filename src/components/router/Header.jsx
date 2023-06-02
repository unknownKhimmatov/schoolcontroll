import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'



// components
import Home from '../home/Home'
import Events from '../controller/Events'
import News from '../controller/News'
import Contact from '../controller/Contac'
import Admin from '../admin/Admin'

import Hodimlar from '../admin/Hodimlar'
import Puplis from '../admin/Puplis'
import Teacher from '../admin/Teacher'

// login
import AdminLog from '../log/AdminLog'
import DavomatLog from '../log/DavomatLog'

// css 
import "../css/HeaderFooter.css"

export default function Header() {


  const [showAdmin, setShowAdmin] = useState(false)
  const [showDavomat, setShowDavomat] = useState(false)

  const HandlerAdmin = () => {
    setShowAdmin(!showAdmin)
    setShowDavomat(false)
  }
  const HandlerDavomat = () => {
    setShowDavomat(!showDavomat)
    setShowAdmin(false)

  }


  const [navSize, setnavSize] = useState("100px");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 200 ? setnavColor("#000000d2") : setnavColor("transparent");
    window.scrollY > 200 ? setnavSize("100px") : setnavSize("120px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <header>
        <nav
          style={{
            backgroundColor: navColor,
            height: navSize,
            transition: "all 1s"
          }}
        >
          <ul>
            <h3 id='logo'>
              Up English <sup>with AI</sup>
            </h3>
            <Link to='/*'>
              <li>Asosiy</li>
            </Link>
          </ul>
          <ul>
            <button onClick={HandlerAdmin} className='small-button' >Kirish</button>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/*' element={<Home />} ></Route>
        <Route path='/Events' element={<Events />} ></Route>
        <Route path='/News' element={<News />} ></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Admin007maktabMain' element={<Admin />} ></Route>
        <Route path='/Hodimlar' element={<Hodimlar />} ></Route>
        <Route path='/Puplis' element={<Puplis />} ></Route>
        <Route path='/Teacher' elemen={<Teacher />} ></Route>
      </Routes>

      <AdminLog showAdmin={showAdmin} setshowAdmin={setShowAdmin} />
      <DavomatLog showDavomat={showDavomat} setShowDavomat={setShowDavomat} />
    </>
  )
}
