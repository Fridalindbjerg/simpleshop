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
      className="bg-green-200 p-2 rounded cursor-pointer"
    >
      Læg i kurv
    </button>
  );
};

export default ProductCard;
