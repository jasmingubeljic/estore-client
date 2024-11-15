import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Wrapper from './pages/Wrapper'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductPage /> },
      {path: '/login', element: <LoginPage />},
    ]
  },
  
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
