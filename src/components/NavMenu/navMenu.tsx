import { Link } from "react-router-dom";
import { useContext } from 'react'
import { CartContext } from "../../contexts/myCart";

import cartIcon from "./assets/cartIcon.png";

export const NavMenu: React.FC<NavMenuProps> = () => {
  const { getNumberOfItems } = useContext(CartContext);
  
  return (
    <div className="z-10 fixed top-0 left-0 w-full flex justify-between items-center py-4 px-10 bg-gray-800 text-white select-none">
      <header>
        <h1 className="text-[40px]">
          <Link to="/home">Car Shop</Link>
        </h1>
      </header>
      <p className="text-[20px] cursor-pointer flex items-center gap-3 relative">
        <Link to="/mycart">
          <img
            style={{ filter: "invert(100%)" }}
            className="w-[40px]"
            src={cartIcon}
            alt=""
          />
          <span className="absolute -top-2 -right-4 flex items-center justify-center text-[20px] font-medium text-black bg-[#6dd8ff] rounded-[50%] w-[30px] h-[30px]">
            {getNumberOfItems()}
          </span>
        </Link>
      </p>
    </div>
  );
};

interface NavMenuProps {}
