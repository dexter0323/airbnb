import { useStore } from "@nanostores/react";
import { $categories, selectCategory } from "../stores/category";

export default function Categories() {
  const categories = useStore($categories);
  return (
    <div className="flex flex-row items-center mt-6 px-6 space-x-6 gap-x-3 overflow-x-auto no-scrollbar">
      {categories.map(({ id, name, selected }) => {
        return (
          <button
            key={id}
            className={`flex flex-col items-center font-medium pb-4 ${
              selected ? "border-b-2 border-black" : "opacity-60"
            }`}
            onClick={() => selectCategory(id)}
          >
            <span>
              <img src={`images/categories/${id}.jpg`} alt={name} width="24" height="24" draggable="false" />
            </span>
            <span className="text-sm whitespace-nowrap">{name}</span>
          </button>
        );
      })}
    </div>
  );
}
