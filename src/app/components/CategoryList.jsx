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
  return;

  <select className="rounded border px-3 py-2">
    <option>Vælg en kategori…</option>
    {categories.map((category, index) => (
      <option key={index}>{category}</option>
    ))}
  </select>;
};

export default CategoryList;

// categories.map((category, index) => (
//   <CategoryElement category={category} key={index} />
// ))

// <select className="border rounded px-3 py-2">
//   <option>Vælg en kategori…</option>
//   {categories.map((category, index) => (
//     <option key={index}>{category}</option>
//   ))}
// </select>
