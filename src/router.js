import {createBrowserRouter} from "react-router-dom";
import {NavMenu} from "./components/NavMenu/NavMenu";
import {Basket} from "./pages/Basket/Basket";
import {Favorites} from "./pages/Favorites/Favorites";
import {Main} from "./pages/Main/Main";
import React from "react";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavMenu/>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                index: "/",
                element: <Main/>,

            },
            {
                path: "/basket",
                element: <Basket/>,

            },
            {
                path: "/favorites",
                element: <Favorites/>,

            },
        ]
    },
])