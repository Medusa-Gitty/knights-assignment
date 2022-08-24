import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import possibilities from "../helpers/possibilities";
// import knight from "../assets/knight1.png";
import Lottie from "lottie-react";
import knight from "../assets/animations/knight.json";
import movable from "../assets/animations/movable.json";

const yAxis = [0, 1, 2, 3, 4, 5, 6, 7];
const xAxis = [0, 1, 2, 3, 4, 5, 6, 7];

const Board = () => {
  const [selected, setSelected] = useState("");
  const [possible, setPossible] = useState({});

  function showPossibilities(index) {
    setSelected(index);
    setPossible(possibilities(index));
  }

  let board = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      board.push(
        <GridItem
          h="100px"
          bg={(i + j) % 2 === 0 ? "#FFFFDD" : "#86A666"}
          onClick={() => showPossibilities(`${i}${j}`)}
          key={`${i}${j}`}
        >
          {`${i}${j}` === selected ? (
            <Lottie animationData={knight} loop={false} />
          ) : possible[`${i}${j}`] === undefined ? null : (
            <Lottie animationData={movable} loop={true} />
          )}
        </GridItem>
      );
    }
  }

  return (
    <>
      <Grid
        width="820px"
        margin="auto"
        templateColumns="repeat(8, 100px)"
        border="10px solid brown"
      >
        {board}
      </Grid>
    </>
  );
};

export default Board;
