import Image from "next/image";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";

export default function Home({ searchParams }) {
  return (
    <>
      <div className="flex">
        <CategoryList />
      </div>
      <ProductList />;
      <Suspense>
        <CategoryListContainer searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function CategoryListContainer({ searchParams }) {
  const { category } = await searchParams;
  return (
    <div className="m-4 grid grid-cols-2 gap-4">
      <ProductList category={category} />
    </div>
  );
}
