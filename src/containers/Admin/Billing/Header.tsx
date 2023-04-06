import { Input } from "antd";
import { useBilling } from "./useBilling";

const Header = () => {
  const { setAddBillingDrawerVisible } = useBilling();
  return (
    <div className="flex flex-row justify-between">
      {/* search bar */}
      <Input placeholder="Search" style={{ width: "400px" }} />
      <div className="flex flex-row gap-2">
        {/* add button */}
        <button
          className="rounded-lg bg-black px-4 py-2 text-white"
          onClick={() => setAddBillingDrawerVisible(true)}
        >
          Add Bill
        </button>
        {/* export button */}
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Export
        </button>
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Filter
        </button>
      </div>
    </div>
  );
};

export default Header;
