import React from 'react'
import "./Modal.scss"
import PropTypes from "prop-types";


export function Modal (props) {


    return (
        <div className="modal" onClick={(ev) => {
            ev.preventDefault()
            props.closeButton()
        }}>
            <div className="modal__content" onClick={(ev) => {
                ev.preventDefault()
                ev.stopPropagation()
            }}>
                <div className="modal__content__title">
                <h1 className="modal__content__title__text">{props.header}</h1>
                <span className="modal__content__title__close" onClick={(ev) => {
                    ev.preventDefault()
                    props.closeButton()
                }}>X</span>
                </div>
                <p className="modal__content__text">{props.text}</p>
                <div className="modal__button">
                    {props.actions}
                </div>
            </div>
        </div>
    )

}
Modal.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string,
    actions: PropTypes.object,
    closeButton: PropTypes.func,
}
Modal.defaultProps = {
    header: "Ви впевнені, що хочете додати цей товар у свій кошик?",
    text: "Щоб переглянути кошик, натисніть на його іконку, в шапці сайту.",
}
