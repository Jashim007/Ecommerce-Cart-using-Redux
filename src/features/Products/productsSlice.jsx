const initialState = {
  products: [],
  error: null,
  loading: false,
};

const productsReducer = (state = initialState, action) => {

  switch (action.type) {
    case "SET_PRODUCTS_LOADING":
      return { ...state, loading: true };
    case "SET_PRODUCTS_DATA":
      return { ...state, loading: false, products: action.payload };
    case "SET_PRODUCTS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


export function setProductsLoadingState() {
  return { type: "SET_PRODUCTS_LOADING", payload: "Loading" };
}
export function setProductsErrorState(error) {
  return { type: "SET_PRODUCTS_ERROR", payload: error };
}
export function setProductsData(apiData) {
  return { type: "SET_PRODUCTS_DATA", payload: apiData };
}

export default productsReducer;
