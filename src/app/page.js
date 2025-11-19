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
      {/* <div className="flex">
       <Suspense>
       
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
        <Basket />
      </div> */}

      <main className="bg-(--cream)">
        <section className="grid max-h-[40%] grid-cols-1 bg-(--cream) text-(--orange) md:grid-cols-1">
          <div className="z-50 col-span-full row-span-full flex items-center justify-center px-6">
            <div className="max-w-xl space-y-4">
              <h1 className="font-playfair text-3xl md:text-5xl">
                Shop smarter. <br /> Waste less.
              </h1>
              <p className="text-sm md:text-base">
                Find dine favoritprodukter på tværs af kategorier og brands –
                alt samlet ét sted.
              </p>
            </div>
          </div>

          <div className="col-span-full row-span-full">
            <Image
              src="/hero.webp"
              alt="Hero image"
              width={1200}
              height={900}
              className="w-full object-cover"
            />
          </div>
        </section>

        <section className="flex items-center justify-center p-10">
          <h2 className="font-(family-name:--font-playfair-display) text-7xl text-(--orange)">
            / Products
          </h2>
        </section>

        <section className="mt-6 flex">
          <Suspense>
            <div className="flex-1">
              <ProductListContainer searchParams={searchParams} />
            </div>
          </Suspense>

          <Basket />
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
