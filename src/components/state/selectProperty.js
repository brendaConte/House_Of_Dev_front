import { createReducer, createAction } from "@reduxjs/toolkit";


export const getSelectProperty = createAction("GET_SELECT_PROPERTY");

const initialState = ""; // con el handleClick hago que cambie mi inicialState("alquiler"), pasa a ser "venta".

const propertyReducerSelect = createReducer(initialState, {
  [getSelectProperty] : (state, action) => {
    return action.payload || ""; // Asegúrate de proporcionar un valor predeterminado si la acción no tiene un payload válido
  },
});


export default propertyReducerSelect;