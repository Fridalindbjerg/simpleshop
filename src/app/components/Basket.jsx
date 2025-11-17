"use client";
import useStore from "../store/basketStore";
import Link from "next/link";

const Basket = () => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();

 

  const totalPrice = Number(
    basketProducts
      .reduce((sum, item) => sum + Number(item.price), 0)
      .toFixed(2),
  );

  return (
    <section className="bg-(--orange) p-4 text-(--cream)">
      <h2 className="text-center text-2xl font-semibold">Your Cart</h2>
      {basketProducts.length === 0 ? (
        <p className="m-10 flex justify-center"> Your basket is empty</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {basketProducts.map((item, index) => {
            // console.log("in basket:", item.quantity);
            return (
              <li
                className="flex items-center border-b border-(--cream) pt-4"
                key={index}
              >
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="pr-6 text-2xl"
                >
                  ×
                </button>
                <div className="flex w-full justify-between gap-6">
                  <span className="truncate">{item.title}</span>
                  <span className="whitespace-nowrap">$ {item.price}</span>
                </div>
              </li>
            );
          })}
          <div className="mb-8 flex justify-end gap-4">
            <span>Total</span>
            <span>$ {totalPrice}</span>
          </div>
        </ul>
      )}
      <div className="flex">
        <Link
          href="/basket"
          className="mx-auto block rounded-full border border-(--orange) bg-(--cream) px-8 py-2 text-(--orange) hover:cursor-pointer hover:border-(--cream) hover:bg-(--orange) hover:text-(--cream)"
        >
          Go to basket
        </Link>
      </div>
    </section>
  );
};

export default Basket;
