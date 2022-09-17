import NameReducer from "./NameReducer";
import { combineReducers } from "redux"; 


export const reducer = combineReducers({
    name: NameReducer,
})