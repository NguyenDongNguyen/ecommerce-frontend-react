import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import OrderPage from "./pages/OrderPage/OrderPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";

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
                // {
                //     path: "book/:slug",
                //     element: <BookPage />,
                // },
                {
                    path: "products",
                    element: <ProductsPage />,
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
