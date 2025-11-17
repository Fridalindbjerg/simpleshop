import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

async function Detail({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  const reviews = product.reviews ?? [];

  return (
    <main className="">
      <div className="flex">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        / {product.title}
      </div>
      <div className="mx-4 grid grid-cols-2">

        <Image
          loading="eager"
          alt="product image"
          src={product.images[0]}
          width={700}
          height={700}
          className="rounded bg-(--grey) object-cover"
        />
        <div>
          <div className="mx-8 flex flex-col gap-4">
            <h1 className="text-5xl">{product.title}</h1>
            <p className="">{product.brand}</p>
            <ul className="flex gap-2">
              {product.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline rounded-full border px-6 py-2 text-xs"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <p>{product.description}</p>

            <div className="flex flex-wrap gap-2">
              <div className="flex flex-col">
                <p className="text-xs">
                  {/* <p className="w-fit rounded-full border px-6 py-2"> */}
                  ID: {product.id}
                </p>
                <p className="mb-8 text-xs">
                  {/* <p className="w-fit rounded-full border px-6 py-2"> */}
                  WEIGHT: {product.weight}
                </p>
                <div className="flex justify-between rounded-full border bg-(--orange) px-6 py-2 text-(--cream)">
                  <p className="text-2xl">${product.price}</p>
                  <button className="text-2xl">Add to Basket</button>
                </div>
              </div>
            </div>

            <div className="col-start-2">
              <h2 className="mb-8 text-4xl">Reviews</h2>
              {reviews.map((review) => (
                <div
                  className="mb-8 flex flex-col gap-2"
                  key={review.reviewerEmail}
                >
                  <div className="flex justify-between gap-4">
                    <div className="flex gap-2">
                      <p>{review.reviewerName}</p>
                      <StarRating rating={review.rating} color="" />
                    </div>
                    <p className="flex items-center text-xs">{review.date}</p>
                  </div>

                  <p className="">"{review.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function StarRating({ rating, size = 20 }) {
  const count = Math.round(rating);

  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} size={size} className="var(--orange)" />
      ))}
    </div>
  );
}

export default Detail;
