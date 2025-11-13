"use client";
import useStore from "../store/basketStore";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ productDetails }) => {
  const { basketProducts, addToBasket } = useStore();
  console.log("in basket:", basketProducts);

  return (
    <button className="z-10" onClick={() => addToBasket(productDetails)}>
      Add to basket
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
