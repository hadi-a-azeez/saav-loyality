const OrderSummary = () => {
  return (
    <div className="mt-6 flex h-[350px] flex-col gap-6 overflow-y-scroll">
      <div className="flex flex-col gap-4  ">
        {/* Order info */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/icons/dummyImage.png"
              alt="product"
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">Product Name</p>
              <p className="text-success">Delivered</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-base font-medium">
              ₹<span>1599</span>
            </p>
            <p className="text-gray-500">
              Qty: <span>1</span>
            </p>
          </div>
        </div>
        {/* Order price details */}
        <div className="text-base font-medium">
          <div className="flex items-center justify-between">
            <p>Total</p>
            <p>
              ₹<span>3648</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
