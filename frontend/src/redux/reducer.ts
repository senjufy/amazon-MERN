import {ADD_CART, ADD_ITEM, ADD_SEARCH_ITEM} from "./action"
import {items, cartItems, searchItems} from "./state"

export let reducer = (state = items, action : any) => {
    let newItems;
    switch(action.type) {
        case ADD_ITEM:
            newItems = [...state]
            newItems.push(action.payload)
            return newItems         
    }
    return state
}

export let cartReducer = (state = cartItems, action : any) => {
    let cartItem;
    switch(action.type) {
        case ADD_CART: 
        cartItem = [...state]
        cartItem.push(action.payload)
        return cartItem
    }
    return state
}

export let searchReducer = (state = searchItems, action : any) => {
    let searchItem;
    switch (action.type) {
        case ADD_SEARCH_ITEM:
            searchItem = [...state]
            searchItem.push(action.payload)
            return searchItem
    }
    return state
}