import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemDetailContainer from "../containers/ItemDetailContainer/itemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer/itemListContainer";
import CartContainer from "../containers/CartContainer/cartContainer";
import Checkout from "../components/Checkout/checkout";
import CartWidget from "../components/CartWidget";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <h1>No encontrado</h1>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:idProd",
                element: <ItemDetailContainer/>,
            },
            {
                path: "/cart",
                element: <CartContainer/>,
            },
            {
                path: "/CartWidget",
                element: <CartWidget />
            },
            {
                path: "/checkout",
                element: <Checkout/>
            }
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;