import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./pages/Wrapper";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import SaveProductPage from "./pages/SaveProductPage";
import EditProductPage from "./pages/EditProductPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper />,
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
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);

function App() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
