import { useState } from "react";
import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="h-20 flex md:justify-between items-center py-1 px-4 relative shadow-md">
      <div className="mr-10 h-full flex items-center">
        <div className="md:hidden h-full flex justify-center items-center">
          <button
            onClick={() => setShowNav((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>
          <ul
            className={`absolute top-full left-0 w-48 px-4 transition ${
              showNav
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            } flex flex-col justify-center font-primaryMedium bg-white border h-56`}
          >
            <li className="p-3 border-b hover:bg-backgound cursor-pointer">
              Categories
            </li>
            <li className="p-3 border-b hover:bg-backgound cursor-pointer">
              About
            </li>
            <li className="p-3 border-b hover:bg-backgound cursor-pointer">
              Blog
            </li>
            <li className="p-3 hover:bg-backgound cursor-pointer">Support</li>
          </ul>
        </div>
        <ul className="hidden items-center font-primaryMedium md:flex">
          <li className="p-3 hover:bg-backgound cursor-pointer rounded-md">
            Categories
          </li>
          <li className="p-3 hover:bg-backgound cursor-pointer rounded-md">
            About
          </li>
          <li className="p-3 hover:bg-backgound cursor-pointer rounded-md">
            Blog
          </li>
          <li className="p-3 hover:bg-backgound cursor-pointer rounded-md">
            Support
          </li>
        </ul>
      </div>
      <h1 className="font-primaryBold text-3xl mr-auto md:m-0">
        <Link to={"/"}>
          <span className="text-accent">E</span>STORE
        </Link>
      </h1>
      <ul className="flex items-center">
        <li>
          <CiSearch size={25} className="mx-2" />
        </li>
        <li>
          <Link to={"/wishlist"}>
            <CiHeart size={25} className="mx-2" />
          </Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <CiShoppingCart size={25} className="mx-2" />
          </Link>
        </li>
        <li>
          <CiUser size={25} className="mx-2" />
        </li>
      </ul>
    </div>
  );
}
