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
      className="flex w-full cursor-pointer items-center justify-between rounded-full bg-[var(--orange)] px-6 py-3 text-base text-[var(--cream)]"
    >
      <span>Add to Cart</span>
      <span className="text-2xl leading-none font-light">+</span>
    </button>
  );
  if (basketProducts.includes(id)) {
    console.log("Favorite:", id);
    return <MdFavorite onClick={() => toggleFavorite(id)} />;
  } else {
    console.log("Not Favorite:", id);
    return <MdFavoriteBorder onClick={() => toggleFavorite(id)} />;
  }
};

export default ProductCard;
