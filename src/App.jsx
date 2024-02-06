import React, { useEffect } from "react";
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
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

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
    // useEffect(() => {
    //     fetchApi()
    // }, [])
    // const fetchApi = async () => {
    //     const res = await axios.get(
    //         `${process.env.REACT_APP_API_URL}/product/get-all`
    //     );
    //     return res.data
    // }

    // const query = useQuery({ queryKey: ["todos"], queryFn: fetchApi });
    // console.log("query: ", query)

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
                    path: "product-details",
                    element: <ProductDetailPage />,
                },
            ],
        },
        {
            path: "sign-in",
            element: <SignInPage />,
        },
        {
            path: "sign-up",
            element: <SignUpPage />,
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
