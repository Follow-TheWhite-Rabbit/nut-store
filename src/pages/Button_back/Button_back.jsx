import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Button_back.scss"

export function ButtonBack () {
    const navigate = useNavigate();
    return (
        <button className="button-back" onClick={() => {navigate(-1)}}>Назад</button>
    )
}

