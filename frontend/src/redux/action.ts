export const ADD_ITEM = 'ADD_ITEM'
export const ADD_CART = "ADD_CART"
export const ADD_SEARCH_ITEM = "ADD_SEARCH_ITEM"

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
