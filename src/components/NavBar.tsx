import { Link, useLocation } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const NavBar = () => {
  const { pathname } = useLocation();
  console.log(pathname === "/classes");
  return (
    <div className="flex justify-between flex-col items-center px-3 py-2 bg-gray-200 text-white shadow-md md:flex-row">
      <Link to="/" className="font-bold text-lg text-black">
        Karo Abhyaas
      </Link>
      <div className="flex items-center justify-center gap-1 md:gap-2">
        <div className="bg-black text-white p-2 text-sm flex items-center justify-center">
          Join Us
        </div>
        <Link
          to="/classes"
          className={` ${
            pathname === "/classes" ? "text-black" : "text-gray-700"
          } hover:underline font-bold text-sm`}
        >
          Classes
        </Link>
        <Link
          to="/products"
          className={`${
            pathname === "/products" ? "text-black" : "text-gray-700"
          } hover:underline font-bold  text-sm `}
        >
          Products
        </Link>
        <Link
          to="/about"
          className={`${
            pathname === "/about" ? "text-black" : "text-gray-700"
          } hover:underline font-bold text-sm`}
        >
          About Us
        </Link>
        <div>
          <Link to="/login">
            <IoPersonCircle className="text-black" size={24} />
          </Link>
        </div>
        <div>
          <Link to="/checkout">
            <MdShoppingCart className="text-black" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
