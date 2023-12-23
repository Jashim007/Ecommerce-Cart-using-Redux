import SingleProduct from "./Single_product_item.jsx";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  setProductsData,  
} from "./productsSlice";
const url = "https://fakestoreapi.com/products";
const Products = () => {
  let { products, error, loading } = useSelector((state) => state.allproducts);

  const dispatch = useDispatch();

  const hasFetchedData = useRef(false);
useEffect(() => {
  if (!hasFetchedData.current) {
    dispatch(setProductsData(url, hasFetchedData));
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
