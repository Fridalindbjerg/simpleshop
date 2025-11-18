"use client";
import useStore from "../store/basketStore";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Basket = () => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();

  const totalPrice = Number(
    basketProducts
      .reduce((sum, item) => sum + Number(item.price), 0)
      .toFixed(2),
  );

  return (
    <section className="sticky top-20 h-screen max-w-md self-start bg-(--orange) p-8 text-(--cream)">
      <h2 className="text-center text-2xl">Your Cart</h2>
      {basketProducts.length === 0 ? (
        <p className="m-10 flex justify-center"> Your basket is empty</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {basketProducts.map((item, index) => {
            // console.log("in basket:", item.quantity);
            return (
              <li className="border-b border-(--cream) pt-4" key={index}>
                <div className="grid grid-cols-4 gap-2">
                  <div className="flex place-items-center gap-2">
                    <div
                      className="text-2xl leading-none font-light"
                      onClick={() => removeFromBasket(item.id)}
                    >
                      <FaMinus size={11} />
                    </div>

                    <span className="truncate text-right">{item.quantity}</span>
                    <div
                      className="text-2xl leading-none font-light"
                      onClick={() => addToBasket(item)}
                    >
                      <FaPlus size={11} />
                    </div>
                  </div>
                  <span className="col-span-2 truncate overflow-hidden text-ellipsis">
                    {item.title}
                  </span>

                  <span className="text-right whitespace-nowrap">
                    $ {(item.price * item.quantity).toFixed(2)}
                  </span>
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
