import { combineReducers } from "redux";
import {productsReducer} from "./productsReducer";
import {favoritesReducer} from "./favoritesReducer";
import {basketReducer} from "./basketReducer";
import {modalReducer} from "./modalReduser";



export const rootReducer = combineReducers({
    products: productsReducer,
    favorites: favoritesReducer,
    basket: basketReducer,
    modal: modalReducer
})