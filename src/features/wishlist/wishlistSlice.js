import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistProducts: []
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers:{
        addToWishlist: (state, action) =>{
            state.wishlistProducts.push(action.payload)

        }

    }
})
export const {addToWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer