import {
  Button,
  Drawer,
  Form,
  Input,
  DatePicker,
  message,
  Select,
  Spin,
} from "antd";
import { api } from "@/utils/api";
import { useWalkouts } from "./useWalkouts";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import type { SelectProps } from "antd/es/select";

interface FormProps {
  date: string;
  loyalty_user_id: UserValue;
  reason: UserValue;
  remarks: string;
}

interface UserValue {
  label: string;
  value: string;
}

const AddWalkoutsDrawer = () => {
  const { addWalkoutsDrawerVisible, setAddWalkoutsDrawerVisible } =
    useWalkouts();

  const [customerSearchText, setCustomerSearchText] = useState("");
  const [reasonsSearchText, setReasonsSearchText] = useState("");

  // debounce the search
  const [debounceSearch] = useDebounce(customerSearchText, 300);
  const [debounceReasonsSearch] = useDebounce(reasonsSearchText, 300);

  // fetch
  const { data, isLoading } = api.customers.getAll.useQuery({
    search: debounceSearch,
  });
  const { data: reasonsData, isLoading: reasonsIsLoading } =
    api.walkouts.getAllWalkoutReasons.useQuery({
      search: debounceReasonsSearch,
    });

  const onClose = () => {
    setAddWalkoutsDrawerVisible(false);
  };
  const addWalkoutsMutation = api.walkouts.addWalkout.useMutation({
    onSuccess: () => {
      void message.success("Walkout added successfully");
      onClose();
    },
  });

  //   const addCustomer = (values: AddCustomerFormProps) => {
  //     console.log("values", values);
  //     // format the date
  //     const data = addUserMutation.mutate({
  //       name: values.name,
  //       phone: values.phone,
  //       dob: new Date(values.dob).toISOString(),
  //     });
  //   };

  return (
    <Drawer
      title="Add Walkout"
      placement="right"
      closable
      onClose={onClose}
      open={addWalkoutsDrawerVisible}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={(values: FormProps) => {
          addWalkoutsMutation.mutate({
            date: new Date(values.date).toISOString(),
            loyalty_user_id: Number(values.loyalty_user_id.value),
            walkout_reason_id: Number(values.reason.value),
            remarks: values.remarks,
          });
        }}
      >
        <Form.Item label="Date" name="date">
          <DatePicker size="large" />
        </Form.Item>
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
            notFoundContent={isLoading ? <Spin size="small" /> : null}
            options={
              data?.map((customer) => ({
                value: customer.id,
                label: (
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-gray-300">
                      {customer.name.charAt(0).toLocaleUpperCase()}
                    </div>
                    <div className="flex flex-col">
                      <p>{customer.name}</p>
                      <p className="text-xs text-gray-500">{customer.phone}</p>
                    </div>
                  </div>
                ),
              })) || []
            }
          />
        </Form.Item>
        <Form.Item
          label="Reason"
          name="reason"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Select
            showSearch
            labelInValue
            filterOption={false}
            value={reasonsSearchText}
            onSearch={setReasonsSearchText}
            placeholder="Select a reason"
            notFoundContent={reasonsIsLoading ? <Spin size="small" /> : null}
            options={
              reasonsData?.map((reason) => ({
                value: reason.id,
                label: reason.name,
              })) || []
            }
          />
        </Form.Item>
        <Form.Item label="Remarks" name="remarks">
          <Input.TextArea />
        </Form.Item>
        <Button
          htmlType="submit"
          size="large"
          loading={addWalkoutsMutation.isLoading}
        >
          Add Walkout
        </Button>
      </Form>
    </Drawer>
  );
};

export default AddWalkoutsDrawer;
