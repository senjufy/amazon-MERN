export const ADD_ITEM = 'ADD_ITEM'
export const ADD_CART = "ADD_CART"
export const ADD_SEARCH_ITEM = "ADD_SEARCH_ITEM"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const EMPTY_CART = "EMPTY_CART"

export function addItem(item : any) {
    return {
        type: ADD_ITEM,
        payload: item,
    }
}

export function addCart(item : any) {
    return {
        type: ADD_CART,
        payload : item,
    } 
        
}

export function addSearchItem(item : any) {
    return {
        type: ADD_SEARCH_ITEM,
        payload : item,
    }
}

export function removeCartItem(itemName : any) {
    return {
        type: REMOVE_CART_ITEM,
        payload: itemName
    }
}

export function emptyCart() {
    return {
        type: EMPTY_CART,
    }
}
