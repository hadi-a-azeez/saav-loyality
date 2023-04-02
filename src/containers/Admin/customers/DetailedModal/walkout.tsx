import { useCustomer } from "../useCustomer";

const Walkout = () => {
  const { customerDetails } = useCustomer();
  if (customerDetails?.walkouts?.length === 0) {
    return (
      <div className="flex h-[350px] items-center justify-center">
        <p>No walkouts</p>
      </div>
    );
  }
  return (
    <div className="mt-6 grid h-[350px] grid-cols-2 gap-4 overflow-y-scroll">
      {/* card */}
      {customerDetails?.walkouts?.map((walkout) => (
        <div
          className="flex h-fit flex-col gap-3 rounded-lg border border-gray-200 p-4 text-sm font-medium"
          key={walkout.id}
        >
          <div className="flex items-center justify-between gap-1">
            <div className="rounded-full bg-[#FFE0E3] px-3 py-1">
              <p className="text-red">{walkout.walkout_reasons_id}</p>
            </div>
            <p className="text-xs font-normal">{walkout.date.toDateString()}</p>
          </div>
          <p>{walkout.remarks}</p>
        </div>
      ))}
    </div>
  );
};

export default Walkout;
