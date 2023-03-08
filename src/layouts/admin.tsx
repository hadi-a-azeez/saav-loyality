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
        <div className="flex items-center justify-between px-8 pt-8">
          <h1 className="text-3xl font-semibold">{page}</h1>
          <div className="flex items-center justify-end gap-3">
            <img
              src="/assets/icons/notifications.svg"
              alt="notifications"
              className="w-5"
            />
            <p>Hello, Kardano</p>
          </div>
        </div>
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
