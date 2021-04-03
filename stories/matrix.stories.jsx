import Matrix from "../components/matrix";
export default {
  title: "Elements/Matrix",
};

const Template1 = () => (
    <Matrix  />
);

//👇 Each story then reuses that template
export const matrix = Template1.bind({});
