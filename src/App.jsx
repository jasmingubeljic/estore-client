import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./pages/Wrapper.jsx";
import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SaveProductPage from "./pages/SaveProductPage.jsx";
import EditProductPage from "./pages/EditProductPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { readToken, isTokenStored } from "./utils/auth";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper />,
      id: 'wrapperComponent',
      loader: () => isTokenStored(),
      errorElement: <NotFoundPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/artikli", element: <Products /> },
        { path: "/artikli/novi-artikal", element: <SaveProductPage /> },
        { path: "/artikli/:id", element: <ProductPage /> },
        { path: "/artikli/:id/promijeni", element: <EditProductPage /> },
        { path: "/prijava", element: <LoginPage /> },
      ],
    },
  ],
  // {
  //   future: {
  //     v7_fetcherPersist: true,
  //     v7_normalizeFormMethod: true,
  //     v7_partialHydration: true,
  //     v7_relativeSplatPath: true,
  //     v7_skipActionErrorRevalidation: true,
  //     v7_startTransition: true,
  //   },
  // }
);

function App() {
  return (
    <RouterProvider router={router} /*future={{ v7_startTransition: true }}*/ />
  );
}

export default App;
