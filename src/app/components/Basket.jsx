"use client";
import useStore from "../store/basketStore";
import Link from "next/link";

const Basket = () => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();

  const totalPrice = basketProducts.reduce(
    (sum, item) => sum + Number(item.price),
    0,
  );

  //   1.Filtrer på de individuelle produkter i kurven for at få længden af arrayet (som er kvantiteten)
  //   2.Vis denne længde i BasketButton komponenten ved siden af "Kurv" teksten
  // 3. Lav en const DisplayProducts som er basketProducts forkortet til kun at vise hvert individuelt produkt 1 gang
  return (
    <section className="max-w-xl bg-(--orange) p-4 text-(--cream)">
      <h2 className="text-center text-2xl font-semibold">Your Cart</h2>
      {basketProducts.length === 0 ? (
        <p className="m-10 flex justify-center"> Your basket is empty</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {basketProducts.map((item) => {
            console.log("in basket:", item.quantity);
            return (
              <li
                className="flex items-center border-b border-(--cream) pt-4"
                key={item.id}
              >
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="pr-6 text-2xl"
                >
                  ×
                </button>
                <div className="flex w-full justify-between">
                  <span className="">{item.title}</span>
                  <span className="">$ {item.price}</span>
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
      <button
        href="/basket"
        className="mx-auto flex rounded-full border border-(--orange) bg-(--cream) px-8 py-2 text-(--orange) hover:cursor-pointer hover:border-(--cream) hover:bg-(--orange) hover:text-(--cream)"
      >
        Go to cart
      </button>
    </section>
  );
};

export default Basket;
