import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishlistProducts: [],
    cartCount: 0
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers:{
        addToWishlist: (state, action) =>{
            const {id} = action.payload
            const matchProduct = state.wishlistProducts.find(product => product.id === id)
            if(matchProduct){
                return
            }else{
                state.wishlistProducts.push(action.payload);
            
            }
            
            
            state.cartCount++

        },
        removeWishlistProduct: (state, action) => {
                const {id} = action.payload
             state.wishlistProducts =  state.wishlistProducts.filter(product => product.id !== id)
             state.cartCount--;
        }

    }
})
export const {addToWishlist, removeWishlistProduct} = wishlistSlice.actions
export default wishlistSlice.reducer