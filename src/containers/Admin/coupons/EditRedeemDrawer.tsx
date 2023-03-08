import { Button, Drawer, Form, Input, DatePicker, Select } from "antd";

interface Props {
  visible: boolean;
  onClose: () => void;
}

const EditRedeemDrawer = ({ visible, onClose }: Props) => {
  return (
    <Drawer
      title="Edit Point System"
      placement="right"
      closable
      onClose={onClose}
      open={visible}
    >
      <Form name="basic" layout="vertical">
        <Form.Item label="Points" name="number">
          <Input />
        </Form.Item>
        <Form.Item label="is How much Rupees off" name="number">
          <Input />
        </Form.Item>
        <Form.Item label="Minimum order value" name="number">
          <Input />
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default EditRedeemDrawer;
