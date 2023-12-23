import { createStore, combineReducers,applyMiddleware } from "redux";
import cartReducer from "./features/Cart/cartSlice";
import productsReducer from "./features/Products/productsSlice";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  allproducts: productsReducer,
});
const store = createStore(rootReducer,applyMiddleware(thunk));
export default store;