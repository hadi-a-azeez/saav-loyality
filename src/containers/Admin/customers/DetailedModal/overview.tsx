const Overview = () => {
  return (
    <div className="mt-6 flex h-[350px] flex-col gap-6 overflow-y-scroll">
      {/* \\\\cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 p-4 text-xs font-medium">
          <p>Total Orders</p>
          <p className="text-4xl">6</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 p-4 text-xs font-medium">
          <p>Points earned</p>
          <p className="text-4xl text-green">630</p>
        </div>
        <div className="flex flex-col items-start justify-center gap-1 rounded-lg border border-gray-200 p-4 text-xs font-medium">
          <p>Total Walkout</p>
          <p className="text-4xl text-red">12</p>
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
            <p className="text-base">Oct 27, 2023</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Place</p>
            <p className="text-base">Koduvally</p>
          </div>
        </div>
        {/* recent order */}
        <div className="col-span-2 flex flex-col gap-4">
          <p className="text-base font-semibold">Recent Order</p>
          <div className="flex items-center justify-center gap-6">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/icons/dummyImage.png"
              alt="product"
              className="max-w-[100px] rounded-lg"
            />
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <p className="text-base font-medium">Product name</p>
              <p className="text-gray-500">
                Qty: <span>1</span>
              </p>
              <p className="text-base font-medium">
                ₹<span>1599</span>
              </p>
              <p className="text-gray-500">
                Points earned:
                <span className="font-semibold text-green"> +120</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
