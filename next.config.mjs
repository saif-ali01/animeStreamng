const nextConfig = {
  images: {
    domains: ["images.hdqwalls.com", "i.pinimg.com","cache.desktopnexus.com"], // Add the new domain here
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });
    return config;
  }, 
   webpack: (config, { isServer }) => {
    // Disable caching
    config.cache = false;
    return config;
  },
};

export default nextConfig;
