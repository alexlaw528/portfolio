import './Layout.scss';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Sidebar from '../Sidebar/Sidebar.js';


const Layout = () => {

  // const [edState, setEdState] = useState(false);

  return (
      <div className='page'>
        <div class="main-nav">
          <Navbar 
            // showEdState = {() => setEdState(true)}
            />
          <Home />
          <Experience 
            // edState = {edState}
            // showEdState = {() => setEdState(true)}
            // removeEdState = {() => setEdState(false)}/>
          />
          <Projects />
          <Contact />
          <Sidebar />
        </div>
      </div>
  )
}

export default Layout