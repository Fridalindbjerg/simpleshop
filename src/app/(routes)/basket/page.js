"use client";
import Image from "next/image";
import useStore from "@/app/store/basketStore";

const Basket = () => {
    const { basketProducts, removeFromBasket } = useStore();

    const totalPrice = basketProducts.reduce(
        (sum, item) => sum + Number(item.price),
        0
    );

    return (
        <main className="w-full min-h-screen flex flex-col items-center py-10 px-4">
            <h1 className="mb-10">Your Basket</h1>

            <div className="w-full max-w-5xl rounded-xl p-10">

                {/* TABLE HEADERS */}
                <div className="flex pb-4 text-(--orange) font-medium">
                    <span className="flex-[2]">Item</span>
                    <span className="flex-[1] text-center">Category</span>
                    <span className="w-20 text-right">Price</span>
                </div>

                {/* EMPTY STATE */}
                {basketProducts.length === 0 && (
                    <p className=" py-10 text-center">
                        🛒 Your basket is empty
                    </p>
                )}

                {/* FULL PRODUCT ROW — EVERYTHING INSIDE MAP */}
                {basketProducts.map((item) => {
                    const qty = item.quantity || 1;

                    return (
                        <div
                            key={item.id}
                            className="grid grid-cols-12 items-center py-6 border-b border-(--grey)"
                        >
                            {/* ITEM + IMAGE + TITLE + QTY + REMOVE */}
                            <div className="col-span-6 flex gap-4 items-center">
                                {item.thumbnail && (
                                    <Image
                                        src={item.thumbnail}
                                        width={64}
                                        height={64}
                                        alt={item.title}
                                        className="rounded-md border border-(--orange)"
                                    />
                                )}

                                <div className="flex flex-col ">
                                    <span className="font-medium">{item.title}</span>

                                    {/* Remove button */}
                                    <div className="flex items-center justify-center mt-2 border rounded-full w-5 h-5">
                                        <button
                                            onClick={() => removeFromBasket(item.id)}
                                            className="text-[var(--orange)] text-lg leading-none cursor-pointer"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* category */}
                            <div className="col-span-3 text-right">
                                {item.category}
                            </div>

                            {/* PRICE */}
                            <div className="col-span-3 text-right">
                                ${item.price}
                            </div>
                        </div>
                    );
                })}

                {/* TOTALS */}
                <div className="w-full flex justify-end mt-10">
                    <div className="w-64 text-lg">
                        <div className="flex justify-between py-2 border-b border-(--grey)">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-4 text-[var(--orange)] font-semibold text-xl">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* CHECKOUT BUTTON */}
            <div className="w-full flex justify-center mt-8">
                <button className="bg-[var(--orange)] text-white font-medium text-xl px-10 py-3 rounded-full hover:opacity-90 transition cursor-pointer">
                    Checkout
                </button>
            </div>

            {/* CONTINUE SHOPPING */}
            <p className="text-center text-[var(--orange)] mt-4 underline cursor-pointer">
                Continue shopping
            </p>
        </main>
    );
};

export default Basket;
