

const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
export function favoritesReducer (state = favorites, action) {
    switch (action.type) {
        case 'ADD_PRODUCT_TO_FAVORITES_ACTION_TYPE':
            return [...state, action.payload.item]
        case 'REMOVE_PRODUCT_FROM_FAVORITES_ACTION_TYPE':
            return state.filter(el => el.article !== action.payload.item)
        case 'TOGGLE_PRODUCT_TO_FAVORITES_ACTION_TYPE':
             return state.includes(action.payload.item) ? state.filter(el => el.article !== action.payload.item.article) : [...state, action.payload.item]
        default:
            return state
    }
}