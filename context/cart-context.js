import * as React from 'react'

const CartStateContext = React.createContext()
const CartDispatchContext = React.createContext()

function CartReducer(state, action) {
    switch (action.type) {
        case 'add_item': {
            const items = [...state.items]
            const existingItemIndex = state.items.findIndex(x => x.id === action.payload.id)

            if (existingItemIndex != -1) {
                const existingItem = state.items[existingItemIndex]
                const updatedItem = Object.assign({}, { ...existingItem }, { quantity: existingItem.quantity + action.payload.quantity })
                items.splice(existingItemIndex, 1, updatedItem)
            } else {
                items.push(action.payload)
            }

            return { items }
        }
        case 'update_item': {
            const items = [...state.items]
            const existingItemIndex = state.items.findIndex(x => x.id === action.payload.id)
            const existingItem = state.items[existingItemIndex]
            const updatedItem = Object.assign({}, { ...existingItem }, { quantity: action.payload.quantity })
            items.splice(existingItemIndex, 1, updatedItem)
            
            return { items }
        }
        case 'remove_item': {
            const items = [...state.items]
            const index = state.items.findIndex(x => x.id === action.payload.id)
            items.splice(index, 1)
            return {
                items
            }
        }
        case 'checkout': {
            const items = []
            return {
                items
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}
function CartProvider({ children }) {
    const [state, dispatch] = React.useReducer(CartReducer, { items: [] })
    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}
function useCartState() {
    const context = React.useContext(CartStateContext)
    if (context === undefined) {
        throw new Error('useCartState must be used within a CartProvider')
    }
    return context
}
function useCartDispatch() {
    const context = React.useContext(CartDispatchContext)
    if (context === undefined) {
        throw new Error('useCartDispatch must be used within a CartProvider')
    }
    return context
}
export { CartProvider, useCartState, useCartDispatch }