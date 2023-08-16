

const basket = JSON.parse(localStorage.getItem('basket')) || [];
export function basketReducer (state = basket, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_BASKET_ACTION_TYPE':
            return [...state, action.payload.item]
        case 'RE-ADD_ITEM_TO_CART_TYPE_OF_ACTION':
            return state.map((item) => {
                if (item.article === action.payload.productId) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        case 'REMOVE_PRODUCT_FROM_BASKET_ACTION_TYPE':
            return state.filter(el => el.article !== action.payload.item)
        case 'REMOVE_ALL_PRODUCT_FROM_BASKET_ACTION_TYPE':
            return []
        default:
            return state
    }
}