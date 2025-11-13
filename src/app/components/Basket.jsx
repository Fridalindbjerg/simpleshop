"use client";
import useStore from "../store/basketStore";

const Basket = () => {
  const { basketProducts, addToBasket } = useStore();

//   1.Filtrer på de individuelle produkter i kurven for at få længden af arrayet (som er kvantiteten)
//   2.Vis denne længde i BasketButton komponenten ved siden af "Kurv" teksten
// 3. Lav en const DisplayProducts som er basketProducts forkortet til kun at vise hvert individuelt produkt 1 gang
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
