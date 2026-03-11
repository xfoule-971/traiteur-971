import RatingStars from "./RatingStars";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card bg-light px-3 py-4 rounded">
      <div className="review-header">
        <strong>{review.userName}</strong>
        <RatingStars rating={review.rating} />
      </div>
      <p className="review-comment">"{review.comment}"</p>
      <span className="review-date">{review.date}</span>
    </div>
  );
};
export default ReviewCard;