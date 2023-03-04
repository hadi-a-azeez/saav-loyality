import { useRouter } from "next/router";

interface BottomNavigationProps {
  selected: string;
}

const BottomNavigationRoutes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/user/dashboard",
    icon: "/assets/icons/MobileDashboard.svg",
  },
  {
    id: 2,
    name: "Rewards",
    path: "/user/rewards",
    icon: "/assets/icons/mobileReward.svg",
  },
  {
    id: 3,
    name: "Reviews",
    path: "/user/reviews",
    icon: "/assets/icons/MobileReview.svg",
  },
  {
    id: 4,
    name: "Notifications",
    path: "/user/notifications",
    icon: "/assets/icons/MobileNotification.svg",
  },
];

const BottomNavigation = ({
  selected = "Dashboard",
}: BottomNavigationProps) => {
  const router = useRouter();
  const Item = ({ selected = false, name = "", path = "", icon = "" }) => {
    return (
      <div
        className={`${
          selected ? "text-black" : "text-gray-400"
        } flex min-w-[70px] cursor-pointer flex-col items-center justify-between rounded-lg px-1 py-3 font-semibold hover:bg-[#EEE8E8]`}
        onClick={() => {
          void router.push(path);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          width={22}
          alt={name}
          className="mb-2"
          style={{
            // selected black else gray
            filter: selected ? "invert(0)" : "opacity(0.5)",
          }}
        />
        <h1 className="text-xs font-normal">{name}</h1>
      </div>
    );
  };

  return (
    <div
      className="fixed bottom-0 left-0 flex h-[100px] w-full items-center justify-evenly gap-4 bg-white
    px-6 py-3 text-gray-800 shadow-bottomNavigation"
    >
      {BottomNavigationRoutes.map((item) => (
        <Item key={item.id} selected={selected === item.name} {...item} />
      ))}
    </div>
  );
};

export default BottomNavigation;
