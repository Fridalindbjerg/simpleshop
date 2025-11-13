"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="flex shrink-0 items-center gap-3 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-300"
    >
      <Image
        className="rounded-full object-cover"
        loading="eager"
        alt="cat"
        src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
        width={30}
        height={30}
      />
      {category}
    </button>
  );
};

export default CategoryElement;
