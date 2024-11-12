import { combineReducers, createStore } from "redux";
import cartredcuer from "./reducer/reducer";


let rootReducer = combineReducers({
cart: cartredcuer
});

let store = createStore(rootReducer);

export default store;