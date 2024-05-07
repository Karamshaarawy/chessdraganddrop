"use client";
import { Fragment } from "react";
import Board from "./board";

export default function Home() {
  return (
    <Fragment>
      <div className="h-[100vh] w-[100vh]">
        <Board knightPosition={[0, 0]} />
      </div>
    </Fragment>
  );
}
