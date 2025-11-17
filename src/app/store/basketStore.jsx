import { create } from "zustand";
import { persist } from "zustand/middleware";

// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!

const useStore = create(
  persist(
    (set, get) => ({
      basketProducts: [],

      // addToBasket: (product) => {
      //   const current = get().basketProducts;
      //   set({
      //     basketProducts: [...current, product],
      //     totalPrice: get().totalPrice + product.price,
      //   });
      // },

      addToBasket: (product) => {
        const current = get().basketProducts;

        // Tjek om produktet allerede findes i kurven
        const existingIndex = current.findIndex((p) => p.id === product.id);

        let updatedBasket;
        if (existingIndex !== -1) {
          // Produkt findes, øg quantity
          updatedBasket = current.map((p, i) =>
            i === existingIndex ? { ...p, quantity: (p.quantity || 1) + 1 } : p,
          );
        } else {
          // Produkt findes ikke, tilføj med quantity 1
          updatedBasket = [...current, { ...product, quantity: 1 }];
        }

        // Opdater state
        set({
          basketProducts: updatedBasket,
          totalPrice: get().totalPrice + product.price,
        });
      },

      // removeFromBasket: (id) => {
      //   const current = get().basketProducts;
      //   set({ basketProducts: current.filter((item) => item.id !== id) });

      // },

      removeFromBasket: (id) => {
        const current = get().basketProducts;

        const updatedBasket = current
          .map((item) => {
            if (item.id === id) {
              // Reducer quantity med 1
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0); // Fjern produkter med 0 quantity

        // Opdater state
        set({
          basketProducts: updatedBasket,
          totalPrice:
            get().totalPrice - current.find((item) => item.id === id).price,
        });
      },
    }),

    {
      name: "basket-storage",
    },
  ),
);

export default useStore;

// const addToBasket = (product) => {
//   // Logic to add item to the cart
//   setBasketItems([...basketProducts, item]);

//   // Logic to update the total price
//   setTotalPrice(totalPrice + item.price);
// };

// const removeFromBasket = (products) => {
//   // Logic to remove item from the cart
//   const updatedBasketItems = cartItems.filter(
//     (cartItem) => cartItem.id !== item.id,
//   );
//   setCartItems(updatedCartItems);

//   // Logic to update the total price
//   setTotalPrice(totalPrice - item.price);
// };
