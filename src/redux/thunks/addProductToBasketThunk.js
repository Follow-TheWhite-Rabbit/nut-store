

export function addProductToBasketThunk () {
    return (dispatch, getState) => {

        const state = getState()
        const productId = state.modal.productId
        const basket = state.basket
        const product = state.products.products.find(product => product.article === productId)

        let repetition = false
        basket.forEach(el => {
            if (el.article === productId) {
                repetition = true
                dispatch({type: 'RE-ADD_ITEM_TO_CART_TYPE_OF_ACTION', payload: { productId }})
            }
        })
        if (!repetition) {
            dispatch({type: 'ADD_PRODUCT_TO_BASKET_ACTION_TYPE', payload: { item: product }})
        }
        dispatch({type: 'CLOSE_BASKET_MODAL'})
    }
}