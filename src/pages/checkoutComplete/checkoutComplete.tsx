import { Link } from "react-router-dom";
import { NavMenu } from "../../components/NavMenu";

export const CheckoutComplete: React.FC<CheckoutCompleteProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center font-roboto mt-24">
      <NavMenu />
      <div className="flex flex-col items-center justify-center gap-4 mt-10 text-center px-4">
        <header>
          <h3 className="text-[30px] font-medium">
            Thank you for your purchase!
          </h3>
        </header>
        <p className="mb-4">
          We will email you an order confirmation with details and tracking
          info.
        </p>

        <Link to="/home" className="w-full max-w-[300px]">
          <button className="uppercase w-full bg-blue-600 text-white text-[20px] font-bold p-4 hover:bg-blue-700 active:bg-blue-800 transition-all select-none">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

interface CheckoutCompleteProps {}
