import AdminLayout from "@/layouts/admin";
import { api } from "@/utils/api";
import { List } from "antd";
import MetricsCard, { MetricsCardProps } from "../dashboard/MetricsCard";
import Header from "./Header";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useWalkouts } from "./useWalkouts";
import LoadingContainer from "@/components/LoadingContainer";
import AddWalkoutsDrawer from "./AddWalkoutsDrawer";

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
  const { searchText } = useWalkouts();
  const { data, isLoading } = api.walkouts.getAllWalkouts.useQuery({
    search: searchText,
  });

  return (
    <AdminLayout page="Walk Outs">
      <div className="flex w-full flex-col gap-6 px-6 py-8">
        <div className="grid grid-cols-4 gap-4">
          {DummyMetricsCards.map((card, index) => (
            <MetricsCard key={index} {...card} />
          ))}
        </div>
        <Header />
        {isLoading ? (
          <LoadingContainer />
        ) : (
          <List
            grid={{ gutter: 1, column: 3 }}
            dataSource={data}
            // set pagination to bottom of the list, 100vh is the height of the page
            pagination={{
              pageSize: 14,
              total: data?.length,
              showSizeChanger: false,
              showTotal: (total) => `Total ${total} items`,
              position: "bottom",
              align: "center",
            }}
            renderItem={(item) => (
              <List.Item>
                <div
                  className="flex h-fit flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium"
                  key={item.id}
                >
                  <div className="flex items-center justify-between gap-1">
                    <div className="flex flex-row items-center gap-2">
                      <UserCircleIcon className="h-6 w-6" />
                      <p className="text-black">{item.loyalty_users?.name}</p>
                      <div className="rounded-full bg-[#FFE0E3] px-3 py-1">
                        <p className="text-red">{item.walkout_reasons?.name}</p>
                      </div>
                    </div>
                    <p className="text-xs font-normal">
                      {item.date.toDateString()}
                    </p>
                  </div>
                  <p>{item.remarks}</p>
                </div>
              </List.Item>
            )}
          />
        )}
      </div>
      <AddWalkoutsDrawer />
    </AdminLayout>
  );
};

export default WalkOutsContainer;
