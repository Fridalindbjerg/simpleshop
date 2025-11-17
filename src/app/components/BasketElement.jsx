"use client";
import useStore from "../store/basketStore";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const ProductCard = ({ productDetails }) => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();
  console.log("in basket:", basketProducts);

  const isInBasket = basketProducts.some(
    (product) => product.id === productDetails.id,
  );

  return (
    <div>
      {isInBasket ? (
        <Link
          href="/basket"
          className="flex justify-between rounded-full border border-(--orange) bg-(--cream) px-6 py-3 text-(--orange)"
        >
          <p>Added to basket</p>
          <div className="text-2xl leading-none font-light">
            <IoIosArrowForward />
          </div>
        </Link>
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
