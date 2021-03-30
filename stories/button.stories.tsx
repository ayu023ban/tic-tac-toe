import Button1 from "../components/common/button1";
export default {
  title: "Elements/Button",
};

const Template1 = (args) => <Button1 {...args} />;

//👇 Each story then reuses that template
export const button1 = Template1.bind({});
button1.args = { text: "Sample" };