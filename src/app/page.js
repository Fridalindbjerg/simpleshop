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

      <main className="bg-var(--cream)">
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src="/hero.webp"
            alt="Hero image"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-8 max-w-xl rounded-3xl bg-(--cream)/80 p-8 text-(--orange) shadow-2xl md:mx-24">
              <h1 className="font-playfair text-3xl md:text-5xl">
                Shop smarter. <br /> Waste less.
              </h1>

              <p className="mt-4 text-sm md:text-base">
                Find dine favoritprodukter på tværs af kategorier og brands –
                alt samlet ét sted.
              </p>

              <button className="mt-6 rounded-full bg-(--orange) px-6 py-2 text-sm font-medium text-white shadow-md">
                Browse products
              </button>
            </div>
          </div>
        </section>

        <section className="flex items-center justify-center p-10">
          <h2 className="font-(family-name:--font-playfair-display) text-7xl">
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
