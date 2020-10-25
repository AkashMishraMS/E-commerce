import { createSelector } from "reselect"
import CartItem from "../../Component/cart-Item/cartItem"

const selectCart = state => state.cart

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItem
)

export const selectCartItemCount = createSelector(
    [selectCartItem],
    cartItem => cartItem.reduce((accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity, 0)
)