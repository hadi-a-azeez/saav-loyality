import AdminLayout from "@/layouts/admin";
import Header from "./Header";

const ReviewsContainer = () => {
  return (
    <AdminLayout page="Reviews">
      <div className="flex w-full flex-col gap-6 px-6 py-8">
        <Header />
        <h1>Reviews</h1>
      </div>
    </AdminLayout>
  );
};

export default ReviewsContainer;
