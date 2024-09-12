/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          port: "",
        },
        {
          protocol: "https",
          hostname: "wphcaxizypgvkbhwkqss.supabase.co", // Domain Supabase
          port: "",
          pathname: "/storage/v1/object/public/**", // Path pattern untuk gambar
        },
      ],
    },
  };
  
  export default nextConfig;
  