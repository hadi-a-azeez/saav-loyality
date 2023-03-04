import Router from "next/router";

interface SideBarProps {
  selected: string;
}

const SideBarRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: "/assets/icons/dashboard.svg",
  },
  {
    id: 2,
    name: "Customers",
    path: "/admin/customers",
    icon: "/assets/icons/customers.svg",
  },
  {
    id: 3,
    name: "Coupons",
    path: "/admin/coupons",
    icon: "/assets/icons/coupons.svg",
  },
  {
    id: 4,
    name: "Products",
    path: "/admin/products",
  },
  {
    id: 5,
    name: "Reviews",
    path: "/admin/reviews",
  },
];

const SideBar = ({ selected = "dashboard" }: SideBarProps) => {
  const Item = ({ selected = false, name = "", path = "", icon = "" }) => {
    return (
      <div
        className={`${
          selected ? "bg-black text-white" : ""
        } flex cursor-pointer flex-row items-center rounded-lg px-4 py-3 hover:bg-[#EEE8E8]`}
        onClick={() => {
          void Router.push(path);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          width={18}
          height={18}
          alt={name}
          className="mr-3"
          style={{
            filter: selected ? "invert(1)" : "invert(0)",
          }}
        />
        <h1 className="font-semibold">{name}</h1>
      </div>
    );
  };

  return (
    <div className="flex w-full flex-col items-center bg-white px-4 py-10 text-gray-800">
      <h1 className="text-2xl font-semibold">Saav</h1>
      <div className="mt-6 flex w-full flex-col gap-3 px-4">
        {SideBarRoutes.map((item) => (
          <Item key={item.id} selected={selected === item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
