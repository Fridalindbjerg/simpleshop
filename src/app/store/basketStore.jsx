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
        const currentProducts = get().basketProducts;
        const basketProduct = {
          ...product,
        };

        // const productExists =
        //   currentProducts.filter(
        //     (currentProduct) => currentProduct.id == product.id,
        //   ).length > 0
        //     ? true
        //     : false;

        set({
          basketProducts: [...currentProducts, basketProduct],
        });
      },
      removeFromBasket: (product) => {
        const current = get().basketProducts;
        set({
          basketProducts: current.filter(
            (inBasket) => inBasket.id !== product.id,
          ),
        });
      },
    }),
    {
      name: "basket-storage",
    },
  ),
);

export default useStore;
