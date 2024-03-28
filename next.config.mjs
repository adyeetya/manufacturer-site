/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.modularkitcheninnoida.com',
      'api.designindianwardrobe.com',
      'images.unsplash.com',
      'www.imagekit.io',
      'ik.imagekit.io',
      'homes.devotionalindia.com',
      'cdn-icons-png.flaticon.com',
      'www.freepik.com',
      'img.freepik.com',
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig;
