import Image from "next/image";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";
import { Suspense } from "react";
import BasketElement from "./components/BasketElement";
import BasketButton from "./components/BasketButton";
import Basket from "./components/Basket";

export default function Home({ searchParams }) {
   const category = searchParams?.category ?? "Products"; 
  return (
    <>
  
      <main className="bg-(--cream)">
        <section className="relative grid h-[80vh] grid-cols-2 bg-(--cream) text-(--orange) md:h-[80vh]">
          <div className="z-10 row-span-full flex items-center px-6 text-left md:col-start-1">
            <div className="mx-auto w-full max-w-xl rounded-3xl bg-(--cream)/90 p-6 shadow-lg md:p-10 md:text-left">
              <h1 className="font-playfair text-3xl md:text-5xl">
                Shop smarter. <br /> Waste less.
              </h1>
              <p className="mt-3 text-sm md:text-base">
                Find your favourite products across categories and brands – all
                in one place.
              </p>
            </div>
          </div>

          <div className="col-span-full row-span-full">
            <Image
              src="/hero.webp"
              alt="Hero image"
              fill
              priority
              className="object-cover"
            />
          </div>
        </section>

        <section className="flex items-center justify-center p-10">
          <h2 className="font-(family-name:--font-playfair-display) text-5xl text-(--orange) md:text-5xl">
           / {category}
          </h2>
        </section>

        <section className="mt-6 flex">
          <Suspense>
            <div className="flex-1">
              <ProductListContainer searchParams={searchParams} />
            </div>
          </Suspense>

          <div className="hidden md:flex md:self-stretch ">
            <Basket />
          </div>
        </section>
      </main>
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
