import React from "react";
import { useContext } from 'react'
import { CartContext } from "../../contexts/myCart";

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  image,
  price,
}) => {
  const { addToCart } = useContext(CartContext);

  function currencyFormat(num: number) {
    return "$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <>
      <div className="rounded-lg bg-[#c7e0e9] relative select-none">
        <div className="flex flex-col justify-between items-center px-6 pt-6 pb-1">
          <img
            className="w-full max-w-[100px] hover:scale-110 transition-all"
            src={image}
            alt=""
          />
          <p className="text-[25px] font-bold">{name}</p>
          <p className="text-[15px] font-medium">{currencyFormat(price)}</p>
        </div>
        <p
          className="rounded-b-lg bg-[#2f6376] cursor-pointer text-white text-center p-2 hover:bg-[#264d5b] active:bg-[#203f4b] transition-all"
          onClick={() =>
            addToCart({
              id: id,
              name: name,
              price: price,
              quantity: 1,
              image: image,
            })
          }
        >
          Add to cart
        </p>
      </div>
    </>
  );
};

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}
