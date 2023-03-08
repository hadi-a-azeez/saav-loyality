import { Input } from "antd";

const Header = () => {
  return (
    <div className="flex flex-row justify-between">
      {/* search bar */}
      <Input placeholder="Search" style={{ width: "400px" }} />
      <div className="flex flex-row gap-2">
        {/* add button */}
        <button className="rounded-lg bg-black px-4 py-2 text-white">
          Add WalkOut
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
