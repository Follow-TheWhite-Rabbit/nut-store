



export function removeProductFromFavoritesThunks () {
    return (dispatch, getState) => {

        const state = getState()
        const productId = state.modal.productId
        const favorites = state.favorites

        favorites.forEach(el => {
            if (el.article === productId) {

                dispatch({type: 'REMOVE_PRODUCT_FROM_FAVORITES_ACTION_TYPE', payload: { item: productId }})
            }
        })
        dispatch({type: 'CLOSED_FAVORITES_MODAL'})
    }
}