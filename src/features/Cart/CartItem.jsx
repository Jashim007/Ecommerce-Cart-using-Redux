import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from './cartSlice';

const CartItem = ({
  productImg,
  productPrice,
  productTitle,
  quantity,
  uuid,
}) => {
  const dispatch = useDispatch();
  let { cart } = useSelector((state) => state.cart);

  function cartRemove() {
    const updatedCart = cart.filter((cartItem) => cartItem.uuid != uuid);
    console.log(updatedCart);
    dispatch(removeFromCart(updatedCart));
  }
  return (
    <>
      <div className="w-[80%] py-3 px-5 rounded-md flex flex-col text-sm md:text-md md:flex-row items-center justify-between gap-2  my-5 bg-white shadow-lg">
        <div className="w-1/6 flex items-center justify-center">
          <img src={productImg} alt="" />
        </div>
        <div className="w-3/6 flex items-center justify-center font-bold text-center">
          {productTitle}
        </div>
        <div className="w-1/6 flex items-center justify-center text-center font-bold">
          &#8377;{productPrice}
        </div>
        <div className="w-1/6 flex items-center justify-center">
          <button
            className="text-white p-2 bg-blue-500 rounded-md active:scale-95 duration-200"
            onClick={() => {
              cartRemove();
            }}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
