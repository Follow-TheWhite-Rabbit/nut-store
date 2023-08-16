import React from 'react';

import "./MenuFavorites.scss"
import {useDispatch} from "react-redux";

export function MenuFavorites (props) {

    const dispatch = useDispatch()

    return (
        <div className="list__items" key={props.nut.article}>
            <img className="list__items__img" src={props.nut.url} alt=""/>
            <h3 className="list__items__title">{props.nut.name}</h3>
            <p className="list__items__text">Ціна <strong>{props.nut.price * props.nut.quantity}</strong> грн</p>
            <p className="list__items__del" onClick={() => {

                dispatch({type: 'OPEN_FAVORITES_MODAL', payload: { productId: props.nut.article }})

            }}>X</p>
        </div>
    )
}