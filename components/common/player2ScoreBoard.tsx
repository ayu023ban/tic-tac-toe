import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setPlayer2Name } from "../../redux/player2/reducer";
import styles from "../../styles/scoreBoard.module.scss";

const Player2ScoreBoard = () => {
  const dispatch = useAppDispatch();
  const player1Name = useAppSelector((state) => state.player1.profile.name);
  const player2Name = useAppSelector((state) => state.player2.profile.name);
  const score = useAppSelector((state) => state.player2.score);
  const mode = useAppSelector((state) => state.player2.mode);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const value = evt.target.value;
    dispatch(setPlayer2Name(value));
  };
  return (
    <div className={styles.scoreboard}>
      <input
        type="text"
        className={styles.name}
        aria-label="Rename"
        data-tooltip="Rename"
        spellCheck="false"
        onChange={onChange}
        value={player2Name}
        readOnly={mode === "computer"}
        style={{
          width: `${Math.max(player1Name.length, player2Name.length, 2)}rem`,
        }}
      />
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default Player2ScoreBoard;
