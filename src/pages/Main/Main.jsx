import React, {useEffect} from 'react';
import {Header} from "../../components/Header/Header";
import {CardList} from "../../components/CardList/CardList";
import "./Main.scss"
import {useSelector} from "react-redux";

export function Main () {

    const favorites = useSelector(state => state.favorites)
    const basket = useSelector(state => state.basket)

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [basket, favorites])


    return (
        <div className="Main">

            <Header basket={basket} favorites={favorites}/>

            <CardList favList={favorites}/>

        </div>
    )
}