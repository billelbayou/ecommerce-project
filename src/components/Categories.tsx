import nikeShoe from "../assets/images/W+AIR+MAX+270-removebg.png";
import macbook from "../assets/images/Apple-Macbook-Pro-Transparent-Image.png";
import grocery from "../assets/images/pngwing.com.png";
import beauty from "../assets/images/pngegg.png";
import tennis from "../assets/images/Tennis-Racket-PNG-Download-Image.png";
import sofa from "../assets/images/Sofa-PNG-HD-Quality.png";
import { Link } from "react-router-dom";
export default function Categories() {
  return (
    <>
      <h2 className="text-2xl font-bold my-6">Popular Categories</h2>
      <div className="grid grid-cols-1 gap-4 p-4 xl:grid-cols-2">
        <div className="row-span-1">
          <Link to={"/category/mens-shoes"}>
            <div className="h-60 bg-backgound flex justify-end items-end p-6 rounded-lg categ cursor-pointer">
              <h3 className="self-start mr-auto text-2xl font-primarySemiBold">
                Shoes
              </h3>
              <img src={nikeShoe} alt="" className="h-2/3" />
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Link to={"/category/laptops"}>
            <div className="h-60 bg-backgound flex justify-end items-end p-6 rounded-lg categ cursor-pointer">
              <h3 className="self-start mr-auto text-xl font-primarySemiBold">
                Electronics
              </h3>
              <img src={macbook} alt="" className="h-1/2" />
            </div>
          </Link>
          <Link to={"/category/sports-accessories"}>
            <div className="h-60 bg-backgound flex justify-end items-end p-6 rounded-lg categ cursor-pointer">
              <h3 className="self-start mr-auto text-2xl font-primarySemiBold">
                Sports goods
              </h3>
              <img src={tennis} alt="" className="h-2/3" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Link to={"/category/groceries"}>
            <div className="h-60 bg-backgound flex justify-end items-end p-6 rounded-lg categ cursor-pointer">
              <h3 className="self-start mr-auto text-2xl font-primarySemiBold">
                Groceries
              </h3>
              <img src={grocery} alt="" className="h-2/3" />
            </div>
          </Link>
          <Link to={"/category/beauty"}>
            <div className="h-60 bg-backgound flex justify-end items-end p-6 rounded-lg categ cursor-pointer">
              <h3 className="self-start mr-auto text-2xl font-primarySemiBold">
                Beauty
              </h3>
              <img src={beauty} alt="" className="h-2/3" />
            </div>
          </Link>
        </div>
        <div className="row-span-1">
          <Link to={"/category/furniture"}>
            <div className="h-60 bg-backgound flex justify-end items-end p-6 rounded-lg categ cursor-pointer">
              <h3 className="self-start mr-auto text-2xl font-primarySemiBold">
                Furniture
              </h3>
              <img src={sofa} alt="" className="md:h-4/5 h-1/2" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
