"use client";
import Image from "next/image";
import Link from "next/link";
import useStore from "@/app/store/basketStore";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Basket = () => {
  const { basketProducts, removeFromBasket, addToBasket } = useStore();

  const totalPrice = Number(
    basketProducts
      .reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0)
      .toFixed(2),
  );

  return (
    <main className="flex flex-col items-center px-4 py-10">
      <h1 className="mb-10 text-5xl">Your Basket</h1>

      <div className="w-full max-w-4xl">
        {/* menu */}
        <div className="grid grid-cols-6 pb-4 font-medium text-(--orange)">
          <span className="">QTY</span>
          <span className="col-span-3">Item</span>
          <span className="">Category</span>
          <span className="text-right">Price</span>
        </div>

        {/* empty basket */}
        {basketProducts.length === 0 && (
          <p className="py-10 text-center"> Your basket is empty</p>
        )}

        {/* productrow */}
        {basketProducts.map((item) => {
          return (
            <div
              key={item.id}
              className="grid grid-cols-6 border-b border-(--grey) py-6"
            >
              <div className="flex items-center gap-4">
                <button onClick={() => addToBasket(item)}>
                  <FaPlus size={13} />
                </button>
                <span className="cursor-pointer font-medium hover:underline">
                  {item.quantity}
                </span>
                <button onClick={() => removeFromBasket(item.id)}>
                  <FaMinus size={13} />
                </button>
              </div>
              <div className="col-span-3 flex items-center gap-4">
                {item.thumbnail && (
                  <div>
                    <Link
                      href={`/detail/${item.id}`}
                      className="flex items-center gap-4"
                    >
                      {item.thumbnail && (
                        <Image
                          src={item.thumbnail}
                          width={64}
                          height={64}
                          alt={item.title}
                          className="cursor-pointer rounded-md border border-(--orange)"
                        />
                      )}

                      <span className="cursor-pointer font-medium hover:underline">
                        {item.title}
                      </span>
                    </Link>
                  </div>
                )}
              </div>

              {/* category */}
              <div className="">{item.category}</div>

              {/* price */}
              <div className="text-right">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          );
        })}

        {/* total sum */}

        <div className="grid grid-cols-6 py-4 text-xl font-semibold text-(--orange)">
          <span className="col-start-5">Total</span>
          <span className="text-right">${totalPrice}</span>
        </div>
      </div>

      <div className="mt-8 flex w-full justify-center">
        <button className="cursor-pointer rounded-full bg-(--orange) px-10 py-3 text-xl font-medium text-white transition hover:opacity-90">
          Checkout
        </button>
      </div>

      <Link href="/">
        <p className="mt-8 cursor-pointer text-center text-(--orange) underline">
          Continue shopping
        </p>
      </Link>
    </main>
  );
};

export default Basket;
