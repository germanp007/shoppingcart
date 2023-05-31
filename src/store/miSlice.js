import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "misCategorias",
  initialState: {
    category: "",
    miCarrito: [],
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    comprar: (state, action) => {
      state.miCarrito = [...state.miCarrito, action.payload];
    },
    devolver: (state, action) => {
      state.miCarrito = state.miCarrito.filter((e, i) => i !== action.payload);
    },
  },
});

export const { setCategory, comprar, devolver } = origenSlice.actions;
