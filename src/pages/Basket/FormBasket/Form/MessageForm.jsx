import React from 'react';
import {ErrorMessage, Field, Form} from "formik";
import {Input} from "./Input/Input";
import "./MessageForm.scss"

export const MessageForm = (props) => {
    return (
        <Form className="form">

            <Field name="firstName" type="text" label="Ваше ім'я" component={Input}/>
            <ErrorMessage name="firstName" />

            <Field name="lastName" type="text" label="Ваше прізвище" component={Input} />
            <ErrorMessage name="lastName" />

            <Field name="age" type="text" label="Ваш вік" component={Input} />
            <ErrorMessage name="age" />

            <Field name="address" type="text" label="Ваша адреса" component={Input} />
            <ErrorMessage name="address" />

            <Field name="phone" type="tel" label="Ваш номер телефону" component={Input} />
            <ErrorMessage name="phone" />

            <button className="form__button" type="submit" disabled={props.isSubmitting}>Checkout</button>
        </Form>
    )
}