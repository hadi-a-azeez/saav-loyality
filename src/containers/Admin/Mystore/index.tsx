import AdminLayout from "@/layouts/admin";

const MyStoreContainer = () => {
  return (
    <AdminLayout page="My Store">
      <div className="grid min-h-screen grid-cols-store-layout ">
        <div className="flex flex-col gap-6 px-6 py-8"></div>
        <div className="flex flex-col gap-6 px-6 py-8">
          {/* iframe of a site */}
          <iframe
            src="https://kardano.vercel.app"
            className="h-[844px] w-[390px] overflow-scroll"
          ></iframe>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MyStoreContainer;
