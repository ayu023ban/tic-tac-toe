import Button2 from "../components/common/button2";
import Button1 from "../components/common/button1";
export default {
  title: "Button",
};

const Template1 = (args) => <Button1 {...args} />;
const Template2 = (args) => <Button2 {...args} />;

//👇 Each story then reuses that template
export const button1 = Template1.bind({});
button1.args = { text: "Sample" };

export const button2 = Template2.bind({});
button2.args = {
  text: "Sample",
  type: ("soundOn", "soundOff", "restart", "other"),
};
