import { Button, Drawer, Form, Input, DatePicker, Select } from "antd";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const AddTriggerDrawer = ({ visible, onClose }: Props) => {
  return (
    <Drawer
      title="Add Trigger"
      placement="right"
      closable
      onClose={onClose}
      open={visible}
    >
      <Form name="basic" layout="vertical">
        <Form.Item
          label="Occassion"
          name="occassion"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Select size="large">
            <Select.Option value="first_order">First Order</Select.Option>
            <Select.Option value="sign_up">Sign Up</Select.Option>
            <Select.Option value="refer_a_friend">Refer a friend</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Points"
          name="number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Expiry date" name="expiry">
          <DatePicker />
        </Form.Item>
        <Button htmlType="submit">Add</Button>
      </Form>
    </Drawer>
  );
};

export default AddTriggerDrawer;
