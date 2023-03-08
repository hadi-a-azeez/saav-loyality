import AdminLayout from "@/layouts/admin";
import MetricsCard, { MetricsCardProps } from "../dashboard/MetricsCard";
import Header from "./Header";

const DummyMetricsCards: MetricsCardProps[] = [
  {
    title: "Walk Outs Today",
    value: 3,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Walk Outs Total",
    value: 289,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  // {
  //   title: "Revenue Today",
  //   value: 103,
  //   valueDirection: "up",
  //   currentStatus: "10%",
  //   from: "from last week",
  // },
  // {
  //   title: "Revenue Total",
  //   value: 100,
  //   valueDirection: "up",
  //   currentStatus: "10%",
  //   from: "from last week",
  // },
];

const WalkOutsContainer = () => {
  return (
    <AdminLayout page="Walk Outs">
      <div className="flex w-full flex-col gap-6 px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          {DummyMetricsCards.map((card, index) => (
            <MetricsCard key={index} {...card} />
          ))}
        </div>
        <Header />
      </div>
    </AdminLayout>
  );
};

export default WalkOutsContainer;
