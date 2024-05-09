import type { CSSProperties, FC } from "react";
import { DragPreviewImage, useDrag } from "react-dnd";

import { ItemTypes } from "./ItemTypes";
import { knightImage } from "./knightImage";

const knightStyle: CSSProperties = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

export const Knight: FC = () => {
  return (
    <>
      {/* <DragPreviewImage connect={preview} src={knightImage} /> */}
      <div
        style={{
          ...knightStyle,
        }}
      >
        ♘
      </div>
    </>
  );
};
