import React from "react"
import "./Button.scss"
import PropTypes from "prop-types";

export function Button (props) {

        return (
            <button className={"button"} style={{backgroundColor: props.backgroundColor}} onClick={(ev) => {
                ev.preventDefault()
                props.ButtonClick()
            }}>{props.text}</button>
        )

}

Button.propTypes = {
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
    ButtonClick: PropTypes.func,
}
Button.defaultProps = {
    backgroundColor: "white",
    text: "ok",
}