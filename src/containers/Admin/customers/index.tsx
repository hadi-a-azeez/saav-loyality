import AdminLayout from "@/layouts/admin";
import { List } from "antd";
import CustomerCard, { CustomerCardProps } from "./customerCard";

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
  return (
    <AdminLayout page="Customers">
      <div className="flex w-full flex-col px-6 py-8">
        <List
          grid={{ gutter: 16, column: 3 }}
          dataSource={DummyCustomerCard}
          // pagination
          pagination={{
            pageSize: 1,
            total: DummyCustomerCard.length,
            showSizeChanger: false,
            showTotal: (total) => `Total ${total} items`,
            position: "bottom",
            align: "center",
          }}
          renderItem={(item) => (
            <List.Item>
              <CustomerCard {...item} />
            </List.Item>
          )}
        />
      </div>
    </AdminLayout>
  );
};

export default CustomersContainer;
