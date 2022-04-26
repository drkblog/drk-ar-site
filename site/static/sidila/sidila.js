// Types
class Block {
  static Wall = new Block("w");
  static Exit = new Block("e");
  static Space = new Block(" ");

  constructor(name) {
    this.name = name;
  }
}

// Board
function boardCreateEmpty(side) {
  let board = [];
  for(let i=0; i < side; i++) {
    board[i] = [];
    for(let j=0; j < side; j++) {
      board[i][j] = Block.Space;
    }
  }
  return board;
}

function boardLoadHardcoded(side) {
  let board = boardCreateEmpty(side);
  for(let i=0; i < side; i++) {
    board[i][0] = Block.Wall;
    board[i][side - 1] = Block.Wall;
    board[0][i] = Block.Wall;
    board[side -1 ][i] = Block.Wall;
  }
  return board;
}

// Painting
function paint(board, side, player) {
  let drawing = '';
  for(let x=0; x < side; x++) {
    for(let y=0; y < side; y++) {
      if (x == player.x && y == player.y) {
        drawing += 'X';
      } else {
        drawing += board[x][y].name;
      }
    }
    drawing += '\n';
  }
  return drawing;
}


// Game
function run(code) {
  let tree = sidila.maps.parse(code);
  console.log(tree);
  gameRunning = true;
  gameTicks = tree.elements.length;
}

function tick() {
  if (gameRunning) {
    gamePlayer.x++;
    gamePlayer.y++;
    output.value = paint(boardMatrix, boardSide, gamePlayer);
    gameTicks--;
    gameRunning = gameTicks > 0;
  }
}

// UI Setup
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const runButton = document.querySelector("#run");
runButton.addEventListener("click", async (event) => {
  run(code.value.toString());
});

// Game setup
let boardSide = 12;
let boardMatrix = boardLoadHardcoded(boardSide);

// Game status
let gameRunning = false;
let gameTicks;
let gamePlayer = { x: 1, y: 1 };

setInterval(tick, 1000);