import AdminLayout from "@/layouts/admin";
import { api } from "@/utils/api";
import { Table } from "antd";
import { useState } from "react";
import MetricsCard, { MetricsCardProps } from "../dashboard/MetricsCard";
import AddBillDrawer from "./AddBillDrawer";
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
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Bill Date",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName",
  },
  {
    title: "Total Products",
    dataIndex: "number_of_items",
    key: "number_of_items",
  },
  {
    title: "Total Amount",
    dataIndex: "bill_amount",
    key: "bill_amount",
  },
  {
    title: "Discounted Amount",
    dataIndex: "discounted_amount",
    key: "discounted_amount",
  },
  {
    title: "Payment Method",
    dataIndex: "payment_method",
    key: "payment_method",
  },
  {
    title: "Points Redeemed",
    dataIndex: "points_redeemed",
    key: "points_redeemed",
  },
  {
    title: "Points Earned",
    dataIndex: "points_earned",
    key: "points_earned",
  },
];

const BillingContainer = () => {
  const { data, isLoading } = api.bills.getAllBills.useQuery();

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
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
      <AddBillDrawer />
    </AdminLayout>
  );
};

export default BillingContainer;
