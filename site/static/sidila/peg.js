/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var sidila;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build/peg.js":
/*!**********************!*\
  !*** ./build/peg.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * This file was generated from src\\grammar\\sidila.peg\n * See https://canopy.jcoglan.com/ for documentation\n */\n\n(function () {\n  'use strict';\n\n  function TreeNode (text, offset, elements) {\n    this.text = text;\n    this.offset = offset;\n    this.elements = elements;\n  }\n\n  TreeNode.prototype.forEach = function (block, context) {\n    for (var el = this.elements, i = 0, n = el.length; i < n; i++) {\n      block.call(context, el[i], i, el);\n    }\n  };\n\n  if (typeof Symbol !== 'undefined' && Symbol.iterator) {\n    TreeNode.prototype[Symbol.iterator] = function () {\n      return this.elements[Symbol.iterator]();\n    };\n  }\n\n  var TreeNode1 = function (text, offset, elements) {\n    TreeNode.apply(this, arguments);\n    this['direction'] = elements[1];\n  };\n  inherit(TreeNode1, TreeNode);\n\n  var FAILURE = {};\n\n  var Grammar = {\n    _read_statement () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._statement = this._cache._statement || {};\n      var cached = this._cache._statement[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var index1 = this._offset, elements0 = [], address1 = null;\n      while (true) {\n        var index2 = this._offset, elements1 = new Array(1);\n        var address2 = FAILURE;\n        var index3 = this._offset;\n        address2 = this._read_turn();\n        if (address2 === FAILURE) {\n          this._offset = index3;\n          address2 = this._read_move();\n          if (address2 === FAILURE) {\n            this._offset = index3;\n            address2 = this._read_shoot();\n            if (address2 === FAILURE) {\n              this._offset = index3;\n            }\n          }\n        }\n        if (address2 !== FAILURE) {\n          elements1[0] = address2;\n          var address3 = FAILURE;\n          address3 = this._read_nl();\n          if (address3 !== FAILURE) {\n          } else {\n            elements1 = null;\n            this._offset = index2;\n          }\n        } else {\n          elements1 = null;\n          this._offset = index2;\n        }\n        if (elements1 === null) {\n          address1 = FAILURE;\n        } else {\n          address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);\n          this._offset = this._offset;\n        }\n        if (address1 !== FAILURE) {\n          elements0.push(address1);\n        } else {\n          break;\n        }\n      }\n      if (elements0.length >= 0) {\n        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);\n        this._offset = this._offset;\n      } else {\n        address0 = FAILURE;\n      }\n      this._cache._statement[index0] = [address0, this._offset];\n      return address0;\n    },\n\n    _read_move () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._move = this._cache._move || {};\n      var cached = this._cache._move[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var chunk0 = null, max0 = this._offset + 7;\n      if (max0 <= this._inputSize) {\n        chunk0 = this._input.substring(this._offset, max0);\n      }\n      if (chunk0 === 'avanzar') {\n        address0 = this._actions.make_move(this._input, this._offset, this._offset + 7, []);\n        this._offset = this._offset + 7;\n      } else {\n        address0 = FAILURE;\n        if (this._offset > this._failure) {\n          this._failure = this._offset;\n          this._expected = [];\n        }\n        if (this._offset === this._failure) {\n          this._expected.push(['SiDiLa::move', '\\'avanzar\\'']);\n        }\n      }\n      this._cache._move[index0] = [address0, this._offset];\n      return address0;\n    },\n\n    _read_shoot () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._shoot = this._cache._shoot || {};\n      var cached = this._cache._shoot[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var chunk0 = null, max0 = this._offset + 8;\n      if (max0 <= this._inputSize) {\n        chunk0 = this._input.substring(this._offset, max0);\n      }\n      if (chunk0 === 'disparar') {\n        address0 = this._actions.make_shoot(this._input, this._offset, this._offset + 8, []);\n        this._offset = this._offset + 8;\n      } else {\n        address0 = FAILURE;\n        if (this._offset > this._failure) {\n          this._failure = this._offset;\n          this._expected = [];\n        }\n        if (this._offset === this._failure) {\n          this._expected.push(['SiDiLa::shoot', '\\'disparar\\'']);\n        }\n      }\n      this._cache._shoot[index0] = [address0, this._offset];\n      return address0;\n    },\n\n    _read_turn () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._turn = this._cache._turn || {};\n      var cached = this._cache._turn[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var index1 = this._offset, elements0 = new Array(2);\n      var address1 = FAILURE;\n      var chunk0 = null, max0 = this._offset + 5;\n      if (max0 <= this._inputSize) {\n        chunk0 = this._input.substring(this._offset, max0);\n      }\n      if (chunk0 === 'girar') {\n        address1 = new TreeNode(this._input.substring(this._offset, this._offset + 5), this._offset, []);\n        this._offset = this._offset + 5;\n      } else {\n        address1 = FAILURE;\n        if (this._offset > this._failure) {\n          this._failure = this._offset;\n          this._expected = [];\n        }\n        if (this._offset === this._failure) {\n          this._expected.push(['SiDiLa::turn', '\\'girar\\'']);\n        }\n      }\n      if (address1 !== FAILURE) {\n        elements0[0] = address1;\n        var address2 = FAILURE;\n        address2 = this._read_ws();\n        if (address2 !== FAILURE) {\n          var address3 = FAILURE;\n          var chunk1 = null, max1 = this._offset + 8;\n          if (max1 <= this._inputSize) {\n            chunk1 = this._input.substring(this._offset, max1);\n          }\n          if (chunk1 === 'hacia la') {\n            address3 = new TreeNode(this._input.substring(this._offset, this._offset + 8), this._offset, []);\n            this._offset = this._offset + 8;\n          } else {\n            address3 = FAILURE;\n            if (this._offset > this._failure) {\n              this._failure = this._offset;\n              this._expected = [];\n            }\n            if (this._offset === this._failure) {\n              this._expected.push(['SiDiLa::turn', '\\'hacia la\\'']);\n            }\n          }\n          if (address3 !== FAILURE) {\n            var address4 = FAILURE;\n            address4 = this._read_ws();\n            if (address4 !== FAILURE) {\n              var address5 = FAILURE;\n              address5 = this._read_direction();\n              if (address5 !== FAILURE) {\n                elements0[1] = address5;\n              } else {\n                elements0 = null;\n                this._offset = index1;\n              }\n            } else {\n              elements0 = null;\n              this._offset = index1;\n            }\n          } else {\n            elements0 = null;\n            this._offset = index1;\n          }\n        } else {\n          elements0 = null;\n          this._offset = index1;\n        }\n      } else {\n        elements0 = null;\n        this._offset = index1;\n      }\n      if (elements0 === null) {\n        address0 = FAILURE;\n      } else {\n        address0 = this._actions.make_turn(this._input, index1, this._offset, elements0);\n        this._offset = this._offset;\n      }\n      this._cache._turn[index0] = [address0, this._offset];\n      return address0;\n    },\n\n    _read_direction () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._direction = this._cache._direction || {};\n      var cached = this._cache._direction[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var index1 = this._offset;\n      var chunk0 = null, max0 = this._offset + 9;\n      if (max0 <= this._inputSize) {\n        chunk0 = this._input.substring(this._offset, max0);\n      }\n      if (chunk0 === 'izquierda') {\n        address0 = new TreeNode(this._input.substring(this._offset, this._offset + 9), this._offset, []);\n        this._offset = this._offset + 9;\n      } else {\n        address0 = FAILURE;\n        if (this._offset > this._failure) {\n          this._failure = this._offset;\n          this._expected = [];\n        }\n        if (this._offset === this._failure) {\n          this._expected.push(['SiDiLa::direction', '\"izquierda\"']);\n        }\n      }\n      if (address0 === FAILURE) {\n        this._offset = index1;\n        var chunk1 = null, max1 = this._offset + 7;\n        if (max1 <= this._inputSize) {\n          chunk1 = this._input.substring(this._offset, max1);\n        }\n        if (chunk1 === 'derecha') {\n          address0 = new TreeNode(this._input.substring(this._offset, this._offset + 7), this._offset, []);\n          this._offset = this._offset + 7;\n        } else {\n          address0 = FAILURE;\n          if (this._offset > this._failure) {\n            this._failure = this._offset;\n            this._expected = [];\n          }\n          if (this._offset === this._failure) {\n            this._expected.push(['SiDiLa::direction', '\"derecha\"']);\n          }\n        }\n        if (address0 === FAILURE) {\n          this._offset = index1;\n        }\n      }\n      this._cache._direction[index0] = [address0, this._offset];\n      return address0;\n    },\n\n    _read_ws () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._ws = this._cache._ws || {};\n      var cached = this._cache._ws[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var index1 = this._offset, elements0 = [], address1 = null;\n      while (true) {\n        var index2 = this._offset, elements1 = [], address2 = null;\n        while (true) {\n          var chunk0 = null, max0 = this._offset + 1;\n          if (max0 <= this._inputSize) {\n            chunk0 = this._input.substring(this._offset, max0);\n          }\n          if (chunk0 !== null && /^[ \\t]/.test(chunk0)) {\n            address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset, []);\n            this._offset = this._offset + 1;\n          } else {\n            address2 = FAILURE;\n            if (this._offset > this._failure) {\n              this._failure = this._offset;\n              this._expected = [];\n            }\n            if (this._offset === this._failure) {\n              this._expected.push(['SiDiLa::ws', '[ \\\\t]']);\n            }\n          }\n          if (address2 !== FAILURE) {\n            elements1.push(address2);\n          } else {\n            break;\n          }\n        }\n        if (elements1.length >= 1) {\n          address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);\n          this._offset = this._offset;\n        } else {\n          address1 = FAILURE;\n        }\n        if (address1 !== FAILURE) {\n          elements0.push(address1);\n        } else {\n          break;\n        }\n      }\n      if (elements0.length >= 0) {\n        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);\n        this._offset = this._offset;\n      } else {\n        address0 = FAILURE;\n      }\n      this._cache._ws[index0] = [address0, this._offset];\n      return address0;\n    },\n\n    _read_nl () {\n      var address0 = FAILURE, index0 = this._offset;\n      this._cache._nl = this._cache._nl || {};\n      var cached = this._cache._nl[index0];\n      if (cached) {\n        this._offset = cached[1];\n        return cached[0];\n      }\n      var index1 = this._offset, elements0 = [], address1 = null;\n      while (true) {\n        var index2 = this._offset, elements1 = [], address2 = null;\n        while (true) {\n          var chunk0 = null, max0 = this._offset + 1;\n          if (max0 <= this._inputSize) {\n            chunk0 = this._input.substring(this._offset, max0);\n          }\n          if (chunk0 !== null && /^[\\r\\n]/.test(chunk0)) {\n            address2 = new TreeNode(this._input.substring(this._offset, this._offset + 1), this._offset, []);\n            this._offset = this._offset + 1;\n          } else {\n            address2 = FAILURE;\n            if (this._offset > this._failure) {\n              this._failure = this._offset;\n              this._expected = [];\n            }\n            if (this._offset === this._failure) {\n              this._expected.push(['SiDiLa::nl', '[\\\\r\\\\n]']);\n            }\n          }\n          if (address2 !== FAILURE) {\n            elements1.push(address2);\n          } else {\n            break;\n          }\n        }\n        if (elements1.length >= 1) {\n          address1 = new TreeNode(this._input.substring(index2, this._offset), index2, elements1);\n          this._offset = this._offset;\n        } else {\n          address1 = FAILURE;\n        }\n        if (address1 !== FAILURE) {\n          elements0.push(address1);\n        } else {\n          break;\n        }\n      }\n      if (elements0.length >= 0) {\n        address0 = new TreeNode(this._input.substring(index1, this._offset), index1, elements0);\n        this._offset = this._offset;\n      } else {\n        address0 = FAILURE;\n      }\n      this._cache._nl[index0] = [address0, this._offset];\n      return address0;\n    }\n  };\n\n  var Parser = function(input, actions, types) {\n    this._input = input;\n    this._inputSize = input.length;\n    this._actions = actions;\n    this._types = types;\n    this._offset = 0;\n    this._cache = {};\n    this._failure = 0;\n    this._expected = [];\n  };\n\n  Parser.prototype.parse = function() {\n    var tree = this._read_statement();\n    if (tree !== FAILURE && this._offset === this._inputSize) {\n      return tree;\n    }\n    if (this._expected.length === 0) {\n      this._failure = this._offset;\n      this._expected.push(['SiDiLa', '<EOF>']);\n    }\n    this.constructor.lastError = { offset: this._offset, expected: this._expected };\n    throw new SyntaxError(formatError(this._input, this._failure, this._expected));\n  };\n\n  Object.assign(Parser.prototype, Grammar);\n\n\n  function parse(input, options) {\n    options = options || {};\n    var parser = new Parser(input, options.actions, options.types);\n    return parser.parse();\n  }\n\n  function formatError(input, offset, expected) {\n    var lines = input.split(/\\n/g),\n        lineNo = 0,\n        position = 0;\n\n    while (position <= offset) {\n      position += lines[lineNo].length + 1;\n      lineNo += 1;\n    }\n\n    var line = lines[lineNo - 1],\n        message = 'Line ' + lineNo + ': expected one of:\\n\\n';\n\n    for (var i = 0; i < expected.length; i++) {\n      message += '    - ' + expected[i][1] + ' from ' + expected[i][0] + '\\n';\n    }\n    var number = lineNo.toString();\n    while (number.length < 6) number = ' ' + number;\n    message += '\\n' + number + ' | ' + line + '\\n';\n\n    position -= line.length + 10;\n\n    while (position < offset) {\n      message += ' ';\n      position += 1;\n    }\n    return message + '^';\n  }\n\n  function inherit(subclass, parent) {\n    function chain () {};\n    chain.prototype = parent.prototype;\n    subclass.prototype = new chain();\n    subclass.prototype.constructor = subclass;\n  }\n\n\n  var exported = { Grammar: Grammar, Parser: Parser, parse: parse };\n\n  if (true) {\n    Object.assign(exports, exported);\n  } else { var ns; }\n})();\n\n\n//# sourceURL=webpack://sidila/./build/peg.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* reexport safe */ _game_board__WEBPACK_IMPORTED_MODULE_0__.Board),\n/* harmony export */   \"CanvasPainter\": () => (/* reexport safe */ _drawing__WEBPACK_IMPORTED_MODULE_1__.CanvasPainter),\n/* harmony export */   \"CardinalDirection\": () => (/* reexport safe */ _game_board__WEBPACK_IMPORTED_MODULE_0__.CardinalDirection),\n/* harmony export */   \"Player\": () => (/* reexport safe */ _game_board__WEBPACK_IMPORTED_MODULE_0__.Player),\n/* harmony export */   \"StepInterpreter\": () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_2__.StepInterpreter),\n/* harmony export */   \"maps\": () => (/* binding */ maps),\n/* harmony export */   \"parse\": () => (/* binding */ parse)\n/* harmony export */ });\n/* harmony import */ var _game_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-board */ \"./src/game-board.js\");\n/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing */ \"./src/drawing.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst maps = __webpack_require__(/*! ../build/peg */ \"./build/peg.js\");\r\n\r\nclass Actions {\r\n  make_move (input, start, end, elements) {\r\n    return {action: 'move'};\r\n  }\r\n  make_shoot (input, start, end, elements) {\r\n    return {action: 'shoot'};\r\n  }\r\n  make_turn (input, start, end, elements) {\r\n    return {action: 'turn', direction: elements[1].text};\r\n  }\r\n};\r\n\r\nfunction parse(code) {\r\n  return maps.parse(code, { actions: new Actions() })\r\n}\n\n//# sourceURL=webpack://sidila/./src/app.js?");

/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CanvasPainter\": () => (/* binding */ CanvasPainter)\n/* harmony export */ });\nconst imageBaseUrl = '/sidila/img/';\r\n\r\nclass CanvasPainter {\r\n  constructor(canvas, theme) {\r\n    this.canvas = canvas;\r\n    this.theme = theme;\r\n    this.imageMap = {};\r\n    this.sprites = new Image();\r\n    this.sprites.src = `${imageBaseUrl}${this.theme.image}`;\r\n  }\r\n\r\n  paint(board) {\r\n    const context = this.canvas.getContext('2d');\r\n    for(let y=0; y < board.height; y++) {\r\n      for(let x=0; x < board.width; x++) {\r\n        const spriteNumber = board.getSprite(x, y);\r\n        const sourceX = this.getSourceX(spriteNumber);\r\n        const sourceY = this.getSourceY(spriteNumber);\r\n        context.drawImage(\r\n          this.sprites, \r\n          sourceX, \r\n          sourceY,\r\n          this.theme.spriteWidth,\r\n          this.theme.spriteHeight,\r\n          x * this.theme.spriteWidth,\r\n          y * this.theme.spriteHeight,\r\n          this.theme.spriteWidth,\r\n          this.theme.spriteHeight\r\n        );\r\n      }\r\n    }\r\n  }\r\n\r\n  getSourceX(spriteNumber) {\r\n    return this.theme.spriteWidth * (spriteNumber % (this.sprites.width/this.theme.spriteWidth));\r\n  }\r\n\r\n  getSourceY(spriteNumber) {\r\n    return this.theme.spriteHeight * Math.floor(spriteNumber / (this.sprites.width/this.theme.spriteWidth));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sidila/./src/drawing.js?");

/***/ }),

/***/ "./src/game-board.js":
/*!***************************!*\
  !*** ./src/game-board.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": () => (/* binding */ Board),\n/* harmony export */   \"CardinalDirection\": () => (/* binding */ CardinalDirection),\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n// Enums\r\nclass LogicBlock {\r\n  static Wall = new LogicBlock(\"█\");\r\n  static Exit = new LogicBlock(\"░\");\r\n  static Space = new LogicBlock(\" \");\r\n  static Zombie = new LogicBlock(\"👾\");\r\n  static Sphinx = new LogicBlock(\"💀\");\r\n\r\n  constructor(symbol) {\r\n    this.symbol = symbol;\r\n  }\r\n}\r\n\r\nclass CardinalDirection {\r\n  static North = new CardinalDirection(\"▲\", position => ({x: position.x, y: position.y - 1}));\r\n  static East = new CardinalDirection(\"▶\", position => ({x: position.x + 1, y: position.y}));\r\n  static South = new CardinalDirection(\"▼\", position => ({x: position.x, y: position.y + 1}));\r\n  static West = new CardinalDirection(\"◀\", position => ({x: position.x - 1, y: position.y}));\r\n\r\n  constructor(symbol, action) {\r\n    this.symbol = symbol;\r\n    this.action = action;\r\n  }\r\n\r\n  advance(position) {\r\n    return this.action(position);\r\n  }\r\n\r\n  static order = [this.North, this.East, this.South, this.West];\r\n  static toTheRight(direction) {\r\n    const index = this.order.indexOf(direction) + 1;\r\n    return this.order[index % 4];\r\n  }\r\n\r\n  static toTheLeft(direction) {\r\n    const index = this.order.indexOf(direction) - 1;\r\n    return this.order[((index > -1) ? index : 3)];\r\n  }\r\n}\r\n\r\nclass Player {\r\n  constructor(x, y, direction) {\r\n    this.x = x;\r\n    this.y = y;\r\n    this.direction = direction;\r\n    this.crashed = false;\r\n  }\r\n\r\n  setupSprites(theme) {\r\n    CardinalDirection.North.sprite = theme.sprite['north'];\r\n    CardinalDirection.East.sprite = theme.sprite['east'];\r\n    CardinalDirection.South.sprite = theme.sprite['south'];\r\n    CardinalDirection.West.sprite = theme.sprite['west'];\r\n    this.deadSprite = theme.sprite['dead'];\r\n  }\r\n\r\n  getSprite() {\r\n    if (this.crashed) {\r\n      return this.deadSprite;\r\n    }\r\n    return this.direction.sprite;\r\n  }\r\n\r\n  move() {\r\n    const newPosition = this.direction.advance(this);\r\n    this.x = newPosition.x;\r\n    this.y = newPosition.y;\r\n  }\r\n\r\n  getShootTarget() {\r\n    return this.direction.advance(this);\r\n  }\r\n\r\n  crash() {\r\n    this.crashed = true;\r\n  }\r\n\r\n  wouldMove() {\r\n    return this.direction.advance(this);\r\n  }\r\n\r\n  isAt(x, y) {\r\n    return this.x == x && this.y == y;\r\n  }\r\n\r\n  rotateLeft() {\r\n    this.direction = CardinalDirection.toTheLeft(this.direction);\r\n  }\r\n  rotateRight() {\r\n    this.direction = CardinalDirection.toTheRight(this.direction);\r\n  }\r\n}\r\n\r\nclass Slot {\r\n  constructor(sprite, logic) {\r\n    this.sprite = sprite;\r\n    this.logic = logic;\r\n  }\r\n}\r\n\r\nclass Board {\r\n  constructor() {\r\n    this.reset();\r\n  }\r\n\r\n  reset() {\r\n    const scene = __webpack_require__(/*! ./scene */ \"./src/scene.json\");\r\n    this.width = scene.width;\r\n    this.height = scene.height;\r\n    this.theme = scene.theme;\r\n    this.board = this.createBoardFromScene(scene);\r\n    this.player = new sidila.Player(1, 1, sidila.CardinalDirection.East);\r\n    this.player.setupSprites(this.theme);\r\n  }\r\n\r\n  createBoardFromScene(scene) {\r\n    const board = [];\r\n    for(let x=0; x < scene.width; x++) {\r\n      board[x] = [];\r\n      for(let y=0; y < scene.height; y++) {\r\n        const sprite = scene.map[y][x];\r\n        board[x][y] = new Slot(sprite, Board.getLogicFor(scene.logic[sprite]));\r\n      }\r\n    }\r\n    return board;\r\n  }\r\n\r\n  static getLogicFor(text) {\r\n    return LogicBlock[text];\r\n  }\r\n\r\n  canMoveInto(x, y) {\r\n    return this.board[x][y].logic === LogicBlock.Space || this.board[x][y].logic === LogicBlock.Exit;\r\n  }\r\n\r\n  isCrashed() {\r\n    return this.player.crashed;\r\n  }\r\n\r\n  isDone() {\r\n    return this.board[this.player.x][this.player.y].logic === LogicBlock.Exit;\r\n  }\r\n\r\n  movePlayer() {\r\n    const newPosition = this.player.wouldMove();\r\n    if (this.canMoveInto(newPosition.x, newPosition.y)) {\r\n      this.player.move();\r\n    } else {\r\n      this.player.crash();\r\n    }\r\n  }\r\n  rotatePlayerLeft() {\r\n    this.player.rotateLeft();\r\n  }\r\n  rotatePlayerRight() {\r\n    this.player.rotateRight();\r\n  }\r\n  playerShoot() {\r\n    const shootAt = this.player.getShootTarget();\r\n    if (this.board[shootAt.x][shootAt.y].logic === LogicBlock.Zombie) {\r\n      this.board[shootAt.x][shootAt.y].logic = LogicBlock.Space;\r\n    }\r\n  }\r\n\r\n  getSprite(x, y) {\r\n    if (this.player.isAt(x, y)) {\r\n      return this.player.getSprite();\r\n    } else {\r\n      return this.board[x][y].sprite;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://sidila/./src/game-board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StepInterpreter\": () => (/* binding */ StepInterpreter)\n/* harmony export */ });\nclass StepInterpreter {\r\n  static processStatement(tree, gameTicks, board) {\r\n    const statement = tree.elements[gameTicks];\r\n    this.tryExecuting(statement, board);\r\n  }\r\n\r\n  static tryExecuting(statement, board) {\r\n    const node = statement.elements[0];\r\n    const action = node.action;\r\n    switch(action) {\r\n      case 'move':\r\n        board.movePlayer();\r\n        break;\r\n      case 'shoot':\r\n        board.playerShoot();\r\n        break;\r\n      case 'turn':\r\n        if (node.direction === 'derecha') {\r\n          board.rotatePlayerRight();\r\n        } else  {\r\n          board.rotatePlayerLeft();\r\n        }\r\n        break;\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://sidila/./src/game.js?");

/***/ }),

/***/ "./src/scene.json":
/*!************************!*\
  !*** ./src/scene.json ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"width\":12,\"height\":12,\"theme\":{\"image\":\"basic.png\",\"spriteWidth\":24,\"spriteHeight\":24,\"sprite\":{\"north\":5,\"east\":6,\"south\":7,\"west\":8,\"dead\":9}},\"logic\":[\"Space\",\"Wall\",\"Exit\",\"Sphinx\",\"Zombie\"],\"map\":[[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,3,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,4,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]]}');\n\n//# sourceURL=webpack://sidila/./src/scene.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	sidila = __webpack_exports__;
/******/ 	
/******/ })()
;