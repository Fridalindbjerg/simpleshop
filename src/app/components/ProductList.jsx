import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
// import FavoriteElement from "./FavoriteElement";
import { Suspense } from "react";

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
    <Link
      key={product.id}
      href={`/details/${product.id}`}
      className="rounded-lg shadow-md"
    >
      <div className="relative">
        {/* <FavoriteElement id={product.id} /> */}

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
          <h2 className="text-sm font-bold">{product.title}</h2>
          <h3 className="text-xs font-thin text-gray-500">{product.price}</h3>
        </div>
        <h3 className="text-xs font-thin text-gray-500">
          {product.brand ? product.brand : "Unknown"}
        </h3>
      </div>
    </Link>
  ));
};

export default ProductList;
