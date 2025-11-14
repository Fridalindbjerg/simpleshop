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
    <div key={product.id} className="group flex h-full flex-col">
      <div className="grid bg-[#efede7]">
        <Image
          loading="eager"
          className="col-start-1 row-start-1 h-64 w-full object-contain"
          src={product.thumbnail}
          width={300}
          height={200}
          alt={product.title}
        />

        <div className="col-start-1 row-start-1 mx-2 mb-2 translate-y-4 self-end opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <BasketElement productDetails={product} />
        </div>
      </div>

      <div>
        <Link
          href={`/detail/${product.id}`}
          className="flex flex-col gap-1 pt-3 pb-3"
        >
          <h3 className="text-sm">
            {product.brand ? product.brand : "Unknown"}
          </h3>

          <h2 className="truncate text-xl">{product.title}</h2>

          <h3 className="mt-auto text-sm">${product.price}</h3>
        </Link>
      </div>
    </div>
  ));
};

export default ProductList;
