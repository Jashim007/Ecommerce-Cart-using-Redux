const initialState = {
  cart: [],
};

 const cartReducer = (state = initialState, action) => {
  let updatedCart = [];
  switch (action.type) {
    case "ADD_TO_CART":
      updatedCart = action.payload;
      return { ...state, cart: updatedCart };
    case "REMOVE_FROM_CART":
      updatedCart = action.payload;
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};
export function removeFromCart(updatedCart) {
  return {
    type: "REMOVE_FROM_CART",
    payload: updatedCart,
  };
}
export function addToCart(updatedCart) {
  return {
    type: "ADD_TO_CART",
    payload: updatedCart,
  };
}

export default cartReducer;
