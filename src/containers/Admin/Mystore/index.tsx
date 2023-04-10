import AdminLayout from "@/layouts/admin";
import { Form, Input, Button, Tooltip, message } from "antd";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/solid";
import { api } from "@/utils/api";
import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/utils/supabase";

interface FormValues {
  store_name: string;
  phone: string;
  address: string;
  email: string;
  store_contact: string;
  store_instagram: string;
  store_url: string;
  store_banner: string;
  store_logo: string;
}

const MyStoreContainer = () => {
  const [logo, setLogo] = useState<File>();
  const [banner, setBanner] = useState<File>();
  const { data, isLoading } = api.store.getStoreInfo.useQuery();
  const storeUpdateMutation = api.store.updateStoreInfo.useMutation({
    onSuccess: () => {
      void message.success("Store updated successfully");
    },
    onError: () => {
      void message.error("Something went wrong");
    },
  });
  const imageUrl =
    "https://vkzktqrgcjplnrayhajm.supabase.co/storage/v1/object/public/loyalty-bucket/";

  const handleLogoImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setLogo(selectedImage);
    }
  };

  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
    if (selectedImage) {
      setBanner(selectedImage);
    }
  };

  const handleLogoUploadToServer = async () => {
    let status = false;
    if (logo) {
      // delete old logo
      if (data?.store_logo) {
        await supabase.storage
          .from("loyalty-bucket")
          .remove([`logos/${data?.store_logo}`]);
      }
      const res = await supabase.storage
        .from("loyalty-bucket")
        .upload(`logos/${data?.name || ""}logo.png`, logo, {
          cacheControl: "0",
          upsert: false,
        });
      if (res.data) {
        status = true;
      } else {
        status = false;
      }
    }
    return status;
  };

  const handleBannerUploadToServer = async () => {
    let status = false;
    if (banner) {
      // delete old banner
      if (data?.store_banner) {
        await supabase.storage
          .from("loyalty-bucket")
          .remove([`banners/${data?.store_banner}`]);
      }

      const res = await supabase.storage
        .from("loyalty-bucket")
        .upload(`banners/${data?.name || ""}banner.png`, banner, {
          cacheControl: "0",
          upsert: false,
        });
      if (res.data) {
        status = true;
      } else {
        status = false;
      }
    }
    return status;
  };

  const onFinish = async (values: FormValues) => {
    console.log("values", values);
    const isLogo = await handleLogoUploadToServer();
    const isBanner = await handleBannerUploadToServer();
    storeUpdateMutation.mutate({
      ...values,
      store_logo: isLogo ? `${data?.name || ""}logo.png` : data?.store_logo,
      store_banner: isBanner
        ? `${data?.name || ""}banner.png`
        : data?.store_banner,
    });
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <AdminLayout page="My Store">
      <div className="grid min-h-screen grid-cols-store-layout ">
        <div className="flex flex-col gap-6 px-6 py-8">
          <Form
            layout="vertical"
            name="basic"
            initialValues={data || {}}
            onFinish={(values: FormValues) => {
              void onFinish(values);
            }}
          >
            {/* Banner  */}
            <div className="relative h-[200px] w-full rounded-md bg-gray-200">
              {banner ? (
                <Image
                  src={URL.createObjectURL(banner)}
                  alt="Logo"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              ) : data?.store_banner ? (
                <img
                  src={`${imageUrl}banners/${data?.store_banner}`}
                  alt="Logo"
                  className="h-[200px] w-full rounded-sm object-cover"
                />
              ) : (
                <></>
              )}
              <Tooltip title="Banner of your site, size 10x10">
                <label htmlFor="banner-upload">
                  <div className="absolute top-5 right-5 flex cursor-pointer flex-row items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 shadow-sm">
                    <>
                      <PencilIcon className="h-3 w-3 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-500">
                        Edit
                      </span>
                    </>
                  </div>
                </label>
                <input
                  id="banner-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleBannerImageChange}
                  style={{ display: "none" }}
                />
              </Tooltip>
              {/* logo */}
              <Tooltip title="Logo of your site, size 10x10">
                <label htmlFor="logo-upload">
                  <div className="absolute -bottom-10 left-10 flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full bg-gray-400">
                    {logo ? (
                      <Image
                        src={URL.createObjectURL(logo)}
                        alt="Logo"
                        width={90}
                        height={90}
                        className="h-[90px] w-[90px] rounded-full object-cover"
                      />
                    ) : data?.store_logo ? (
                      <img
                        src={`${imageUrl}logos/${data?.store_logo}`}
                        alt="Logo"
                        width={90}
                        height={90}
                        className="h-[90px] w-[90px] rounded-full object-cover"
                      />
                    ) : (
                      <PlusIcon className="h-6 w-6 text-white" />
                    )}
                  </div>
                </label>
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoImageChange}
                  style={{ display: "none" }}
                />
              </Tooltip>
            </div>
            <div className="px-14">
              <Form.Item
                className="mt-14"
                label="Store Name"
                name="store_name"
                rules={[
                  { required: true, message: "Please input your store name!" },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item label="Address" name="address">
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item label="email" name="email">
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item label="Contact Number" name="store_contact">
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item label="Store Instagram" name="store_instagram">
                <Input type="text" size="large" />
              </Form.Item>
              <Form.Item label="Store url" name="store_url">
                <Input type="text" size="large" />
              </Form.Item>
              <Button htmlType="submit" loading={storeUpdateMutation.isLoading}>
                Update
              </Button>
            </div>
          </Form>
        </div>
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
