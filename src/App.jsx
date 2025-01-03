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
import ContextProvider from "./store/context-store.jsx";

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
      { path: "/products", element: <Products /> },
      {
        path: "/products/add",
        element: <SaveProductPage />,
        loader: protectAuthRoutes,
      },
      { path: "/products/:id", element: <ProductPage /> },
      {
        path: "/products/:id/update",
        element: <EditProductPage />,
        loader: protectAuthRoutes,
      },
      { path: "/login", element: <LoginPage /> },
    ],
  },
]);

function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
