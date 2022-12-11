import './App.scss';
// import { 
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from './components/Layout/Layout.js';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//   },
// ])

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>} />
      </Routes>
    </Router>
  );
}

export default App;
