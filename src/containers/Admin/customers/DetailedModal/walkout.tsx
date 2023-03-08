const Walkout = () => {
  return (
    <div className="mt-6 grid h-[350px] grid-cols-2 gap-4 overflow-y-scroll">
      {/* card */}
      <div className="flex h-fit flex-col gap-3 rounded-lg border border-gray-200 p-4 text-sm font-medium">
        <div className="flex items-center justify-between gap-1">
          <div className="rounded-full bg-[#FFE0E3] px-3 py-1">
            <p className="text-red">Size issues</p>
          </div>
          <p className="text-xs font-normal">Feb 12, 2023</p>
        </div>
        <p>Size S is too big. I wish there was a smaller option available.</p>
      </div>
      {/* card */}
      <div className="flex h-fit flex-col gap-3 rounded-lg border border-gray-200 p-4 text-sm font-medium">
        <div className="flex items-center justify-between gap-1">
          <div className="rounded-full bg-lightOrange px-3 py-1">
            <p className="text-orange">Selection</p>
          </div>
          <p className="text-xs font-normal">Feb 12, 2023</p>
        </div>
        <p>Size S is too big. I wish there was a smaller option available.</p>
      </div>
    </div>
  );
};

export default Walkout;
