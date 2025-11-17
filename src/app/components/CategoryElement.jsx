"use client";
import { useRouter } from "next/navigation";

const CategoryElement = ({ category }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`?category=${category}`)}
      className="p-0 text-left text-2xl leading-tight hover:underline"
    >
      {category}
    </button>
  );
};

export default CategoryElement;
