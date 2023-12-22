import SingleProduct from "./Single_product_item.jsx";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setProductsLoadingState,
  setProductsData,
  setProductsErrorState,
} from "./productsSlice";
const url = "https://fakestoreapi.com/products";
const Products = () => {
  let { products, error, loading } = useSelector((state) => state.allproducts);

  const dispatch = useDispatch();

  const hasFetchedData = useRef(false);

  useEffect(() => {
    async function fetchData(url, signal) {
      try {
        console.log("Loading Data from API");
        dispatch(setProductsLoadingState());
        let res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(res);
        }
        let apiData = await res.json();
        dispatch(setProductsData(apiData));
      } catch (error) {
        if (!signal.aborted) {
          dispatch(setProductsErrorState(error));
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
  }, [dispatch]);

  return (
    <div className="bg-slate-200">
      {loading && "Loading"}
      {error && "Error in fetching data"}
      {products && (
        <div className="  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 p-5 ">
          {products.map((prod) => {
            return (
              <SingleProduct
                key={prod.id}
                uuid={prod.id}
                image={prod.image}
                title={prod.title}
                price={prod.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
