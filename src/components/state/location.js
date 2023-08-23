import { createReducer, createAction } from "@reduxjs/toolkit";

export const getLocation = createAction("GET_LOCATION");

const initialState = "";

const locationReducer = createReducer(initialState, {
  [getLocation]: (state, action) => action.payload,
});

export default locationReducer;