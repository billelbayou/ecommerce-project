import { CiHeart } from "react-icons/ci";

export default function ProductCardSkeleton() {
  return (
    <div>
      <div className="sm:w-60 w-44 h-80 m-1 border rounded-md flex flex-col animate-pulse">
        <div className="relative bg-gray-300 h-52 flex justify-center items-center">
          <div className="w-40 h-40 bg-gray-200"></div>
          <div className="p-2 rounded-full bg-gray-200 absolute right-3 top-3">
            <CiHeart className="text-gray-400" size={20} />
          </div>
        </div>
        <div className="p-1 flex-1 flex flex-col justify-between">
          <div className="h-4 bg-gray-200 mb-2 w-20"></div>
          <div className="h-6 bg-gray-200 mb-2 w-32"></div>
          <div className="h-4 bg-gray-200 w-16"></div>
        </div>
      </div>
    </div>
  );
}
