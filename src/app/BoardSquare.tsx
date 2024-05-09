import type { FC, ReactNode } from "react";
import { useDrop } from "react-dnd";

import type { Game } from "./game";
import { ItemTypes } from "./ItemTypes";
import { Overlay, OverlayType } from "./Overlay";
import { Square } from "./square";

export interface BoardSquareProps {
  x: number;
  y: number;
  children?: ReactNode;
  game: Game;
}

export const BoardSquare: FC<BoardSquareProps> = ({
  x,
  y,
  children,
  game,
}: BoardSquareProps) => {
  const black = (x + y) % 2 === 1;
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => game.moveKnight(x, y),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [game]
  );

  return (
    <div
      ref={drop}
      // role="Space"
      data-testid={`(${x},${y})`}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Square black={black}>{children}</Square>
    </div>
  );
};
