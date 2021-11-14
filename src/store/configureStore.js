import {configureStore} from "@reduxjs/toolkit";
import reducer from "./rootReducer";

export default function getStore() {
   return configureStore({
      reducer,
   })
}