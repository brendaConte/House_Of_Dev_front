import { createReducer, createAction } from "@reduxjs/toolkit";

export const getState = createAction("GET_STATE");

const initialState = "alquiler"; // con el handleClick hago que cambie mi inicialState("alquiler"), pasa a ser "venta".

const stateReducer = createReducer(initialState, {
  [getState]: (state, action) => action.payload,
});

export default stateReducer;