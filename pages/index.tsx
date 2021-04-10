import ForeGround from "../components/common/foreground";
import style from "../styles/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../redux/hooks";
import SelectLevel from "../components/SelectLevel";
import Game from "../components/Game";
import SelectMode from "../components/SelectMode";
import ConfirmReset from "../components/confirmReset";
import Player1ScoreBoard from "../components/common/player1ScoreBoard";
import Player2ScoreBoard from "../components/common/player2ScoreBoard";

export default function Home() {
  const page = useAppSelector((state) => state.general.page);
  const direction = useAppSelector((state) => state.general.direction);
  const player1Name = useAppSelector((state) => state.player1.profile.name);
  const player2Name = useAppSelector((state) => state.player2.profile.name);
  return (
    <div className={style.container}>
      {page === "game" && <Player1ScoreBoard />}
      <ForeGround>
        <AnimatePresence custom={direction}>
          {page === "modeSelect" ? (
            <SelectMode key={page} />
          ) : page === "levelSelect" ? (
            <SelectLevel key={page} />
          ) : page === "game" ? (
            <Game />
          ) : page === "confirmReset" ? (
            <ConfirmReset key={page} />
          ) : (
            <div></div>
          )}
        </AnimatePresence>
      </ForeGround>
      {page === "game" && <Player2ScoreBoard />}
    </div>
  );
}
