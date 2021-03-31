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
  const soundEnabled = useAppSelector((state) => !state.settings.isMute);

  const dispatch = useAppDispatch();
  const [playBoardSound] = useSound(boardSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playBubbleSound] = useSound(bubbleSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playLoseSound] = useSound(loseSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playMenuSound] = useSound(menuSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playOMarkSound] = useSound(oMarkSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playSwipeSound] = useSound(swipeSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playTieSound] = useSound(tieSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playWinSound] = useSound(winSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
  });
  const [playXMarkSound] = useSound(xMarkSound, {
    onend: () => dispatch(resetSound()),
    soundEnabled,
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
