import { Input, Button } from "antd";
import { useCustomer } from "./useCustomer";
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const { setAddCustomerDrawerVisible, searchText, setSearchText } =
    useCustomer();
  return (
    <div className="flex flex-row justify-between">
      {/* search bar */}
      <Input
        placeholder="Search"
        style={{ width: "400px" }}
        prefix={<MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex flex-row gap-2">
        {/* add button */}
        <button
          className="rounded-lg bg-black px-4 py-2 text-white"
          onClick={() => setAddCustomerDrawerVisible(true)}
        >
          Add New User
        </button>
        {/* export button */}
        {/* <button className="rounded-lg border border-black px-4 py-2 text-black">
          Export
        </button> */}
        <Button
          size="large"
          icon={<ArrowRightOnRectangleIcon className="h-5 w-5" />}
          className="flex flex-row items-center gap-1"
        >
          Export
        </Button>
        {/* <button
          className="rounded-lg bg-black px-4 py-2 text-white"
        >
          Filter
        </button> */}
      </div>
    </div>
  );
};

export default Header;
