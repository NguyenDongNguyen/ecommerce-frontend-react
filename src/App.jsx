import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import TypeProductPage from "./pages/TypeProductPage/TypeProductPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const Layout = () => {
    return (
        <div className="layout-app">
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFoundPage />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: "order",
                    element: <OrderPage />,
                },
                {
                    path: "products",
                    element: <ProductsPage />,
                },
                {
                    path: ":type",
                    element: <TypeProductPage />,
                },
                {
                    path: "sign-in",
                    element: <SignInPage />,
                },
                {
                    path: "sign-up",
                    element: <SignUpPage />,
                },
                {
                    path: "product-details",
                    element: <ProductDetailPage />,
                },
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
