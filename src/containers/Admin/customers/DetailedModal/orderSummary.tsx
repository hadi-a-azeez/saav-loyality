import { useCustomer } from "../useCustomer";

const OrderSummary = () => {
  const { customerDetails } = useCustomer();
  const totalAmount = customerDetails?.orders?.reduce(
    (acc, curr) => acc + curr.total_amount,
    0
  );

  if (customerDetails?.orders?.length === 0) {
    return (
      <div className="flex h-[350px] items-center justify-center">
        <p>No Orders</p>
      </div>
    );
  }
  return (
    <div className="mt-6 flex h-[350px] flex-col gap-6 overflow-y-scroll">
      <div className="flex flex-col gap-4  ">
        {/* Order info */}
        {customerDetails?.orders?.map((order) => (
          <div
            className="flex items-center justify-between border-b border-gray-200 pb-4"
            key={order.id}
          >
            <div className="flex items-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/icons/dummyImage.png"
                alt="product"
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{order?.order_number}</p>
                <p className="text-success">
                  {order.points ? `+ ${order.points}` : "No points"}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-base font-medium">
                ₹<span>{order.total_amount}</span>
              </p>
              <p className="text-gray-500">
                Qty: <span>{order.number_of_items}</span>
              </p>
            </div>
          </div>
        ))}
        {/* Order price details */}
        <div className="text-base font-medium">
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>
              ₹<span>{totalAmount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
