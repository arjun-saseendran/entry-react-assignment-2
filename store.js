import { configureStore} from "@reduxjs/toolkit";
import cartReducer from './src/features/cart/cartSlice'
import wishlistReducer from './src/features/wishlist/wishlistSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer
    }
})

export default store