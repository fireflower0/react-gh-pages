import React, { useEffect } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div``;

const TetrisField = styled.table`
  margin: 0 auto;
  width: 200px;
  height: 400px;
`;

const TetrisCell = styled.td`
  background-color: gray;
  width: 10%;
  height: 5%;
`;

const Tetris = () => {
  const fieldWidth = 10;
  const fieldHeight = 20;

  let cellId = 0;
  let lineId = 0;
  let fieldArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];

  const draw = () => {
    const elem = document.getElementById('tetrisField');
    const tbody = elem.childNodes[0];
    tbody.childNodes.forEach((elmTr, i) => {
      elmTr.childNodes.forEach((elmTd, j) => {
        if (fieldArr[i][j] === 1) {
          elmTd.style.backgroundColor = 'red';
        } else {
          elmTd.style.backgroundColor = 'gray';
        }
      });
    });
  };

  const fall = () => {
    let under = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    for (let x = 0; x < fieldWidth; x += 1) {
      for (let y = 0; y < fieldWidth; y += 1) {
        if (under[x] === 0) {
          if (fieldArr[x][y] === 0) {
            under[x] = 0;
          } else {
            fieldArr[x][y + 1] = fieldArr[x][y];
            fieldArr[x][y] = 0;
            under[x] = 0;
          }
        } else {
          if (fieldArr[x][y] === 0) {
            under[x] = 0;
          } else {
            under[x] = 1;
          }
        }
      }
    }
  };

  const genBlock = (type) => {
    if (type === 1) {
      fieldArr[0][5] = 1;
      fieldArr[1][5] = 1;
      fieldArr[2][5] = 1;
      fieldArr[3][5] = 1;
    }
  };

  const makeCell = () => (
    [...Array(10)].map(() => {
      cellId += 1;
      return <TetrisCell key={cellId} />;
    })
  );

  const makeField = () => (
    [...Array(20)].map(() => {
      lineId += 1;
      return <tr key={lineId} >{makeCell()}</tr>;
    })
  );

  const handleInputKey = () => {
    window.onkeydown = (e) => {
      if (e.code === 'Space') {
        console.log('Space key');
        genBlock(1);
      } else if (e.code === 'ArrowRight') {
        console.log('Right key');
      } else if (e.code === 'ArrowLeft') {
        console.log('Left key');
      }
      draw();
    }
  };

  const gameLoop = () => {
    // setInterval(() => {
    //   draw();
    // }, 500);
  };

  useEffect(() => {
    handleInputKey();
    fall();
    draw();
    gameLoop();
  }, []);


  return (
    <FormWrapper>
      Tetris Game!!!
      <TetrisField id="tetrisField">
        <tbody>
          {makeField()}
        </tbody>
      </TetrisField>
    </FormWrapper>
  );
};

export default Tetris;
