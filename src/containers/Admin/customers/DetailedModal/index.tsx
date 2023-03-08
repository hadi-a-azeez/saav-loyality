import { Modal } from "antd";
import { useState } from "react";
import Header from "./header";
import { useCustomer } from "../useCustomer";
import Overview from "./overview";
import Walkout from "./walkout";
import OrderSummary from "./orderSummary";

const tabs = [
  {
    title: "Overview",
    key: 1,
  },
  {
    title: "Order Summary",
    key: 2,
  },
  {
    title: "Walk Out",
    key: 3,
  },
  {
    title: "Reviews",
    key: 4,
  },
];

const CustomerDetailedModal = () => {
  const { customerDetailsModalVisible, setCustomerDetailsModalVisible } =
    useCustomer();
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <Modal
      open={customerDetailsModalVisible}
      onCancel={() => {
        setCustomerDetailsModalVisible(false);
      }}
      style={{ minWidth: "540px" }}
      footer={null}
    >
      <div className="flex flex-col gap-4">
        <Header />
        <div className="flex items-center justify-start gap-3 text-xs font-medium">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`items-center-justify-center flex cursor-pointer gap-2 rounded-lg border border-gray-200 py-3 px-4 ${
                selectedTab === tab.key ? "bg-black text-white" : ""
              }`}
              onClick={() => setSelectedTab(tab.key)}
            >
              <p className="">{tab.title}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedTab === 1 && <Overview />}
      {selectedTab === 2 && <OrderSummary />}
      {selectedTab === 3 && <Walkout />}
    </Modal>
  );
};

export default CustomerDetailedModal;
