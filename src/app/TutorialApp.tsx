import type { CSSProperties, FC } from "react";
import { useMemo } from "react";

import { Board } from "./board";
import { Game } from "./game";

export interface ChessboardTutorialAppState {
  knightPosition: [number, number];
}

const containerStyle: CSSProperties = {
  width: 500,
  height: 500,
  border: "1px solid gray",
};

/**
 * The Chessboard Tutorial Application
 */
export const TutorialApp: FC = () => {
  const game = useMemo(() => new Game(), []);

  return (
    <div style={containerStyle}>
      <Board game={game} />
    </div>
  );
};
