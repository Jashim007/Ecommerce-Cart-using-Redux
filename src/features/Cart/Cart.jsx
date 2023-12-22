import CartItem from "./CartItem";
import TotalAmount from "../../components/TotalAmount";
import { useSelector } from "react-redux";
const Cart = () => {
  let { cart } = useSelector((state) => state.cart);

  return (
    <div className="min-h-[85%] w-full bg-slate-200 space-x-5 flex p-3">
      <div className="w-2/3 flex flex-col items-center justify-start rounded-md">
        {cart.length > 0 ? (
          cart.map((singleItem) => (
            <CartItem
              productImg={singleItem.image}
              productPrice={singleItem.price}
              productTitle={singleItem.title}
              key={singleItem.uuid}
              quantity={singleItem.quantity}
              uuid={singleItem.uuid}
            />
          ))
        ) : (
          <div className="py-5 px-3 flex items-center justify-center font-bold text-lg bg-white shadow-lg rounded-lg h-full w-full">
            No items in the cart
          </div>
        )}
      </div>
      <TotalAmount />
    </div>
  );
};

export default Cart;
