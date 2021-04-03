import Button2 from "../components/common/button2";
export default {
  title: "Elements/Button",
  component: Button2,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["soundOn", "soundOff", "restart", "other"],
      },
    },
  },
};

const Template2 = (args) => <Button2 {...args} />;

export const button2 = Template2.bind({});
button2.args = {
  text: "Sample",
  type: "soundOn",
};
