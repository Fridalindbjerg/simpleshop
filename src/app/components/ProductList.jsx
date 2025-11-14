import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
// import FavoriteElement from "./FavoriteElement";
import { Suspense } from "react";
import BasketElement from "./BasketElement";

const ProductList = ({ category }) => {
  return (
    <Suspense>
      <FetchProduct category={category} />
    </Suspense>
  );
};

const FetchProduct = async ({ category }) => {
  "use server";

  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : "https://dummyjson.com/products";

  const response = await fetch(url);

  const { products } = await response.json();

  return products.map((product) => (
    <div key={product.id} className="rounded-lg shadow-md">
      <div className="relative">
        <BasketElement productDetails={product} />

        <Image
          loading="eager"
          className="h-auto max-w-full rounded-lg"
          src={product.thumbnail}
          width={300}
          height={200}
          alt={product.title}
        ></Image>
        <div className="absolute top-1 right-3 rounded-full bg-black/40 p-1">
          <CiStar size={20} color="black" />
        </div>
      </div>
      <div className="p-2">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold">
            <Link href={`/details/${product.id}`}>{product.title}</Link>
          </h2>
          <h3 className="text-xs font-thin text-gray-500">{product.price}</h3>
        </div>
        <h3 className="text-xs font-thin text-gray-500">
          {product.brand ? product.brand : "Unknown"}
        </h3>
      </div>
    </div>
  ));
};

export default ProductList;
