import React, {useEffect} from 'react';
import "./Basket.scss"
import {MenuBasket} from "./MenuBasket/MenuBasket";
import {useSelector} from "react-redux";
import {FormBasket} from "./FormBasket/FormBasket";

export function Basket () {


    const basket = useSelector(state => state.basket)

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    return (
        <section className="basket">
            <h2 className="basket__title">Basket</h2>
            <div className="basket__list">
            <div className="basket__list__products">
                {basket.map((nut) => (
                    <MenuBasket key = {nut.article} nut = {nut} />
                ))}
            </div>
                <div className="basket__list__form">
                    <h4 className="basket__list__title">Заповніть форму для оформлення замовлення</h4>
                    <FormBasket/>
                </div>
            </div>
        </section>
    )
}

