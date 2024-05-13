import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart = () => {

  const {isOpen, handleClose} = useContext(CartContext)

  return (
    <>
      <div className={`${isOpen ? "right-0" : "-right-full"} fixed flex flex-col my-8 mx-4 px-8 py-4 border min-w-[372px] rounded-xl bg-white transition-all duration-300`}>
        <div className="flex justify-between">
        <h1 className="mb-4 text-xl font-bold">Cart</h1>
        <button onClick={handleClose} type="button" className="bg-gray-200 rounded-full p-2 w-8 h-8 inline-flex items-center justify-center hover:bg-gray-300 ">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
        </div>
        <div className="min-h-[72vh] mb-6">
          <div className="flex justify-between my-2">
            <h2 className="rounded-full bg-primary w-8 h-8 p-1 text-center text-bold text-white">
              1
            </h2>
            <div className="flex-col">
              <h1 className="text-md font-medium">Ayam Geprek</h1>
              <p>Rp. 15.000</p>
            </div>
            <h2 className="text-md font-bold">Rp. 15.000</h2>
          </div>
          <div className="flex justify-between my-2">
            <h2 className="rounded-full bg-primary w-8 h-8 p-1 text-center text-bold text-white">
              1
            </h2>
            <div className="flex-col">
              <h1 className="text-md font-medium">Ayam Geprek</h1>
              <p>Rp. 15.000</p>
            </div>
            <h2 className="text-md font-bold">Rp. 15.000</h2>
          </div>
        </div>
        <div className="flex justify-between w-full mb-4">
          <h1 className="text-xl font-bold">Total: </h1>
          <h1 className="text-xl font-bold">Rp. 30.000</h1>
        </div>

        <button className="bg-secondary rounded-xl p-2 text-white text-xl ">
          Pay
        </button>
      </div>
    </>
  );
};
