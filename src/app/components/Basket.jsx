"use client";
import useStore from "../store/basketStore";

const Basket = () => {
  const { basketProducts, addToBasket } = useStore();

  return (
    <section>
      <ul>
        {basketProducts.map((item) => {
          console.log("in basket:", item.quantity);
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </section>
  );
};

export default Basket;
