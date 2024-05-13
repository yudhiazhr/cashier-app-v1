import { useContext } from "react";
import { Card } from "./Card";
import { Cart } from "./Cart";
import Sidebar from "./Sidebar";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const Layout = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);

  return (
    <>
      <div className="flex">
        <Sidebar />
        <section className="ml-24 md:ml-4 m-2 px-8 py-8">
          <h1 className="text-lg font-medium lg:text-2xl">
            Welcome to cashier app👋
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl absolute right-0 top-8 mr-6  md:mr-10 border rounded-full bg-white shadow-xl p-4"
          ><AiOutlineShoppingCart/><div className="bg-red-500 absolute right-1 top-2 text-base w-[20px] h-[20px] text-white rounded-full flex justify-center items-center">0</div></button>

          <div>
            <h2 className="text-xl font-medium lg:text-3xl my-6">Makanan</h2>
            <div className="flex flex-wrap gap-4">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>
        <Cart />
      </div>
      .
    </>
  );
};
