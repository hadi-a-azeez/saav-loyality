import AdminLayout from "@/layouts/admin";
import MetricsCard, { MetricsCardProps } from "./MetricsCard";

const DummyMetricsCards: MetricsCardProps[] = [
  {
    title: "Total Users",
    value: 100,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Total Orders",
    value: 100,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Total Revenue",
    value: 100,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
  {
    title: "Total Products",
    value: 100,
    valueDirection: "up",
    currentStatus: "10%",
    from: "from last week",
  },
];

const DashboardContainer = () => {
  return (
    <AdminLayout page="Dashboard">
      <div className="flex w-full flex-col px-6 py-8">
        {/* grid with 4 columns and gap */}
        <div className="grid grid-cols-4 gap-4">
          {DummyMetricsCards.map((card, index) => (
            <MetricsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default DashboardContainer;
