import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import stateReducer from "./properties";
import locationReducer from "./location";
import categoryReducer from "./categories";
import propertyReducerSelect from "./selectProperty";


const store = configureStore({
  reducer: {
    user: userReducer, //El objeto de mi estado
    properties: stateReducer,
    location: locationReducer,
    categories: categoryReducer,
    propertySelected: propertyReducerSelect,
  },
});
export default store;