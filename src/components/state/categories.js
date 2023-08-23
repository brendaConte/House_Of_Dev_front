import { createReducer, createAction } from "@reduxjs/toolkit";

export const getCategories = createAction("GET_CATEGORY");

const initialState = ""; // con el handleClick hago que cambie mi inicialState("alquiler"), pasa a ser "venta".

const categoryReducer = createReducer(initialState, {
  [getCategories]: (state, action) => action.payload,
});

export default categoryReducer;