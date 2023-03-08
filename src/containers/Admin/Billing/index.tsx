import AdminLayout from "@/layouts/admin";
import { Table } from "antd";
import MetricsCard, { MetricsCardProps } from "../dashboard/MetricsCard";
import Header from "./Header";

const DummyMetricsCards: MetricsCardProps[] = [
  {
    title: "Bills Today",
    value: 3,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Bills Total",
    value: 289,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Revenue Today",
    value: 103,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Revenue Total",
    value: 100,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
];

const billsData = [
  {
    id: 1,
    billNumber: "B-0001",
    billDate: "2021-01-01",
    customerName: "John Doe",
    totalProducts: 3,
    totalAmount: 100,
    status: "paid",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    paymentMode: "cash",
  },
  {
    id: 2,
    billNumber: "B-0001",
    billDate: "2021-01-01",
    customerName: "John Doe",
    totalProducts: 3,
    totalAmount: 100,
    status: "paid",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    paymentMode: "cash",
  },
  {
    id: 3,
    billNumber: "B-0001",
    billDate: "2021-01-01",
    totalProducts: 3,
    customerName: "John Doe",
    totalAmount: 100,
    status: "paid",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    paymentMode: "cash",
  },
  {
    id: 4,
    billNumber: "B-0001",
    billDate: "2021-01-01",
    customerName: "John Doe",
    totalProducts: 3,
    totalAmount: 100,
    status: "paid",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    paymentMode: "cash",
  },
  {
    id: 5,
    billNumber: "B-0001",
    billDate: "2021-01-01",
    customerName: "John Doe",
    totalProducts: 3,
    totalAmount: 100,
    status: "paid",
    createdAt: "2021-01-01",
    updatedAt: "2021-01-01",
    paymentMode: "cash",
  },
];

const columns = [
  {
    title: "Bill Number",
    dataIndex: "billNumber",
    key: "billNumber",
  },
  {
    title: "Bill Date",
    dataIndex: "billDate",
    key: "billDate",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Total Products",
    dataIndex: "totalProducts",
    key: "totalProducts",
  },
  {
    title: "Total Amount",
    dataIndex: "totalAmount",
    key: "totalAmount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Payment Mode",
    dataIndex: "paymentMode",
    key: "paymentMode",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];

const BillingContainer = () => {
  return (
    <AdminLayout page="Billing">
      <div className="flex w-full flex-col gap-6 px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          {DummyMetricsCards.map((card, index) => (
            <MetricsCard key={index} {...card} />
          ))}
        </div>
        <Header />
        <Table
          dataSource={billsData}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </AdminLayout>
  );
};

export default BillingContainer;
