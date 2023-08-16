

export function productsReducer (state = {products: [], isLoading: false}, action) {
    switch (action.type) {
        case 'GET_PRODUCTS_REQUEST':
            return {...state, isLoading: true}
        case 'GET_PRODUCTS_SUCCESS':
            return {...state, products: action.payload.products, isLoading: false}
        case 'GET_PRODUCTS_ERROR':
            return {...state, isLoading: false}
        default:
            return state
    }
}