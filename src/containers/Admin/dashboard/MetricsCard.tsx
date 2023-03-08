export interface MetricsCardProps {
  title: string;
  value: number;
  valueDirection: "up" | "down";
  currentStatus: string;
  from: string;
}

const MetricsCard = ({
  title,
  value,
  valueDirection,
  currentStatus,
  from,
}: MetricsCardProps) => {
  return (
    <div className="flex flex-col justify-center gap-2 rounded-lg bg-white p-4 shadow-metricsCard">
      <h1 className="text-sm font-normal text-gray-500">{title}</h1>
      <h1 className="text-4xl font-bold">{value}</h1>
      <div className="mt-4 flex flex-row items-center gap-3">
        <div
          className={`grid place-items-center rounded-full px-3 py-1 text-sm font-semibold
                ${
                  valueDirection === "up"
                    ? "bg-green-100 text-green-500"
                    : "bg-red-300 text-red-500"
                }`}
        >
          {currentStatus}
        </div>
        <div className="text-sm font-semibold text-gray-500">{from}</div>
      </div>
    </div>
  );
};

export default MetricsCard;
