"use client";
import { Fragment } from "react";
import Board from "./board";
import { knightPosition } from "./game";

export default function Home() {
  return (
    <Fragment>
      <div className="h-[100vh] w-[100vh]">
        <Board knightPosition={knightPosition} />
      </div>
    </Fragment>
  );
}
