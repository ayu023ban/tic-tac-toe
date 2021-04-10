import ForeGround from "../components/common/foreground";
import style from "../styles/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../redux/hooks";
import SelectLevel from "../components/SelectLevel";
import Game from "../components/Game";
import SelectMode from "../components/SelectMode";

export default function Home() {
  const page = useAppSelector((state) => state.general.page);
  const direction = useAppSelector((state) => state.general.direction);
  return (
    <div className={style.container}>
      <ForeGround>
        <AnimatePresence custom={direction}>
          {page === "modeSelect" ? (
            <SelectMode key={page} />
          ) : page === "levelSelect" ? (
            <SelectLevel key={page} />
          ) : page === "game" ? (
            <Game />
          ) : (
            <div></div>
          )}
        </AnimatePresence>
      </ForeGround>
    </div>
  );
}
