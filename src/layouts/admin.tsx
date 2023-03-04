import { Spin } from "antd";

import SideBar from "@/components/SideBar";

interface AdminLayoutProps {
  children: any;
  page: string;
  isLoading?: boolean;
}

const AdminLayout = ({ children, page, isLoading }: AdminLayoutProps) => {
  return (
    <div className="grid min-h-screen grid-cols-admin-layout bg-[#FAF7F3]">
      <SideBar selected={page} />
      <div>
        {isLoading ? (
          <div className="flex h-screen w-full items-center justify-center">
            <Spin />
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default AdminLayout;
