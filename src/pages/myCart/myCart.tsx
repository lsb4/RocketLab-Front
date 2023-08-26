import { useState } from "react";
import { useContext } from "react";
import { NavMenu } from "../../components/NavMenu";
import { Product, CartContext } from "../../contexts/myCart";

import arrow from "./assets/arrow.png";
import { Link } from "react-router-dom";

export const MyCart: React.FC<MyCartProps> = () => {
  const {
    cartItems,
    getNumberOfItems,
    removeFromCart,
    removeAllItensFromCart,
  } = useContext(CartContext);
  const [key, setKey] = useState(0);

  function handleRemoveItem(id: number) {
    removeFromCart(id);

    setKey((old) => old + 1);
  }

  function handleCheckoutButton() {
    const aux = getNumberOfItems();

    if (aux == 0) {
      const advice = document.querySelector("#noItemsAdvice") as HTMLElement
      if (advice) {
        advice.style.display = "flex";
      }
      return "";
    }
    return "/checkoutComplete";
  }

  function getTotalValue() {
    let total = 0;
    cartItems.forEach((item: Product) => {
      total += item.quantity * item.price;
    });
    return total;
  }

  function currencyFormat(num: number) {
    return "$ " + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <div
      className="w-full flex flex-col justify-center items-center font-roboto"
      key={key}
    >
      <NavMenu />
      <div className="w-full min-h-screen flex flex-col lg:flex-row pt-24">
        <div className="h-full w-full lg:w-3/5 px-6 lg:px-14 pb-14 pt-8 flex flex-col gap-6">
          <div className="w-full flex flex-col items-start">
            <Link to="/home" className="select-none">
              <p className="text-[#0A93E2] flex items-center gap-2 hover:underline cursor-pointer transition-all">
                <img
                  src={arrow}
                  className="w-[15px] rotate-180 pt-[1px]"
                  alt=""
                />
                Continuar comprando
              </p>
            </Link>
            <div className="w-full flex justify-between items-center">
              <header>
                <h2 className="text-[30px] font-semibold text-gray-800">
                  My Cart
                </h2>
              </header>
              <p className="text-[24px] font-medium text-gray-600">
                {getNumberOfItems()} items
              </p>
            </div>
          </div>
          <hr />
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex w-full justify-between">
              <div className="1/4 sm:w-2/5 flex flex-col gap-4">
                <p className="uppercase text-gray-400 font-medium">Product</p>
                {cartItems.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex gap-3 h-[70px] justify-start items-center"
                    >
                      <img
                        src={item.image}
                        className="max-w-[50px] sm:max-w-[80px] lg:max-w-[120px] select-none"
                        alt=""
                      />
                      <div>
                        <p className="text-[14px] sm:text-[20px] font-bold">
                          {item.name}
                        </p>
                        <p
                          className="text-[12px] sm:text-[15px] text-gray-400 cursor-pointer hover:text-gray-600 active:text-gray-700 transition-all"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/5 flex flex-col gap-4 items-center">
                <p className="uppercase text-gray-400 font-medium">Quantity</p>
                {cartItems.map((item) => {
                  return (
                    <p
                      key={item.id}
                      className="h-[70px] flex justify-center items-center text-[14px] sm:text-[20px] font-bold"
                    >
                      {item.quantity}
                    </p>
                  );
                })}
              </div>
              <div className="w-1/5 flex flex-col gap-4 items-center">
                <p className="uppercase text-gray-400 font-medium">Price</p>
                {cartItems.map((item) => {
                  return (
                    <p
                      key={item.id}
                      className="h-[70px] flex justify-center items-center text-[14px] sm:text-[20px] font-bold"
                    >
                      {currencyFormat(item.price)}
                    </p>
                  );
                })}
              </div>
              <div className="w-1/5 flex flex-col gap-4 items-center">
                <p className="uppercase text-gray-400 font-medium">Total</p>
                {cartItems.map((item) => {
                  return (
                    <p
                      key={item.id}
                      className="h-[70px] flex justify-center items-center text-[14px] sm:text-[20px] font-bold"
                    >
                      {currencyFormat(item.price * item.quantity)}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 p-6 lg:p-14 flex flex-col gap-3 justify-between bg-gray-100">
          <div className="flex flex-col gap-6">
            <header>
              <h2 className="text-[30px] font-semibold text-gray-800">
                Order Summary
              </h2>
            </header>
            <hr />
            <div className="flex justify-between">
              <p className="uppercase text-gray-400 font-medium">Total Cost</p>
              <p className="text-[20px] font-bold">
                {currencyFormat(getTotalValue())}
              </p>
            </div>
          </div>
          <div>
            <Link to={handleCheckoutButton()}>
              <button
                onClick={removeAllItensFromCart}
                className="uppercase w-full bg-blue-600 text-white text-[20px] font-bold p-4 hover:bg-blue-700 active:bg-blue-800 transition-all select-none"
              >
                Checkout
              </button>
            </Link>
            <p id="noItemsAdvice" className="hidden w-full justify-center text-red-700 mt-1">Sorry, there are no items in your cart :(</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MyCartProps {}
