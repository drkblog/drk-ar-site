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

const actions = {
  make_map (input, start, end, [_, key, __, value]) {
    let map = {}
    map[key] = value
    return map
  },

  make_string (input, start, end, [_, string]) {
    return string.text
  },

  make_list (input, start, end, [_, first, rest]) {
    rest = [...rest].map((el) => el.value)
    return [first, ...rest]
  },

  make_number (input, start, end, _) {
    return parseInt(input.substring(start, end), 10)
  }
};

let result = sidila.maps.parse("{'ints':[1,2,3]}", { actions });

console.log(result);