import Image from "next/image";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";
import BasketElement from "./components/BasketElement";
import BasketButton from "./components/BasketButton";
import Basket from "./components/Basket";

export default function Home({ searchParams }) {
  return (
    <>
      <div>
        <Basket />
      </div>
      <div className="flex">
        <CategoryList />
      </div>

      <Suspense>
        <ProductListContainer searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  return (
    <div className="m-4 grid grid-cols-2 gap-4">
      <ProductList category={category} />
    </div>
  );
}
