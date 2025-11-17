"use client";
import useStore from "../store/basketStore";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const ProductCard = ({ productDetails }) => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();
  console.log("in basket:", basketProducts);

  const isInBasket = basketProducts.find(
    (product) => product.id === productDetails.id,
  );
  const quantity = isInBasket?.quantity || 0;

  return (
    <div>
      {isInBasket ? (
        <div className="flex justify-between rounded-full border border-(--orange) bg-(--cream) px-6 py-3 text-(--orange)">
          <Link href="/basket" className="hover:underline">
            <p>Added to basket ({quantity})</p>
          </Link>
          <div className="flex place-items-center gap-4">
            <div
              className="text-2xl leading-none font-light"
              onClick={() => removeFromBasket(productDetails.id)}
            >
              <FaMinus size={17} />
            </div>
            <div
              className="text-2xl leading-none font-light"
              onClick={() => addToBasket(productDetails)}
            >
              <FaPlus size={17} />
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => addToBasket(productDetails)}
          className="flex w-full cursor-pointer items-center justify-between rounded-full bg-(--orange) px-6 py-3 text-base text-(--cream)"
        >
          <span>Add to basket</span>
          <span className="text-2xl leading-none font-light">+</span>
        </button>
      )}
    </div>
  );
};

export default ProductCard;
