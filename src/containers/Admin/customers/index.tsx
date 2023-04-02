import AdminLayout from "@/layouts/admin";
import { List } from "antd";
import CustomerCard, { CustomerCardProps } from "./customerCard";
import CustomerDetailedModal from "./DetailedModal";
import Header from "./Header";
import { useCustomer } from "./useCustomer";
import { api } from "@/utils/api";
import AddCustomerDrawer from "./AddCustomerDrawer";
import LoadingContainer from "@/components/LoadingContainer";

const DummyCustomerCard: CustomerCardProps[] = [
  {
    name: "Marques",
    age: 19,
    totalPurchase: 2,
    totalValue: 2999,
    pointsEarned: 240,
    walkedOut: 1,
  },
  {
    name: "Shafi",
    age: 19,
    totalPurchase: 2,
    totalValue: 2999,
    pointsEarned: 240,
    walkedOut: 1,
  },
];

const CustomersContainer = () => {
  const { setCustomerDetailsModalVisible, setCustomerDetails, searchText } =
    useCustomer();
  // trpc query to get all customers
  const { data, isLoading } = api.customers.getAll.useQuery({
    search: searchText,
  });

  return (
    <AdminLayout page="Customers">
      <div className="flex w-full flex-col gap-6 px-6 py-8">
        <Header />
        {isLoading ? (
          <LoadingContainer />
        ) : (
          <List
            grid={{ gutter: 1, column: 3 }}
            dataSource={data}
            // set pagination to bottom of the list, 100vh is the height of the page
            pagination={{
              pageSize: 14,
              total: DummyCustomerCard.length,
              showSizeChanger: false,
              showTotal: (total) => `Total ${total} items`,
              position: "bottom",
              align: "center",
            }}
            renderItem={(item) => (
              <List.Item
                onClick={() => {
                  setCustomerDetails(item);
                  setCustomerDetailsModalVisible(true);
                }}
              >
                <CustomerCard data={item} />
              </List.Item>
            )}
          />
        )}
      </div>
      <CustomerDetailedModal />
      <AddCustomerDrawer />
    </AdminLayout>
  );
};

export default CustomersContainer;
