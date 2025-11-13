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
