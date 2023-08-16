import React, {useEffect} from 'react'
import {Card} from "../Card/Card";
import "./CardList.scss"
import PropTypes from "prop-types";
import {useSelector, useDispatch} from "react-redux";
import {fetchProducts} from "../../redux/thunks/fetchProductsThunk";


export function CardList (props) {


    const products = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

        return (
            <section className="Product">
            <h2 className="Product__title">Nuts</h2>
                {products.isLoading &&
                    <h2 className="Product__title">Loading...</h2>
                }
             <div className="Product__list">
                 {products.products.map((nut) => (
                     <Card key = {nut.article} nut = {nut} basket={props.basket} favList={props.favList} modal={products}/>
                     ))}
             </div>
            </section>
        )
}

CardList.propTypes = {
    basket: PropTypes.func,
    favorites: PropTypes.func,
    del: PropTypes.func,
}