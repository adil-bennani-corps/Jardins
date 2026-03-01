"use client";

import { useEffect, useState } from "react";
import { ReviewCarousel } from "@/components/social/ReviewCarousel";
import type { Review } from "@/components/social/ReviewCarousel";

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.reviews || []))
      .catch(() => setReviews([]));
  }, []);

  const avgRating = reviews.length
    ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  return (
    <>
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="text-3xl font-bold text-amber-500">{avgRating}</span>
        <span className="text-2xl text-amber-400">★★★★★</span>
      </div>
      <section className="mx-auto mt-12 max-w-3xl">
        <ReviewCarousel reviews={reviews} />
      </section>
    </>
  );
}
