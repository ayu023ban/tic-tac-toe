import React, { useEffect } from "react";
import useSound from "use-sound";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetSound } from "../redux/sounds/actions";
import boardSound from "../sounds/board.mp3";
import bubbleSound from "../sounds/bubble.mp3";
import loseSound from "../sounds/lose.mp3";
import menuSound from "../sounds/menu.mp3";
import oMarkSound from "../sounds/oMark.mp3";
import swipeSound from "../sounds/swipe.mp3";
import tieSound from "../sounds/tie.mp3";
import winSound from "../sounds/win.mp3";
import xMarkSound from "../sounds/xMark.mp3";

type AppProps = {
  children: JSX.Element;
};

const SoundWrapper = ({ children }: AppProps) => {
  const soundType = useAppSelector((state) => state.sounds.soundType);
  const dispatch = useAppDispatch();
  const [playBoardSound] = useSound(boardSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playBubbleSound] = useSound(bubbleSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playLoseSound] = useSound(loseSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playMenuSound] = useSound(menuSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playOMarkSound] = useSound(oMarkSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playSwipeSound] = useSound(swipeSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playTieSound] = useSound(tieSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playWinSound] = useSound(winSound, {
    onend: () => dispatch(resetSound()),
  });
  const [playXMarkSound] = useSound(xMarkSound, {
    onend: () => dispatch(resetSound()),
  });

  const playButtons = {
    boardSound: playBoardSound,
    bubbleSound: playBubbleSound,
    loseSound: playLoseSound,
    menuSound: playMenuSound,
    oMarkSound: playOMarkSound,
    swipeSound: playSwipeSound,
    tieSound: playTieSound,
    winSound: playWinSound,
    xMarkSound: playXMarkSound,
  };

  useEffect(() => {
    if (soundType !== null) {
      playButtons[soundType]();
    }
  }, [soundType]);

  return <>{children}</>;
};

export default SoundWrapper;
