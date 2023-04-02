import { message, Switch } from "antd";
import { api, RouterOutputs } from "@/utils/api";
import dayjs from "dayjs";
import { useState } from "react";
export interface TriggerCardProps {
  title: string;
  points: number;
  expiry: string;
  status: boolean;
}

export type ITriggerType = RouterOutputs["coupons"]["getAllCoupons"][0];

const TriggerCard = (data: ITriggerType) => {
  const [checked, setChecked] = useState(
    data.status === "active" ? true : false
  );
  const updateCouponStatusMutation = api.coupons.updateCouponStatus.useMutation(
    {
      onSuccess: () => {
        void message.success("Coupon status updated successfully");
      },
      onError: () => {
        void message.error("Something went wrong");
      },
    }
  );

  const handleSwitchChange = () => {
    updateCouponStatusMutation.mutate({
      coupon_id: data.id,
      status: !checked,
    });
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row justify-between rounded-lg bg-white py-7 px-5 shadow-metricsCard">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">
          {data.coupon_occassions?.name}
        </h1>
        <p className="text-sm text-gray-500">Get {data.points} points</p>
        <p className="text-sm text-gray-500">
          Expiry:{" "}
          <span className="font-semibold">
            {dayjs(data.end_date).format("DD MMM YYYY")}
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Switch checked={checked} onChange={handleSwitchChange} />
      </div>
    </div>
  );
};

export default TriggerCard;
