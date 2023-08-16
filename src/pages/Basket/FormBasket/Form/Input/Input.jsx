import React from 'react';

export const Input = ({ field, ...props }) => {
    return (
     <>
         <label htmlFor={field.name}>{props.label}</label>
         <input
             {...field}
             {...props}
         />
     </>
    )
}
