import { create } from "zustand";
import { persist } from "zustand/middleware";

// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!
// HUSK AT INSTALLERE ZUSTAND MED: npm install zustand For at kunne bruge denne store!

const useStore = create(
  persist(
    (set, get) => ({
      basketProducts: [],

      addToBasket: (product) => {
        const current = get().basketProducts;
        set({
          basketProducts: [...current, product],
          totalPrice: get().totalPrice + product.price,
        });
      },

      removeFromBasket: (id) => {
        const current = get().basketProducts;
        set({ basketProducts: current.filter((item) => item.id !== id) });

        set({
          basketProducts: updatedBasket,
          totalPrice: get().totalPrice - itemToRemove.price,
        });
      },
    }),


    {
      name: "basket-storage",
    },
  ),
);

export default useStore;


const addToBasket = (product) => {
  // Logic to add item to the cart
  setBasketItems([...basketProducts, item]);

  // Logic to update the total price
  setTotalPrice(totalPrice + item.price);
}

const removeFromBasket = (products) => {
  // Logic to remove item from the cart
  const updatedBasketItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
  setCartItems(updatedCartItems);

  // Logic to update the total price
  setTotalPrice(totalPrice - item.price);
}