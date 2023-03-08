import { Switch } from "antd";

export interface TriggerCardProps {
  title: string;
  points: number;
  expiry: string;
  status: boolean;
}

const TriggerCard = ({ title, points, expiry, status }: TriggerCardProps) => {
  return (
    <div className="flex flex-row justify-between rounded-lg bg-white py-7 px-5 shadow-metricsCard">
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm text-gray-500">Get {points} points</p>
        <p className="text-sm text-gray-500">
          Expiry: <span className="font-semibold">{expiry}</span>
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Switch checked={status} />
      </div>
    </div>
  );
};

export default TriggerCard;
