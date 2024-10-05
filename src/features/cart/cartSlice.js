import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartCount : 0,
  
};

let no = 1;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, image, title, description, price } = action.payload;

      const duplicate = state.cartProducts.find((product) => product.id === id);
      if (duplicate) {
        if (!duplicate.quantity) {
          duplicate.quantity = 2;
        } else {
          duplicate.quantity += 1;
        }
        duplicate.total = (duplicate.quantity * duplicate.price)
      } else {
        state.cartProducts.push({
          id,
          image,
          title,
          description,
          price,
          quantity: 1,
          no: no++,
          total: price
        });
        state.cartCount++
      }


    
        

    

     
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
