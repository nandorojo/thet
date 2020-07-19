// …Some others imports before
const withSass = require("@zeit/next-sass");

const nextConfig = {
  webpack(config, { isServer }) {
    // Allows to prevent crashes on server with EUi
    if (isServer) {
      config.externals = config.externals.map((fn) => {
        return (context, request, callback) => {
          if (
            request.indexOf("@elastic/eui") > -1 ||
            request.indexOf("react-ace") > -1
          ) {
            return callback();
          }

          return fn(context, request, callback);
        };
      });

      // Mock react-ace server-side
      config.module.rules.push({
        test: /react-ace/,
        use: "null-loader",
      });

      // Mock HTMLElement and window server-side
      let definePluginId = config.plugins.findIndex(
        (p) => p.constructor.name === "DefinePlugin"
      );
      config.plugins[definePluginId].definitions = {
        ...config.plugins[definePluginId].definitions,
        HTMLElement: function () {},
        window: function () {},
      };
    }

    return config;
  },
};

module.exports = withSass(nextConfig);
