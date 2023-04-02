import LoadingContainer from "@/components/LoadingContainer";
import { api } from "@/utils/api";
import { Button, Drawer, Form, Input, DatePicker, Select, message } from "antd";

interface Props {
  visible: boolean;
  onClose: () => void;
}

interface FormValues {
  points: string;
  rupees: string;
  minimum_order_amount: string;
}

const EditRedeemDrawer = ({ visible, onClose }: Props) => {
  const updateStorePointsMutation =
    api.coupons.editStorePointsSystem.useMutation({
      onSuccess: () => {
        void message.success("Store points updated successfully");
        onClose();
      },
      onError: () => {
        void message.error("Something went wrong");
      },
    });
  const { data, isLoading } = api.coupons.getStorePointsSystem.useQuery();

  return (
    <Drawer
      title="Edit Point System"
      placement="right"
      closable
      onClose={onClose}
      open={visible}
    >
      {isLoading ? (
        <LoadingContainer />
      ) : (
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            points: data?.points,
            rupees: data?.rupees,
            minimum_order_amount: data?.minimum_order_amount,
          }}
          onFinish={(values: FormValues) => {
            updateStorePointsMutation.mutate({
              points: values.points.toString(),
              rupees: values.rupees.toString(),
              minimum_order_amount: values.minimum_order_amount.toString(),
            });
          }}
        >
          <Form.Item label="Points" name="points">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="is How much Rupees off" name="rupees">
            <Input size="large" />
          </Form.Item>
          <Form.Item label="Minimum order value" name="minimum_order_amount">
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              loading={updateStorePointsMutation.isLoading}
              size="large"
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      )}
    </Drawer>
  );
};

export default EditRedeemDrawer;
