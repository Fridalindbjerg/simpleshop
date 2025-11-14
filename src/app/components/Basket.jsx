"use client";
import useStore from "../store/basketStore";

const Basket = () => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();

  const totalPrice = basketProducts.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  //   1.Filtrer på de individuelle produkter i kurven for at få længden af arrayet (som er kvantiteten)
  //   2.Vis denne længde i BasketButton komponenten ved siden af "Kurv" teksten
  // 3. Lav en const DisplayProducts som er basketProducts forkortet til kun at vise hvert individuelt produkt 1 gang
  return (
    <section className="w-full max-w-sm border-2 border-gray-400 rounded-xl bg-white shadow-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">
        Din kurv
      </h2>
      {basketProducts.length === 0 ? (
        <p className="text-gray-600 italic text-sm">🛒 Din kurv er tom</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {basketProducts.map((item) => {
            console.log("in basket:", item.quantity);
            return (
              <li className="flex justify-between py-2"
                key={item.id}>
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="text-black-500 font-bold hover:text-black-700 cursor-pointer"
                >
                  ×
                </button>
                <div className="flex flex-col">
                  <span>{ }</span>
                  <span className="flex font-medium text-gray-800 ml-2">{item.title}</span>
                </div>
                <span className="font-semibold text-gray-500">
                  ${item.price}
                </span>
              </li>
            );
          })}
          <div className="flex justify-between font-semibold mt-6">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </ul>
      )
      }
      <button className="w-full mt-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 rounded-lg border border-gray-400 transition cursor-pointer">
        Gå til betaling
      </button>
    </section >
  );
};

export default Basket;
