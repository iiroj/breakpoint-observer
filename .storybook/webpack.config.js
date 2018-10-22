module.exports = (baseConfig, env, config) => {
  config.module.rules = [
    {
      test: /\.(jsx?|tsx?)$/,
      loader: "babel-loader"
    }
  ];

  config.resolve.extensions = [".ts", ".tsx", ".js"];

  return config;
};
