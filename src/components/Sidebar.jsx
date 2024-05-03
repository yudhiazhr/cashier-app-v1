import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Makanan" },
    { title: "Minuman" },
    { title: "Cemilan" },
  ];

  return (
    <>
      <aside
        className={`${
          open ? `w-72` : ` w-20 p-4`
        } duration-300 h-screen bg-secondary relative p-6 py-8`}
      >
        <svg
          className={`absolute cursor-pointer rounded-full -right-4 top-24 w-8 h-8 border-2 border-secondary bg-white ${
            !open && ` rotate-180`
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          onClick={() => setOpen(!open)}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m15 19-7-7 7-7"
          />
        </svg>
        <div className="flex gap-x-4 items-center">
          <img
            src="https://png.pngtree.com/png-vector/20220718/ourmid/pngtree-cashier-icon-vector-concept-contour-png-image_5569410.png"
            alt=""
            className={`w-10 h-10 text-white cursor-pointer duration-500 `}
          />
          <h1
            className={` text-white origin-left font-medium text-2xl cursor-pointer duration-300 ${
              !open && `scale-0`
            }`}
          >
            Cashier<span className=" text-transparent">_</span>App
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li key={index}>
            <a
              href={menu.link}
              className={`${!open && "hidden"} text-white cursor-pointer duration-500 flex items-center justify-center py-2 rounded-full hover:bg-primary hover:text-black`}
            >
              <span className={`${!open && "hidden"} duration-200 text-lg`}>
                {menu.title}
              </span>
            </a>
          </li>
          
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
