const maps = require('./build/peg');

// NOOP

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

let result = maps.parse("{'ints':[1,2,3]}", { actions });

console.log(result);