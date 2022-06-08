module.exports = {
  env: {
    port: process.env.PORT_BUILD
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },

      use: ['@svgr/webpack'],
    });

    return config;
  },
};
