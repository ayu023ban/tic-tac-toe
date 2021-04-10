import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setPlayer1Name } from "../../redux/player1/reducer";
import styles from "../../styles/scoreBoard.module.scss";

const Player1ScoreBoard = () => {
  const dispatch = useAppDispatch();
  const player1Name = useAppSelector((state) => state.player1.profile.name);
  const player2Name = useAppSelector((state) => state.player2.profile.name);
  const score = useAppSelector((state) => state.player1.score);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const value = evt.target.value;
    dispatch(setPlayer1Name(value));
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
        value={player1Name}
        style={{
          width: `${Math.max(player1Name.length, player2Name.length, 2)}rem`,
        }}
      />
      <span className={styles.score}>{score}</span>
    </div>
  );
};

export default Player1ScoreBoard;
