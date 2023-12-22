import PropTypes from "prop-types";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart} from "../Cart/cartSlice";
const SingleProduct = ({ uuid, image, price, title }) => {
  const dispatch = useDispatch();
  let { cart } = useSelector((state) => state.cart);
  let quantityInCart = 0;
  let itemInCart = useRef(false);
  function toogleAddItemBtn() {
    itemInCart.current = !itemInCart.current;
  }
  let updatedCart = cart;
  itemInCart.current =
    updatedCart.filter((cartObj) => cartObj.uuid == uuid).length == 0
      ? false
      : true;
  function cartAddition() {
    const selectedItem = cart.filter((obj) => obj.uuid == uuid);

    if (selectedItem.length == 0) {
      quantityInCart = 0;
      updatedCart.push({
        uuid,
        image,
        price,
        title,
        quantity: +quantityInCart + 1,
      });
    } else {
      quantityInCart = selectedItem[0].quantity;
      updatedCart = updatedCart.filter(
        (singleCartItem) => singleCartItem.uuid != uuid,
      );
    }
    dispatch(addToCart(updatedCart));
  }

  return (
    <div className=" h-[450px] bg-white rounded-lg">
      <div className=" h-full border border-white rounded-lg shadow-lg p-7  flex flex-col items-center justify-center space-y-3 ">
        <div className="h-1/2 flex items-center justify-center pb-3">
          <img src={image} alt="cloth" className="object-contain h-full" />
        </div>
        <div className="text-center text-sm font-bold">{title}</div>
        <div className="text-center text-sm font-semibold">&#8377;{price}</div>
        <button
          className={`${
            !itemInCart.current ? "bg-slate-700" : "bg-red-500"
          } text-white  active:scale-90 p-3 rounded-lg text-sm duration-300`}
          onClick={() => {
            cartAddition();
            toogleAddItemBtn();
          }}>
          {!itemInCart.current ? "Add to Cart" : "Remove"}
        </button>
      </div>
    </div>
  );
};
SingleProduct.propTypes = {
  uuid: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
export default SingleProduct;
