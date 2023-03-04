import ImageReview from "@/components/Reviews/ImageReview";
import TextReview from "@/components/Reviews/TextReview";
import UserLayout from "@/layouts/user";
import UserCards, { userCardsProps } from "./userCards";

const DummyUserCards: userCardsProps[] = [
  {
    title: "Total Purchase",
    value: 10,
    icon: "/assets/icons/right.svg",
  },
  {
    title: "Reviews",
    value: 4,
    icon: "/assets/icons/right.svg",
  },
];
const UserDashboardContainer = () => {
  return (
    <UserLayout page="Dashboard">
      <div className="mx-auto pb-28 lg:max-w-6xl">
        {/* \\\\\\\\\\\\\\
          \\\ profile section */}
        <div className="-z-10 min-h-profile bg-black p-6 text-white">
          <div className="signout flex justify-end">
            <button className="rounded-lg bg-[#242424] py-2 px-3">
              Sign Out
            </button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
              <p className="text-2xl">S</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-xl font-semibold">Shafi</h1>
              <p className="text-base font-medium opacity-60">+91 8281532886</p>
            </div>
          </div>
        </div>
        {/* \\\\\\\\\\\\\\
          \\\ cards section */}
        <section className="z-50 -mt-8 grid grid-cols-2 gap-y-5 gap-x-4 px-5">
          <div className="card col-span-2 flex min-h-[100px] items-center justify-between rounded-2xl bg-gold p-6 shadow-mobileCard">
            <div className="flex gap-3">
              <img src="/assets/icons/star.svg" alt="star" />
              <p className="text-xl font-medium">Points</p>
            </div>
            <p className="text-4xl font-extrabold">500</p>
          </div>
          {DummyUserCards.map((card, index) => (
            <UserCards key={index} {...card} />
          ))}
        </section>
        {/* \\\\\\\\\\\\\\
          \\\ Rewards section */}
        <section className="px-5">
          <div className="mt-8 flex items-center justify-between  font-semibold">
            <p className="text-2xl">My Rewards</p>
            <p className="text-base opacity-60">View all</p>
          </div>
          <div className="rewards mt-3 grid grid-cols-2 gap-x-5 gap-y-6">
            <div className="max-h-40 min-h-[150px] min-w-[140px] max-w-full rounded-2xl bg-sky-700"></div>
            <div className="max-h-40 min-h-[150px] min-w-[140px] max-w-full rounded-2xl bg-[#f68686]"></div>
          </div>
        </section>
        {/* \\\\\\\\\\\\\\
          \\\ Reviews section */}
        <section className="px-5">
          <div className="mt-8 flex items-center justify-between  font-semibold">
            <p className="text-2xl">My Reviews</p>
            <p className="text-base opacity-60">View all</p>
          </div>
          {/* reviews */}
          <div className="reviews mt-6 flex flex-col gap-4">
            <ImageReview />
            <TextReview />
          </div>
        </section>
      </div>
    </UserLayout>
  );
};
export default UserDashboardContainer;
