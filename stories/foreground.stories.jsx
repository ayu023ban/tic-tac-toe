import ForeGround from "../components/common/foreground";
export default {
  title: "Elements/ForeGround",
};

const Template1 = ({ width, height }: { width: Number; height: Number }) => (
  <div style={{ width: width + "px", height: height + "px" }}>
    <ForeGround />
  </div>
);

//👇 Each story then reuses that template
export const foreGround = Template1.bind({});
foreGround.args = { width: 1110, height: 1200 };
