import {ADD_CART, ADD_ITEM, ADD_SEARCH_ITEM, EMPTY_CART, REMOVE_CART_ITEM, EMPTY_SEARCH} from "./action"
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
    let cartItem : any;
    switch(action.type) {
        case ADD_CART: 
            cartItem = [...state]
            cartItem.push(action.payload)
            return cartItem
        case REMOVE_CART_ITEM: 
            cartItem = [...state]
            cartItem = cartItem.filter((product : any) => product.name != action.payload)
            return cartItem
        case EMPTY_CART: 
            cartItem = []
            return cartItem
    }
    return state
}

export let searchReducer = (state = searchItems, action : any) => {
    let searchItem : any;
    switch (action.type) {
        case ADD_SEARCH_ITEM:
            searchItem = [...state]
            searchItem.push(action.payload)
            return searchItem
        case EMPTY_SEARCH: 
            searchItem = []
            return searchItem
    }
    return state
}