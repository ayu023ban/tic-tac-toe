import ForeGround from "../components/common/foreground";
import style from "../styles/Home.module.scss";
import { AnimatePresence } from "framer-motion";
import { useAppSelector } from "../redux/hooks";
import SelectLevel from "../components/SelectLevel";
import Game from "../components/Game";
import SelectMode from "../components/SelectMode";

export default function Home() {
  const page = useAppSelector((state) => state.general.page);
  return (
    <div className={style.container}>
      <ForeGround>
        <AnimatePresence>
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
