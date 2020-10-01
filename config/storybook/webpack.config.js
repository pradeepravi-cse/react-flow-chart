module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx | js)$/,
      use: [
        {
          loader: require.resolve("ts-loader"),
        },
      ],
    },
    {
      test: /\.svg$/i,
      use: [
        {
          loader: "url-loader",
        },
      ],
    }
  );
  config.resolve.extensions.push(".ts", ".tsx", ".js");
  return config;
};
