import './Layout.scss';
import Navbar from '../Navbar/Navbar.js';
import Home from '../Home/Home.js';
import Experience from '../Experience/Experience.js';
import Projects from '../Projects/Projects.js';
import Contact from '../Contact/Contact.js';

const Layout = () => {
  return (
    // <div className='App'>
    //   <Navbar />
      <div className='page'>
        {/* <Navbar /> */}
        <Home />
        <Experience />
        <Projects />
        <Contact />
      </div>
    // </div>
  )
}

export default Layout