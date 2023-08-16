import React from 'react';

import "./MenuBasket.scss"
import {useDispatch} from "react-redux";

export function MenuBasket (props) {



    const dispatch = useDispatch()

    return (
        <div className="list__items" key={props.nut.article}>
            <img className="list__items__img" src={props.nut.url} alt=""/>
            <h3 className="list__items__title">{props.nut.name}</h3>
            <p><strong>{props.nut.quantity}</strong> шт.</p>
            <p className="list__items__text">Вартість <strong>{props.nut.price * props.nut.quantity}</strong> грн</p>
            <p className="list__items__del" onClick={() => {

                dispatch({type: 'OPEN_DELETE_BASKET_MODAL', payload: { productId: props.nut.article }})

            }}>X</p>
        </div>
    )
}