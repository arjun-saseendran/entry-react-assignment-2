import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  cartCount: 0,
  cartTotal: 0,
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
        duplicate.total = duplicate.quantity * duplicate.price;
      } else {
        state.cartProducts.push({
          id,
          image,
          title,
          description,
          price,
          quantity: 1,
          no: no++,
          total: price,
        });

        state.cartCount++;
      }
    },
    increment: (state, action) => {
      const { id } = action.payload;

      const clickedProduct = state.cartProducts.find(
        (product) => product.id === id
      );
      if (clickedProduct.quantity > 1) {
        clickedProduct.quantity++;
        clickedProduct.total = clickedProduct.quantity * clickedProduct.price;
      }
      state.cartTotal = state.cartProducts.reduce((acc, product) => acc + product.total,0);
    },
    decrement: (state, action) => {
      const { id } = action.payload;

      const clickedProduct = state.cartProducts.find(
        (product) => product.id === id
      );
      if (clickedProduct.quantity > 1) {
        clickedProduct.quantity--;
        clickedProduct.total--;
        clickedProduct.total = clickedProduct.quantity * clickedProduct.price;
      } else {
        state.cartProducts.splice(clickedProduct, 1);
        state.cartCount -= 1;
      }
      state.cartTotal = state.cartProducts.reduce((acc, product) => acc + product.total,0);
    },

    cartTotalHandler: (state) => {
      state.cartTotal = state.cartProducts.reduce((acc, product) => acc + product.total,0);

    },
  },
});

export const { addToCart, increment, decrement, cartTotalHandler } =
  cartSlice.actions;
export default cartSlice.reducer;
