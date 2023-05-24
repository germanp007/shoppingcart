import { createSlice } from "@reduxjs/toolkit";

export const origenSlice = createSlice({
  name: "misCategorias",
  initialState: {
    category: "",
    miCarrito: [],
  },
  reducers: {
    setCategory: (state, action) => {},
    comprar: (state, action) => {
      state.miCarrito = [...state.miCarrito, action.payload];
    },
    devolver: (state, action) => {},
  },
});

export const { setCategory, comprar, devolver } = origenSlice.actions;
