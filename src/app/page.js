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
      <div className="flex">
        <Suspense>
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
        <Basket />
      </div>
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(0,300px))] justify-center gap-4">
      <ProductList category={category} />
    </div>
  );
}
