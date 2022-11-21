import './App.scss';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from './components/Layout/Layout.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
])

function App() {
  return (
    <>
      <RouterProvider router = { router } />
    </>
  );
}

export default App;
