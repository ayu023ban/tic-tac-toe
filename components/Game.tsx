import * as React from "react";
import { useAppSelector } from "../redux/hooks";
import Alert from "./common/alert";
import Button1 from "./common/button1";
import Button2 from "./common/button2";
import Matrix from "./matrix";

const Game = () => {
  const result = useAppSelector((state) => state.result.result);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <div>{result !== "NOT_DECLARED" && <Alert />}</div>

      <Matrix />
      <div>
        <Button2 type="soundOn" />
        <Button1 text="Restart" />
        <Button2 type="restart" />
      </div>
    </div>
  );
};
export default Game;
