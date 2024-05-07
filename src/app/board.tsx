"use client";
import React, { Dispatch, useState } from "react";
import Square from "./square";
import Knight from "./knight";
import { canMoveKnight, moveKnight } from "./game";

function renderSquare(
  i: any,
  [knightX, knightY]: [number, number],
  setKPosition: Dispatch<any>
) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = x === knightX && y === knightY;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  function handleSquareClick(toX: number, toY: number) {
    console.log(canMoveKnight(toX, toY));
    if (canMoveKnight(toX, toY)) {
      setKPosition([toX, toY]);
    }
  }
  function canMoveKnight(toX: number, toY: number) {
    const [x, y] = [knightX, knightY];
    const dx = toX - x;
    const dy = toY - y;

    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  }

  return (
    <div
      onClick={() => {
        console.log(x, y);
        handleSquareClick(x, y);
      }}
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
    >
      <Square black={black}>{piece}</Square>
    </div>
  );
}

export default function Board({ knightPosition }: { knightPosition: any }) {
  const [kPosition, setKPosition] = useState(knightPosition);
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, kPosition, setKPosition));
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
}
