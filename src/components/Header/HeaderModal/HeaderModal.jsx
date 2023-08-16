import React from 'react';
import "./HeaderModal.scss"
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";

export function HeaderModal (props) {

        const dispatch = useDispatch()


        return (
            <div className="Navbar-item">
                <img className="Navbar-item__img" src={props.item.url} alt=""/>
                <div>
                <h3 className="Navbar-item__title">{props.item.name}</h3>
                <p className="Navbar-item__text"><strong>{props.item.price}</strong> грн</p>
                </div>
                {props.basket &&
                    <p><strong>{props.item.quantity}</strong> шт.</p>
                }
                <p className="Navbar-item__del" onClick={() => {

                    if (props.favorites) {
                        dispatch({type: 'OPEN_FAVORITES_MODAL', payload: { productId: props.item.article }})
                    }
                    if (props.basket) {
                        dispatch({type: 'OPEN_DELETE_BASKET_MODAL', payload: { productId: props.item.article }})
                    }

                }}>X</p>
            </div>
        )


}
HeaderModal.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    item: PropTypes.object,
    quantity: PropTypes.number,
}
HeaderModal.defaultProps = {
    name: "nut",
    url: "./img/Peanut.jpg",
    price: 0,
}
