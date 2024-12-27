import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./pages/Wrapper.jsx";
import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SaveProductPage from "./pages/SaveProductPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { isTokenStored, protectAuthRoutes } from "./utils/auth";

const sharedData = () => ({
  token: isTokenStored(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    id: "wrapperComponent",
    loader: sharedData,
    errorElement: <NotFoundPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/artikli", element: <Products /> },
      {
        path: "/artikli/novi-artikal",
        element: <SaveProductPage />,
        loader: protectAuthRoutes,
      },
      { path: "/artikli/:id", element: <ProductPage /> },
      {
        path: "/artikli/:id/promijeni",
        element: <EditProductPage />,
        loader: protectAuthRoutes,
      },
      { path: "/prijava", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
