import { NavMenu } from "../../components/NavMenu";
import { ProductCard } from "../../components/ProductCard";

import car1 from "./assets/Car1.png";

const productsDB = [
  { id: 1, name: "Gol", price: 4000, image: car1 },
  { id: 2, name: "Palio", price: 3200, image: car1 },
  { id: 3, name: "Uno", price: 1800, image: car1 },
  { id: 4, name: "Celta", price: 2300, image: car1 },
  { id: 5, name: "Tucson", price: 7000, image: car1 },
  { id: 6, name: "Mobi", price: 4300, image: car1 },
  { id: 7, name: "Kwid", price: 3600, image: car1 },
  { id: 8, name: "Corolla", price: 12000, image: car1 },
  { id: 9, name: "Jetta", price: 8000, image: car1 },
  { id: 10, name: "Compass", price: 20000, image: car1 },
  { id: 11, name: "Renegade", price: 16000, image: car1 },
  { id: 12, name: "HB20", price: 7100, image: car1 },
  { id: 13, name: "Fusca", price: 3000, image: car1 },
];

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center font-roboto mt-24">
      <NavMenu />
      <div className="flex justify-center flex-wrap gap-4 mt-8 sm:w-4/5">
        {productsDB.map((product) => {
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

interface HomeProps {}
