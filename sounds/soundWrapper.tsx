import React, { useEffect, lazy } from "react";
import useSound from "use-sound";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetSound } from "../redux/sounds/reducers";
const boardSound = require("./board.mp3");
const bubbleSound = require("./bubble.mp3");
const loseSound = require("./lose.mp3");
const menuSound = require("./menu.mp3");
const oMarkSound = require("./oMark.mp3");
const swipeSound = require("./swipe.mp3");
const tieSound = require("./tie.mp3");
const winSound = require("./win.mp3");
const xMarkSound = require("./xMark.mp3");

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
