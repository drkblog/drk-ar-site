---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila-editor"
comments: false
type: page
---

# Simple Didactic Language - Editor

{{< rawhtml >}}
<div id="container">
  <div>Over sprite: <span id="hoverSprite"></span> - Selected sprite: <span id="selectedSprite"></span></div>
  <canvas id="paletteCanvas" class="paletteCanvas" width="384" height="160"></canvas>
  <canvas id="editorCanvas" class="editorCanvas" width="256" height="256"></canvas>
</div>
<div id="message" class="message"></div>
<h3>JSON:</h3>
<div>
  <button id="load" class="sidila-button">Load</button>
  <button id="save" class="sidila-button">Save</button>
  <button id="reset" class="sidila-button">Reset</button>
</div>
<textarea id="code" class="source-code" cols="80" rows="12">
{
  "width": 16,
  "height": 16,
  "player": {
    "x": 12,
    "y": 2,
    "direction": "South"
  },
  "theme": {
    "image": "dungeon.png",
    "imageWidth": 384,
    "imageHeight": 160,
    "spriteWidth": 16,
    "spriteHeight": 16,
    "background": "#91b09a",
    "sprite": {
      "north": 189,
      "east": 189,
      "south": 189,
      "west": 189,
      "dead": 165
    }
  },
  "logic": {
    "1": "Sphinx",
    "2": "Zombie",
    "54": "Space",
    "172": "Exit",
    "173": "Exit",
    "174": "Exit",
    "175": "Exit",
    "211": "Space"
  },
  "space": 54,
  "map": [
    [
      5,
      6,
      6,
      6,
      6,
      104,
      6,
      6,
      6,
      6,
      6,
      192,
      193,
      194,
      6,
      7
    ],
    [
      29,
      30,
      30,
      147,
      30,
      128,
      30,
      30,
      168,
      30,
      30,
      216,
      217,
      218,
      30,
      31
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      55
    ],
    [
      102,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      209,
      210,
      54,
      54,
      211,
      54,
      54,
      75
    ],
    [
      76,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      233,
      234,
      54,
      54,
      54,
      54,
      54,
      99
    ],
    [
      100,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      55
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      55
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      55
    ],
    [
      102,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      8,
      78,
      78,
      127,
      78,
      4
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      182,
      99,
      25,
      25,
      25,
      25,
      25
    ],
    [
      76,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      182,
      182,
      55,
      25,
      25,
      25,
      25,
      25
    ],
    [
      100,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      56,
      6,
      6,
      6,
      6,
      7
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      80,
      171,
      30,
      174,
      30,
      31
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      158,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      55
    ],
    [
      53,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      54,
      55
    ],
    [
      77,
      78,
      78,
      78,
      127,
      78,
      78,
      78,
      78,
      78,
      127,
      78,
      78,
      78,
      78,
      79
    ]
  ]
}
</textarea>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila-editor.js"></script>
{{< /rawhtml >}}