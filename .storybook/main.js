const path = require("path");

module.exports = {
  stories: ["../stories/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
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
