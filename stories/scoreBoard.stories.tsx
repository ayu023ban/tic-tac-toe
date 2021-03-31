import ScoreBoard from "../components/common/scoreBoard";
export default {
  title: "Elements/ScoreBoard",
  component: ScoreBoard,
};

const Template2 = (args) => <ScoreBoard {...args} />;

export const scoreBoard = Template2.bind({});
scoreBoard.args = {
  name: "Player1",
  score: 10,
};
