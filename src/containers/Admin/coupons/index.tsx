import AdminLayout from "@/layouts/admin";
import { useState } from "react";
import MetricsCard, { MetricsCardProps } from "../dashboard/MetricsCard";
import AddTriggerDrawer from "./AddTriggerDrawer";
import EditRedeemDrawer from "./EditRedeemDrawer";
import TriggerCard, { TriggerCardProps } from "./TriggerCard";

const DummyMetricsCards: MetricsCardProps[] = [
  {
    title: "Total Triggers",
    value: 3,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Coupon Codes",
    value: 289,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Coupons Used",
    value: 103,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Total Products",
    value: 100,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
];

const DummyTriggers: TriggerCardProps[] = [
  {
    title: "First Order",
    points: 100,
    expiry: "30 days",
    status: true,
  },
  {
    title: "Sign Up",
    points: 100,
    expiry: "30 days",
    status: true,
  },
  {
    title: "Refer a friend",
    points: 100,
    expiry: "30 days",
    status: true,
  },
];

const CouponsContainer = () => {
  const [isAddTriggerDrawerVisible, setIsAddTriggerDrawerVisible] =
    useState(false);
  const [isEditRedeemDrawerVisible, setIsEditRedeemDrawerVisible] =
    useState(false);
  return (
    <AdminLayout page="Coupons">
      <div className="flex w-full flex-col px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          {DummyMetricsCards.map((card, index) => (
            <MetricsCard key={index} {...card} />
          ))}
        </div>
        <div className="mt-8 flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">How to Earn Points</h1>
          <button
            className="rounded-lg bg-black px-4 py-2 text-white"
            onClick={() => setIsAddTriggerDrawerVisible(true)}
          >
            Add Trigger
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {DummyTriggers.map((trigger, index) => (
            <TriggerCard key={index} {...trigger} />
          ))}
        </div>
        <div className="mt-8 flex flex-row items-center justify-between">
          <h1 className="text-xl font-bold">How to Redeem Points</h1>
          <button
            className="rounded-lg bg-black px-4 py-2 text-white"
            onClick={() => setIsEditRedeemDrawerVisible(true)}
          >
            Edit
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-between gap-3 rounded-lg bg-white py-7 px-5 shadow-metricsCard">
            <h1 className="text-lg font-semibold">
              100 points is ₹100 off on next order
            </h1>
            <p className="text-sm font-normal text-gray-500">
              Minimum order value of ₹500
            </p>
            {/* Why this is good for retention */}
            <div className="w-fit rounded-lg bg-gray-100 px-5 py-4 text-sm font-normal text-gray-900">
              Points system will help you retain customers
            </div>
          </div>
        </div>
        <AddTriggerDrawer
          visible={isAddTriggerDrawerVisible}
          onClose={() => setIsAddTriggerDrawerVisible(false)}
        />
        <EditRedeemDrawer
          visible={isEditRedeemDrawerVisible}
          onClose={() => setIsEditRedeemDrawerVisible(false)}
        />
      </div>
    </AdminLayout>
  );
};

export default CouponsContainer;
