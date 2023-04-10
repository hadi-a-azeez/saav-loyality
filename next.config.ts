module.exports = {
  images: {
    domains: ["vkzktqrgcjplnrayhajm.supabase.co"],
    loader: "imgix",
    path: "",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    disableStaticImages: true,
    // Add remote patterns for supabase.co
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vkzktqrgcjplnrayhajm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};
