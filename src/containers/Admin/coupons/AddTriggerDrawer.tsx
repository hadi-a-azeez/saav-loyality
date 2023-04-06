import { api } from "@/utils/api";
import {
  Button,
  Drawer,
  Form,
  Input,
  DatePicker,
  Select,
  Row,
  Space,
  Switch,
  message,
} from "antd";
import { useState } from "react";

interface Props {
  visible: boolean;
  onClose: () => void;
}

interface FormValues {
  occassion_id: number;
  points: string;
  start_date: string;
  end_date: string;
  status: boolean;
}

const AddTriggerDrawer = ({ visible, onClose }: Props) => {
  const [occassionId, setOccassionId] = useState<number>(0);
  const { data, isLoading } = api.coupons.getAllOccassions.useQuery();
  const addTriggerMutation = api.coupons.addCoupon.useMutation({
    onSuccess: () => {
      void message.success("Trigger added successfully");
      onClose();
    },
    onError: (error) => {
      void message.error(error.message);
    },
  });

  return (
    <Drawer
      title="Add Trigger"
      placement="right"
      closable
      onClose={onClose}
      open={visible}
    >
      <Form
        name="basic"
        layout="vertical"
        onFinish={(values: FormValues) => {
          addTriggerMutation.mutate({
            ...values,
            start_date: new Date(values.start_date).toISOString(),
            end_date: new Date(values.end_date).toISOString(),
          });
        }}
      >
        <Form.Item
          label="Occassion"
          name="occassion_id"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Select
            size="large"
            onChange={(value) => {
              setOccassionId(value as number);
            }}
          >
            {data?.map((occassion) => (
              <Select.Option value={occassion.id} key={occassion.id}>
                {occassion.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Points"
          name="points"
          rules={[{ required: true, message: "Please enter point" }]}
        >
          <Input size="large" />
        </Form.Item>
        {occassionId === 2 && (
          <Form.Item
            label="Rupees"
            name="rupees"
            rules={[{ required: true, message: "Please enter rupees" }]}
          >
            <Input size="large" />
          </Form.Item>
        )}
        <Space>
          <Form.Item label="Start date" name="start_date">
            <DatePicker size="large" />
          </Form.Item>
          <Form.Item label="Expiry date" name="end_date">
            <DatePicker size="large" />
          </Form.Item>
        </Space>
        <Form.Item
          label="Status"
          name="status"
          rules={[{ required: true, message: "Please select status" }]}
        >
          <Switch
            checkedChildren="Active"
            unCheckedChildren="Inactive"
            defaultChecked
          />
        </Form.Item>
        <Button
          htmlType="submit"
          size="large"
          loading={addTriggerMutation.isLoading}
        >
          Add Trigger
        </Button>
      </Form>
    </Drawer>
  );
};

export default AddTriggerDrawer;
