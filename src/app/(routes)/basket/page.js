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
      .reduce(
        (sum, item) =>
          sum + (parseFloat(item.price) || 0) * (item.quantity || 1),
        0,
      )
      .toFixed(2),
  );

  return (
    <main className="flex min-h-screen w-full flex-col items-center px-4 py-10">
      <h1 className="mb-10">Your Basket</h1>

      <div className="w-full max-w-5xl rounded-xl p-10">
        {/* menu */}
        <div className="flex pb-4 font-medium text-(--orange)">
          <span className="flex-2">Item</span>
          <span className="flex-2">QTY</span>
          <span className="flex-1 text-center">Category</span>
          <span className="w-20 text-right">Price</span>
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
              className="grid grid-cols-12 items-center border-b border-(--grey) py-6"
            >
              <div className="col-span-6 flex items-center gap-4">
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

                    <div>
                      <button onClick={() => addToBasket(item)}>
                        <FaPlus />
                      </button>
                      <span className="cursor-pointer font-medium hover:underline">
                        {item.quantity}
                      </span>
                      <button onClick={() => removeFromBasket(item.id)}>
                        <FaMinus />
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex flex-col">
                  {/* <span className="font-medium">{item.title}</span> */}

                  {/* Remove button */}
                  {/* <div className="mt-2 flex h-5 w-5 items-center justify-center rounded-full border">
                    <button
                      onClick={() => removeFromBasket(item.id)}
                      className="cursor-pointer text-lg leading-none text-(--orange)"
                    >
                      ×
                    </button>
                  </div> */}
                </div>
              </div>

              {/* category */}
              <div className="col-span-3 text-right">{item.category}</div>

              {/* price */}
              <div className="col-span-3 text-right">${item.price}</div>
            </div>
          );
        })}

        {/* total sum */}
        <div className="mt-10 flex w-full justify-end">
          <div className="w-64 text-lg">
            <div className="flex justify-between border-b border-(--grey) py-2">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-4 text-xl font-semibold text-(--orange)">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full justify-center">
        <button className="cursor-pointer rounded-full bg-(--orange) px-10 py-3 text-xl font-medium text-white transition hover:opacity-90">
          Checkout
        </button>
      </div>

      <Link href="/">
        <p className="mt-4 cursor-pointer text-center text-(--orange) underline">
          Continue shopping
        </p>
      </Link>
    </main>
  );
};

export default Basket;
