import { api } from "@/utils/api";
import { XCircleIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Drawer,
  Form,
  Input,
  DatePicker,
  Select,
  Row,
  Space,
  Alert,
  Spin,
} from "antd";
import { SelectValue } from "antd/es/select";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useBilling } from "./useBilling";

interface FormValues {
  loyalty_user_id: string;
  total_amount: string;
  number_of_items: string;
}

interface UserValue {
  label: string;
  value: string;
}

const AddBillDrawer = () => {
  const [customerSearchText, setCustomerSearchText] = useState("");
  const { addBillingDrawerVisible, setAddBillingDrawerVisible } = useBilling();
  const [debounceSearch] = useDebounce(customerSearchText, 300);
  const [selectedCustomer, setSelectedCustomer] = useState(0);
  const [totalAmount, setTotalAmount] = useState("");
  const [canPointsApply, setCanPointsApply] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [points, setPoints] = useState("");
  const [pointsError, setPointsError] = useState("");

  // fetch
  const { data: customerData, isLoading: customerDataLoading } =
    api.customers.getAll.useQuery({
      search: debounceSearch,
    });
  const { data: storePointsSystem } = api.bills.getStorePointsSystem.useQuery();
  const { data: userPointsData } = api.bills.getUserPoints.useQuery(
    {
      user_id: selectedCustomer,
    },
    {
      enabled: selectedCustomer !== 0,
    }
  );
  const { data: Triggers } = api.coupons.getAllCoupons.useQuery();

  useEffect(() => {
    // points can only apply if the total amount is greater than the minimum order amount
    // and the user has userPointsData > storePointSystem.points
    // and the user has selected a customer
    // set the canPointsApply to true if all the above conditions are met and false otherwise and appropriate message
    if (Number(totalAmount) > (storePointsSystem?.minimum_order_amount || 0)) {
      if ((userPointsData || 0) >= (storePointsSystem?.points || 0)) {
        if (selectedCustomer !== 0) {
          setCanPointsApply(true);
          setErrorMessage("");
        } else {
          setCanPointsApply(false);
          setErrorMessage("Please select a customer");
          // select a customer
        }
      } else {
        setCanPointsApply(false);
        // not enough points
        setErrorMessage("You don't have enough points");
      }
    }
  }, [totalAmount, selectedCustomer, userPointsData, storePointsSystem]);

  useEffect(() => {
    if (Number(points) > (userPointsData || 0)) {
      setPointsError("You don't have enough points");
    } else {
      // you can only redeem points with the multiple of the storePointsSystem.points
      // if the points is not a multiple of storePointsSystem.points then set the pointsError to "Points can only be redeemed in multiples of 10"
      // else set the pointsError to ""
      if (Number(points) % (storePointsSystem?.points || 0) !== 0) {
        setPointsError(
          `Points can only be redeemed in multiples of ${
            storePointsSystem?.points || 0
          }`
        );
      } else {
        setPointsError("");
      }
    }
  }, [points]);

  const getCustomerDetailsFromId = (id: number) => {
    const customer = customerData?.find((customer) => customer.id === id);
    return customer;
  };

  const handleAddBill = async (values: FormValues) => {
    // check if store has points on order trigger
    // if yes, add the bill with the points
    // if no, add the bill without the points
    const trigger = Triggers?.find(
      (trigger) => trigger.coupon_occassions_id === 2
    );
    if (trigger) {
    } else {
    }
  };

  const UserCard = () => {
    return (
      <div className="flex w-full flex-col justify-between gap-2 rounded-lg border border-gray-300 p-3">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-sm font-semibold ">
              {getCustomerDetailsFromId(selectedCustomer)?.name}
            </h1>
            <p className="text-[12px] text-gray-500">
              {getCustomerDetailsFromId(selectedCustomer)?.phone}
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <div className="h-fit rounded-lg bg-green-100 px-2 py-1 text-xs font-semibold text-gray-500">
              User id: {selectedCustomer}
            </div>
            <XCircleIcon
              className="h-5 w-5 cursor-pointer text-red"
              onClick={() => setSelectedCustomer(0)}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-3 gap-1">
            <div className="flex flex-col rounded-lg bg-green-100 p-3">
              <p className="text-xs text-gray-500">Total Points</p>
              <p className="text-sm font-semibold">{userPointsData}</p>
            </div>
            <div className="flex flex-col rounded-lg bg-yellow-100 p-3">
              <p className="text-xs text-gray-500">Minimum Value</p>
              <p className="text-sm font-semibold">
                ₹{storePointsSystem?.minimum_order_amount}
              </p>
            </div>
            <div className="flex flex-col rounded-lg bg-green-100 p-3">
              <p className="text-red-500 text-xs">
                {storePointsSystem?.points} Point is
              </p>
              <p className="text-sm font-semibold">
                ₹{storePointsSystem?.rupees}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Drawer
      title="Redeem Points"
      placement="right"
      closable
      onClose={() => setAddBillingDrawerVisible(false)}
      open={addBillingDrawerVisible}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={(values) => handleAddBill(values)}
      >
        {selectedCustomer === 0 ? (
          <Form.Item
            label="Customer"
            name="loyalty_user_id"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Select
              showSearch
              labelInValue
              filterOption={false}
              value={customerSearchText}
              onSearch={setCustomerSearchText}
              placeholder="Select a customer"
              notFoundContent={
                customerDataLoading ? <Spin size="small" /> : null
              }
              onSelect={(value: any) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                setSelectedCustomer(Number(value?.value));
              }}
              options={
                customerData?.map((customer) => ({
                  value: customer.id,
                  label: (
                    <div className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-gray-300">
                        {customer.name.charAt(0).toLocaleUpperCase()}
                      </div>
                      <div className="flex flex-col">
                        <p>{customer.name}</p>
                        <p className="text-xs text-gray-500">
                          {customer.phone}
                        </p>
                      </div>
                    </div>
                  ),
                })) || []
              }
            />
          </Form.Item>
        ) : (
          <UserCard />
        )}
        <Space className="mt-4">
          <Form.Item
            label="Total Amount"
            name="total_amount"
            rules={[{ required: true, message: "Please enter total amount" }]}
          >
            <Input
              size="large"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Number of items"
            name="number_of_items"
            rules={[
              { required: true, message: "Please enter number of items" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
        </Space>

        {canPointsApply && (
          <Form.Item
            label="Points"
            name="points"
            rules={[{ required: true, message: "Please enter point" }]}
          >
            <Input
              size="large"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
          </Form.Item>
        )}

        {!errorMessage && !pointsError && (
          <Alert
            description={`Discounted amount is ₹${
              Number(totalAmount) -
              (Number(points) / Number(storePointsSystem?.points)) *
                (storePointsSystem?.rupees || 0)
            }`}
            type="success"
            closable
          />
        )}

        {errorMessage && (
          <Alert description={errorMessage} type="error" closable />
        )}
        {pointsError && (
          <Alert description={pointsError} type="error" closable />
        )}
        <Button htmlType="submit" size="large" className="mt-4">
          Redeem Points
        </Button>
      </Form>
    </Drawer>
  );
};

export default AddBillDrawer;
