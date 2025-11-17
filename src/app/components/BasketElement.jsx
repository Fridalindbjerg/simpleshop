"use client";
import useStore from "../store/basketStore";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ productDetails }) => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();
  console.log("in basket:", basketProducts);

  return (
    <button
      onClick={() => addToBasket(productDetails)}
      className="flex w-full cursor-pointer items-center justify-between rounded-full bg-(--orange) px-6 py-3 text-base text-(--cream)"
    >
      <span>Add to Cart</span>
      <span className="text-2xl leading-none font-light">+</span>
    </button>
  );
};

export default ProductCard;
