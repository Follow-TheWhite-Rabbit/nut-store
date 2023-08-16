

export function modalReducer (state = {isBasketModal: false, isDelBasketModal: false, isFavoritesModal: false}, action) {
    switch (action.type) {
        case 'OPEN_BASKET_MODAL':
            return {...state, productId: action.payload.productId, isBasketModal: true}
        case 'CLOSE_BASKET_MODAL':
            return {...state, productId: null, isBasketModal: false}
        case 'OPEN_DELETE_BASKET_MODAL':
            return {...state, productId: action.payload.productId, isDelBasketModal: true}
        case 'CLOSED_DELETE_BASKET_MODAL':
            return {...state, productId: null, isDelBasketModal: false}
        case 'OPEN_FAVORITES_MODAL':
            return {...state, productId: action.payload.productId, isFavoritesModal: true}
        case 'CLOSED_FAVORITES_MODAL':
            return {...state, productId: null, isFavoritesModal: false}
        default:
            return state
    }
}