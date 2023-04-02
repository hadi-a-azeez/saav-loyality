import { Button, Drawer, Form, Input, DatePicker, message } from "antd";
import { useCustomer } from "./useCustomer";
import { api } from "@/utils/api";

interface AddCustomerFormProps {
  name: string;
  phone: string;
  dob: string;
}

const AddCustomerDrawer = () => {
  const { addCustomerDrawerVisible, setAddCustomerDrawerVisible } =
    useCustomer();

  const onClose = () => {
    setAddCustomerDrawerVisible(false);
  };
  const addUserMutation = api.customers.addUser.useMutation({
    onSuccess: () => {
      void message.success("User added successfully");
      onClose();
    },
  });

  const addCustomer = (values: AddCustomerFormProps) => {
    console.log("values", values);
    // format the date
    const data = addUserMutation.mutate({
      name: values.name,
      phone: values.phone,
      dob: new Date(values.dob).toISOString(),
    });
  };

  return (
    <Drawer
      title="Add User"
      placement="right"
      closable
      onClose={onClose}
      open={addCustomerDrawerVisible}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={(values: AddCustomerFormProps) => {
          addCustomer(values);
        }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label="Phone number"
          name="phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item label="Dob" name="dob">
          <DatePicker size="large" />
        </Form.Item>
        <Button
          htmlType="submit"
          size="large"
          loading={addUserMutation.isLoading}
        >
          Add User
        </Button>
      </Form>
    </Drawer>
  );
};

export default AddCustomerDrawer;
