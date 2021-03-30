import "../styles/fonts.scss";
import "../styles/globals.scss";
import { wrapper } from "../redux/store";

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
