import Header from "./Header";
import RegisterSection from "./RegisterSection";
import LinkSection from "./Links";

import type { RouterOutputs } from "@/utils/api";

type TData = RouterOutputs["stores"]["getOne"];

const HomeContainer = ({
  data,
  isLoading,
}: {
  data: TData | undefined;
  isLoading: boolean;
}) => {
  return (
    <div className="flex w-full flex-col items-center">
      <Header title={data?.name || ""} />
      <div className="flex w-full flex-col gap-4 px-8 py-5 md:px-20">
        <div
          className="flex h-[285px] w-full items-center justify-center rounded-lg object-cover md:h-[350px]"
          style={{
            backgroundImage: `url('https://i.pinimg.com/564x/b7/ba/e3/b7bae3aa7d877dfeeab137e1bd1f1bdb.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src="/kardanologo.png" alt="Kardano Logo" className="w-1/2" />
        </div>
        {/* <RegisterSection /> */}
        <RegisterSection />
        {/* <GoogleReviewSection /> */}
        <LinkSection />
      </div>
    </div>
  );
};

export default HomeContainer;
