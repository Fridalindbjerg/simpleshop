import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const CategoryList = () => {
  return (
    <Suspense>
      <FetchCategories />
    </Suspense>
  );
};

const FetchCategories = async () => {
  const response = await fetch("https://dummyjson.com/products/category-list");
  const categories = await response.json();
  return categories.map((category, index) => (
    <CategoryElement category={category} key={index} />
  ));
};

export default CategoryList;

// <select className="border rounded px-3 py-2">
//   <option>Vælg en kategori…</option>
//   {categories.map((category, i) => (
//     <option key={i}>{category}</option>
//   ))}
// </select>
