import { Card } from "./Card";
import { Cart } from "./Cart";
import Sidebar from "./Sidebar";

export const Layout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <section className="ml-24 md:ml-4 m-2 px-8 py-8">
          <h1 className="text-lg font-medium lg:text-2xl">
            Welcome to cashier app👋
          </h1>

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
