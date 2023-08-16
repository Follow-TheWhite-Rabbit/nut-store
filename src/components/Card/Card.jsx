
import React, {useEffect, useState} from 'react'
import "./Card.scss"
import {Button} from "../Button/Button";
import {Star} from "../SVG/star";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";





export function Card (props) {

    const [favoritesColor, setFavoritesColor] = useState("black")


    useEffect(() => {
        setFavoritesColor("black")
        props.favList.forEach(el => {
                    if (el.article === props.nut.article) {
                        setFavoritesColor("orange")
                    }
                })
    }, [props])


    const dispatch = useDispatch()


        return (
            <button className="Link" onClick={event => event.preventDefault()}>
                <img className="Link__img" src={props.nut.url} alt=""/>
                <h3 className="Link__title">{props.nut.name}</h3>
                <p className="Link__text"><strong>{props.nut.price}</strong> грн</p>
                <Star color = {favoritesColor} size = "20px" clickStar = {
                    () => {
                        dispatch({type: 'TOGGLE_PRODUCT_TO_FAVORITES_ACTION_TYPE', payload: { item: props.nut }})
                        favoritesColor === "black" ? setFavoritesColor("orange") : setFavoritesColor("black")

                    }
                }/>
                <Button backgroundColor = "black" text = "Купить" ButtonClick = {() => dispatch({type: 'OPEN_BASKET_MODAL', payload: { productId: props.nut.article }})}/>

            </button>
        )
}
Card.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    price: PropTypes.number,
    article: PropTypes.number,
    nut: PropTypes.object,
    basket: PropTypes.func,
    favorites: PropTypes.func,
    del: PropTypes.func,
}
Card.defaultProps = {
    name: "nut",
    picture: "./img/Peanut.jpg",
    price: 0,
    article: 1,
}