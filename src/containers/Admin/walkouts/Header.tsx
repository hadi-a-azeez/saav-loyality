import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Input } from "antd";
import { useWalkouts } from "./useWalkouts";

const Header = () => {
  const { searchText, setSearchText, setAddWalkoutsDrawerVisible } =
    useWalkouts();
  return (
    <div className="flex flex-row justify-between">
      {/* search bar */}
      <Input
        placeholder="Search"
        style={{ width: "400px" }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        prefix={<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />}
      />
      <div className="flex flex-row gap-2">
        {/* add button */}
        <button
          className="rounded-lg bg-black px-4 py-2 text-white"
          onClick={() => setAddWalkoutsDrawerVisible(true)}
        >
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
