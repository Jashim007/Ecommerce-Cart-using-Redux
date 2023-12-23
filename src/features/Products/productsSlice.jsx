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

export function setProductsData(url, hasFetchedData) {
  // return { type: "SET_PRODUCTS_DATA", payload: apiData };
  return function (dispatch) {
    async function fetchData(url, signal) {
      try {        
        dispatch({ type: "SET_PRODUCTS_LOADING" });
        let res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(res);
        }
        let apiData = await res.json();
        dispatch({ type: "SET_PRODUCTS_DATA", payload: apiData });
      } catch (error) {
        if (!signal.aborted) {
          dispatch({ type: "SET_PRODUCTS_ERROR", payload: error });
        }
      } finally {
        // Mark as fetched even on error to avoid re-fetching
        hasFetchedData.current = true;
      }
    }
    if (!hasFetchedData.current) {
      const abortController = new AbortController();
      const signal = abortController.signal;

      fetchData(url, signal);

      return () => abortController.abort();
    }
  };
}

export default productsReducer;
