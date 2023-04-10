import AdminLayout from "@/layouts/admin";
import Header from "./Header";
import { api } from "@/utils/api";
import { List } from "antd";

const ReviewsContainer = () => {
  const { data, isLoading } = api.reviews.getAllTextReviews.useQuery();
  return (
    <AdminLayout page="Reviews">
      <div className="flex w-full flex-col gap-6 px-6 py-8">
        <Header />
        <h1>Reviews</h1>
        <List
          grid={{ gutter: 1, column: 3 }}
          dataSource={data}
          // set pagination to bottom of the list, 100vh is the height of the page
          pagination={{
            pageSize: 14,
            total: data?.length,
            showSizeChanger: false,
            showTotal: (total) => `Total ${total} items`,
            position: "bottom",
            align: "center",
          }}
          renderItem={(item) => (
            <List.Item>
              <div className="flex flex-col gap-2">
                <h1>{item.stars}</h1>
                <p>{item.review}</p>
              </div>
            </List.Item>
          )}
        />
      </div>
    </AdminLayout>
  );
};

export default ReviewsContainer;
