import {createBrowserRouter} from "react-router-dom";
import {NavMenu} from "./components/NavMenu/NavMenu";
import {Basket} from "./pages/Basket/Basket";
import {Favorites} from "./pages/Favorites/Favorites";
import {Main} from "./pages/Main/Main";
import React from "react";


export const router = createBrowserRouter([
    {
        path: "/nut-store/",
        element: <NavMenu/>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                index: "/nut-store/",
                element: <Main/>,

            },
            {
                path: "/nut-store/basket",
                element: <Basket/>,

            },
            {
                path: "/nut-store/favorites",
                element: <Favorites/>,

            },
        ]
    },
])