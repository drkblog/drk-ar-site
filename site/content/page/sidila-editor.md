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
  <div>Over sprite: <span id="hoverEditorSprite"></span></span></div>
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
</textarea>
<script type="text/javascript" src="/sidila/peg.js"></script>
<script type="text/javascript" src="/sidila/sidila-editor.js"></script>
{{< /rawhtml >}}