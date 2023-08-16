import React, {useEffect} from 'react';
import "./Favorites.scss"
import {MenuFavorites} from "./MenuFavorites/MenuFavorites";
import {useSelector} from "react-redux";


export function Favorites () {


    const favorites = useSelector(state => state.favorites)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <section className="favorites">
            <h2 className="favorites__title">Favorites</h2>
            <div className="favorites__list">
                {favorites.map((nut) => (
                    <MenuFavorites key = {nut.article} nut = {nut} />
                ))}
            </div>
        </section>
    )
}

