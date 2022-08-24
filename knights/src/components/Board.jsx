import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useState } from "react";
import possibilities from "../helpers/possibilities";

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
          bg={`${i}${j}` === selected ? "white" : "blue.100"}
          border="1px solid red"
          onClick={() => showPossibilities(`${i}${j}`)}
          key={`${i}${j}`}
        >
          {yAxis[i]},{xAxis[j]}
        </GridItem>
      );
    }
  }

  return (
    <>
      <Grid templateColumns="repeat(8, 100px)">{board}</Grid>
      <Box>Selected = {selected}</Box>
    </>
  );
};

export default Board;
