const path = require("path");

module.exports = {
  stories: ["../stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
          },
        },
      },
    },
  ],
};
