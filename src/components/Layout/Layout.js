import './Layout.scss';
import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';
import Sidebar from '../Sidebar/Sidebar.js';


const Layout = () => {
  return (
      <div className='page'>
        <div class="main-nav">
          <Navbar />
          <Home />
          <Experience />
          <Projects />
          <Contact />
          <Sidebar />
        </div>
      </div>
  )
}

export default Layout