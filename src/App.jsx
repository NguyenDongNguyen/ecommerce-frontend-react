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
import { jwtDecode } from "jwt-decode";
import { isJsonString } from "./ultis";
import * as UserService from "./services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./redux/slicers/userSlice";

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
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    // lấy lại token trong local storage khi reload trang
    useEffect(() => {
        const { storageData, decoded } = handleDecoded();
        console.log("🚀 ~ useEffect ~ decoded:", decoded);
        if (decoded?.id) {
            handleGetDetailsUser(decoded?.id, storageData);
        }
    }, []);

    const handleDecoded = () => {
        let storageData = user?.access_token || localStorage.getItem("access_token");
        let decoded = {};
        if (storageData && isJsonString(storageData) && !user?.access_token) {
            storageData = JSON.parse(storageData);
            decoded = jwtDecode(storageData);
        }
        return { decoded, storageData };
    };

    // refresh token bị hết hạn ở trong local storage
    UserService.axiosJWT.interceptors.request.use(
        async (config) => {
            // Do something before request is sent
            const currentTime = new Date();
            const { decoded } = handleDecoded();
            // let storageRefreshToken = localStorage.getItem("refresh_token");
            // const refreshToken = JSON.parse(storageRefreshToken);
            // const decodedRefreshToken = jwt_decode(refreshToken);
            if (decoded?.exp < currentTime.getTime() / 1000) {
                const data = await UserService.refreshToken();
                config.headers["token"] = `Bearer ${data?.access_token}`;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        }
    );

    const handleGetDetailsUser = async (id, token) => {
        // let storageRefreshToken = localStorage.getItem("refresh_token");
        // const refreshToken = JSON.parse(storageRefreshToken);
        const res = await UserService.getDetailsUser(id, token);
        dispatch(
            updateUser({
                ...res?.data,
                access_token: token,
                // refreshToken: refreshToken,
            })
        );
    };

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
