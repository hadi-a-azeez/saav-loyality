import { Dropdown, MenuProps } from "antd";

export interface CustomerCardProps {
  name: string;
  age: number;
  totalPurchase: number;
  totalValue: number;
  pointsEarned: number;
  walkedOut: number;
}

const items: MenuProps["items"] = [
  {
    label: "View Profile",
    key: 1,
  },
  {
    label: "View Orders",
    key: 2,
  },
  {
    label: "View Walkouts",
    key: 3,
  },
  {
    label: "Delete Customer",
    key: 4,
  },
];

const CustomerCard = ({
  name,
  age,
  totalPurchase,
  totalValue,
  pointsEarned,
  walkedOut,
}: CustomerCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-6">
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-start gap-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80å"
              alt=""
              className="h-14 w-14 rounded-full"
            />
            <div className="flex flex-col items-start gap-1">
              <p className="text-base font-semibold">{name}</p>
              <p className="text-sm font-medium text-gray-600">
                {age} years old
              </p>
            </div>
          </div>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            // event propagation is stopped to prevent the modal from closing when the dropdown is clicked
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/icons/options.svg"
              alt="options"
              className="cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Dropdown>
        </div>
        {/* customer  interaction details */}
        <div className="mt-8 grid grid-cols-2 gap-x-2 gap-y-3 text-xs font-medium xl:text-sm">
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Total Purchase</p>
            <p className="text-base font-semibold">{totalPurchase}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Total value</p>
            <p className="text-base font-semibold">₹{totalValue}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Points earned</p>
            <p className="text-base font-semibold text-green">{pointsEarned}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-gray-500">Walked Out</p>
            <p className="text-base font-semibold">{walkedOut}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
