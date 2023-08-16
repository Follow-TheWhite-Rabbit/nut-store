import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "./NavMenu.scss"
import {ButtonBack} from "../../pages/Button_back/Button_back";
import {Modal} from "../Modal/Modal";
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addProductToBasketThunk} from "../../redux/thunks/addProductToBasketThunk";
import {removeProductFromBasketThunk} from "../../redux/thunks/removeProductFromBaskerThunk";
import {removeProductFromFavoritesThunks} from "../../redux/thunks/removeProductFromFavoritesThunks";


export function NavMenu () {

    const isBasketModalOpen = useSelector(state => state.modal.isBasketModal)
    const isDelBasketModalOpen = useSelector(state => state.modal.isDelBasketModal)
    const isFavoritesModalOpen = useSelector(state => state.modal.isFavoritesModal)
    const dispatch = useDispatch()

    return (
        <>
        <menu className="menu">
            <Link className="menu__item" to="/nut-store/">Home</Link>
            <Link className="menu__item" to="basket">Basket</Link>
            <Link className="menu__item" to="favorites">Favorites</Link>
            <ButtonBack/>
        </menu>
            {isBasketModalOpen &&
                <Modal header = "Ви впевнені, що хочете додати цей товар у свій кошик?"
                       text = "Щоб переглянути кошик, натисніть на його іконку, в шапці сайту."
                       closeButton = {() => dispatch({type: 'CLOSE_BASKET_MODAL'})}
                       actions = {<>
                           <Button backgroundColor = "darkorange"
                                   text = "Ok"
                                   ButtonClick = {() => dispatch(addProductToBasketThunk())}/>
                           <Button backgroundColor = "darkorange"
                                   text = "Cancel"
                                   ButtonClick = {() => dispatch({type: 'CLOSE_BASKET_MODAL'})}/>
                       </>}
                />}
            {isDelBasketModalOpen &&
                <Modal header = "Ви впевнені, що хочете видалити цей товар?"
                        text = "Товар буде видаленно."
                        closeButton = {() => {
                        dispatch({type: 'CLOSED_DELETE_BASKET_MODAL'})
                    }}
                    actions = {<>
                        <Button backgroundColor = "darkorange"
                                text = "Ok"
                                ButtonClick = {() => dispatch(removeProductFromBasketThunk())}/>
                        <Button backgroundColor = "darkorange"
                                text = "Cancel"
                                ButtonClick = {() => {
                                    dispatch({type: 'CLOSED_DELETE_BASKET_MODAL'})
                                }}/>
                    </>}
                />}
            {isFavoritesModalOpen &&
                <Modal header = "Ви впевнені, що хочете видалити цей товар?"
                        text = "Товар буде видаленно."
                        closeButton = {() => {
                        dispatch({type: 'CLOSED_FAVORITES_MODAL'})
                    }}
                    actions = {<>
                        <Button backgroundColor = "darkorange"
                                text = "Ok"
                                ButtonClick = {() => {
                                    dispatch(removeProductFromFavoritesThunks())
                                }}/>
                        <Button backgroundColor = "darkorange"
                                text = "Cancel"
                                ButtonClick = {() => {
                                    dispatch({type: 'CLOSED_FAVORITES_MODAL'})
                                }}/>
                    </>}
                />}
        <Outlet/>
        </>
    )
}