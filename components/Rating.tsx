import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../utils/caluculateReviewRatingAverage";
import Stars from "./Stars";

export default function Rating({ review }: { review: Review[] }) {
  const rating = calculateReviewRatingAverage(review);
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={review} />
        <p className="text-reg ml-3">{rating.toFixed(1)}</p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {review.length} Review
          {review.length <= 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}
