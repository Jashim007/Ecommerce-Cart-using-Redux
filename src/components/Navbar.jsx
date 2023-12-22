import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  let { cart } = useSelector((state) => state.cart);
  return (
    <div className="py-7 px-5 bg-slate-700 text-white flex items-center justify-between w-screen">
      <div className="w-3/5 flex items-center justify-start text-xl">
        E-commerce Cart
      </div>
      <div className="w-2/5 flex  items-center justify-center space-x-14">
        <div className="hover:scale-105  active:scale-100 duration-500 group">
          <NavLink to="/">Products</NavLink>
          <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
        </div>
        <div className="flex gap-2 ">
          <div className="hover:scale-105  active:scale-100 duration-500 group">
            <NavLink to="/cart">Cart</NavLink>
            <div className="mx-1 group-hover:border-b group-hover:border-blue-50"></div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>

          <div>{cart.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
