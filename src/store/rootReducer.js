import {combineReducers} from "redux";
import resultReducer from "./waterAllocation";
import allocReducer from "./waterDispense";

export default combineReducers({
   result: resultReducer,
   allocation: allocReducer
})