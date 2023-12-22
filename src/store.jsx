import { createStore, combineReducers } from "redux";
import cartReducer from "./features/Cart/cartSlice";
import productsReducer from "./features/Products/productsSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  allproducts: productsReducer,
});
const store = createStore(rootReducer);
export default store;