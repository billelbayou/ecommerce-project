import furnitureImg from "../assets/images/furniture.jpg";

export default function HomeCarousel() {
  return (
    <div className="flex items-center xl:justify-between justify-center flex-wrap">
      <h1 className="w-3/5 font-primaryBold md:text-4xl text-2xl text-center py-4">
        Complete your interior with a minimalist designer chandelier
      </h1>

      <div>
        <img src={furnitureImg} alt="" className="h-64 p-4 rounded-md" />
      </div>
    </div>
  );
}
