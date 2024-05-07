import { atom } from "nanostores";
import type { Category } from "../types/category";

export const $categories = atom<Category[]>([
  {
    id: 1,
    name: "Beachfront",
    selected: true,
  },
  {
    id: 2,
    name: "Rooms",
  },
  {
    id: 3,
    name: "Treehouses",
  },
  {
    id: 4,
    name: "Beach",
  },
  {
    id: 5,
    name: "Domes",
  },
  {
    id: 6,
    name: "Amazing pools",
  },
  {
    id: 7,
    name: "Amazing views",
  },
  {
    id: 8,
    name: "Tropical",
  },
  {
    id: 9,
    name: "Contryside",
  },
  {
    id: 10,
    name: "Cabins",
  },
]);

export function addCategory(category: Category) {
  $categories.set([...$categories.get(), category]);
}

export function selectCategory(id: number) {
  $categories.set(
    $categories.get().map((category) => {
      if (category.id === id) category.selected = true;
      else category.selected = false;
      return category;
    })
  );
}
