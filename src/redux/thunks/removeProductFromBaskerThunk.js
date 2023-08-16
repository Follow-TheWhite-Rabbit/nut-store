


export function removeProductFromBasketThunk () {
    return (dispatch, getState) => {

        const state = getState()
        const productId = state.modal.productId
        const basket = state.basket

        basket.forEach(el => {
            if (el.article === productId) {
                dispatch({type: 'REMOVE_PRODUCT_FROM_BASKET_ACTION_TYPE', payload: { item: productId }})
            }
        })
        dispatch({type: 'CLOSED_DELETE_BASKET_MODAL'})

    }
}