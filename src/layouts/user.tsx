import { Spin } from "antd";

import BottomNavigation from "@/components/BottomNavigation";

interface UserLayoutProps {
  children: any;
  page: string;
  isLoading?: boolean;
}

const UserLayout = ({ children, page, isLoading }: UserLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div>
        {isLoading ? (
          <div className="flex h-screen w-full items-center justify-center">
            <Spin />
          </div>
        ) : (
          children
        )}
      </div>
      <BottomNavigation selected={page} />
    </div>
  );
};

export default UserLayout;
