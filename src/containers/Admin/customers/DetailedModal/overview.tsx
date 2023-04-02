import { useMemo } from "react";
import { IOrders } from "../customerCard";
import { useCustomer } from "../useCustomer";

const Overview = () => {
  const { customerDetails } = useCustomer();

  const customerData = useMemo(() => {
    return {
      totalOrders: Array.isArray(customerDetails?.orders)
        ? customerDetails?.orders?.length
        : 0,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
      totalValue: customerDetails?.orders?.reduce(
        (acc: number, curr: IOrders) => acc + curr.total_amount,
        0
      ),
      totalWalkouts: Array.isArray(customerDetails?.walkouts)
        ? customerDetails?.walkouts?.length
        : 0,
      points: customerDetails?.users_points[0]?.points,
      age: customerDetails?.dob
        ? new Date().getFullYear() -
          new Date(customerDetails?.dob).getFullYear()
        : 0,
    };
  }, [customerDetails]);

  return (
    <div className="mt-6 flex h-[350px] flex-col gap-6 overflow-y-scroll">
      {/* \\\\cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 p-4 text-xs font-medium">
          <p>Total Orders</p>
          <p className="text-4xl">{customerData?.totalOrders}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 p-4 text-xs font-medium">
          <p>Points earned</p>
          <p className="text-4xl text-green">{customerData.points}</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 p-4 text-xs font-medium">
          <p>Total Walkout</p>
          <p className="text-4xl text-red">{customerData.totalWalkouts}</p>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-6 text-sm font-normal">
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Customer since</p>
            <p className="text-base">Feb 12, 2023</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Birthday</p>
            <p className="text-base">{customerDetails?.dob.toDateString()}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Place</p>
            <p className="text-base">Koduvally</p>
          </div>
        </div>
        {/* recent order */}
        <div className="col-span-2 flex flex-col gap-4">
          <p className="text-base font-semibold">Recent Order</p>
          {customerDetails?.orders?.map((order) => (
            <div
              className="flex items-center justify-center gap-6"
              key={order.id}
            >
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/icons/dummyImage.png"
                alt="product"
                className="max-w-[100px] rounded-lg"
              />
              <div className="flex w-full flex-col items-start justify-center gap-1">
                <p className="text-base font-medium">{order.order_number}</p>
                <p className="text-gray-500">
                  Qty: <span>{order.number_of_items}</span>
                </p>
                <p className="text-base font-medium">
                  ₹<span>{order.total_amount}</span>
                </p>
                <p className="text-gray-500">
                  Points earned:
                  <span className="font-semibold text-green">
                    {" "}
                    +{order.points}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
