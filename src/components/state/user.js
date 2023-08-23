import { createAction, createReducer } from "@reduxjs/toolkit";

export const setLogin = createAction("LOG_IN");
export const setLogOut = createAction("LOG_OUT");

const initialState = {
  //Creo un objeto que va ser mi estado inicial para user
  id: null,
  name: null,
  lastname: null,
  email: null,
  phone: null,
  image: null,
  is_Admin: false,
};

const userReducer = createReducer(initialState, {
  //Creo y exporto mi estado para que el store lo pueda utilizar
  [setLogOut]: (state, action) => action.payload, //setLogOut es la propiedad que voy a usar desde los componentes de mi aplicacion cuando queramos acceder al estado
  [setLogin]: (state, action) => action.payload, //Recibo la informacion en un objeto payload y la guardo
});

export default userReducer;