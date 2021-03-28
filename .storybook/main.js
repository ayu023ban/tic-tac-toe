const path = require("path");

module.exports = {
  stories: ["../stories/*.stories.tsx"],
  addons: [
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
