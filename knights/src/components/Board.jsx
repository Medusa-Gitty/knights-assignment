import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { useState } from "react";

const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Board = () => {
  const [selected, setSelected] = useState("");

  let board = [];
  for (let i = 7; i >= 0; i--) {
    for (let j = 0; j < 8; j++) {
      board.push(
        <GridItem
          w="100%"
          h="80px"
          bg="blue.100"
          border="1px solid red"
          align="left"
          onClick={() => setSelected(`${i}${j}`)}
        >
          {yAxis[i]},{xAxis[j]}
        </GridItem>
      );
    }
  }

  return (
    <>
      <Grid templateColumns="repeat(8, 80px)">{board}</Grid>
      <Box>Selected = {selected}</Box>
    </>
  );
};

export default Board;
