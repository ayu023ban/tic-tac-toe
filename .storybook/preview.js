import "!style-loader!css-loader!sass-loader!../styles/globals.scss";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import * as nextImage from "next/image";

// nextImage = ({ src }) => <img src={src} />;

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    return <img {...props} />;
  },
});

export const decorators = [
  (Story) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    );
  },
];
