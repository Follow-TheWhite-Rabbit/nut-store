import React, {useState} from "react";
import {Basket} from "../SVG/basket";
import {Star} from "../SVG/star";
import "./Header.scss"
import {Button} from "../Button/Button";
import {HeaderModal} from "./HeaderModal/HeaderModal";
import PropTypes from "prop-types";

export function Header (props) {

    const [basketItem, setBasketItem] = useState(false)
    const [favoritesItem, setFavoritesItem] = useState(false)


        return (
            <header className="header">
                <h2 className="header__title">Магазин горіхів</h2>
                <div className="header__items">
                    <figure className="header__items__fig">
                        <Basket size = "40px" clickBasket = {() => {
                            setBasketItem(true)
                            setFavoritesItem(false)
                        }}/>
                        <span className="header__items__counter">{props.basket.length}</span>
                    </figure>
                    <figure className="header__items__fig">
                        <Star color = "orange" size = "40px" clickStar = {() => {
                            setFavoritesItem(true)
                            setBasketItem(false)
                        }}/>
                        <span className="header__items__counter">{props.favorites.length}</span>
                    </figure>
                </div>
                {basketItem &&
                    <div className="Navbar-modal">
                        <p className="Navbar-modal__button" onClick={() => setBasketItem(false)}>X</p>
                        {props.basket.length > 0 ?
                            props.basket.map((item) => (
                            <HeaderModal key={item.article} item={item} basket={props.basket}/>
                            )) : (<p className="Navbar-modal__text">Товарів немає</p>)}
                        <Button backgroundColor = "#777777"
                                text = "Cancel"
                                ButtonClick = {() => setBasketItem(false)}/>
                    </div>
                }
                {favoritesItem &&
                    <div className="Navbar-modal">
                        <p className="Navbar-modal__button" onClick={() => setFavoritesItem(false)}>X</p>
                        {props.favorites.length > 0 ?
                            props.favorites.map((item) => (
                                <HeaderModal key={item.article} item={item} favorites={props.favorites}/>
                            )) : (<p className="Navbar-modal__text">Немає обраних</p>)}
                        <Button backgroundColor = "#777777"
                                text = "Cancel"
                                ButtonClick = {() => setFavoritesItem(false)}/>
                    </div>
                }
            </header>
        )

}
Header.propTypes = {
    basket: PropTypes.array,
    favorites: PropTypes.array,
}
Header.defaultProps = {
    basket: [],
    favorites: [],
}