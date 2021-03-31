import "../styles/globals.scss";
import { wrapper } from "../redux/store";
import SoundWrapper from "../sounds/soundWrapper";

const WrappedApp = ({ Component, pageProps }) => {
  return (
    <SoundWrapper>
      <Component {...pageProps} />
    </SoundWrapper>
  );
};

export default wrapper.withRedux(WrappedApp);
