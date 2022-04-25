// UI Setup
const code = document.querySelector("#code");
const output = document.querySelector("#output");
const runButton = document.querySelector("#run");
runButton.addEventListener("click", async (event) => {
    output.value = run(code.value.toString());
});

// Game setup
let boardSide = 12;


// Board
function boardCreate(side) {
  var matrix = [];
  for(var i=0; i < side; i++) {
    matrix[i] = [];
    for(var j=0; j < side; j++) {
      matrix[i][j] = undefined;
    }
  }
  return matrix;
}

// Painting

// PEG

let result = sidila.maps.parse("crear \"pepe\"\ncrear \"asdf\"");

console.log(result);