import { Categories } from "../assets/arrays/Categories";
import useStore from '../store';

export default function HomeCategories() {
  const { selectedCategory, setSelectedCategory } = useStore();
  return (
    <div className="w-full py-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Popular Products</h2>
        <ul className="flex flex-wrap items-center">
          {Categories.map((category) => (
            <li key={category.slug}>
              <button className={`py-1 px-3 rounded-full border border-black m-1 ${selectedCategory === category.slug ? "bg-black text-white" : ""}`} onClick={() => setSelectedCategory(category.slug)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
