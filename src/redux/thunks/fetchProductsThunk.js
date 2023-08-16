

export function fetchProducts () {
    return (dispatch) => {
        dispatch({type: 'GET_PRODUCTS_REQUEST'})
        fetch(`./data.json`).then(r => r.json())
            .then(data => dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: { products: data }}))
    }
}