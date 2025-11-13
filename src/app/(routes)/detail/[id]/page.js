import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
// import FavoritElement from "@/app/components/FavoriteElement";

async function Detail({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();
  console.log(product);

  const reviews = product.reviews ?? [];

  //   const avgRating =
  //     reviews.length > 0
  //       ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  //       : 0;

  return (
    <main className="m-4">
      <div>
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        / {product.title}
        <Image
          loading="eager"
          alt="product image"
          src={product.images[0]}
          width={300}
          height={200}
          className="rounded object-cover"
        />
        <h1>{product.title}</h1>
        <p>Brand: {product.brand}</p>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </div>

      <section>
        <div>
          <h2>Reviews</h2>

          {/* <div className="flex items-center gap-2">
            <StarRating rating={avgRating} size={26} />
            {reviews.length > 0 && (
              <span className="text-sm text-sky-700">
                {avgRating.toFixed(1)} · {reviews.length} reviews
              </span>
            )}
          </div> */}
        </div>

        <div>
          {reviews.map((review) => (
            <div key={review.reviewerEmail}>
              <StarRating rating={review.rating} />
              <p>{review.reviewerName}</p>
              <p>{review.date}</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// function StarRating({ rating, size = 20 }) {
//   const stars = Array.from({ length: 5 }, (_, i) => (
//     <FaStar
//       key={i}
//       size={size}
//       className={i < Math.round(rating) ? "text-sky-400" : "text-sky-200"}
//     />
//   ));
//   return <div className="flex gap-1">{stars}</div>;
// }

function StarRating({ rating, size = 20 }) {
  const count = Math.round(rating);

  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <FaStar key={i} size={size} className="text-sky-400" />
      ))}
    </div>
  );
}

export default Detail;
