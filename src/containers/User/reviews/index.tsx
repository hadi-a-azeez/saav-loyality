import ImageReview from "@/components/Reviews/ImageReview";
import TextReview from "@/components/Reviews/TextReview";
import UserLayout from "@/layouts/user";

const ReviewsContainer = () => {
  return (
    <UserLayout page="Reviews">
      <div className="px-5">
        <TextReview />
        <ImageReview />
      </div>
    </UserLayout>
  );
};

export default ReviewsContainer;
