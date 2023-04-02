import { Spin } from "antd";

const LoadingContainer = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spin />
    </div>
  );
};

export default LoadingContainer;
