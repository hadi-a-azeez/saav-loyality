import WalkOutsContainer from "@/containers/Admin/walkouts";
import { WalkoutsContextProvider } from "@/containers/Admin/walkouts/useWalkouts";

const WalkOuts = () => {
  return (
    <WalkoutsContextProvider>
      <WalkOutsContainer />
    </WalkoutsContextProvider>
  );
};

export default WalkOuts;
