---
title: SiDiLa
description: Simple Didactic Language
slug: "sidila-editor"
comments: false
---

# Simple Didactic Language - Editor

{{< rawhtml >}}
<div id="container">
  <div>Over sprite: <span id="hoverSprite"></span> - Selected sprite: <span id="selectedSprite"></span></div>
  <canvas id="palette" class="palette" width="384" height="160"></canvas>
  <canvas id="canvas" class="canvas" width="256" height="256"></canvas>
</div>
<div id="message" class="message"></div>
<h3>JSON:</h3>
<div>
  <button id="load" class="sidila-button">Load</button>
  <button id="reset" class="sidila-button">Reiniciar</button>
</div>
<textarea id="code" class="source-code" cols="80" rows="12">
{
  "width": 16,
  "height": 16,
  "theme": {
    "image": "dungeon.png",
    "imageWidth": 384,
    "imageHeight": 160,
    "spriteWidth": 16,
    "spriteHeight": 16,
    "background": "#91b09a",
    "sprite": {
      "north": 187,
      "east": 187,
      "south": 187,
      "west": 187,
      "dead": 163
    }
  },
  "logic": {
    "54": "Space",
    "174": "Exit",
    "1": "Sphinx",
    "2": "Zombie"
  },
  "space": 54,
  "map": [
    [5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7],
    [29,30,30,30,30,30,30,30,30,30,30,30,30,30,30,31],
    [53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
    [102,54,54,54,54,54,54,54,54,54,54,54,54,54,54,75],
    [76,54,54,54,3,54,54,54,54,54,54,54,54,54,54,99],
    [100,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
    [53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
    [53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
    [102,54,54,54,54,54,54,54,54,54,8,78,78,78,78,4],
    [53,54,54,54,54,54,54,54,54,54,99,25,25,25,25,25],
    [76,54,54,54,54,54,54,54,54,54,55,25,25,25,25,25],
    [100,54,54,54,54,54,54,4,54,54,56,6,6,6,6,7],
    [53,54,54,54,54,54,54,54,54,54,80,30,30,174,30,31],
    [53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
    [53,54,54,54,54,54,54,54,54,54,54,54,54,54,54,55],
    [77,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79]
  ]
}
</textarea>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila-editor.js"></script>
{{< /rawhtml >}}