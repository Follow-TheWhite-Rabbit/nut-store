import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import "./FormBasket.scss"
import {MessageForm} from "./Form/MessageForm";
import {useDispatch, useSelector} from "react-redux";



export const FormBasket = () => {

    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch()

    return (
            <Formik
                initialValues={{ firstName: '', lastName: '', age: '', address: '', phone: '' }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    age: Yup.string()
                        .max(10, 'Must be 20 characters or less')
                        .required('Required'),
                    address: Yup.string()
                        .max(50, 'Must be 20 characters or less')
                        .required('Required'),
                    phone: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .min(10, "Must be at least 10 characters.")
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting, resetForm}) => {

                    if (basket.length > 0) {
                    setTimeout(() => {
                        console.log(values, basket)
                        dispatch({type: 'REMOVE_ALL_PRODUCT_FROM_BASKET_ACTION_TYPE'})
                        resetForm(values)
                        setSubmitting(false);
                    }, 400)
                    }
                    setSubmitting(true)
                }}
                component={MessageForm}
            />
    )
}