module.exports = (baseConfig, env, config) => {
  config.module.rules = [
    {
      test: /\.(jsx?|tsx?)$/,
      loader: "babel-loader"
    },
    {
      test: /story\.tsx?$/,
      loaders: [
        {
          loader: require.resolve("@storybook/addon-storysource/loader"),
          options: { parser: "typescript" }
        }
      ],
      enforce: "pre"
    }
  ];

  config.resolve.extensions = [".ts", ".tsx", ".js"];

  return config;
};
